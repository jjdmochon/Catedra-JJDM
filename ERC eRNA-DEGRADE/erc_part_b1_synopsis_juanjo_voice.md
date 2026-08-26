# ERC Advanced Grant Application — Part B1, Section 1

**Proposal Acronym:** `eRNA-DEGRADE`  
**Full Proposal Title:** Precision Epigenomic Silencing of Inflammatory Regulators via Machine Learning-Guided RiboTAC Degraders Targeting Non-Coding Super-Enhancer RNA Condensates  
**Principal Investigator (PI):** Prof. Juan José Díaz-Mochón  
**Host Institution (HI):** Universidad de Granada (UGR) / GENYO Centre, Spain  
**Grant Category:** ERC Advanced Grant (5-Year Duration, €2,500,000 Budget)  
**Primary Evaluation Panel:** PE5 (Synthetic Chemistry and Materials)  
**Secondary Evaluation Panel:** LS6 (Immunity, Infection and Immunotherapy)  

---

## 1a. Executive Summary & Concept Statement

Regarding the clinical context of chronic inflammatory conditions like rheumatoid arthritis, psoriasis, inflammatory bowel disease, and acute sepsis, current therapeutic options remain far from optimal. Biologics that sequester TNF-alpha protein, such as infliximab or adalimumab, have certainly improved patient care, but up to 40% of patients experience primary non-responsiveness, secondary loss of efficacy from anti-drug antibody formation, or severe systemic immunosuppression. At the same time, small-molecule kinase inhibitors targeting downstream cascades like the JAK/STAT pathway frequently suffer from narrow therapeutic windows and multi-organ toxicity issues.

On the scientific strategy front, eRNA-DEGRADE introduces a distinct chemical biology approach by shifting the intervention node upstream of cytokine gene expression. Hyper-expression of TNF-alpha during acute and chronic inflammation is driven by specific super-enhancers transcribing non-coding enhancer RNAs, specifically human DHS44500 and its mouse functional homolog TNF-9. These short-lived eRNAs act as non-redundant structural scaffolds that anchor transcription factor assemblies, p300/CBP coactivators, RNA Polymerase II recruitment, and three-dimensional Enhancer-Promoter chromatin loops.

Rather than trying to neutralize circulating TNF-alpha protein after it has been synthesized and released systemically, we will synthesize first-in-class Ribonuclease-Targeting Chimeras (RiboTACs) to catalyze selective, sub-stoichiometric degradation of TNF-alpha super-enhancer eRNAs. By directing endogenous RNase L specifically to DHS44500 eRNA tertiary structural hairpins using heterobifunctional small molecules, we will dismantle the super-enhancer biomolecular condensate, trigger regional E-P chromatin loop collapse, and silence pathologically elevated TNF-alpha gene transcription at its genomic origin in disease-associated macrophages without causing generalized immunosuppression.

---

## 1b. Groundbreaking Nature, Ambition & Beyond State-of-the-Art

Regarding the conceptual innovations, standard pharmacology focuses on catalytic active sites on proteins. RiboTAC-mediated destruction of DHS44500 eRNA dismantles the phase-separated nuclear condensate directly, terminating transcription factor re-loading before pre-mRNA synthesis can even initiate. Furthermore, unlike ubiquitously expressed signaling proteins, eRNAs are transcribed exclusively in specific disease-activated cell states, such as LPS-stimulated inflammatory macrophages. This gives us a cell-state selectivity that traditional kinase inhibitors simply cannot match. Finally, RiboTACs operate catalytically; a single degrader molecule induces sequential cleavage of multiple target eRNA transcripts, which overcomes the stoichiometric limitations of occupancy-based antagonists.

On the technological front, eRNA-DEGRADE merges four distinct lines of work into a cohesive chemical biology platform. First, we deploy deep-learning docking models like Ribosphere and SMARTBind alongside generative models trained specifically on RNA-small molecule binding landscapes. Second, we screen DNA-Encoded Libraries containing over 10^8 diverse small molecules against natively folded eRNA hairpins, applying stringent counter-selection against tRNA and rRNA. Third, we adapt single-cell multi-omic frameworks via our drug2cell pipeline with deep-learning imputation to map eRNA target availability across single-cell transcriptomes as an early safety screen. Fourth, we track 3D chromatin loop decay directly using Micro-C, snm3C-seq, and nascent transcription tracking via PRO-seq.

---

## 1c. Research Methodology & Work Package Architecture

Regarding the implementation matrix, we have organized the work across four closely integrated work packages over the 60-month duration.

On the structural biology front (WP1), we focus on resolving the secondary and tertiary structural motifs of human DHS44500 and mouse TNF-9 eRNAs. We will use high-throughput SHAPE-MaP and dMS-MaPseq on in-vitro transcribed and endogenously isolated eRNA constructs under physiological ionic conditions. In parallel, we will run ensemble Molecular Dynamics simulations using AMBER and GROMACS to map dynamic conformational bulges, triple-helix nodes, and binding pocket exposure, alongside exploratory Cryo-EM on rigid sub-domain hairpins.

On the medicinal chemistry and screening front (WP2), which forms the core chemical engine of the project, we will screen an RNA-focused DNA-Encoded Library of more than 10^8 small molecules against immobilized folded DHS44500 hairpins, incorporating mandatory counter-selection against cellular tRNA and rRNA. We will then synthesize RiboTAC degraders by conjugating validated eRNA binders to synthetic RNase L recruiters based on 2'-5' oligoadenylate monomer mimics or heterocyclic recruiters. We plan to systematically vary linker length and rigidity, testing both rigid alkynyl and flexible PEG linkers spanning 6Å to 24Å.

For the live-cell biophysics and safety profiling (WP3), we will perform Chem-CLIP photo-crosslinking click chemistry to quantify in-cell binding kinetics and target eRNA degradation kinetics by RT-qPCR and RNA-seq. We will also apply our adapted drug2cell pipeline with deep-learning zero-imputation to map RiboTAC target expression across non-immune cell types, ensuring zero target engagement in cardiac, renal, and brain endothelial populations to build a solid safety margin.

Finally, on the epigenomics and in-vivo validation front (WP4), we will evaluate enhancer-promoter loop collapse using Micro-C and snm3C-seq, track nascent transcription pausing at the TNF-alpha locus via PRO-seq, and visualize p300/BRD4 condensate disruption using STED super-resolution microscopy. We will validate therapeutic efficacy in an established LPS-induced septic shock mouse model, benchmarking survival, systemic cytokine suppression, and tissue histology against anti-TNF antibody controls, before confirming target eRNA depletion in primary macrophages isolated from synovial fluid of RA patients.

---

## 1d. Key Milestones & Project Deliverables

Regarding project milestones, at Month 12 we will complete the SHAPE-MaP structural footprinting and MD ensemble pocket mapping for human DHS44500 eRNA hairpins. By Month 24, we will identify the top 20 eRNA-binding small-molecule scaffolds from DEL selection and AI/ML counter-screening. At Month 36, we will synthesize first-in-class eRNA RiboTACs achieving nanomolar binding affinity (Kd < 50 nM) and targeted cell-free RNase L cleavage. By Month 48, we will demonstrate live-cell Chem-CLIP target engagement, Micro-C chromatin loop collapse, and drug2cell safety profiles. Finally, by Month 60, we will complete preclinical proof-of-concept in the mouse sepsis model and primary patient-derived macrophages.

On the feasibility front, deleting the Tnf-9 enhancer region in mice significantly reduces TNF-alpha expression and protects against LPS-induced septic shock without systemic pathology. Furthermore, antisense oligonucleotide knockdown of mouse TNF-9 and human DHS44500 eRNA suppresses TNF-alpha expression, proving the causal regulatory dependency. Combined with my 20-year background in dynamic chemical labelling, PNA probe chemistry, and nucleic acid recognition, we have the necessary chemical foundation to execute this program successfully.

---

## 1e. Budget Justification Summary (€2,500,000 Total)

Regarding the financial breakdown, the requested €2,500,000 budget covers:

Personnel costs (€1,300,000) support my 30% PI commitment, 3 Postdoctoral Researchers focused on RNA biophysics, medicinal chemistry, and single-cell epigenomics, 1 PhD Student for MD simulations, and 1 Senior Research Technician.

Equipment and computing (€170,000) includes a local GPU cluster with NVIDIA A100/H100 nodes for deep learning inference, an SPR sensor upgrade, and an automated liquid handling system.

Consumables and reagents (€450,000) cover DEL selection kits, synthetic chemistry building blocks, 10x Genomics scRNA-seq kits, Micro-C reagents, and animal model housing.

Core facility fees (€100,000) fund Cryo-EM beamtime, supercomputing cloud access, and STED microscopy fees.

Travel, open access, and IP management (€80,000) covers international conference attendance, gold open access publishing fees, and patent administration.

Indirect costs (€400,000) reflect the standard 25% Horizon Europe flat rate on eligible direct costs.
