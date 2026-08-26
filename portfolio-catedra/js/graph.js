// ============================================================
// GRAPH.JS — Advanced D3.js Knowledge & Scientific Network Graph
// ============================================================

let graphSimulation = null;
let graphSvg = null;
let graphG = null;
let graphZoom = null;
let allNodes = [];
let allLinks = [];
let activeGraphFilter = 'all';

function initKnowledgeGraph() {
  const container = document.getElementById('knowledge-graph');
  if (!container || typeof DATA === 'undefined' || typeof d3 === 'undefined') return;

  container.innerHTML = '';
  const width = container.clientWidth || 1000;
  const height = 580;

  // Build nodes and links maps
  const nodes = [];
  const links = [];
  const nodeMap = {};

  function addNode(id, label, type, size, extra = {}) {
    if (!nodeMap[id]) {
      const node = { id, label, type, size: size || 10, ...extra };
      nodes.push(node);
      nodeMap[id] = node;
    }
    return nodeMap[id];
  }

  function addLink(source, target, strength = 0.5, label = '') {
    if (nodeMap[source] && nodeMap[target]) {
      links.push({ source, target, strength, label });
    }
  }

  // 1. Central node
  addNode('jjd', 'Prof. Juan José Díaz-Mochón', 'central', 26, {
    role: 'Candidato a Cátedra · UGR & CSO/Founder DESTINA',
    desc: 'Investigador Principal en Biología Química, Biopsia Líquida y Diagnóstico Molecular.'
  });

  // 2. Institutions
  const institutions = [
    { id: 'inst_ugr', label: 'Universidad de Granada (UGR)', type: 'institution', role: 'Institución Académica' },
    { id: 'inst_genyo', label: 'Centro GENYO (NanoChemBio)', type: 'institution', role: 'Centro Mixto Pfizer-UGR-Junta' },
    { id: 'inst_edin', label: 'The University of Edinburgh', type: 'institution', role: 'Estancia Postdoctoral (2005-2010)' },
    { id: 'inst_soton', label: 'The University of Southampton', type: 'institution', role: 'Estancia Postdoctoral (2002-2005)' },
    { id: 'inst_perugia', label: 'Università di Perugia', type: 'institution', role: 'Estancia Erasmus (1995-1996)' },
    { id: 'inst_ferrara', label: 'Università di Ferrara', type: 'institution', role: 'Estancia Predoctoral (2000)' },
    { id: 'inst_islb', label: 'Intl. Society of Liquid Biopsy (ISLB)', type: 'institution', role: 'Sociedad Científica Co-fundada' }
  ];
  institutions.forEach(inst => {
    addNode(inst.id, inst.label, 'institution', 14, { role: inst.role });
    addLink('jjd', inst.id, 0.7);
  });

  // 3. Spin-offs & Companies
  const companies = [
    { id: 'spinoff_destina', label: 'DESTINA Genomics Ltd.', role: 'Spin-off Biotecnológica (Co-fundador, CSO & CEO)' },
    { id: 'spinoff_crispna', label: 'CRISPNA SL', role: 'Spin-off Diagnóstico CRISPR & PNA' },
    { id: 'spinoff_nanogetic', label: 'Nanogetic SL', role: 'Spin-off Nanotecnología Terapéutica' }
  ];
  companies.forEach(comp => {
    addNode(comp.id, comp.label, 'company', 15, { role: comp.role });
    addLink('jjd', comp.id, 0.8);
    addLink('inst_genyo', comp.id, 0.4);
    addLink('inst_ugr', comp.id, 0.4);
  });

  // 4. Research Themes
  const themes = [
    { id: 'theme_dcl', label: 'Química Dinámica & DCL', desc: 'Detección de ácidos nucleicos sin enzimas (PCR-free)' },
    { id: 'theme_liqbio', label: 'Biopsia Líquida & miRNAs', desc: 'miR-122, miR-451a, biopsia no invasiva' },
    { id: 'theme_crispr', label: 'CRISPR-Cas13 & Diagnóstico', desc: 'Dual-guide Cas13 para detección ultrasensible' },
    { id: 'theme_nano', label: 'Nanomedicina & Teranóstica', desc: 'Nanosistemas híbridos y nanotransportadores' },
    { id: 'theme_purines', label: 'Química Médica & Purinas', desc: 'Derivados purínicos, ligandos de receptores y síntesis mono-vaso' },
    { id: 'theme_bionemo', label: 'IA en Drug Discovery', desc: 'BioNeMo, DiffDock, Boltz2, TabFM, Drug2cell' }
  ];
  themes.forEach(th => {
    addNode(th.id, th.label, 'theme', 13, { desc: th.desc });
    addLink('jjd', th.id, 0.6);
  });

  // 5. Key Coauthors
  const coauthors = [
    { id: 'coauth_bradley', label: 'Prof. Mark Bradley', org: 'Univ. of Edinburgh / Queen Mary Univ. London', desc: 'Mentor postdoctoral, microarrays de polímeros y librerías PNA' },
    { id: 'coauth_sanchez_martin', label: 'Prof. Rosario M. Sánchez-Martín', org: 'UGR / GENYO', desc: 'Co-directora NanoChemBio, nanotecnología y marcaje celular' },
    { id: 'coauth_pernagallo', label: 'Dr. Salvatore Pernagallo', org: 'DESTINA Genomics / UGR', desc: 'Director de I+D en DESTINA, DCL, biochips y biosensores' },
    { id: 'coauth_unciti', label: 'Prof. Asier Unciti-Broceta', org: 'Univ. of Edinburgh (IGMM)', desc: 'Colaborador en química médica, catálisis bioortogonal y purinas' },
    { id: 'coauth_dear', label: 'Prof. James W. Dear', org: 'Univ. of Edinburgh', desc: 'Validación clínica de miR-122 para daño hepático por paracetamol (DILI)' },
    { id: 'coauth_serrano', label: 'Dra. María José Serrano', org: 'GENYO / ISLB', desc: 'Co-fundadora ISLB, células tumorales circulantes y biopsia líquida' },
    { id: 'coauth_lorente', label: 'Prof. José Antonio Lorente', org: 'UGR / GENYO', desc: 'Director GENYO, medicina genómica y biopsia líquida' },
    { id: 'coauth_tabraue', label: 'Dra. Mavys Tabraue-Chávez', org: 'GENYO / UGR', desc: 'Química biológica, ensayos colorimétricos y CoVradar' },
    { id: 'coauth_longarela', label: 'Dra. Bárbara López-Longarela', org: 'DESTINA Genomics', desc: 'Desarrollo de DCL y ensayos Single Molecule Array' },
    { id: 'coauth_orte', label: 'Prof. Ángel Orte', org: 'UGR', desc: 'Fluorescencia resuelta en el tiempo y microscopía confocal' }
  ];

  coauthors.forEach(c => {
    addNode(c.id, c.label, 'coauthor', 11, { org: c.org, desc: c.desc });
    addLink('jjd', c.id, 0.5);
  });

  // Cross links between coauthors, institutions and themes
  addLink('coauth_bradley', 'inst_edin', 0.6);
  addLink('coauth_sanchez_martin', 'inst_genyo', 0.6);
  addLink('coauth_sanchez_martin', 'theme_nano', 0.5);
  addLink('coauth_pernagallo', 'spinoff_destina', 0.7);
  addLink('coauth_pernagallo', 'theme_dcl', 0.6);
  addLink('coauth_unciti', 'inst_edin', 0.5);
  addLink('coauth_unciti', 'theme_purines', 0.5);
  addLink('coauth_dear', 'theme_liqbio', 0.6);
  addLink('coauth_serrano', 'inst_islb', 0.7);
  addLink('coauth_serrano', 'theme_liqbio', 0.5);
  addLink('coauth_tabraue', 'theme_dcl', 0.5);
  addLink('coauth_longarela', 'spinoff_destina', 0.6);
  addLink('coauth_orte', 'theme_dcl', 0.5);

  // 6. Doctoral Theses
  if (DATA.theses) {
    DATA.theses.forEach(t => {
      const id = 'thesis_' + t.candidate.replace(/[^a-zA-Z0-9]/g, '_');
      addNode(id, `${t.candidate} (${t.year})`, 'thesis', 9, {
        title: t.title,
        uni: t.university,
        year: t.year
      });
      addLink('jjd', id, 0.45);
      addLink(id, 'inst_ugr', 0.3);
    });
  }

  allNodes = nodes;
  allLinks = links;

  // Colors
  const colorMap = {
    central: '#008080',       // Teal
    institution: '#10b981',   // Emerald
    company: '#0284c7',       // Sky Blue (DESTINA Blue)
    theme: '#8b5cf6',         // Purple
    coauthor: '#FF7F50',      // Coral
    thesis: '#f59e0b'         // Amber
  };

  // SVG and Zoom
  graphSvg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`);

  graphG = graphSvg.append('g');

  graphZoom = d3.zoom()
    .scaleExtent([0.2, 4])
    .on('zoom', (event) => {
      graphG.attr('transform', event.transform);
    });

  graphSvg.call(graphZoom);

  // Force simulation
  graphSimulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(d => d.strength > 0.6 ? 70 : 110).strength(d => d.strength || 0.4))
    .force('charge', d3.forceManyBody().strength(-280))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(d => d.size + 12));

  // Render Links
  const link = graphG.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('stroke', 'rgba(0,0,0,0.1)')
    .attr('stroke-width', d => d.strength * 2.2);

  // Render Nodes
  const node = graphG.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(nodes)
    .enter().append('g')
    .attr('class', d => `node-group node-type-${d.type}`)
    .call(d3.drag()
      .on('start', (event, d) => {
        if (!event.active) graphSimulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x; d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) graphSimulation.alphaTarget(0);
        d.fx = null; d.fy = null;
      })
    );

  // Node circles
  node.append('circle')
    .attr('r', d => d.size)
    .attr('fill', d => colorMap[d.type] || '#999')
    .attr('stroke', '#ffffff')
    .attr('stroke-width', 2.5)
    .style('cursor', 'pointer')
    .style('box-shadow', '0 4px 10px rgba(0,0,0,0.2)')
    .on('mouseover', function (event, d) {
      d3.select(this).transition().duration(150).attr('r', d.size * 1.35);
      showGraphTooltip(event, d);
    })
    .on('mouseout', function (event, d) {
      d3.select(this).transition().duration(150).attr('r', d.size);
      hideGraphTooltip();
    })
    .on('click', function (event, d) {
      handleGraphNodeClick(d);
    });

  // Node labels
  node.append('text')
    .text(d => d.label)
    .attr('x', d => d.size + 6)
    .attr('y', 4)
    .attr('font-size', d => d.type === 'central' ? '13px' : (d.type === 'company' || d.type === 'institution' ? '11px' : '10px'))
    .attr('font-family', "'Montserrat', sans-serif")
    .attr('font-weight', d => d.type === 'central' || d.type === 'company' ? '700' : '600')
    .attr('fill', '#36454F')
    .style('pointer-events', 'none');

  // Simulation tick
  graphSimulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Setup Graph Controls & Filter
  setupGraphControls();
}

function setupGraphControls() {
  // Zoom buttons
  const zoomInBtn = document.getElementById('graph-zoom-in');
  const zoomOutBtn = document.getElementById('graph-zoom-out');
  const zoomResetBtn = document.getElementById('graph-zoom-reset');

  if (zoomInBtn && graphSvg) {
    zoomInBtn.onclick = () => graphSvg.transition().duration(300).call(graphZoom.scaleBy, 1.3);
  }
  if (zoomOutBtn && graphSvg) {
    zoomOutBtn.onclick = () => graphSvg.transition().duration(300).call(graphZoom.scaleBy, 0.7);
  }
  if (zoomResetBtn && graphSvg) {
    zoomResetBtn.onclick = () => graphSvg.transition().duration(300).call(graphZoom.transform, d3.zoomIdentity);
  }

  // Filter Buttons
  document.querySelectorAll('.graph-filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.graph-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterType = btn.dataset.filter;
      filterGraphNodes(filterType);
    };
  });

  // Search in Graph
  const graphSearch = document.getElementById('graph-search');
  if (graphSearch) {
    graphSearch.oninput = () => {
      const q = graphSearch.value.toLowerCase().trim();
      d3.selectAll('.node-group').each(function (d) {
        const match = !q || d.label.toLowerCase().includes(q) || (d.role && d.role.toLowerCase().includes(q)) || (d.desc && d.desc.toLowerCase().includes(q));
        d3.select(this).style('opacity', match ? 1 : 0.15);
      });
    };
  }
}

function filterGraphNodes(type) {
  activeGraphFilter = type;
  d3.selectAll('.node-group').each(function (d) {
    if (type === 'all' || d.type === 'central' || d.type === type) {
      d3.select(this).style('opacity', 1);
    } else {
      d3.select(this).style('opacity', 0.12);
    }
  });
}

function showGraphTooltip(event, d) {
  let tooltip = document.getElementById('graph-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'graph-tooltip';
    tooltip.className = 'graph-tooltip-container';
    document.body.appendChild(tooltip);
  }

  const typeNames = {
    central: 'Investigador Principal',
    institution: 'Institución / Centro',
    company: 'Spin-off / Empresa',
    theme: 'Línea de Investigación',
    coauthor: 'Coautor / Colaborador Clave',
    thesis: 'Tesis Doctoral Dirigida'
  };

  tooltip.innerHTML = `
    <div style="font-weight:700; color:var(--teal); margin-bottom:4px;">${d.label}</div>
    <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:700; margin-bottom:6px;">${typeNames[d.type] || d.type}</div>
    ${d.role ? `<div style="font-size:0.85rem; color:#36454F;"><strong>Rol:</strong> ${d.role}</div>` : ''}
    ${d.org ? `<div style="font-size:0.85rem; color:#36454F;"><strong>Afiliación:</strong> ${d.org}</div>` : ''}
    ${d.desc ? `<div style="font-size:0.85rem; color:#64748B; margin-top:4px;">${d.desc}</div>` : ''}
    ${d.title ? `<div style="font-size:0.85rem; color:#36454F;"><strong>Título:</strong> ${d.title}</div>` : ''}
  `;
  tooltip.style.display = 'block';
  tooltip.style.left = (event.pageX + 14) + 'px';
  tooltip.style.top = (event.pageY + 14) + 'px';
}

function hideGraphTooltip() {
  const tooltip = document.getElementById('graph-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

function handleGraphNodeClick(d) {
  if (d.type === 'thesis') {
    const candidateName = d.label.split('(')[0].trim();
    const t = DATA.theses.find(item => item.candidate.toLowerCase().includes(candidateName.toLowerCase()));
    if (t) {
      showDetailModal(
        t.title,
        `Doctorando/a: ${t.candidate}`,
        t.abstract || "Resumen de tesis doctoral disponible en el catálogo de Cátedra.",
        [
          { label: 'Universidad', value: t.university },
          { label: 'Año de Defensa', value: t.year },
          { label: 'Directores', value: t.advisors || 'Juan José Díaz-Mochón' }
        ],
        t.image
      );
    }
  } else if (d.type === 'coauthor') {
    const searchInput = document.getElementById('pub-search');
    if (searchInput) {
      const surname = d.label.split(' ').pop();
      searchInput.value = surname;
      searchInput.dispatchEvent(new Event('input'));
      document.getElementById('publicaciones').scrollIntoView({ behavior: 'smooth' });
    }
  }
}
