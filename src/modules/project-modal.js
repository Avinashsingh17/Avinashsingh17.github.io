// ===== PROJECT DETAIL MODAL =====

const projectData = {
  'battery-thermal': {
    title: 'Battery Thermal Management Systems (BTMS)',
    period: 'Jan 2023 – Present',
    affiliation: 'Micro/Nano Heat Transfer Lab, University of Oklahoma',
    advisor: 'Prof. Jivtesh Garg',
    tags: ['BTMS', 'CPCM', 'Heat Transfer', 'SolidWorks', 'GD&T'],
    highlights: [
      { value: '<2°C', label: 'Temperature Uniformity (ΔT)' },
      { value: '4', label: 'Cooling Configs Tested' },
      { value: 'Hybrid', label: 'Best Performing System' },
    ],
    overview: `Comprehensive evaluation of cooling strategies for lithium-ion battery modules, targeting uniform temperature control critical for EV battery safety and longevity. This project combines experimental testing with CAD-based design to develop next-generation battery thermal management solutions.`,
    objectives: [
      'Evaluate and compare air-cooled, liquid-cooled, CPCM-enhanced, and hybrid cooling configurations for battery thermal management',
      'Achieve temperature uniformity (ΔT < 2°C) across battery modules during charge/discharge cycles',
      'Design a Couette-shear extrusion tool for CPCM fabrication with full GD&T drawings and BOM',
    ],
    methods: [
      'Designed and fabricated battery thermal modules with integrated cooling channels and CPCM enclosures',
      'Performed comparative thermal testing across four cooling configurations under standardized charge/discharge protocols',
      'Created detailed SolidWorks CAD models with GD&T-compliant engineering drawings and Bill of Materials',
      'Collaborated with dynamic systems modeling researchers to understand thermal and operational dynamics of BTMS',
    ],
    results: [
      'Achieved temperature uniformity of <strong>ΔT < 2°C</strong> across battery thermal modules — meeting automotive industry standards',
      'Hybrid cooling (liquid + CPCM) demonstrated superior thermal performance compared to single-mode cooling approaches',
      'Designed a complete Couette-shear extrusion tool with manufacturing-ready GD&T drawings',
      'Developed high thermal conductivity composite phase change materials (CPCM) by integrating paraffin and expanded graphite',
    ],
    significance: 'Battery thermal management is critical for electric vehicle safety and performance. Temperature non-uniformity accelerates degradation and poses safety risks. This work demonstrates a viable hybrid cooling approach achieving automotive-grade thermal uniformity, directly applicable to next-generation EV battery pack design.',
  },

  'composite-materials': {
    title: 'Advanced Composite Materials for Thermal Management',
    period: 'Aug 2020 – Present',
    affiliation: 'Micro/Nano Heat Transfer Lab, University of Oklahoma',
    advisor: 'Prof. Jivtesh Garg',
    tags: ['Graphene', 'EG/PCM', 'Nanomaterials', 'Raman', 'XRD', 'SEM', 'EMT'],
    highlights: [
      { value: '9.5 W/mK', label: 'Peak Thermal Conductivity' },
      { value: '4030%', label: 'Enhancement over Pure PEI' },
      { value: '969 S/m', label: 'Electrical Conductivity' },
      { value: '4', label: 'Peer-Reviewed Papers' },
    ],
    overview: `Development of high thermal conductivity polymer nanocomposites using expanded graphite (EG) and graphene fillers, targeting thermal management applications in microelectronics, automotive, and energy systems. This multi-year research program produced 4 peer-reviewed publications advancing the state-of-the-art in thermally conductive polymer composites.`,
    objectives: [
      'Synthesize expanded graphite/polymer composites with record-breaking thermal conductivity',
      'Optimize intercalation chemistry and fabrication methods to maximize thermal performance',
      'Understand the role of solvent selection in graphene dispersion and composite thermal properties',
      'Develop theoretical models (EMT) to explain interfacial thermal transport mechanisms',
    ],
    methods: [
      'Graphite intercalation using H₂SO₄ combined with oxidizing agents (H₂O₂ vs. NaClO₃), followed by thermal expansion at 900°C',
      'Solvent casting of EG/PEI and graphene/epoxy composites using DMAC and DMF solvents',
      'Characterization via Raman spectroscopy, XPS, XRD, FE-ESEM, laser flash analysis, and laser scanning confocal microscopy (LSCM)',
      'Effective Medium Theory (EMT) modeling to extract interfacial thermal resistance and predict composite properties',
    ],
    results: [
      'Achieved thermal conductivity of <strong>9.5 W/mK</strong> at 10 wt% EG filler — a <strong>~4030% enhancement</strong> over pure PEI (H₂O₂ intercalation route)',
      'Demonstrated <strong>7.3 W/mK</strong> with simultaneous electrical conductivity of <strong>969 S/m</strong> (19 orders of magnitude increase)',
      'Proved H₂O₂ preserves defect-free graphite structure (I<sub>D</sub>/I<sub>G</sub> ~ 0.04) vs. NaClO₃ (I<sub>D</sub>/I<sub>G</sub> ~ 0.25)',
      'DMF-based graphene/epoxy composites showed <strong>44% higher thermal conductivity</strong> than acetone-based composites',
      'EMT modeling revealed graphene-graphene interfacial resistance of 1.17 × 10⁻⁸ m²K/W — 4× lower than discrete particle systems',
    ],
    significance: 'This work established that solvent casting preserves the continuous 3D graphitic network of expanded graphite, enabling polymer composites with the highest reported thermal conductivity at low filler loadings. The findings provide practical guidelines for fabricating thermally conductive composites for electronics cooling, thermal interface materials, and energy storage devices.',
    publications: [
      'Tarannum F., Danayat S., <strong>Nayal A.</strong>, et al. "H₂O₂ intercalated expanded graphite..." <em>J. Materials Research and Technology</em>, 2024',
      'Tarannum F., Danayat S., <strong>Nayal A.</strong>, et al. "Thermally expanded graphite PEI composite..." <em>Materials Chemistry and Physics</em>, 2023',
      'Danayat S., <strong>Nayal A.</strong>, et al. "Superior enhancement — epoxy/graphene..." <em>MethodsX</em>, 2023',
      'Tarannum F., Danayat S., <strong>Nayal A.</strong>, et al. "Large Enhancement — Solvent-Cast EG/PEI..." <em>Nanomaterials</em>, 2022',
    ],
  },

  'stpv': {
    title: 'Solar Thermophotovoltaics (STPV)',
    period: 'May 2019 – Jul 2020',
    affiliation: 'Nano-Engineered Thermal Radiation Group, Arizona State University',
    advisor: 'Prof. Liping Wang',
    tags: ['STPV', 'MATLAB', 'Radiation', 'Optics', 'GaSb'],
    highlights: [
      { value: '100 μm', label: 'Precision Gap Control' },
      { value: '<5%', label: 'Theory vs. Experiment Deviation' },
      { value: 'GaSb', label: 'Photovoltaic Cell' },
    ],
    overview: `Master's thesis research on Solar Thermophotovoltaic (STPV) energy conversion systems. Developed both a theoretical heat transfer model and a novel experimental setup to study near-field radiative heat transfer between a selective emitter and a GaSb photovoltaic cell.`,
    objectives: [
      'Develop a theoretical MATLAB model to predict STPV conversion performance',
      'Build a novel experimental setup with precise gap control for near-field radiation measurements',
      'Validate experimental measurements against theoretical predictions',
    ],
    methods: [
      'Created comprehensive MATLAB-based heat transfer model incorporating spectral radiation properties, view factors, and energy balance equations',
      'Designed and fabricated an experimental STPV setup using silica microspheres (100 μm diameter) as precision gap spacers between the selective emitter and GaSb cell',
      'Performed calibrated measurements of heat transfer across the emitter-cell gap under controlled conditions',
      'Validated experimental results through systematic comparison with theoretical calculations',
    ],
    results: [
      'Theoretical model accurately predicted STPV conversion performance across operating conditions',
      'Novel use of silica microspheres enabled precise <strong>100 μm gap maintenance</strong> — a critical challenge in STPV systems',
      'Experimental measurements showed <strong>&lt;5% deviation</strong> from theoretical predictions, validating both the model and setup',
      'Demonstrated feasibility of a low-cost, reproducible experimental approach for near-field TPV research',
    ],
    significance: 'Solar thermophotovoltaics offer a pathway to high-efficiency solar energy conversion by exploiting near-field radiative heat transfer. This work addressed the critical experimental challenge of maintaining precise sub-millimeter gaps while providing a validated theoretical framework for STPV system design and optimization.',
  },

  'phonon-transport': {
    title: 'First-Principles Phonon Transport in Hexagonal BC₂P',
    period: 'Aug 2020 – Dec 2022',
    affiliation: 'Micro/Nano Heat Transfer Lab, University of Oklahoma',
    advisor: 'Prof. Jivtesh Garg',
    tags: ['DFT', 'Phonopy', 'Quantum ESPRESSO', 'PBTE', 'HPC'],
    highlights: [
      { value: '162 W/mK', label: 'Thermal Conductivity (⊥ c-axis)' },
      { value: '30.1%', label: 'Optical Phonon Contribution' },
      { value: '582 GPa', label: "Young's Modulus" },
      { value: '3:1', label: 'Anisotropy Ratio' },
    ],
    overview: `First-principles computational study of lattice thermal conductivity in hexagonal BC₂P — a III-IV-V compound semiconductor. Using density functional theory (DFT) and the phonon Boltzmann transport equation (PBTE), this work identified BC₂P as a promising high-thermal-conductivity material for nanoscale electronics cooling.`,
    objectives: [
      'Compute lattice thermal conductivity of bulk h-BC₂P from first principles',
      'Characterize phonon transport properties including mode contributions and scattering mechanisms',
      'Evaluate BC₂P\'s potential for thermal management in nanoelectronics',
    ],
    methods: [
      'DFT calculations using Quantum ESPRESSO with norm-conserving pseudopotentials and LDA exchange-correlation (plane-wave cutoff: 80 Ry)',
      'Harmonic (2nd-order) and anharmonic (3rd-order) interatomic force constants from DFPT, using D3Q package',
      'Phonon Boltzmann Transport Equation solved exactly via variational method on 21 × 21 × 14 q-mesh',
      'Casimir scattering model for length-dependent thermal conductivity at nanoscale',
      'Elastic constants computed using thermo_pw; bulk/shear/Young\'s moduli via Voigt-Reuss-Hill approximation',
    ],
    results: [
      'Bulk thermal conductivity at 300K: <strong>162 W/mK</strong> (⊥ c-axis) and <strong>52 W/mK</strong> (∥ c-axis) — 3:1 anisotropy',
      'Optical phonons contribute <strong>30.1%</strong> of thermal conductivity — unusually large compared to ~5% in silicon',
      'Nanoscale thermal conductivity: <strong>~68 W/mK at 100 nm</strong> and <strong>~47 W/mK at 50 nm</strong> — high retention due to optical phonon contribution',
      'Young\'s modulus of <strong>582.2 GPa</strong> and bulk modulus of <strong>253.6 GPa</strong> — exceeding Si, Ge, and SiC',
      'Light atomic masses (B, C, P) and stiff bonds produce high phonon frequencies and group velocities',
    ],
    significance: 'This work identifies BC₂P as a member of a new class of III-IV-V compounds with exceptional thermal conductivity. The unusually high optical phonon contribution means BC₂P retains high thermal conductivity even at nanometer length scales — making it particularly attractive for thermal management in nanoelectronics where conventional materials suffer severe conductivity reduction.',
    publications: [
      'Muthaiah R., Tarannum F., Annam R., <strong>Nayal A.</strong>, Danayat S., Garg J. "Thermal Conductivity of Hexagonal BC₂P — a First-Principles Study." <em>RSC Advances</em>, 2020',
    ],
  },

  'fuel-cell': {
    title: 'Fuel Cell System Upscaling (5 kWe → 30 kWe)',
    period: 'Aug 2017 – Jul 2018',
    affiliation: 'IIT Gandhinagar, Mechanical Engineering Department',
    advisor: 'Faculty Advisor, IIT Gandhinagar',
    tags: ['Fuel Cells', 'ASPEN', 'P&ID', 'GC', 'CAD'],
    highlights: [
      { value: '~25%', label: 'H₂ Mole Fraction Yield' },
      { value: '5→30 kWe', label: 'Upscaling Target' },
      { value: 'DRDO', label: 'Sponsored By' },
    ],
    images: [
      { src: '/assets/projects/fuel-cell-rig.jpg', caption: '5 kWe test rig: (a) Control panel (b) Secondary steam generator' },
      { src: '/assets/projects/fuel-cell-pid.jpg', caption: 'Mechanical P&ID: reactor layout, 3-phase distribution, and air heaters' },
      { src: '/assets/projects/fuel-cell-aspen.jpg', caption: 'ASPEN steady-state model for 30 kWe system' },
      { src: '/assets/projects/fuel-cell-results.jpg', caption: 'Species mole fractions: Equilibrium vs. PFR vs. CFD vs. Experimental' },
      { src: '/assets/projects/fuel-cell-plate-reactor.jpg', caption: 'Plate reactor design for methanol reforming with counter-flow heat exchange' },
    ],
    overview: `Research internship focused on upscaling a 5 kWe diesel autothermal reformer (ATR) fuel cell system to a 30 kWe working prototype for naval/defense applications (DRDO-sponsored). The project encompassed experimental testing, process simulation, and engineering design for a modular, field-deployable hydrogen generation system.`,
    objectives: [
      'Upscale a 5 kWe diesel autothermal reformer fuel cell system to a 30 kWe working prototype',
      'Validate reformer chemistry and hydrogen yield at the 5 kWe scale',
      'Create complete engineering documentation (P&ID, BOM, budgets) for the 30 kWe system',
      'Design a plate reactor for methanol reforming to maximize H₂ yield',
    ],
    methods: [
      'Modified the existing 5 kWe test rig with modular electrical control panel and secondary steam generator',
      'Developed mechanical and electrical P&ID (Piping & Instrumentation Diagrams) for the complete 30 kWe system',
      'Built steady-state ASPEN model for the 30 kWe system to determine reactant flow rates and component specifications',
      'Conducted experiments on the 5 kW reactor with product gas analysis using Gas Chromatograph (GC)',
      'Designed CAD model for a plate reformer with counter-flow heat exchange configuration',
      'Compared results across Equilibrium, PFR (Plug Flow Reactor), CFD, and Experimental methods',
    ],
    results: [
      'Experimental hydrogen yield of <strong>~25% mole fraction</strong> from the 5 kW diesel autothermal reformer — validated by GC analysis',
      'Good agreement between equilibrium, PFR, CFD, and experimental data for all major species (H₂, H₂O, CO, CO₂)',
      'Completed modular design separating electrical controls from main rig for both 5 kW and 30 kW configurations',
      'Identified all components, floated tenders, and created yearwise timeline and budget for the 30 kWe prototype',
    ],
    significance: 'This project addresses the critical need for compact, high-power fuel processing systems for naval and defense applications. Successfully validating ~25% H₂ yield from diesel ATR at the 5 kW scale provided the design basis for a 6× upscale to 30 kWe — demonstrating the pathway to deploying diesel-to-hydrogen reformer-fed fuel cell systems in field and shipboard environments.',
  },

  'iter-divertor': {
    title: 'ITER Divertor Thermal-Hydraulic Analysis',
    period: 'Jan 2017 – Jul 2017',
    affiliation: 'Institute for Plasma Research (IPR), Dept. of Atomic Energy, India',
    advisor: 'Mr. Vinay Menon, Scientist SD',
    tags: ['ANSYS APDL', 'FEM', 'ITER', 'Nuclear Fusion', 'Swirl Flow'],
    highlights: [
      { value: '28+ MW/m²', label: 'Peak Heat Flux Tested' },
      { value: '~983°C', label: 'Max Surface Temperature' },
      { value: '5.91 s', label: 'RTD Time Constant' },
      { value: '5', label: 'Power Shots Validated' },
    ],
    overview: `B.Tech. major project investigating the thermo-hydraulic behavior of plasma-facing divertor components in the International Thermonuclear Experimental Reactor (ITER). Developed an FEM model in ANSYS APDL to simulate high heat flux single-sided heating conditions, validated against calorimetry experiments at IPR's High Heat Flux Testing Facility.`,
    objectives: [
      'Model the complete heat transfer phenomenon for high heat flux one-sided heating conditions in a tokamak divertor',
      'Select and verify appropriate heat transfer correlations for subcooled flow boiling with and without swirl tape inserts',
      'Validate FEM simulation results against experimental calorimetry data from IPR',
      'Investigate the effect of twisted tape swirl inserts on thermal performance',
    ],
    methods: [
      'Developed 3D FEM model in ANSYS APDL with temperature-dependent material properties (non-linear analysis)',
      'Applied subcooled flow boiling heat transfer correlations as convection boundary conditions',
      'Modeled thermal response of RTD (Resistance Temperature Detector) sensors to match simulations with calorimetry data',
      'Conducted calorimetry experiments at IPR\'s electron beam High Heat Flux Testing Facility (heat fluxes up to ~28 MW/m²)',
      'Investigated swirl flow enhancement using twisted tape inserts',
      'Introduced an "area factor" correction to resolve electron beam power vs. absorbed power inconsistencies',
    ],
    results: [
      'FEM simulations achieved <strong>excellent agreement</strong> with experimental calorimetry data across all five power shots (16.6–20.6 kW absorbed)',
      'Heat fluxes tested ranged from <strong>11 to 28+ MW/m²</strong> on the copper mock-up surface',
      'Surface temperatures reached <strong>~983°C</strong> at highest power — validated against pyrometer readings',
      'Swirl tape inserts produced only <strong>~60°C variation</strong> from no-swirl cases, with slightly improved thermal uniformity',
      'Proposed area factor correction resolved discrepancy between electron beam power and calorimetry-measured absorbed power',
      'RTD thermal response time constant determined to be <strong>5.91 seconds</strong>',
    ],
    significance: 'Nuclear fusion in ITER requires divertor components to survive extreme heat fluxes (>10 MW/m²) while being actively cooled below melting temperatures. This work provides a validated FEM simulation framework for predicting divertor thermal behavior — directly supporting the design and safety analysis of plasma-facing components for the world\'s largest fusion experiment.',
  },
};

export function initProjectModals() {
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'fixed inset-0 z-[2000] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300';
  modal.innerHTML = `
    <div class="modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm" data-close></div>
    <div class="modal-panel relative w-[92vw] max-w-[800px] max-h-[88vh] bg-surface-2/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-[0_0_60px_rgba(230,57,86,0.15)] overflow-hidden scale-95 transition-transform duration-300">
      <div class="modal-header sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface-2/90 backdrop-blur-md">
        <h3 id="modal-title" class="text-lg font-bold pr-4 leading-snug"></h3>
        <button class="modal-close shrink-0 w-9 h-9 rounded-lg bg-bg/50 border border-border/50 flex items-center justify-center text-text-3 hover:text-crimson hover:border-crimson/40 transition-all duration-200" data-close aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="modal-body" class="px-6 py-5 overflow-y-auto" style="max-height: calc(88vh - 64px);"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.research-card[data-project]').forEach(card => {
    card.style.cursor = 'pointer';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      if (projectData[key]) openModal(projectData[key]);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = card.getAttribute('data-project');
        if (projectData[key]) openModal(projectData[key]);
      }
    });
  });
}

function buildHighlightsHTML(highlights) {
  if (!highlights || !highlights.length) return '';
  const cols = highlights.length <= 3 ? highlights.length : 4;
  return `
    <div class="grid grid-cols-${cols} gap-3 mb-6 max-[600px]:grid-cols-2">
      ${highlights.map(h => `
        <div class="text-center py-4 px-3 rounded-xl bg-bg/60 border border-border/40">
          <div class="text-xl font-bold text-crimson leading-none mb-1.5">${h.value}</div>
          <div class="text-[0.7rem] text-text-3 uppercase tracking-wide leading-tight">${h.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function buildImageGalleryHTML(images) {
  if (!images || !images.length) return '';
  return `
    <div class="mb-6">
      <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Visual Results</h4>
      <div class="relative">
        <div class="gallery-track flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth" style="-webkit-overflow-scrolling: touch; scrollbar-width: thin;">
          ${images.map((img, i) => `
            <div class="gallery-slide snap-start shrink-0 w-[85%] max-[600px]:w-[90%]">
              <div class="rounded-lg overflow-hidden border border-border/40 bg-bg/40 cursor-pointer" onclick="this.querySelector('img').classList.toggle('max-h-[220px]'); this.querySelector('img').classList.toggle('max-h-[500px]');">
                <img src="${img.src}" alt="${img.caption}" class="w-full max-h-[220px] object-contain transition-all duration-300" loading="lazy" />
              </div>
              <p class="text-xs text-text-3 mt-2 leading-relaxed italic">${img.caption}</p>
            </div>
          `).join('')}
        </div>
        ${images.length > 1 ? '<p class="text-[0.65rem] text-text-3 mt-1 tracking-wide uppercase">Scroll to see more →</p>' : ''}
      </div>
    </div>
  `;
}

function openModal(data) {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  title.textContent = data.title;

  let html = `
    <div class="flex flex-wrap items-center gap-3 mb-4 text-sm text-text-3">
      <span class="font-mono text-xs bg-bg/50 border border-border/50 px-2 py-0.5 rounded">${data.period}</span>
      <span>${data.affiliation}</span>
    </div>
    ${data.advisor ? `<p class="text-sm text-text-2 mb-5">Advisor: <span class="text-text font-medium">${data.advisor}</span></p>` : ''}
  `;

  // Highlight metrics
  html += buildHighlightsHTML(data.highlights);

  // Overview
  html += `<p class="text-text-2 leading-7 mb-6">${data.overview}</p>`;

  // Image gallery (if available)
  html += buildImageGalleryHTML(data.images);

  // Objectives
  html += `
    <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Objectives</h4>
    <ul class="mb-6 space-y-1.5">
      ${data.objectives.map(o => `<li class="text-sm text-text-2 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-crimson before:text-xs">${o}</li>`).join('')}
    </ul>
  `;

  // Methods
  html += `
    <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Methods & Approach</h4>
    <ul class="mb-6 space-y-1.5">
      ${data.methods.map(m => `<li class="text-sm text-text-2 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-crimson before:text-xs">${m}</li>`).join('')}
    </ul>
  `;

  // Results
  html += `
    <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Key Results</h4>
    <ul class="mb-6 space-y-1.5">
      ${data.results.map(r => `<li class="text-sm text-text-2 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-crimson before:text-xs">${r}</li>`).join('')}
    </ul>
  `;

  // Significance
  html += `
    <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Significance</h4>
    <p class="text-sm text-text-2 leading-relaxed mb-6">${data.significance}</p>
  `;

  // Publications
  if (data.publications) {
    html += `
      <h4 class="text-sm font-semibold text-crimson uppercase tracking-widest mb-3">Related Publications</h4>
      <ul class="mb-4 space-y-2">
        ${data.publications.map(p => `<li class="text-xs text-text-3 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-crimson">${p}</li>`).join('')}
      </ul>
    `;
  }

  // Tags
  html += `
    <div class="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
      ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  body.innerHTML = html;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.querySelector('.modal-panel').classList.remove('scale-95');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.querySelector('.modal-panel').classList.add('scale-95');
  document.body.style.overflow = '';
}
