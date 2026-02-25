// ===== PROJECT DETAIL MODAL =====

const projectData = {
  'battery-thermal': {
    title: 'Battery Thermal Management Systems (BTMS)',
    period: 'Jan 2023 – Present',
    affiliation: 'Micro/Nano Heat Transfer Lab, University of Oklahoma',
    advisor: 'Prof. Jivtesh Garg',
    tags: ['BTMS', 'CPCM', 'Heat Transfer', 'SolidWorks'],
    tagline: 'Hybrid cooling achieving automotive-grade thermal uniformity',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1f3d 40%, #e63956 100%)',
      pattern: 'thermal-waves',
      accentColor: '#e63956',
    },
    highlights: [
      { value: '<2°C', label: 'Temperature Uniformity (ΔT)' },
      { value: '4', label: 'Cooling Configs Tested' },
      { value: 'Hybrid', label: 'Best Performing System' },
    ],
    overview: `Comprehensive evaluation of cooling strategies for lithium-ion battery modules, targeting uniform temperature control critical for EV battery safety and longevity. This project combines experimental testing with CAD-based design to develop next-generation battery thermal management solutions.`,
    objectives: [
      'Evaluate and compare air-cooled, liquid-cooled, CPCM-enhanced, and hybrid cooling configurations for battery thermal management',
      'Achieve temperature uniformity (ΔT < 2°C) across battery modules during charge/discharge cycles',
    ],
    methods: [
      'Designed and fabricated battery thermal modules with integrated cooling channels and CPCM enclosures',
      'Performed comparative thermal testing across four cooling configurations under standardized charge/discharge protocols',
      'Collaborated with dynamic systems modeling researchers to understand thermal and operational dynamics of BTMS',
    ],
    results: [
      'Achieved temperature uniformity of <strong>ΔT < 2°C</strong> across battery thermal modules — meeting automotive industry standards',
      'Hybrid cooling (liquid + CPCM) demonstrated superior thermal performance compared to single-mode cooling approaches',
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
    tagline: 'Record-breaking polymer nanocomposites with 4030% thermal enhancement',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a2e1a 40%, #4ade80 100%)',
      pattern: 'crystalline-lattice',
      accentColor: '#4ade80',
      heroImage: '/assets/projects/composite-1-fig4.jpeg',
    },
    images: [
      { src: '/assets/projects/composite-1-fig4.jpeg', caption: 'Graphite intercalation routes: H₂O₂ vs NaClO₃ oxidizing agents with SEM micrographs' },
      { src: '/assets/projects/composite-1-fig5.jpeg', caption: 'EG/PEI composite fabrication process via solvent casting and EG paper pressing' },
      { src: '/assets/projects/composite-1-fig8.jpeg', caption: 'Raman spectroscopy: H₂O₂-intercalated GIC and EG samples showing preserved graphitic structure' },
      { src: '/assets/projects/composite-1-fig9.jpeg', caption: 'Raman spectroscopy: NaClO₃-intercalated GIC and EG showing increased D-band defects' },
      { src: '/assets/projects/composite-1-fig14.jpeg', caption: 'XRD patterns comparing intercalation stages and thermal expansion products' },
      { src: '/assets/projects/composite-4-fig4.jpeg', caption: 'Thermal expansion of GIC to EG with SEM imaging and EG/PEI composite fabrication' },
    ],
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
    tagline: 'Near-field radiative heat transfer with validated theoretical model',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e2a1a 40%, #f59e0b 100%)',
      pattern: 'wave-radiation',
      accentColor: '#f59e0b',
      heroImage: '/assets/projects/stpv-lab-setup.jpg',
    },
    images: [
      { src: '/assets/projects/stpv-operating-principle.jpg', caption: 'STPV operating principle: solar absorption, thermal emission, and PV cell response' },
      { src: '/assets/projects/stpv-schematic.jpg', caption: 'Experimental setup schematic with SiO₂ microsphere gap spacers and energy balance' },
      { src: '/assets/projects/stpv-lab-setup.jpg', caption: 'Vacuum chamber experimental setup with Thorlabs optical components' },
      { src: '/assets/projects/stpv-reflectivity.jpg', caption: 'Spectral reflectivity of Dp-Si and GaSb photovoltaic cells' },
      { src: '/assets/projects/stpv-efficiency.jpg', caption: 'STPV efficiency vs solar concentration factor (ideal case)' },
      { src: '/assets/projects/stpv-validation.jpg', caption: 'Experimental validation: Qc vs mean ΔT with error bars' },
      { src: '/assets/projects/stpv-energy-distribution.jpg', caption: 'Energy distribution pie charts at 1, 20, 40, and 60 suns concentration' },
    ],
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
    tagline: 'DFT-computed thermal conductivity of hexagonal BC₂P',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a2e2e 40%, #06b6d4 100%)',
      pattern: 'molecular-structure',
      accentColor: '#06b6d4',
      heroImage: '/assets/projects/phonon-transport-fig1.png',
    },
    images: [
      { src: '/assets/projects/phonon-transport-fig1.png', caption: 'Crystal structure of hexagonal BC₂P: front, top, and side views (B, C, P atoms)' },
      { src: '/assets/projects/phonon-transport-fig2.png', caption: 'Phonon dispersion curves and partial density of states (PDOS) for h-BC₂P' },
      { src: '/assets/projects/phonon-transport-fig3.png', caption: 'Thermal conductivity vs temperature (a) and nanoscale length dependence at 300K (b)' },
      { src: '/assets/projects/phonon-transport-fig4.jpeg', caption: 'Phonon group velocity and linewidth vs frequency by branch (TA₁, TA₂, LA, Optical)' },
    ],
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
    tagline: '5 kWe to 30 kWe diesel autothermal reformer upscaling',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e1a1a 40%, #ef4444 100%)',
      pattern: 'flow-diagram',
      accentColor: '#ef4444',
      heroImage: '/assets/projects/fuel-cell-rig.jpg',
    },
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
      { src: '/assets/projects/fuel-cell-slide-reactor.jpg', caption: 'Plate reactor design with counter-flow heat exchange schematics' },
      { src: '/assets/projects/fuel-cell-slide-rig.jpg', caption: '5 kWe diesel autothermal reformer test rig overview' },
      { src: '/assets/projects/fuel-cell-slide-aspen.jpg', caption: 'ASPEN steady-state model flowsheet for 30 kWe upscaling' },
      { src: '/assets/projects/fuel-cell-slide-results.jpg', caption: 'H₂ mole fraction yield: Equilibrium vs PFR vs CFD vs Experimental comparison' },
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
    tagline: 'FEM modeling of extreme heat flux divertor components',
    banner: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #1a1a3e 40%, #8b5cf6 100%)',
      pattern: 'heatmap-grid',
      accentColor: '#8b5cf6',
      heroImage: '/assets/projects/iter-divertor-fig32.jpeg',
    },
    images: [
      { src: '/assets/projects/iter-divertor-fig32.jpeg', caption: 'ANSYS thermal contour: temperature distribution (60–663°C) under high heat flux' },
      { src: '/assets/projects/iter-divertor-fig22.jpeg', caption: '3D FEM mesh with convection boundary conditions in ANSYS APDL' },
      { src: '/assets/projects/iter-divertor-fig31.jpeg', caption: 'Complete divertor mock-up FEM model with coolant channel' },
      { src: '/assets/projects/iter-divertor-fig5.png', caption: 'Heat transfer coefficient correlation for subcooled flow boiling with swirl tapes' },
      { src: '/assets/projects/iter-divertor-fig38.png', caption: 'Experimental vs simulation: coolant outlet temperature response over power shots' },
      { src: '/assets/projects/iter-divertor-fig42.png', caption: 'RTD thermal response: experimental data vs modeled RTD response (τ = 5.91s)' },
    ],
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

// ===== SVG BANNER PATTERN GENERATOR =====
function generateBannerSVG(pattern, color) {
  const patterns = {
    'thermal-waves': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <path d="M0,80 C50,40 100,120 150,80 C200,40 250,120 300,80 C350,40 400,120 450,80" fill="none" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <path d="M-20,100 C30,60 80,140 130,100 C180,60 230,140 280,100 C330,60 380,140 430,100" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.18"/>
        <path d="M-10,55 C40,15 90,95 140,55 C190,15 240,95 290,55 C340,15 390,95 440,55" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.18"/>
        <path d="M0,130 C60,100 100,150 160,125 C220,100 260,150 320,125 C380,100 400,140 420,130" fill="none" stroke="${color}" stroke-width="1" opacity="0.1"/>
        <circle cx="80" cy="70" r="2" fill="${color}" opacity="0.25"/><circle cx="200" cy="90" r="2.5" fill="${color}" opacity="0.2"/>
        <circle cx="320" cy="60" r="1.5" fill="${color}" opacity="0.2"/><circle cx="150" cy="120" r="2" fill="${color}" opacity="0.15"/>
      </svg>`,

    'crystalline-lattice': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <g stroke="${color}" fill="${color}">
          <!-- Hexagonal cluster 1 -->
          <circle cx="80" cy="50" r="3"/><circle cx="110" cy="35" r="3"/><circle cx="140" cy="50" r="3"/>
          <circle cx="140" cy="80" r="3"/><circle cx="110" cy="95" r="3"/><circle cx="80" cy="80" r="3"/>
          <circle cx="110" cy="65" r="4" opacity="0.4"/>
          <line x1="80" y1="50" x2="110" y2="35" stroke-width="1" opacity="0.3"/>
          <line x1="110" y1="35" x2="140" y2="50" stroke-width="1" opacity="0.3"/>
          <line x1="140" y1="50" x2="140" y2="80" stroke-width="1" opacity="0.3"/>
          <line x1="140" y1="80" x2="110" y2="95" stroke-width="1" opacity="0.3"/>
          <line x1="110" y1="95" x2="80" y2="80" stroke-width="1" opacity="0.3"/>
          <line x1="80" y1="80" x2="80" y2="50" stroke-width="1" opacity="0.3"/>
          <line x1="80" y1="50" x2="110" y2="65" stroke-width="0.8" opacity="0.2"/>
          <line x1="110" y1="35" x2="110" y2="65" stroke-width="0.8" opacity="0.2"/>
          <line x1="140" y1="50" x2="110" y2="65" stroke-width="0.8" opacity="0.2"/>
          <!-- Hexagonal cluster 2 -->
          <circle cx="260" cy="40" r="2.5"/><circle cx="290" cy="25" r="2.5"/><circle cx="320" cy="40" r="2.5"/>
          <circle cx="320" cy="70" r="2.5"/><circle cx="290" cy="85" r="2.5"/><circle cx="260" cy="70" r="2.5"/>
          <line x1="260" y1="40" x2="290" y2="25" stroke-width="0.8" opacity="0.25"/>
          <line x1="290" y1="25" x2="320" y2="40" stroke-width="0.8" opacity="0.25"/>
          <line x1="320" y1="40" x2="320" y2="70" stroke-width="0.8" opacity="0.25"/>
          <line x1="320" y1="70" x2="290" y2="85" stroke-width="0.8" opacity="0.25"/>
          <line x1="290" y1="85" x2="260" y2="70" stroke-width="0.8" opacity="0.25"/>
          <line x1="260" y1="70" x2="260" y2="40" stroke-width="0.8" opacity="0.25"/>
          <!-- Scattered nodes -->
          <circle cx="200" cy="130" r="2" opacity="0.15"/><circle cx="350" cy="120" r="1.5" opacity="0.12"/>
          <circle cx="50" cy="120" r="1.5" opacity="0.12"/><circle cx="180" cy="30" r="2" opacity="0.15"/>
          <line x1="140" y1="80" x2="180" y2="100" stroke-width="0.6" opacity="0.12" stroke-dasharray="4 4"/>
          <line x1="260" y1="70" x2="220" y2="100" stroke-width="0.6" opacity="0.12" stroke-dasharray="4 4"/>
        </g>
      </svg>`,

    'wave-radiation': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <g stroke="${color}" fill="none">
          <!-- Concentric circles - emitter -->
          <circle cx="100" cy="80" r="8" stroke-width="2" opacity="0.3"/>
          <circle cx="100" cy="80" r="20" stroke-width="1.5" opacity="0.22"/>
          <circle cx="100" cy="80" r="35" stroke-width="1" opacity="0.15"/>
          <circle cx="100" cy="80" r="55" stroke-width="0.8" opacity="0.1"/>
          <circle cx="100" cy="80" r="78" stroke-width="0.5" opacity="0.06"/>
          <!-- Concentric circles - secondary -->
          <circle cx="320" cy="60" r="6" stroke-width="1.5" opacity="0.2"/>
          <circle cx="320" cy="60" r="18" stroke-width="1" opacity="0.14"/>
          <circle cx="320" cy="60" r="32" stroke-width="0.8" opacity="0.09"/>
          <circle cx="320" cy="60" r="50" stroke-width="0.5" opacity="0.05"/>
          <!-- Wave rays -->
          <line x1="108" y1="80" x2="160" y2="75" stroke-width="0.8" opacity="0.15"/>
          <line x1="108" y1="73" x2="155" y2="55" stroke-width="0.8" opacity="0.12"/>
          <line x1="108" y1="87" x2="155" y2="100" stroke-width="0.8" opacity="0.12"/>
          <!-- Photon dots -->
          <circle cx="170" cy="72" r="2" fill="${color}" opacity="0.2"/>
          <circle cx="240" cy="65" r="1.5" fill="${color}" opacity="0.15"/>
          <circle cx="200" cy="100" r="1.5" fill="${color}" opacity="0.12"/>
        </g>
      </svg>`,

    'molecular-structure': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <g stroke="${color}" fill="${color}">
          <!-- Molecule cluster 1 -->
          <circle cx="90" cy="60" r="5" opacity="0.25"/><circle cx="140" cy="40" r="4" opacity="0.2"/>
          <circle cx="130" cy="90" r="3.5" opacity="0.2"/><circle cx="60" cy="90" r="3" opacity="0.15"/>
          <line x1="90" y1="60" x2="140" y2="40" stroke-width="1.5" opacity="0.2"/>
          <line x1="90" y1="60" x2="130" y2="90" stroke-width="1.5" opacity="0.2"/>
          <line x1="90" y1="60" x2="60" y2="90" stroke-width="1" opacity="0.15"/>
          <!-- Molecule cluster 2 -->
          <circle cx="280" cy="70" r="4.5" opacity="0.22"/><circle cx="320" cy="45" r="3.5" opacity="0.18"/>
          <circle cx="340" cy="85" r="3" opacity="0.15"/><circle cx="260" cy="100" r="3" opacity="0.13"/>
          <circle cx="310" cy="110" r="2.5" opacity="0.12"/>
          <line x1="280" y1="70" x2="320" y2="45" stroke-width="1.2" opacity="0.18"/>
          <line x1="280" y1="70" x2="340" y2="85" stroke-width="1.2" opacity="0.15"/>
          <line x1="280" y1="70" x2="260" y2="100" stroke-width="1" opacity="0.12"/>
          <line x1="340" y1="85" x2="310" y2="110" stroke-width="0.8" opacity="0.1"/>
          <!-- Scattered atoms -->
          <circle cx="200" cy="30" r="2" opacity="0.1"/><circle cx="380" cy="130" r="2" opacity="0.08"/>
          <circle cx="30" cy="40" r="1.5" opacity="0.08"/><circle cx="210" cy="130" r="2.5" opacity="0.1"/>
          <!-- Dashed bonds -->
          <line x1="140" y1="40" x2="200" y2="30" stroke-width="0.6" opacity="0.08" stroke-dasharray="4 3"/>
          <line x1="130" y1="90" x2="210" y2="130" stroke-width="0.6" opacity="0.08" stroke-dasharray="4 3"/>
        </g>
      </svg>`,

    'flow-diagram': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <defs><marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill="${color}" opacity="0.3"/></marker></defs>
        <g stroke="${color}">
          <!-- Flow lines -->
          <line x1="30" y1="50" x2="120" y2="50" stroke-width="1.5" opacity="0.2" marker-end="url(#arrow)"/>
          <line x1="140" y1="50" x2="230" y2="50" stroke-width="1.5" opacity="0.2" marker-end="url(#arrow)"/>
          <line x1="250" y1="50" x2="340" y2="50" stroke-width="1.5" opacity="0.2" marker-end="url(#arrow)"/>
          <line x1="30" y1="100" x2="120" y2="100" stroke-width="1" opacity="0.14" marker-end="url(#arrow)"/>
          <line x1="140" y1="100" x2="230" y2="100" stroke-width="1" opacity="0.14" marker-end="url(#arrow)"/>
          <line x1="250" y1="100" x2="340" y2="100" stroke-width="1" opacity="0.14" marker-end="url(#arrow)"/>
          <!-- Process boxes -->
          <rect x="120" y="38" width="20" height="24" rx="3" fill="${color}" opacity="0.12" stroke-width="0.8" opacity="0.2"/>
          <rect x="230" y="38" width="20" height="24" rx="3" fill="${color}" opacity="0.1" stroke-width="0.8" opacity="0.18"/>
          <rect x="340" y="38" width="20" height="24" rx="3" fill="${color}" opacity="0.08" stroke-width="0.8" opacity="0.15"/>
          <!-- Vertical connectors -->
          <line x1="130" y1="62" x2="130" y2="100" stroke-width="0.8" opacity="0.12" stroke-dasharray="3 3"/>
          <line x1="240" y1="62" x2="240" y2="100" stroke-width="0.8" opacity="0.12" stroke-dasharray="3 3"/>
          <!-- Labels/dots -->
          <circle cx="60" cy="50" r="2" fill="${color}" opacity="0.15"/>
          <circle cx="180" cy="50" r="2" fill="${color}" opacity="0.12"/>
          <circle cx="290" cy="50" r="2" fill="${color}" opacity="0.1"/>
          <circle cx="60" cy="100" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="180" cy="100" r="1.5" fill="${color}" opacity="0.08"/>
        </g>
      </svg>`,

    'heatmap-grid': `
      <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full banner-svg" preserveAspectRatio="xMidYMid slice">
        <g fill="${color}">
          <!-- Heatmap grid cells with varying opacity -->
          ${Array.from({length: 8}, (_, row) =>
            Array.from({length: 16}, (_, col) => {
              const cx = col * 25 + 12;
              const cy = row * 20 + 10;
              const dist = Math.sqrt(Math.pow((cx - 200) / 200, 2) + Math.pow((cy - 80) / 80, 2));
              const opacity = Math.max(0.03, 0.2 * (1 - dist));
              return `<rect x="${cx - 10}" y="${cy - 8}" width="20" height="16" rx="2" opacity="${opacity.toFixed(3)}"/>`;
            }).join('')
          ).join('')}
          <!-- Isothermal contour lines -->
          <ellipse cx="200" cy="80" rx="60" ry="35" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.15"/>
          <ellipse cx="200" cy="80" rx="100" ry="55" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.08"/>
        </g>
      </svg>`,
  };
  return patterns[pattern] || '';
}

// ===== GENERATE CARD BANNER HTML =====
function generateCardBannerHTML(banner) {
  if (!banner) return '';
  if (banner.heroImage) {
    return `
      <div class="card-banner relative h-36 max-[480px]:h-28 overflow-hidden">
        <img src="${banner.heroImage}" alt="" class="w-full h-full object-cover opacity-60 transition-transform duration-500" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/30 to-transparent"></div>
      </div>`;
  }
  return `
    <div class="card-banner relative h-36 max-[480px]:h-28 overflow-hidden">
      <div class="absolute inset-0" style="background: ${banner.gradient};"></div>
      ${generateBannerSVG(banner.pattern, banner.accentColor)}
      <div class="absolute inset-0 bg-gradient-to-t from-surface-2/60 to-transparent"></div>
    </div>`;
}

// ===== GENERATE MODAL BANNER HTML =====
function generateModalBannerHTML(banner) {
  if (!banner) return '';
  if (banner.heroImage) {
    return `
      <img src="${banner.heroImage}" alt="" class="w-full h-full object-cover opacity-50" />
      <div class="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/50 to-transparent"></div>`;
  }
  return `
    <div class="absolute inset-0" style="background: ${banner.gradient};"></div>
    ${generateBannerSVG(banner.pattern, banner.accentColor)}
    <div class="absolute inset-0 bg-gradient-to-t from-surface-2/70 to-transparent"></div>`;
}

export function initProjectModals() {
  // Create modal
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'fixed inset-0 z-[2000] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300';
  modal.innerHTML = `
    <div class="modal-backdrop absolute inset-0 bg-black/80" data-close></div>
    <div class="modal-panel relative w-[94vw] max-w-[900px] max-h-[90vh] bg-surface-2 border border-border/60 rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.5)] overflow-hidden scale-95 transition-transform duration-300 flex flex-col">
      <div id="modal-banner" class="relative w-full h-48 shrink-0 overflow-hidden max-[600px]:h-32"></div>
      <div class="modal-header sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface-2">
        <h3 id="modal-title" class="text-lg font-bold pr-4 leading-snug"></h3>
        <button class="modal-close shrink-0 w-9 h-9 rounded-lg bg-bg/50 border border-border/50 flex items-center justify-center text-text-3 hover:text-crimson hover:border-crimson/40 transition-all duration-200" data-close aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="modal-body" class="px-6 py-5 overflow-y-auto flex-1"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Create lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-lightbox';
  lightbox.id = 'gallery-lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close lightbox">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="lightbox-nav lightbox-next" aria-label="Next image">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
    </button>
    <img src="" alt="" />
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lightbox);

  // Lightbox state
  let lightboxImages = [];
  let lightboxIndex = 0;

  function openLightbox(images, index) {
    lightboxImages = images;
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  function updateLightbox() {
    const img = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const current = lightboxImages[lightboxIndex];
    img.src = current.src;
    img.alt = current.caption;
    caption.textContent = current.caption;
    lightbox.querySelector('.lightbox-prev').style.display = lightboxImages.length > 1 ? '' : 'none';
    lightbox.querySelector('.lightbox-next').style.display = lightboxImages.length > 1 ? '' : 'none';
  }

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  });
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    updateLightbox();
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close handlers
  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('active')) {
        closeLightbox();
      } else {
        closeModal();
      }
    }
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        updateLightbox();
      }
      if (e.key === 'ArrowRight') {
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        updateLightbox();
      }
    }
  });

  // Delegate gallery image clicks to lightbox
  modal.addEventListener('click', (e) => {
    const wrapper = e.target.closest('.gallery-img-wrapper');
    if (wrapper) {
      const index = parseInt(wrapper.dataset.galleryIndex, 10);
      const key = modal.dataset.currentProject;
      const data = projectData[key];
      if (data && data.images) {
        openLightbox(data.images, index);
      }
    }
  });

  // Card click handlers
  document.querySelectorAll('.research-card[data-project]').forEach(card => {
    card.style.cursor = 'pointer';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project');
      if (projectData[key]) openModal(key);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = card.getAttribute('data-project');
        if (projectData[key]) openModal(key);
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
      <h4 class="modal-section-title">Visual Results</h4>
      <div class="relative">
        <div class="gallery-track flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth" style="-webkit-overflow-scrolling: touch; scrollbar-width: thin;">
          ${images.map((img, i) => `
            <div class="gallery-slide snap-start shrink-0 w-[80%] max-[600px]:w-[90%]">
              <div class="rounded-lg overflow-hidden border border-border/40 bg-bg/40 cursor-zoom-in gallery-img-wrapper hover:border-crimson/40 transition-colors duration-200" data-gallery-index="${i}">
                <img src="${img.src}" alt="${img.caption}" class="w-full max-h-[220px] object-contain transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
              </div>
              <p class="text-xs text-text-3 mt-2 leading-relaxed italic">${img.caption}</p>
            </div>
          `).join('')}
        </div>
        ${images.length > 1 ? '<p class="text-[0.65rem] text-text-3 mt-1 tracking-wide uppercase">Scroll to see more &rarr;</p>' : ''}
      </div>
    </div>
  `;
}

function openModal(projectKey) {
  const data = projectData[projectKey];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const banner = document.getElementById('modal-banner');

  modal.dataset.currentProject = projectKey;
  title.textContent = data.title;

  // Render banner
  if (data.banner) {
    banner.innerHTML = generateModalBannerHTML(data.banner);
    banner.style.display = '';
  } else {
    banner.innerHTML = '';
    banner.style.display = 'none';
  }

  // Build body content as case-study layout
  let html = '';

  // Metadata bar
  html += `
    <div class="flex flex-wrap items-center gap-3 mb-4 text-sm text-text-3">
      <span class="font-mono text-xs bg-bg/50 border border-border/50 px-2 py-0.5 rounded">${data.period}</span>
      <span>${data.affiliation}</span>
    </div>
    ${data.advisor ? `<p class="text-sm text-text-2 mb-5">Advisor: <span class="text-text font-medium">${data.advisor}</span></p>` : ''}
  `;

  // Highlight metrics
  html += buildHighlightsHTML(data.highlights);

  // Overview section
  html += `
    <div class="mb-6">
      <h4 class="modal-section-title">Overview</h4>
      <p class="text-text-2 leading-7">${data.overview}</p>
    </div>
  `;

  // Image gallery (if available)
  html += buildImageGalleryHTML(data.images);

  // Objectives
  html += `
    <div class="mb-6">
      <h4 class="modal-section-title">Objectives</h4>
      <ul class="space-y-1.5">
        ${data.objectives.map(o => `<li class="modal-list-item">${o}</li>`).join('')}
      </ul>
    </div>
  `;

  // Methods & Tools
  html += `
    <div class="mb-6">
      <h4 class="modal-section-title">Methods & Tools</h4>
      <ul class="space-y-1.5">
        ${data.methods.map(m => `<li class="modal-list-item">${m}</li>`).join('')}
      </ul>
    </div>
  `;

  // Key Results
  html += `
    <div class="mb-6">
      <h4 class="modal-section-title">Key Results</h4>
      <ul class="space-y-1.5">
        ${data.results.map(r => `<li class="modal-list-item">${r}</li>`).join('')}
      </ul>
    </div>
  `;

  // Significance
  html += `
    <div class="mb-6">
      <h4 class="modal-section-title">Significance</h4>
      <p class="text-sm text-text-2 leading-relaxed">${data.significance}</p>
    </div>
  `;

  // Publications
  if (data.publications) {
    html += `
      <div class="mb-6">
        <h4 class="modal-section-title">Related Publications</h4>
        <ul class="space-y-2">
          ${data.publications.map(p => `<li class="text-xs text-text-3 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-crimson">${p}</li>`).join('')}
        </ul>
      </div>
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
