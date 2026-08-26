# Preliminary Data Experimental Blueprint (`eRNA-DEGRADE`)

**Target Grant:** ERC Advanced Grant (`eRNA-DEGRADE`)  
**Principal Investigator:** Prof. Juan José Díaz-Mochón (UGR / GENYO)  
**Strategic Focus:** Executing 3-Month Preliminary Data Protocols to De-Risk Feasibility and Generate Figures 1, 2, and 3 for the Final Proposal  

---

## Executive Overview: The Preliminary Data Package

To secure an "A" score at Step 1 evaluation, we must provide concrete preliminary data demonstrating that human `DHS44500` eRNA possesses stable structural hairpins suitable for small-molecule binding, that heterobifunctional RiboTACs catalytically recruit RNase L for target cleavage, and that depleting `DHS44500` in human macrophages selectively silences TNF-alpha expression.

```
                      PRELIMINARY DATA FIGURE BLUEPRINT
┌───────────┬───────────────────────────────────┬───────────────────────────────┐
│ FIGURE    │ EXPERIMENTAL TARGET               │ KEY DELIVERABLE               │
├───────────┼───────────────────────────────────┼───────────────────────────────┤
│ Figure 1  │ SHAPE-MaP Footprinting & 3D Fold  │ Secondary/Tertiary Hairpin    │
│           │ Map of DHS44500 eRNA              │ Structure & Binding Pockets   │
├───────────┼───────────────────────────────────┼───────────────────────────────┤
│ Figure 2  │ Cell-Free RiboTAC Cleavage Assay  │ Denaturing PAGE Gel Proving   │
│           │ with Recombinant RNase L          │ Nanomolar Catalytic Cleavage  │
├───────────┼───────────────────────────────────┼───────────────────────────────┤
│ Figure 3  │ Live-Cell THP-1 Macrophage eRNA   │ Selective TNF-alpha mRNA      │
│           │ Knockdown & TNF-alpha Silencing   │ Suppression without Toxicity  │
└───────────┴───────────────────────────────────┴───────────────────────────────┘
```

---

## Experiment 1: SHAPE-MaP Structural Footprinting of DHS44500 eRNA (Figure 1)

### Scientific Rationale & Strategy
Regarding the structural characterization of human `DHS44500` eRNA, panel reviewers will question whether low-abundance non-coding eRNAs fold into defined, stable tertiary structures or exist purely as unstructured, highly flexible transcripts. This protocol generates empirical SHAPE-MaP reactivity profiles to prove the presence of rigid hairpin bulges suitable for small-molecule docking.

### Step-by-Step Protocol

1. **In-Vitro Transcription & RNA Folding:**  
   Amplify the full-length human `DHS44500` eRNA sequence (482 nt) from genomic DNA of activated THP-1 cells using T7 promoter-tagged PCR primers. Transcribe the eRNA construct in vitro using T7 RNA Polymerase, purify via denaturing PAGE, and fold the RNA by heating to 95°C for 3 minutes followed by slow cooling to 37°C in folding buffer (50 mM HEPES pH 8.0, 100 mM KCl, 10 mM MgCl2).

2. **SHAPE Chemical Modification (1M7 Acylation):**  
   Treat folded eRNA (2 pmol) with 1-methyl-7-nitroisatoic anhydride (1M7, 10 mM final concentration) or DMSO control for 3 minutes at 37°C. Clean up acylated RNA using micro-spin columns. 1M7 selectively adducts the 2'-hydroxyl position of flexible, single-stranded nucleotides while leaving base-paired or tertiary-constrained nucleotides unmodified.

3. **Mutational Profiling Reverse Transcription (MaP-RT):**  
   Perform reverse transcription using SuperScript II in the presence of 6 mM Mn2+ ions. The manganese ions force the reverse transcriptase to read through 1M7-adducted nucleotides, incorporating random mutations (substitutions/indels) into the cDNA at the exact site of chemical modification.

4. **Library Preparation & Next-Generation Sequencing:**  
   Prepare targeted amplicon sequencing libraries from modified and control cDNAs. Sequence libraries on an Illumina MiSeq platform (2 x 150 bp paired-end) achieving >10^6 reads per sample.

5. **Reactivity Calculation & Secondary Structure Prediction:**  
   Process FASTQ files using the `ShapeMapper 2` pipeline to calculate per-nucleotide SHAPE reactivity scores. Feed reactivity constraints into `RNAstructure` and `Fold` algorithms to model the secondary structure fold.

```
                            FIGURE 1 LAYOUT BLUEPRINT
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ Panel A: SHAPE-MaP Reactivity Plot    │ Panel B: Predicted Secondary Structure│
│ High reactivity (>0.8) at loop regions│ Rigid Stem-Loop 2 displaying low acyl-│
│ Low reactivity (<0.3) at rigid stems  │ ation and binding pocket exposure     │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## Experiment 2: Cell-Free RiboTAC RNase L Cleavage Assay (Figure 2)

### Scientific Rationale & Strategy
On the synthetic chemistry and biophysics front, we must prove that heterobifunctional RiboTAC degraders operate catalytically by bringing RNase L into close spatial proximity with target `DHS44500` eRNA hairpins, triggering site-specific endoribonucleolytic cleavage at sub-stoichiometric concentrations.

### Step-by-Step Protocol

1. **RiboTAC Synthesis & Purification:**  
   Synthesize a prototype RiboTAC molecule (`RiboTAC-eRNA1`) comprising an eRNA-binding small molecule ligand (identified from preliminary docking) conjugated via a PEG4 linker (14Å span) to a synthetic 2'-5' oligoadenylate (2-5A) monomer mimic that recruits RNase L. Purify compound via reverse-phase HPLC (>95% purity confirmed by LC-MS).

2. **Fluorophore-Labeled Target RNA Preparation:**  
   Synthesize a 5'-FAM fluorescently labeled synthetic 65-nt hairpin construct corresponding to Stem-Loop 2 of human `DHS44500` eRNA containing the UU/UA single-stranded cleavage motifs recognized by RNase L.

3. **Recombinant Human RNase L Expression:**  
   Express monomeric human RNase L (residues 1–741) with an N-terminal His6 tag in insect cells (Sf9) using a baculovirus system. Purify enzyme to homogeneity using Ni-NTA affinity chromatography followed by size-exclusion chromatography.

4. **Reconstitution & Catalytic Cleavage Reaction:**  
   Incubate 50 nM 5'-FAM-labeled target eRNA with 10 nM recombinant human RNase L and serial concentrations of `RiboTAC-eRNA1` (0.1 nM, 1 nM, 10 nM, 50 nM, 100 nM, 500 nM) or vehicle control in cleavage buffer (25 mM Tris-HCl pH 7.4, 100 mM KCl, 5 mM MgMgCl2, 1 mM ATP, 7 mM beta-mercaptoethanol) at 37°C for 30 minutes.

5. **Denaturing PAGE Gel Analysis & Fluorescence Imaging:**  
   Quench cleavage reactions by adding an equal volume of 2x RNA loading dye (95% formamide, 20 mM EDTA) and heating to 95°C for 5 minutes. Resolve cleavage products on a 15% denaturing polyacrylamide gel (8 M urea). Image fluorescent RNA fragments directly on a Typhoon FLA 9500 laser scanner (excitation 488 nm, emission 520 nm).

```
                            FIGURE 2 LAYOUT BLUEPRINT
┌──────────────────────────────────────────────────────────────────────────────┐
│ Panel A: Chemical Structure of Prototype RiboTAC-eRNA1 Degrader               │
│ Panel B: Denaturing PAGE Gel showing dose-dependent target eRNA cleavage     │
│ Lane 1: Target RNA alone (Intact 65 nt band)                                 │
│ Lane 2: Target RNA + RNase L (No RiboTAC -> Minimal background cleavage)     │
│ Lanes 3-7: Target RNA + RNase L + RiboTAC (0.1 to 100 nM -> Robust 28 nt band)│
│ Lane 8: Target RNA + RNase L + RiboTAC + Excess Competitor Binder (Blocked)   │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Experiment 3: Live-Cell THP-1 Macrophage eRNA Knockdown & TNF-alpha Silencing (Figure 3)

### Scientific Rationale & Strategy
For the cellular validation in human macrophages, we must demonstrate that treating inflammatory cells with our prototype RiboTAC or Antisense Oligonucleotide (ASO) controls induces rapid depletion of endogenous `DHS44500` eRNA, resulting in downstream transcriptional silencing of `TNF` mRNA without triggering generalized interferon stress or non-specific cytotoxicity.

### Step-by-Step Protocol

1. **Cell Culture & Inflammatory Macrophage Activation:**  
   Culture human THP-1 monocytes in RPMI-1640 medium supplemented with 10% FBS. Differentiate THP-1 cells into resting macrophages (M0 phenotype) by treatment with 50 nM phorbol 12-myristate 13-acetate (PMA) for 48 hours. Activate macrophages to an inflammatory M1 state by stimulation with 100 ng/mL LPS for 2 hours.

2. **RiboTAC / ASO Treatment Kinetics:**  
   Treat LPS-stimulated THP-1 macrophages with `RiboTAC-eRNA1` (10 nM, 50 nM, 250 nM), a scrambled RiboTAC control, or a validated `DHS44500`-targeting ASO (50 nM, positive control) for 15 min, 30 min, 1h, 2h, 4h, and 12h.

3. **Total RNA Isolation & Strand-Specific RT-qPCR:**  
   Isolate total cellular RNA using RNeasy micro kits with on-column DNase I digestion. Perform strand-specific reverse transcription to selectively quantify non-coding `DHS44500` eRNA transcripts using strand-specific primers. Measure mature `TNF` mRNA, nascent unspliced `TNF` pre-mRNA, and housekeeping genes (`GAPDH`, `ACTB`) via quantitative real-time PCR (RT-qPCR) using SYBR Green chemistry.

4. **Interferon Response & Cell Viability Counter-Screening:**  
   Quantify transcript levels of key interferon-stimulated genes (`ISG15`, `OAS1`, `IFIT1`) by RT-qPCR to confirm that RiboTAC treatment does not trigger non-specific RNase L hyper-activation or type-I interferon stress. Perform CellTiter-Glo luminescent assays to confirm >95% cell viability across treatment conditions.

```
                            FIGURE 3 LAYOUT BLUEPRINT
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ Panel A: eRNA Depletion Kinetics      │ Panel B: Selective TNF mRNA Silencing │
│ DHS44500 eRNA depleted by 85% within  │ TNF-alpha mRNA suppressed by 75% at 2h│
│ 30 min of RiboTAC treatment (50 nM)   │ Housekeeping GAPDH remains 100% stable│
├───────────────────────────────────────┼───────────────────────────────────────┤
│ Panel C: Interferon Counter-Screen    │ Panel D: Cell Viability & Cytotoxicity│
│ ISG15 and OAS1 remain unchanged       │ >95% macrophage viability confirmed   │
│ (No off-target interferon induction)  │ across all RiboTAC doses (0.1-500 nM) │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## 3-Month Execution Schedule & Lab Responsibilities

```mermaid
gantt
    title Preliminary Data 3-Month Execution Timeline
    dateFormat  YYYY-MM-DD
    section Work Packages
    Exp 1: SHAPE-MaP Footprinting of eRNA           :active, exp1, 2026-09-01, 30d
    Exp 2: RiboTAC Synthesis & Cell-Free Cleavage   :exp2, 2026-09-15, 45d
    Exp 3: THP-1 Macrophage eRNA Knockdown Assays   :exp3, 2026-10-15, 45d
    Figure Assembly & Part B1/B2 Integration         :fig, 2026-11-15, 15d
```

* **Month 1:** Complete in-vitro transcription of `DHS44500` eRNA, 1M7 acylation, MaP-RT, MiSeq sequencing, and ShapeMapper secondary structure prediction (Experiment 1 -> **Figure 1**).
* **Month 2:** Complete HPLC purification of prototype `RiboTAC-eRNA1`, recombinant RNase L reconstitution, and denaturing PAGE gel cleavage assays (Experiment 2 -> **Figure 2**).
* **Month 3:** Complete THP-1 macrophage LPS activation, RiboTAC treatment kinetics, strand-specific RT-qPCR for `DHS44500` and `TNF` mRNA, ISG counter-screening, and final vector figure assembly for the proposal (Experiment 3 -> **Figure 3**).
