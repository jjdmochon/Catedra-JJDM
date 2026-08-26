# ERC Advanced Grant Application — Part B1, Section 1

**Proposal Acronym:** `eRNA-DEGRADE`  
**Full Proposal Title:** Precision Epigenomic Silencing of Inflammatory Regulators via Machine Learning-Guided RiboTAC Degraders Targeting Non-Coding Super-Enhancer RNA Condensates  
**Principal Investigator (PI):** Prof. Juan José Díaz-Mochón  
**Host Institution (HI):** Universidad de Granada (UGR) / GENYO Centre, Spain  
**Grant Category:** ERC Advanced Grant (Horizon Europe — 5-Year Duration, €2,500,000 Budget)  
**Primary Evaluation Panel:** **PE5 (Synthetic Chemistry and Materials)** *(Alternative Primary: LS2 — Integrative Biology, Structural Biology and Molecular Genetics)*  
**Secondary Evaluation Panel:** **LS6 (Immunity, Infection and Immunotherapy)**  

---

## Cover Page Overview & Panel Classification

```
                          ERC PART B1 PROPOSAL METADATA
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ Primary Field: Chemical Biology /     │ Panel Descriptors (PE5):              │
│ Synthetic Organic Chemistry           │ • PE5_17 Chemical biology             │
│ Target Regulome Node: Non-Coding      │ • PE5_18 Molecular recognition        │
│ Enhancer RNA (DHS44500 eRNA)          │ • PE5_15 Bio-inspired chemistry       │
│ Mechanism of Action: Sub-Stoichiometric│ Panel Descriptors (LS2 / LS6):        │
│ Catalytic RiboTAC Degradation         │ • LS2_8 Epigenomics & 3D genome       │
│ Translational Application: Chronic    │ • LS2_7 Gene regulation & non-coding  │
│ Inflammatory Interruption             │ • LS6_11 Immunotherapy & drug discovery│
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## 1a. Executive Summary & Concept Statement

Chronic inflammatory diseases—including Rheumatoid Arthritis (RA), Psoriasis, Inflammatory Bowel Disease (IBD), and acute systemic sepsis—impose a devastating global health burden. Although biological therapeutics sequestering Tumor Necrosis Factor-alpha (TNF-alpha) protein (e.g., infliximab, adalimumab) revolutionized clinical management, up to 40% of patients experience primary non-responsiveness, secondary loss of efficacy due to anti-drug antibody generation, or severe systemic immunosuppressiveness. Meanwhile, small-molecule inhibitors targeting downstream kinase cascades (e.g., JAK/STAT) frequently suffer from narrow therapeutic windows and multi-organ off-target toxicities.

`eRNA-DEGRADE` introduces a paradigm-shifting chemical biology strategy: **targeting the non-coding regulome upstream of cytokine gene expression**. Hyper-expression of TNF-alpha during acute and chronic inflammation is driven by specific super-enhancers (SEs) transcribing non-coding enhancer RNAs (eRNAs)—specifically human `DHS44500` and its murine functional homolog, `TNF-9`. These short-lived eRNAs function as non-redundant structural scaffolds that anchor transcription factor assemblies, histone acetyltransferase coactivators (p300/CBP), RNA Polymerase II recruitment, and three-dimensional Enhancer-Promoter (E-P) chromatin loops.

Rather than attempting to neutralize circulating TNF-alpha protein after its synthesis and systemic release, `eRNA-DEGRADE` will synthesize first-in-class **Ribonuclease-Targeting Chimeras (RiboTACs)** to catalyze selective, sub-stoichiometric degradation of TNF-alpha super-enhancer eRNAs. By directing endogenous **RNase L** specifically to `DHS44500` eRNA tertiary structural hairpins via heterobifunctional small molecules, this approach will dismantle the super-enhancer biomolecular condensate, trigger regional E-P chromatin loop collapse, and silence pathologically elevated TNF-alpha gene transcription at its genomic origin in disease-associated macrophages without causing generalized immunosuppression.

```
                  PARADIGM SHIFT IN TARGETED THERAPEUTICS
┌─────────────────────────────────┬─────────────────────────────────────────────┐
│ TRADITIONAL APPROACHES          │ eRNA-DEGRADE DISRUPTIVE APPROACH            │
├─────────────────────────────────┼─────────────────────────────────────────────┤
│ Target Node: Circulating Protein│ Target Node: Upstream Non-Coding eRNA       │
│ (mAb neutralization)            │ Structural Scaffold                         │
│ Mode: Stoichiometric Occupancy  │ Mode: Catalytic Sub-Stoichiometric Cleavage │
│ (1 mAb : 1 Protein)             │ (1 RiboTAC : Multiple eRNA Transcripts)     │
│ Selectivity: Ubiquitous Target  │ Selectivity: Cell-State Exclusive           │
│ Expression in Healthy Tissues   │ (Expressed only in LPS-Activated Cells)     │
│ Outcome: Systemic Suppression   │ Outcome: Precision Epigenomic Interruption  │
└─────────────────────────────────┴─────────────────────────────────────────────┘
```

---

## 1b. Groundbreaking Nature, Ambition & Beyond State-of-the-Art

### Disruptive Conceptual Innovations
1. **Epigenomic Condensate Dissolution:** Standard pharmacology targets catalytic active sites on proteins. RiboTAC-mediated destruction of `DHS44500` eRNA dismantles the phase-separated nuclear condensate, terminating transcription factor re-loading before pre-mRNA synthesis initiates.
2. **Cell-State Exclusive Selectivity:** Unlike ubiquitously expressed signaling proteins, eRNAs are transcribed exclusively in specific disease-activated cell states (e.g., LPS/TLR4-stimulated inflammatory macrophages). RiboTACs targeting eRNAs achieve cell-state specificity unapproachable by traditional kinase inhibitors.
3. **Catalytic Sub-Stoichiometric Efficiency:** RiboTACs operate catalytically; a single degrader molecule induces sequential cleavage of multiple target eRNA transcripts, overcoming the stoichiometric limits of occupancy-based antagonists.

### Technological Convergence & Methodological Frontiers
`eRNA-DEGRADE` integrates four chemical biology frontiers:
* **AI/ML RNA Scaffold Engineering:** Deep-learning docking pipelines (Ribosphere, SMARTBind) and generative models trained on RNA-small molecule binding landscapes.
* **Counter-Selected DEL Screening:** DNA-Encoded Libraries (>10^8 diverse chemical entities) screened against natively folded eRNA hairpins with stringent counter-selection against tRNA/rRNA.
* **Single-Cell Off-Target Profiling via `drug2cell`:** Adapting single-cell multi-omic frameworks with deep-learning imputation to map eRNA target availability across single-cell transcriptomes as an early safety guardrail.
* **3D Epigenomic Architecture Tracking:** Direct measurement of 3D chromatin loop decay using Micro-C, snm3C-seq, and nascent transcription tracking via PRO-seq.

---

![eRNA Mechanism](file:///C:/Users/Usuario/.gemini/antigravity-ide/brain/a8616680-6733-4874-929c-5bbdcea1df2a/erna_degrade_mechanism.png)

---

## 1c. Research Methodology & Work Package Architecture

The project is executed across four tightly integrated, feebly de-risked Work Packages over 60 months:

```mermaid
gantt
    title eRNA-DEGRADE Work Package Schedule (Years 1 to 5)
    dateFormat  YYYY-MM
    section Work Packages
    WP1: eRNA Structural Footprinting & MD Ensembles     :active, wp1, 2026-09-01, 36m
    WP2: AI/ML & RiboTAC Synthesis (Core Engine)       :wp2, 2027-01-01, 48m
    WP3: Live-Cell Chem-CLIP & drug2cell Safety        :wp3, 2027-06-01, 36m
    WP4: 3D Epigenomics & In-Vivo Sepsis Validation     :wp4, 2028-01-01, 32m
```

### Work Package 1: Secondary & Tertiary Structural Architecture of DHS44500 eRNA
* **Lead Focus:** Resolving structural motifs of human `DHS44500` and mouse `TNF-9` eRNAs.
* **Methodology:** 
  * High-throughput **SHAPE-MaP** and **dMS-MaPseq** on in-vitro transcribed and cell-isolated eRNA constructs under physiological ionic conditions.
  * Long-timescale **Molecular Dynamics (MD) Ensemble Simulations** (AMBER/GROMACS) to map dynamic conformational bulges, triple-helix nodes, and binding pocket exposure.
  * Exploratory single-particle Cryo-EM on rigid sub-domain hairpins.

### Work Package 2: AI/ML-Guided Design, Counter-Selected DEL Screening, and RiboTAC Synthesis
* **Lead Focus:** Ligand discovery and medicinal chemistry of heterobifunctional eRNA degraders (The Core Chemical Engine).
* **Methodology:**
  * **Counter-Selected DEL Screening:** Screen an RNA-focused DNA-Encoded Library (>10^8 small molecules) against immobilized folded `DHS44500` hairpins, with mandatory counter-selection against total cellular tRNA/rRNA.
  * **RiboTAC Synthesis & Linker Optimization:** Conjugate validated small-molecule eRNA binders to synthetic RNase L recruiters (2'-5' oligoadenylate monomer mimics or heterocyclic recruiters). Systematically vary linker length and rigidity (rigid alkynyl vs. flexible PEG linkers, 6Å to 24Å).

### Work Package 3: Live-Cell Target Engagement & Single-Cell Off-Target Profiling
* **Lead Focus:** Live-cell biophysics and computational safety guardrails.
* **Methodology:**
  * **Live-Cell Target Engagement (Chem-CLIP):** Photo-crosslinking click chemistry to quantify in-cell binding kinetics (Kd, kon, koff) and target eRNA degradation rates via RT-qPCR/RNA-seq.
  * **Adapted drug2cell Imputation:** Integrate scRNA-seq datasets with deep-learning zero-imputation (SAVER/MAGIC) to map RiboTAC target expression across non-immune cell types (cardiac, renal, brain endothelial cells) ensuring a high therapeutic index.

### Work Package 4: 3D Epigenomic Architecture & In-Vivo Preclinical Validation
* **Lead Focus:** Chromatin loop dynamics, patient PBMC validation, and acute in-vivo proof-of-concept.
* **Methodology:**
  * **3D Epigenomic Architecture Profiling:** Micro-C and snm3C-seq to measure enhancer-promoter (E-P) loop collapse. PRO-seq to track nascent transcription pausing at the TNF-alpha locus. STED super-resolution microscopy to visualize p300/BRD4 condensate disruption.
  * **In-Vivo Acute Sepsis Model:** Administer optimized `TNF-9`-targeting RiboTACs in an established LPS-induced septic shock mouse model, benchmarking survival, systemic cytokine suppression, and tissue histology against anti-TNF antibody controls.
  * **Patient Primary Cell Translation:** Validate eRNA depletion and TNF-alpha suppression in primary macrophages isolated from synovial fluid of RA patients.

---

## 1d. Key Milestones, Risk Mitigation & Feasibility Baseline

```
                       KEY PROJECT MILESTONES
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Month 12  │ Milestone 1: Complete SHAPE-MaP structural footprinting and MD  │
│           │ ensemble pocket mapping for human DHS44500 eRNA hairpins.        │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ Month 24  │ Milestone 2: Identify top 20 eRNA-binding small-molecule        │
│           │ scaffolds from DEL selection and AI/ML counter-screening.        │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ Month 36  │ Milestone 3: Synthesize first-in-class eRNA RiboTACs achieving   │
│           │ nanomolar Kd (<50 nM) and targeted cell-free RNase L cleavage.   │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ Month 48  │ Milestone 4: Demonstrate live-cell Chem-CLIP target engagement,  │
│           │ Micro-C chromatin loop collapse, and drug2cell safety profiles.  │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ Month 60  │ Milestone 5: Complete preclinical in-vivo proof-of-concept in    │
│           │ mouse sepsis model and primary patient-derived macrophages.      │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

### Preliminary Feasibility Baseline
1. **Genetic Validation:** Deleting the `Tnf-9` enhancer region in mice (`Tnf-9-/-`) significantly reduces TNF-alpha expression and protects against LPS-induced septic shock without systemic pathology.
2. **ASO Knockdown Proof-of-Concept:** Antisense Oligonucleotides (ASOs) targeting mouse `TNF-9` and human `DHS44500` eRNA suppress TNF-alpha expression, proving causal regulatory dependency.
3. **PI Chemical Authority:** PI’s 20-year leadership in Dynamic Chemical Labelling (DCL), PNA probes, and nucleic acid recognition (*Angew. Chem.*, *NAR*, *Small*, 16 patent families, Founder of DestiNA Genomics Ltd) provides absolute chemical execution capability.

---

## 1e. Budget Justification Summary (€2,500,000 Total)

* **Personnel (€1,300,000):** PI commitment (30%), 3 Postdoctoral Researchers (RNA Biophysics, Medicinal Chemistry, Single-Cell Epigenomics), 1 PhD Student (AI/ML MD Simulations), 1 Research Technician.
* **Equipment & GPU Compute (€170,000):** Local High-Performance GPU Cluster (NVIDIA A100/H100), SPR Sensor Upgrade, Automated Parallel Liquid Handler.
* **Consumables & Reagents (€450,000):** DEL selection kits, synthetic chemistry/linker reagents, 10x Genomics scRNA-seq, Micro-C kits, mouse cohorts.
* **Large-Scale Core Facilities (€100,000):** Cryo-EM beamtime, National Supercomputing allocation, STED core fees.
* **Travel, Open Access, IP & Dissemination (€80,000):** Gold Open Access publishing, international symposia, patent administration.
* **Indirect Costs / Overheads (€400,000):** 25% Horizon Europe flat rate on eligible direct costs.
