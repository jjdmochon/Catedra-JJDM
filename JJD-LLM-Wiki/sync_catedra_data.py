import os
import re
import json
import csv
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_CATEDRA_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIKI_DIR = os.path.join(BASE_CATEDRA_DIR, "JJD-LLM-Wiki", "wiki")
PORTFOLIO_DIR = os.path.join(BASE_CATEDRA_DIR, "portfolio-catedra")
PORTFOLIO_DATA_JS = os.path.join(PORTFOLIO_DIR, "js", "data.js")
WIKI_DATA_JSON = os.path.join(WIKI_DIR, "wiki_data.json")
WIKI_DATA_JS = os.path.join(BASE_CATEDRA_DIR, "JJD-LLM-Wiki", "wiki_data.js")

print("🔄 Starting Cátedra Data Consolidation & Synchronization...")

# 1. Load existing data.js if available
existing_publications = []
existing_patents = []
existing_theses = []
existing_projects = []

if os.path.exists(PORTFOLIO_DATA_JS):
    with open(PORTFOLIO_DATA_JS, "r", encoding="utf-8") as f:
        js_text = f.read()
        # Find const DATA = { ... }
        match = re.search(r"const\s+DATA\s*=\s*(\{.*?\});\s*$", js_text, re.DOTALL)
        if match:
            try:
                # Replace unquoted JS keys or parse with json if valid json-like
                # Or extract sections using regex
                pass
            except Exception:
                pass

# 2. Read wiki_data.json
wiki_data = {}
if os.path.exists(WIKI_DATA_JSON):
    with open(WIKI_DATA_JSON, "r", encoding="utf-8") as f:
        wiki_data = json.load(f)

# 3. Read Espacenet patents CSV
patents_from_csv = []
csv_path = os.path.join(BASE_CATEDRA_DIR, "Espacenet Diaz-Mochon patents.csv")
if os.path.exists(csv_path):
    try:
        with open(csv_path, "r", encoding="utf-8-sig") as f:
            reader = csv.DictReader(f)
            for row in reader:
                title = row.get("Title", "").strip()
                pub_num = row.get("Publication number", "").strip()
                app_num = row.get("Application number", "").strip()
                prio_date = row.get("Priority date", "").strip()
                pub_date = row.get("Publication date", "").strip()
                inventors = row.get("Inventors", "").strip()
                applicants = row.get("Applicants", "").strip()
                
                if title:
                    patents_from_csv.append({
                        "title": title,
                        "publication": pub_num,
                        "application": app_num,
                        "priority": prio_date,
                        "publication_date": pub_date,
                        "inventors": inventors,
                        "assignee": applicants
                    })
        print(f"📄 Loaded {len(patents_from_csv)} patents from Espacenet CSV.")
    except Exception as e:
        print(f"Warning loading CSV: {e}")

# 4. Check available images in portfolio-catedra/assets/images
images_map = {}
assets_img_dir = os.path.join(PORTFOLIO_DIR, "assets", "images")
if os.path.exists(assets_img_dir):
    for f in os.listdir(assets_img_dir):
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg')):
            # Normalize name key
            clean_name = re.sub(r'[^a-zA-Z0-9]', '', f.lower()[:30])
            images_map[clean_name] = f"assets/images/{f}"

print(f"🖼️ Found {len(images_map)} graphical abstract assets.")

print("✅ Data synchronization engine ready.")
