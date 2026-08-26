import os
import re
import shutil
import subprocess
import sys
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
VAULT_DIR = os.path.join(SCRIPT_DIR, "wiki")
TARGET_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, "..", "JJD-LLM-Wiki-Git-Timeline"))
DEFAULT_START_DATE = "2000-01-01"

if len(sys.argv) > 1:
    VAULT_DIR = os.path.abspath(sys.argv[1])
if len(sys.argv) > 2:
    TARGET_DIR = os.path.abspath(sys.argv[2])

def win_long_path(p):
    """Normalize path with Windows extended-length prefix if on Windows."""
    abs_p = os.path.abspath(p)
    if os.name == 'nt' and not abs_p.startswith('\\\\?\\'):
        return '\\\\?\\' + abs_p
    return abs_p

def parse_date_from_frontmatter(content):
    match = re.match(r"^---(.*?)---", content, re.DOTALL)
    if not match:
        return None
    
    frontmatter = match.group(1)
    date_match = re.search(r"^(?:priority_date|publication_date|date):\s*[\"']?(\d{4}-\d{2}-\d{2})[\"']?", frontmatter, re.MULTILINE)
    if date_match:
        try:
            return datetime.strptime(date_match.group(1), "%Y-%m-%d")
        except ValueError:
            pass
            
    year_match = re.search(r"^(?:year|defensa|anio):\s*[\"']?(\d{4})[\"']?", frontmatter, re.MULTILINE)
    if year_match:
        return datetime(int(year_match.group(1)), 6, 1)
        
    return None

def parse_title_from_frontmatter(content):
    match = re.match(r"^---(.*?)---", content, re.DOTALL)
    if not match:
        return None
    
    frontmatter = match.group(1)
    title_match = re.search(r"^title:\s*[\"']?([^\n\"']+)[\"']?", frontmatter, re.MULTILINE)
    if title_match:
        val = title_match.group(1).strip()
        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
            val = val[1:-1].strip()
        
        val = re.sub(r'^(Summary\s*of\s*Patent:\s*|Summary\s*of\s*Thesis:\s*|Summary\s*of:\s*|Summary\s*of\s*|Summary:\s*|Grant/Project:\s*|GrantProject:\s*)', '', val, flags=re.IGNORECASE)
        if val.lower().endswith(".pdf"):
            val = val[:-4].strip()
        return val
    return None

def get_clean_target_path(rel_path, file_titles):
    dirname, filename = os.path.split(rel_path)
    ext = ""
    if filename.endswith(".md"):
        ext = ".md"
        base_name = filename[:-3]
    else:
        base_name, ext = os.path.splitext(filename)
        
    title = file_titles.get(rel_path)
    if title:
        clean_title = re.sub(r'[\\/*?:"<>|]', "", title).strip()
        if clean_title:
            base_name = clean_title[:80]
    else:
        base_name = re.sub(r'^(Summary\s*of\s*Patent[\s_]*|Summary\s*of\s*Thesis[\s_]*|Summary\s*of[\s_]*|Summary[\s_]*|Grant/Project[\s_]*|GrantProject[\s_]*)', '', base_name, flags=re.IGNORECASE)
        base_name = base_name.replace("_", " ").strip()
        if base_name.lower().endswith(".pdf"):
            base_name = base_name[:-4].strip()
        base_name = base_name[:80]

    filename = base_name + ext

    dirname_lower = dirname.lower().replace("\\", "/")
    if "outputs/summaries_papers" in dirname_lower:
        dirname = "Papers"
    elif "outputs/summaries_patents" in dirname_lower:
        dirname = "Patents"
    elif "outputs/summaries_theses" in dirname_lower:
        dirname = "Theses"
    elif "outputs/summaries_projects" in dirname_lower or "entities/projects" in dirname_lower or "grants_and_projects" in dirname_lower or "summaries_grants_and_projects" in dirname_lower:
        dirname = "Projects"
    elif "entities/people" in dirname_lower or "entities/researchers" in dirname_lower:
        dirname = "People"
    elif "entities/institutions" in dirname_lower:
        dirname = "Institutions"
    elif "concepts" in dirname_lower:
        dirname = "Concepts"
    elif "sources" in dirname_lower:
        dirname = "Sources"
    else:
        parts = []
        for part in dirname.replace("\\", "/").split("/"):
            if part:
                clean_part = re.sub(r'^(Summary\s*of\s*Patent[\s_]*|Summary\s*of\s*Thesis[\s_]*|Summary\s*of[\s_]*|Summary[\s_]*|Grant/Project[\s_]*|GrantProject[\s_]*)', '', part, flags=re.IGNORECASE)
                clean_part = clean_part.replace("_", " ").strip()[:40]
                if clean_part:
                    parts.append(clean_part)
        dirname = "/".join(parts)

    return os.path.join(dirname, filename)

def main():
    print(f"Scanning source vault: {VAULT_DIR}")
    if not os.path.exists(VAULT_DIR):
        print(f"Error: Source directory {VAULT_DIR} does not exist.")
        return

    # Focus on markdown documents and core entities/outputs/concepts
    all_files = []
    for root, dirs, files in os.walk(VAULT_DIR):
        if ".obsidian" in root or ".git" in root:
            continue
        for file in files:
            if file.lower() == "desktop.ini":
                continue
            if not file.lower().endswith(".md"):
                continue
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, VAULT_DIR)
            all_files.append((full_path, rel_path))

    print(f"Found {len(all_files)} markdown files in vault.")

    file_dates = {}
    file_titles = {}
    content_cache = {}
    links_from_file = {}

    for full_path, rel_path in all_files:
        try:
            with open(full_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            content_cache[rel_path] = content
            
            date = parse_date_from_frontmatter(content)
            if date:
                file_dates[rel_path] = date
                
            title = parse_title_from_frontmatter(content)
            if title:
                file_titles[rel_path] = title
                
            links = []
            wiki_links = re.findall(r"\[\[([^\]|#]+)(?:\|[^\]]+)?\]\]", content)
            for wl in wiki_links:
                links.append(wl.replace(" ", "_"))
            md_links = re.findall(r"\[[^\]]+\]\(([^)]+\.md)\)", content)
            for ml in md_links:
                filename = os.path.basename(ml).replace(".md", "")
                links.append(filename)
                
            links_from_file[rel_path] = links
        except Exception as e:
            print(f"Warning: Could not read {rel_path} - {e}")

    baseline_date = datetime.strptime(DEFAULT_START_DATE, "%Y-%m-%d")

    # Associate dates to entities, concepts and institutions
    for full_path, rel_path in all_files:
        if rel_path in file_dates:
            continue
            
        lower_path = rel_path.lower()
        is_entity_or_concept = "entities/" in lower_path or "concepts/" in lower_path
            
        if is_entity_or_concept:
            node_name = os.path.basename(rel_path).replace(".md", "")
            node_name_clean = node_name.replace("_", " ")
            
            earliest_mention_date = None
            for summary_rel_path, links in links_from_file.items():
                summary_date = file_dates.get(summary_rel_path)
                if not summary_date:
                    continue
                    
                links_normalized = [l.lower().replace("_", " ") for l in links]
                if node_name.lower().replace("_", " ") in links_normalized or node_name_clean.lower() in links_normalized:
                    if earliest_mention_date is None or summary_date < earliest_mention_date:
                        earliest_mention_date = summary_date
            
            file_dates[rel_path] = earliest_mention_date if earliest_mention_date else baseline_date
        else:
            file_dates[rel_path] = baseline_date

    print(f"Preparing target directory: {TARGET_DIR}")
    os.makedirs(TARGET_DIR, exist_ok=True)

    git_dir = os.path.join(TARGET_DIR, ".git")
    if not os.path.exists(git_dir):
        subprocess.run(["git", "init"], cwd=TARGET_DIR, check=True)
        subprocess.run(["git", "config", "core.longpaths", "true"], cwd=TARGET_DIR, check=True)
        subprocess.run(["git", "config", "user.name", "Juan Jose Diaz-Mochon"], cwd=TARGET_DIR, check=True)
        subprocess.run(["git", "config", "user.email", "jjdiaz@ugr.es"], cwd=TARGET_DIR, check=True)

    sorted_files = []
    for full_path, rel_path in all_files:
        date = file_dates.get(rel_path, baseline_date)
        sorted_files.append((date, full_path, rel_path))
        
    sorted_files.sort(key=lambda x: x[0])

    print(f"\nProcessing and committing {len(sorted_files)} markdown files in chronological order...")
    
    committed_count = 0
    used_clean_paths = set()
    
    for date, full_path, rel_path in sorted_files:
        clean_rel = get_clean_target_path(rel_path, file_titles)
        
        if clean_rel in used_clean_paths:
            dirname, filename = os.path.split(clean_rel)
            base, ext = os.path.splitext(filename)
            counter = 2
            while True:
                candidate = os.path.join(dirname, f"{base} ({counter}){ext}")
                if candidate not in used_clean_paths:
                    clean_rel = candidate
                    break
                counter += 1
                
        used_clean_paths.add(clean_rel)
        
        dest_path = os.path.join(TARGET_DIR, clean_rel)
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        try:
            shutil.copy2(full_path, dest_path)
            subprocess.run(["git", "add", clean_rel], cwd=TARGET_DIR, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            
            date_str = date.strftime("%Y-%m-%d 12:00:00")
            env = os.environ.copy()
            env["GIT_AUTHOR_DATE"] = date_str
            env["GIT_COMMITTER_DATE"] = date_str
            
            commit_msg = f"Add {os.path.basename(clean_rel)} ({date.strftime('%Y')})"
            res = subprocess.run(["git", "commit", "-m", commit_msg], cwd=TARGET_DIR, env=env, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            if res.returncode == 0:
                committed_count += 1
        except Exception as e:
            # Continue gracefully if single long path fails
            pass
        
        if committed_count > 0 and committed_count % 25 == 0:
            print(f"Committed {committed_count} files... Date: {date.strftime('%Y-%m-%d')}")

    print(f"\n✅ Success! Chronological Git repository ready at: {TARGET_DIR}")
    print(f"Total markdown files catalogued: {len(sorted_files)}, commits made/verified: {committed_count}")

if __name__ == "__main__":
    main()
