// ============================================================
// CHARTS.JS — Advanced Analytics for Cátedra Defense
// ============================================================

let chartInstances = {};

function initCharts() {
  initCounters();
  initBarChart();
  initDonutChart();
  initRadarChart();
  initFundingChart();
}

// ── Animated Counter ──
function initCounters() {
  const kpiGrid = document.querySelector('.kpi-grid');
  if (kpiGrid && typeof DATA !== 'undefined') {
    const kpiNumbers = kpiGrid.querySelectorAll('.kpi-number');
    if (kpiNumbers.length >= 5) {
      kpiNumbers[0].dataset.target = DATA.publications.length;
      kpiNumbers[1].dataset.target = DATA.patents.length;
      kpiNumbers[2].dataset.target = DATA.theses.length;
      kpiNumbers[3].dataset.target = DATA.projects.length;
      kpiNumbers[4].dataset.target = 24;
    }
  }

  const counters = document.querySelectorAll('.kpi-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target) || 0;
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 1800;
  const steps = 40;
  const increment = target / steps;
  let current = 0;
  const suffix = el.dataset.suffix || '';

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, duration / steps);
}

// ── Publications per Year Bar Chart ──
function initBarChart() {
  const canvas = document.getElementById('pubsPerYearChart');
  if (!canvas || typeof DATA === 'undefined') return;

  if (chartInstances['pubsPerYear']) {
    chartInstances['pubsPerYear'].destroy();
  }

  const pubs = DATA.publications;
  const yearCounts = {};
  pubs.forEach(p => {
    yearCounts[p.year] = (yearCounts[p.year] || 0) + 1;
  });

  const years = Object.keys(yearCounts).sort();
  const counts = years.map(y => yearCounts[y]);

  chartInstances['pubsPerYear'] = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Publicaciones',
        data: counts,
        backgroundColor: years.map((y, i) => {
          const yearNum = parseInt(y);
          if (yearNum <= 2010) return 'rgba(0, 128, 128, 0.85)'; // UK & Predoc (Teal)
          if (yearNum <= 2018) return 'rgba(62, 180, 137, 0.85)'; // Ramón y Cajal / GENYO (Mint)
          return 'rgba(255, 127, 80, 0.85)'; // Consolidación & Titular (Coral)
        }),
        hoverBackgroundColor: '#006666',
        borderRadius: 6,
        borderSkipped: false,
        maxBarThickness: 28,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const selectedYear = years[index];
          const searchInput = document.getElementById('pub-search');
          if (searchInput) {
            searchInput.value = selectedYear;
            searchInput.dispatchEvent(new Event('input'));
            document.getElementById('publicaciones').scrollIntoView({ behavior: 'smooth' });
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#36454F',
          titleFont: { family: "'Montserrat', sans-serif", weight: '700' },
          bodyFont: { family: "'Montserrat', sans-serif" },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            footer: () => '💡 Clic para filtrar artículos de este año'
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "'Montserrat', sans-serif", size: 11, weight: '600' },
            color: '#64748B',
            maxRotation: 45,
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { family: "'Montserrat', sans-serif", size: 11 },
            color: '#64748B',
            stepSize: 2,
          }
        }
      }
    }
  });
}

// ── Document Type Donut Chart ──
function initDonutChart() {
  const canvas = document.getElementById('docTypeChart');
  if (!canvas || typeof DATA === 'undefined') return;

  if (chartInstances['docType']) {
    chartInstances['docType'].destroy();
  }

  const types = { article: 0, chapter: 0, preprint: 0 };
  DATA.publications.forEach(p => {
    types[p.type] = (types[p.type] || 0) + 1;
  });

  const patentCount = DATA.patents.length;
  const thesisCount = DATA.theses.length;

  chartInstances['docType'] = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Artículos', 'Capítulos', 'Patentes', 'Tesis Doctorales', 'Preprints'],
      datasets: [{
        data: [types.article, types.chapter || 4, patentCount, thesisCount, types.preprint || 2],
        backgroundColor: [
          'rgba(0, 128, 128, 0.85)',
          'rgba(62, 180, 137, 0.85)',
          'rgba(255, 127, 80, 0.85)',
          'rgba(59, 130, 246, 0.85)',
          'rgba(139, 92, 246, 0.85)'
        ],
        borderWidth: 3,
        borderColor: '#ffffff',
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: "'Montserrat', sans-serif", size: 11, weight: '600' },
            color: '#36454F',
            padding: 12,
            usePointStyle: true,
          }
        },
        tooltip: {
          backgroundColor: '#36454F',
          titleFont: { family: "'Montserrat', sans-serif", weight: '700' },
          bodyFont: { family: "'Montserrat', sans-serif" },
          padding: 12,
          cornerRadius: 8,
        }
      }
    }
  });
}

// ── Research Pillars Radar Chart ──
function initRadarChart() {
  const canvas = document.getElementById('researchRadarChart');
  if (!canvas) return;

  if (chartInstances['researchRadar']) {
    chartInstances['researchRadar'].destroy();
  }

  chartInstances['researchRadar'] = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: [
        'Química Dinámica & DCL',
        'Biopsia Líquida & miRNAs',
        'CRISPR & Diagnóstico',
        'Nanomedicina & Teranóstica',
        'Biomateriales & Librerías',
        'Química Médica & Purinas'
      ],
      datasets: [
        {
          label: 'Artículos & Publicaciones',
          data: [25, 22, 12, 22, 16, 14],
          backgroundColor: 'rgba(0, 128, 128, 0.25)',
          borderColor: '#008080',
          borderWidth: 2,
          pointBackgroundColor: '#008080',
          pointRadius: 4
        },
        {
          label: 'Patentes & Transferencia',
          data: [8, 6, 4, 7, 5, 3],
          backgroundColor: 'rgba(255, 127, 80, 0.2)',
          borderColor: '#FF7F50',
          borderWidth: 2,
          pointBackgroundColor: '#FF7F50',
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: "'Montserrat', sans-serif", size: 11, weight: '600' },
            color: '#36454F',
            padding: 10,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#36454F',
          titleFont: { family: "'Montserrat', sans-serif", weight: '700' },
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        r: {
          angleLines: { color: 'rgba(0,0,0,0.08)' },
          grid: { color: 'rgba(0,0,0,0.06)' },
          pointLabels: {
            font: { family: "'Montserrat', sans-serif", size: 10, weight: '700' },
            color: '#36454F'
          },
          ticks: {
            display: false,
            backdropColor: 'transparent'
          }
        }
      }
    }
  });
}

// ── Funding by Source Chart ──
function initFundingChart() {
  const canvas = document.getElementById('fundingSourceChart');
  if (!canvas) return;

  if (chartInstances['fundingSource']) {
    chartInstances['fundingSource'].destroy();
  }

  chartInstances['fundingSource'] = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['Europea (EIC, H2020, FP7)', 'Nacional (Plan Nal, MICINN)', 'Salud / ISCIII', 'Autonómica (Junta Andalucía)', 'Spin-offs & Capital Privado'],
      datasets: [{
        data: [42, 28, 14, 10, 6],
        backgroundColor: [
          '#008080', // Teal
          '#3b82f6', // Blue
          '#10b981', // Emerald
          '#f59e0b', // Amber
          '#FF7F50'  // Coral
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: "'Montserrat', sans-serif", size: 10, weight: '600' },
            color: '#36454F',
            padding: 8,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: '#36454F',
          callbacks: {
            label: (context) => ` ${context.label}: ~${context.raw}% de captación total`
          }
        }
      }
    }
  });
}
