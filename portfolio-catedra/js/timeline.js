// ============================================================
// TIMELINE.JS — Global Multi-Track Timeline & Academic Lineage Tree
// ============================================================

function initGlobalTimeline() {
  const container = document.getElementById('global-timeline-track');
  if (!container || typeof DATA === 'undefined') return;

  const items = [];

  DATA.publications.forEach(p => {
    items.push({ year: p.year, type: 'pub', label: `📄 ${p.title.substring(0, 65)}...` });
  });

  DATA.theses.forEach(t => {
    items.push({ year: parseInt(t.year), type: 'thesis', label: `🎓 Tesis: ${t.candidate} (${t.year})` });
  });

  DATA.patents.forEach(p => {
    const y = parseInt(p.priority ? p.priority.split('-')[0] : '2015');
    items.push({ year: y, type: 'patent', label: `🔬 Patente: ${p.title.substring(0, 55)}...` });
  });

  DATA.projects.forEach(p => {
    items.push({ year: p.yearStart, type: 'project', label: `🚀 Proyecto: ${p.name}` });
  });

  const years = [...new Set(items.map(i => i.year))].filter(y => y >= 2000).sort((a, b) => a - b);

  let html = '';
  years.forEach(year => {
    const yearItems = items.filter(i => i.year === year);
    html += `<div class="timeline-year-col">`;
    html += `<div class="timeline-dots">`;
    yearItems.forEach(item => {
      html += `<div class="timeline-dot ${item.type}"><span class="tooltip">${item.label}</span></div>`;
    });
    html += `</div>`;
    html += `<div class="timeline-year-label">${year}</div>`;
    html += `</div>`;
  });

  container.innerHTML = html;
}

// ── Academic Genealogy / Doctoral Lineage Tree ──
function renderThesisTree(container) {
  if (!container || typeof DATA === 'undefined') return;

  const sortedTheses = [...DATA.theses].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  let html = `
    <div class="lineage-tree-wrapper">
      <div class="lineage-root-node">
        <div class="lineage-root-avatar">🏛️</div>
        <div class="lineage-root-name">Prof. Juan José Díaz-Mochón</div>
        <div class="lineage-root-role">Director de Tesis Doctorales · UGR / GENYO / Univ. Edinburgh</div>
        <div class="lineage-root-badge">11 Tesis Doctorales Dirigidas (2014–2026)</div>
      </div>
      
      <div class="lineage-branches-grid">
  `;

  sortedTheses.forEach((t, idx) => {
    const origIdx = DATA.theses.findIndex(orig => orig.candidate === t.candidate);
    html += `
      <div class="lineage-card reveal interactive" data-thesis-idx="${origIdx}">
        <div class="lineage-card-header">
          <span class="lineage-year-badge">${t.year}</span>
          <span class="lineage-uni-badge">📍 ${t.university}</span>
        </div>
        <div class="lineage-candidate-name">${t.candidate}</div>
        <div class="lineage-thesis-title">${t.title}</div>
        <div class="lineage-advisors"><strong>Co-directores:</strong> ${t.advisors || 'Juan José Díaz-Mochón'}</div>
        <div class="lineage-card-footer">
          <span class="card-action-hint">Ver Ficha de Tesis ↗</span>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
  initScrollReveal();
}

function renderThesisTimeline(container) {
  if (!container || typeof DATA === 'undefined') return;
  let html = '';
  const sorted = [...DATA.theses].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  sorted.forEach(t => {
    const originalIndex = DATA.theses.findIndex(orig => orig.candidate === t.candidate);
    html += `
      <div class="thesis-node reveal interactive" data-thesis-idx="${originalIndex}">
        <span class="thesis-year-badge">${t.year}</span>
        <div class="thesis-candidate">${t.candidate}</div>
        <div class="thesis-title">${t.title}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span class="text-muted" style="font-size:0.8rem;">📍 ${t.university}</span>
          <span class="card-action-hint">Ver Resumen ↗</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initScrollReveal();
}

function renderThesisGrid(container) {
  if (!container || typeof DATA === 'undefined') return;
  let html = '';
  const sorted = [...DATA.theses].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  sorted.forEach(t => {
    const originalIndex = DATA.theses.findIndex(orig => orig.candidate === t.candidate);
    html += `
      <div class="thesis-grid-card reveal interactive" data-thesis-idx="${originalIndex}">
        <span class="thesis-year-badge">${t.year}</span>
        <div class="thesis-candidate" style="margin-top:12px;">${t.candidate}</div>
        <div class="thesis-title" style="margin-top:8px;">${t.title}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
          <span class="text-muted" style="font-size:0.8rem;">📍 ${t.university}</span>
          <span class="card-action-hint">Ver Resumen ↗</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initScrollReveal();
}
