Review

# Amplification-Free Testing of microRNA Biomarkers in Cancer

### Bahareh Soleimanpour 1,2,3,4,5, Juan Jose Diaz Mochon 2,3,4,5 and Salvatore Pernagallo 1,*

Academic Editor: Gianluca Aguiari Received: 15 July 2025 Revised: 8 August 2025 Accepted: 19 August 2025 Published: 21 August 2025 Citation: Soleimanpour, B.; Diaz Mochon, J.J.; Pernagallo, S. Amplification-Free Testing of microRNA Biomarkers in Cancer. Cancers 2025, 17, 2715. https:// doi.org/10.3390/cancers17162715

Copyright: © 2025 by the authors. Licensee MDPI, Basel, Switzerland. This article is an open access article distributed under the terms and conditions of the Creative Commons Attribution (CC BY) license (https://creativecommons.org/ licenses/by/4.0/).

- 1 Destina Genomica S.L., Parque Tecnológico de la Salud de Granada (PTS), Avenida de la Innovación 1, Edificio BIC, 18016 Granada, Spain; bahareh@destinagenomics.com
- 2 Departamento de Química Farmacéutica y Orgánica, Facultad de Farmacia, Campus de Cartuja, 18071 Granada, Spain; juandiaz@go.ugr.es
- 3 Unidad de Excelencia de Química Aplicada a Biomedicina y Medioambiente, Facultad de Farmacia, Campus de Cartuja S/n, 18071 Granada, Spain
- 4 Centro Pfizer-Universidad de Granada-Junta de Andalucía de Genómica e Investigación Oncológica (GENYO), Avenida de la Ilustración 114, 18016 Granada, Spain
- 5 Instituto de Investigación Biosanitaria de Granada—ibs.GRANADA, Avenida de Madrid, 15, 18012 Granada, Spain


* Correspondence: salvatore.pernagallo@destinagenomics.com; Tel.: +34-958-84-64-63

### Simple Summary

Circulating microRNAs (miRNAs) show great promise as biomarkers for diagnosing and monitoring various diseases, including cancer. However, their use in clinical diagnostics is currently limited due to the lack of direct analytical methods. This review emphasizes the urgent need for amplification-free technologies to overcome these limitations. It explores recent innovations designed to streamline workflows, enhance accuracy, and expand the clinical applicability of miRNAs as diagnostic tools. Such advancements are essential for bridging the gap between research and clinical practice, as well as facilitating the development of more accessible and reliable miRNA testing tools.

### Abstract

Background: Circulating miRNAs have been identified as potential biomarkers for the early diagnosis and monitoring of cancers. However, limitations of polymerase chain reaction (PCR)-based methods are currently delaying the transition of miRNA research into clinical practice. These include labour-intensive workflows, exposure to errors and difficulties in detecting and quantifying low-abundance miRNAs. Objectives: This review emphasizes the need to develop amplification-free (“PCR-free”) technologies to improve the reliability, scalability and practicality of miRNA diagnostics in clinical settings. Methods: This review explores recent advances in PCR-free technologies developed over the past five years. It focuses on innovative methods, such as bead-based assays and sensor detection platforms, which serve as valuable alternatives to conventional PCR-based approaches. These emerging technologies have the potential to overcome the key limitations of PCR by offering streamlined workflows, reduced error rates and enhanced compatibility with a variety of clinical sample types. Crucially, they enable absolute quantification without the need for pre-nucleic acid extraction, reverse transcription or amplification, as well as the simultaneous detection of multiple miRNAs within a single assay. These provide costeffective and scalable solutions for comprehensive biomarker profiling. The transition from PCR-based to PCR-free technologies is a significant step forward in miRNA diagnostics, overcoming long-standing technical barriers and paving the way for broader adoption of miRNA analysis in routine clinical settings. This shift supports the advancement of precision medicine and holds promises for improving early cancer detection.

Cancers 2025, 17, 2715 https://doi.org/10.3390/cancers17162715

Keywords: microRNAs (miRNAs); PCR-free technologies; labeling-free detection; amplificationfree platforms; cancer diagnostics; early detection; liquid biopsy; biomarker analysis; nucleic acid testing; sensor-based detection; multiplexed assays

## 1. Introduction

Cancer remains a significant global health challenge, causing almost 10 million deaths each year [1]. According to the American Cancer Society’s Cancer Statistics Update, over

#### 2 million people were diagnosed with cancer in 2024 [2]. This results in around 5500 casesa day, or one diagnosis every 15 s. For the first time, the number of newly diagnosed casesin the United States has exceeded two million, with a growing proportion being identifiedat an earlier stage, when treatment success rates are at their highest. Consequently, cancer-related deaths have steadily declined, with an estimated 4.1 million lives saved since1991 [3]. This progress reflects substantial investments in research and screening initiativesby organizations such as the National Institutes of Health, the Centers for Disease Controland Prevention, and the American Cancer Society [2,4].

Significant efforts continue to be focused on improving diagnostic and therapeutic methods in the ongoing fight against cancer. Early detection and precise diagnosis are crucial for improving patient outcomes and survival rates. Although tissue biopsy has long been considered the gold standard for cancer diagnosis, its invasiveness, incomplete tumor representation and risk of complications can limit its effectiveness [5].

Recent advancements in liquid biopsy, involving the detection of cancer biomarkers in bodily fluids such as blood, urine and saliva, have emerged as a transformative approach to non-invasive cancer detection [6,7]. Biomarkers such as circulating tumor cells (CTCs), circulating tumor DNA (ctDNA), microRNAs (miRNAs), and exosomes can provide realtime, comprehensive insights into tumor biology. Compared to traditional tissue biopsies, liquid biopsies offer clear advantages, including non-invasive and repeatable sampling, reduced risk, real-time monitoring and lower costs [7,8].

Furthermore, recent advances in molecular biotechnology have made it possible to identify cancer biomarkers with great precision through genomics, transcriptomics and proteomics [9]. These cutting-edge technologies have made a significant contribution to uncovering the underlying mechanisms of cancer and identifying actionable therapeutic targets, thereby accelerating the development of personalized and precision medicine approaches [10,11].

miRNAs are small non-coding RNA molecules, typically 18–24 nucleotides in length, which are present in all eukaryotic cells [12]. They play a crucial role in regulating key biological processes, including cell division, differentiation, apoptosis and numerous physiological and pathological pathways [13,14]. Alterations in miRNA expression, either up- or downregulation, have been widely associated with various human diseases, particularly cancer [15,16]. The importance of miRNAs in biology and medicine was further emphasized by the award of the 2024 Nobel Prize in Physiology or Medicine, which recognized their fundamental role in cellular regulation and disease [17].

Over the past two decades, extensive research has demonstrated the potential of circulating miRNAs as powerful biomarkers for cancer diagnosis, prognosis and therapy [18,19]. They have several clinical applications: they can signal the onset of cancer as early detection biomarkers; they can provide insight into disease progression and staging as prognostic indicators; and they can help evaluate therapeutic response and guide treatment decisions as predictive biomarkers. Therefore, monitoring miRNA expression profiles can offer clinicians a valuable tool for assessing how a patient responds to anticancer drugs and

other interventions [20,21]. One of the major advantages of miRNAs is that they can be detected in various biofluids, including blood, urine and saliva [22]. This enables minimal or non-invasive sampling, making circulating miRNAs highly attractive for routine clinical testing and liquid biopsy applications [23]. They are notable for their remarkable stability in body fluids, remaining intact and detectable despite challenging biological conditions—an essential feature for reliable diagnostics [23–25].

Despite their enormous clinical potential, miRNAs present significant analytical challenges that limit their use in diagnostics. Although their presence in accessible biofluids, such as blood, urine and saliva, enables non-invasive sampling and supports the development of liquid biopsy tests, miRNAs are inherently difficult to detect and quantify precisely. Their short sequence length, low abundance and high sequence similarity among family members make specific and reliable measurement difficult [26]. As mentioned above, although circulating miRNAs demonstrate exceptional stability in body fluids—an important trait for diagnostic use—this alone does not resolve the technical complexities involved in their isolation, enrichment and analysis [16]. Addressing these issues is essential if we are to realize the full diagnostic and therapeutic potential of miRNAs [27].

Over the past two decades, several analytical platforms have been used to evaluate miRNA expression in biofluids, replacing conventional methods. These include the reverse transcription quantitative polymerase chain reaction (RT-qPCR) [28], droplet digital PCR (ddPCR) [29], microarrays [30] and next-generation sequencing (NGS)-based methods [31]. Using them for miRNA detection typically requires additional workflow steps, most notably reverse transcription to convert RNA into complementary DNA (cDNA), which can then be processed using standard DNA-based methodologies.

While these methods have demonstrated utility, they suffer from several limitations related to workflow complexity, cost and analytical accuracy [32]. Crucially, none of these technologies were originally designed for the analysis of miRNAs. Rather, they are adaptations of platforms developed for broader nucleic acid targets, such as messenger RNA (mRNA) and genomic DNA (gDNA) [33]. As a result, they are not ideally suited to the unique characteristics of miRNAs, including their small size (~22 nucleotides), absence of poly-A tails and high sequence similarity among family members. Moreover, circulating miRNAs are present in very low concentrations and are surrounded by complex backgrounds composed of other nucleic acids and abundant macromolecules. According to the literature, miRNAs constitute only about 0.01% of the total RNA mass in plasma [33,34]. Their expression levels can vary widely—from just a few copies to hundreds of thousands per microliter (µL) of blood plasma [35], corresponding to concentrations in the femtomolar (fM) to picomolar (pM) range.

These molecular features complicate probe design, increase the risk of off-target hybridization, and reduce analytical specificity and accuracy. This highlights the need for advanced analytical technologies with a dynamic range of at least four orders of magnitude. Furthermore, reliance on reverse transcription and amplification introduces technical variability and potential bias, which undermines reproducibility and limits the clinical translation of miRNA-based diagnostics.

These persistent limitations have prompted the scientific community to pursue the development of new, dedicated technologies optimized specifically for miRNA detection. Emerging approaches aim to enable direct interrogation of miRNAs in their native form, without requiring preprocessing steps such as RNA extraction, reverse transcription or amplification. One key goal is to achieve absolute quantification through robust, multiplexed, extraction-free assays comparable to the immunoassays used in protein biomarker analysis. These innovations are essential not only for improving analytical performance but also

for accelerating the clinical translation of miRNA biomarkers for early disease detection, patient stratification and personalized therapeutic monitoring.

## 2. Conventional Analytical Methods

- 2.1. Quantitative and Digital PCR-Based Technologies


Among PCR-based methods, RT-qPCR is the most widely used and is considered the gold standard for detecting low levels of miRNA [36]. Originally developed for mRNA analysis, RT-qPCR offers high sensitivity for gene expression studies [37]. However, as stated above, applying it to miRNA analysis presents several challenges due to the unique molecular features of miRNAs: (1) Small size: The short length of miRNAs (typically 18–24 nucleotides) makes optimal primer and probe design difficult; (2) Structural overlap: Precursor miRNAs (pre-miRNAs) form stable hairpin structures, and mature miRNAs are derived from internal segments of these precursors, which complicates differentiation between the precursor and mature forms; (3) Lack of a poly-A tail: Unlike mRNAs, miRNAs lack poly-A tails, rendering them incompatible with the poly-T priming method employed in numerous traditional RT reactions; (4) Sequence similarity: Many miRNA family members (including isomiRs) differ by only one or a few nucleotides, which increases the risk of cross-reactivity and reduces specificity; (5) Low abundance: miRNAs are generally found in low concentrations in biofluids, which makes them highly susceptible to technical noise and contamination, particularly from gDNA. Therefore, efficient removal of gDNA before reverse transcription is critical for accurate results [32,38].

To enhance miRNA detection, RNA extraction kits that are specifically designed to enrich small RNAs (less than 200 nucleotides) are often used [39]. These help to exclude longer RNAs and improve specificity. However, such enrichment steps can also lead to the partial loss of target miRNAs, which could affect sensitivity if not carefully controlled.

RT-qPCR interrogates miRNAs by amplifying specific RNA sequences extracted from the biological matrix. The process begins with the extraction of total RNA, including miRNAs, from biological samples. The quality and purity of the extracted RNA significantly impact the accuracy and reliability of the subsequent analysis, so this step is critical. Following extraction, as shown in Figure 1, the RNA is reverse transcribed into cDNA [40]. This cDNA is then amplified in a solution containing DNA polymerase, nucleotides and primers that are complementary to the target DNA sequence. The amplification process involves three key steps: (1) Denaturation: The double-stranded DNA (dsDNA) is heated to separate it into single strands. (2) Annealing: As the solution cools, the primers bind to the target sequences on the separate DNA strands. (3) Extension: DNA polymerase adds nucleotides to the primers, creating complementary copies of the target DNA sequence. This cycle of denaturation, annealing and extension is repeated multiple times, exponentially increasing the quantity of the target DNA sequence [41]. Ideally, amplification does not occur in the absence of the target cDNA sequence, ensuring high specificity. Two commonly used detection chemistries in RT-qPCR are SYBR Green and TaqMan (Figure 1), each employing a distinct approach to detect amplified products [42]. SYBR Green is a fluorescent dye that binds to double-stranded DNA, emitting a signal proportional to the amount of dsDNA generated during amplification. In contrast, TaqMan uses a sequence-specific fluorescent probe, providing greater specificity and reducing the likelihood of non-specific amplification [42].

The combination of sensitivity and versatility has established RT-qPCR as a cornerstone technique for studying miRNA expression. Despite the challenges outlined above, it remains one of the most widely used and trusted methods for miRNA quantification and analysis.

Furthermore, digital PCR (dPCR) has emerged as a powerful PCR-based technique capable of absolute quantification, thereby addressing some of the limitations associated with traditional quantitative polymerase chain reaction (qPCR). In particular, ddPCR enables precise quantification by partitioning the sample into thousands of nanolitersized droplets, with each droplet functioning as an individual micro-reaction of defined volume [43]. After the process of PCR amplification, the fluorescence of each droplet is measured, and the droplets are classified as either positive (fluorescent) or negative (nonfluorescent) based on the presence or absence of the target nucleic acid. The number of positive droplets is then used to calculate the absolute concentration of the target using a Poisson distribution model [44]. These yields copy numbers per microliter of reaction along with associated confidence intervals [43].

A significant benefit of ddPCR is that it does not necessitate the use of reference genes or standard curves for quantification, thereby enhancing precision and eradicating variability introduced by amplification efficiency [45]. This is of particular benefit in the context of analysis of miRNAs, where the selection of a suitable reference gene can present significant challenges. In comparison to qPCR, ddPCR has been shown to possess several advantageous properties. These include an augmented level of sensitivity and accuracy in the detection of low-abundance targets, as well as an increased tolerance to polymerase chain reaction inhibitors. Consequently, ddPCR is regarded as a robust method for the analysis of complex or degraded samples [46].

![image 1](images/imageFile1.png)

- Figure 1. Methods of miRNA detection and quantification by RT-qPCR. (A) miRNA is first reverse transcribed to generate cDNA. This can be achieved using the following strategies: (i) Stem-loop priming: A stem-loop primer binds specifically to the target miRNA, initiating reverse transcription and providing high specificity [47]. (ii) The polyadenylation approach: In this method, a poly-A tail is added to the miRNA by an enzyme, enabling reverse transcription to proceed using an oligo(dT) primer [48,49]. (B) The resulting cDNA is then amplified by PCR and detected using one of two common


methods: SYBR Green (or similar dyes): These intercalating dyes bind to double-stranded DNA during amplification, generating a fluorescent signal proportional to the amount of DNA. TaqMan probes: These sequence-specific probes consist of a fluorophore (F) and a quencher (Q). When the probe hybridizes to the target during PCR, the polymerase cleaves the probe, separating the fluorophore from the quencher and producing a fluorescence signal directly correlated to target amplification.

- 2.2. miRNA Microarrays

Microarray technology was originally implemented to study differences in transcription by analyzing mRNA, providing a robust method for examining gene expression profiles [50]. However, advancements in the field have enabled its use for detecting and quantifying short RNA molecules, such as miRNAs [51].

Microarrays are a high-throughput method that can be used to detect and measure changes in the levels of a wide range of miRNAs in a single experiment [52,53]. This technique is based on nucleic acid hybridization, whereby target molecules bind to their complementary probes that are anchored to a solid surface (e.g., glass slides) via covalent crosslinking [54]. Fluorescent dyes such as Alexa Fluor 546/647 or Cy3 are commonly used to label miRNAs. Those fluorescently labeled miRNAs then hybridize with the complementary probes on the microarray, resulting in specific binding. Detecting fluorescence emission at defined positions on the glass slide enables the evaluation of relative quantities of miRNAs in the sample by analyzing the intensity of the fluorescence signal (Figure 2). Microarray platforms enable the simultaneous comparison of expression levels in two different samples using distinct fluorophores. Numerous variants of microarray technology have been developed over the years for miRNA detection, incorporating innovations in immobilization chemistry, probe design, sample labeling and chip signal-detection methods [55]. Various commercial microarray platforms are now available for miRNA detection and quantification. However, studies have shown significant differences in their performance, including biases in miRNA quantification and their ability to determine expression profiles [56,57]. Despite their invaluable role in preliminary screening, microarrays are lacking in terms of the sensitivity and specificity necessary for absolute quantification [58].

![image 2](images/imageFile2.png)

- Figure 2. Diagram of the miRNA microarray workflow. From left to right: Size selection is used to enrich the total RNA for short RNA, including miRNA. Labeling is typically performed by incorporating a fluorophore during the reverse transcription and cDNA generation steps. For simplicity, the figure shows only one probe for a type of miRNA; however, multiple identical probes are present in clusters on the microarray surface and are designed to bind to identical target miRNAs. A complete microarray contains thousands of clusters, with up to 20 repetitions of the same cluster distributed across different locations on the slide. Wash steps are omitted for clarity.


- 2.3. Next-Generation Sequencing for miRNA Profiling


NGS has profoundly advanced the field of miRNA analysis, providing a powerful tool for high-throughput, comprehensive profiling of small RNA populations. This technology

not only enables accurate quantification of known miRNAs but also supports the discovery of novel miRNA species.

The typical workflow for small RNA sequencing (sRNA-Seq) begins with the extraction of total RNA from biological samples (Figure 3). This RNA pool contains a variety of molecules, including miRNAs and other small non-coding RNAs. Following RNA extraction, a size selection step is performed to enrich the sample for small RNAs, generally in the range of 18 to 30 nucleotides. This selection is essential to exclude longer RNA molecules and to focus the sequencing effort on the small RNA fraction.

![image 3](images/imageFile3.png)

- Figure 3. Diagram of small RNA Sequencing workflow. From left to right: The process begins with the isolation of small RNAs, followed by the ligation of synthetic adapters to their 3′ and 5′ ends—a crucial step in enabling reverse transcription. The adapter-ligated RNAs are then converted into complementary DNA (cDNA) and amplified by polymerase chain reaction (PCR) to generate a sequencing-ready library. This method enables the detection of thousands of small RNA molecules, including both known and novel species. The workflow details may vary depending on the library preparation protocol and sequencing platform used. For simplicity, only three small RNA types are indicated (colored miRNAs).


Once the small RNAs are enriched, synthetic adapters are ligated to their 3′ and 5′ ends. This adapter ligation is a critical step because it prepares the RNA molecules for reverse transcription and subsequent amplification. After adapter ligation, the small RNAs are reverse transcribed to generate cDNA, which is then amplified by PCR to produce a sequencing-ready library (Figure 3). The amplified libraries are sequenced, and the resulting reads are mapped to reference genomes or curated miRNA databases, such as miRBase, to identify and quantify known miRNAs and to explore the presence of potentially novel [59].

Library preparation can be performed using commercially available kits, which vary based on the sequencing platform and the specific needs of the experiment. Some protocols use adapters with fixed sequences, as commonly found in kits like Illumina TruSeq, NEBNext, and CleanTag. Other protocols, such as those provided by the NEXTflex system, use adapters that contain four randomized nucleotides at their ligation ends [60]. These randomized or “4N” adapters are specifically designed to minimize ligation bias by reducing sequence dependency during adapter binding, thereby improving the uniformity and efficiency of miRNA capture.

One of the key technical challenges in sRNA-Seq is the introduction of ligation bias. The sequence and secondary structure of miRNAs can significantly affect how efficiently adapters are ligated to the RNA molecules. This can lead to preferential ligation of some miRNAs and under-representation of others, distorting the actual abundance of miRNAs in the sample. Ligation bias is particularly problematic in small RNA sequencing and is generally more pronounced than in standard mRNA sequencing protocols [61].

Once sequencing is complete, the data analysis presents its challenges. In sRNA-Seq experiments, particularly when analyzing biofluids, miRNA expression levels are often highly skewed. A small number of highly abundant miRNAs typically account for the

majority of sequencing reads, while most other miRNAs are present at low levels. This uneven distribution complicates data processing, especially in the normalization phase.

Different normalization methods have been proposed to address this challenge [62]. Some approaches adjust the data based on the total number of reads per sample, while others focus on aligning the distribution of expression levels across samples to improve comparability. Methods such as Reads Per Kilobase of transcript per Million mapped reads (RPKM) are widely used in mRNA sequencing, but they are less appropriate for miRNA sequencing because miRNAs are uniformly short and the RPKM adjustment is not meaningful for such molecules [63].

There is currently no universal consensus on the best normalization strategy for sRNASeq data. The choice of method can significantly influence the results of downstream analyses, including differential expression studies. Therefore, researchers must carefully select and justify their normalization approach based on the specific type of sample, experimental design and biological question being addressed.

Over the years, significant improvements in library preparation, adapter design and data normalization have helped to enhance the accuracy and reliability of miRNA profiling by NGS [64]. Nevertheless, careful attention to protocol selection, optimization steps and data interpretation remains essential to obtain high-quality and biologically meaningful results.

## 3. Aim and Methodology

Current approaches for analyzing circulating miRNAs typically involve RNA extraction and small RNA enrichment, steps that often result in partial miRNA loss and hinder the detection of low-abundance targets. Moreover, widely used methods such as RT-qPCR, ddPCR, microarrays and NGS rely on reverse transcription and amplification, which can introduce variability and compromise the accuracy of quantification [65].

These limitations highlight the need for direct detection strategies that bypass RNA extraction, reverse transcription and amplification to enable more robust and reproducible analysis of circulating miRNAs.

To address this need, we conducted a comprehensive literature review to identify technologies capable of detecting cancer-associated circulating miRNAs without requiring nucleic acid extraction or amplification. The search targeted original and review articles published up to 2024 in the PubMed and Scopus databases, using the following query:

((microRNA [Title/Abstract] OR miRNA [Title/Abstract]) AND amplification-free [Title/Abstract] OR PCR-free [Title/Abstract] AND detection [Title/Abstract]).

The search retrieved 459 manuscripts. After removing 344 manuscripts—comprising 75 duplicates and 269 published before 2020—115 manuscripts remained for screening. Of these, 87 were excluded based on the following criteria: 33 did not involve clinical samples, 37 were not focused on circulating miRNAs, and 17 were review articles. This left 28 manuscripts for full-text evaluation.

Among these, 19 were further excluded: 8 did not implement extraction-free methodologies, and 11 lacked essential technical or clinical parameters.

Ultimately, 9 manuscripts met the inclusion criteria. 4 of these described distinct approaches not discussed in detail here, including the following:

- 1. A fluorescent spherical nucleic acid (FSNA)-assisted microfluidic chip developed for miRNA detection [66].
- 2. A dual-aptamer modified gold nanoparticle (AuNP) system enabling universal miRNA detection via dye-fading readout [67].
- 3. A cascade CRISPR/Cas-based method for amplification-free miRNA sensing [68].
- 4. An ultra-fast, clickable, fluorescence-based detection strategy [69].


The remaining 5 emerging amplification-free methods for circulating miRNA detection in cancer, which form the core focus of this review, are described in detail in Section 4 and summarized in Table 1. These platforms represent diverse, state-of-the-art approaches with high sensitivity, proven clinical relevance and the capability to directly analyze biological fluids. Notably, one of them is the Dynamic Chemical Labeling (DCL) method, developed by the authors’ research group, which employs synthetic abasic Peptide Nucleic Acid (PNA) probes and chemically reactive nucleobases for direct, extraction-free, amplification-free detection of circulating miRNAs.

Table 1. Comparison of novel advanced amplification-free methods for miRNA detection in liquid biopsies.

Limit of Detection (LoD)

Type of Clinical Sample

Type of Detection

Target miRNA

Types of Cancer

Multiplexing Capability

POCT Suitability

Technology

Reference

Yes (can be converted to multiplexed by adding receptors)

Solid-state nanoplasmonic sensor

Pancreatic ductal adenocarcinoma

Partial (not fully POCTready)

miR-10b-5p miR-let7a-5p

UV-Vis

637.7 aM Plasma

[70]

Yes (up to ~10 targets with potential for more)

Electro-optical nanopore sensing

miR-141-3p miR-375-3p

Prostate cancer

5–8 fM Serum

Yes [71]

Fluorescence

Partial (multiplexing possible with multi-array platforms)

Singlet oxygen-based photoelectrochemical

Prostate cancer

Photoelectrochemical

miR-145-5p miR-141-3p

Partial [72]

3.5–8.3 pM Plasma

Tandem bead-based hybridization assay

Colorectal cancer

No (single target focused)

miR-128-23p

Partial [73]

2.2 pM Plasma

Fluorescence

miR-21-5p miR-122-5p miR-371a-3p miR-451a-5p

Dynamic chemical labeling (DCL)

Various cancers

Yes Yes [74]

pM range Serum

Fluorescence

## 4. Emerging Amplification-Free Methods for Circulating miRNADetection in Cancer

- 4.1. Solid-State Nanoplasmonic Sensor


Masterson et al. [70] used a solid-state nanoplasmonic sensor to detect circulating miRNAs, specifically miR-10b-5p and miR-let7a-5p, in plasma samples. This approach is both amplification-free and label-free. These miRNAs show great promise in the early detection of pancreatic ductal adenocarcinoma (PDAC) [75,76].

This sensor utilizes the unique localized surface plasmon resonance (LSPR) properties of gold triangular nanoprisms (Au TNPs) attached to the glass bottom of a 384-well plate [77,78]. Fabrication involves two key steps: (i) Nanoparticle immobilization: Chemically synthesized Au TNPs (42–55 nm edge length) are covalently attached to a mercaptomethoxysilane-modified glass substrate to ensure stable anchoring. (ii) Covalent functionalization: The Au TNPs are functionalized with thiolated single-stranded DNA (ssDNA) capture probes specific to the target miRNAs. Polyethylene glycol thiolate (PEG4) spacers are co-immobilized to minimize nonspecific binding and fouling (Figure 4).

![image 4](images/imageFile4.png)

- Figure 4. Solid-state nanoplasmonic sensor for detection and quantification of miRNAs. The platform is based on Au TNPs immobilized on the glass surface of a 384-well plate. These Au TNPs are functionalized with thiolated ssDNA capture probes, which specifically hybridize with target miRNAs in the plasma sample. The binding event forms an ssDNA/miRNA duplex at the sensor surface, inducing a LSPR spectral shift due to changes in the local dielectric environment. The PEG4 spacers are included to minimize nonspecific binding and fouling effects. Figure adapted with permission from [70].


The Au TNPs act as plasmonic nanoantennas, concentrating the local electromagnetic field at their surface and creating near-field “hot spots” upon LSPR excitation. The sensitivity of this system is highly dependent on the size, shape and local dielectric environment of the Au TNPs [79]. These near-field effects significantly enhance the sensor’s ability to detect minute refractive index changes upon miRNA hybridization.

The detection mechanism relies on the LSPR shift (∆λ_(LSPR)), which occurs when target miRNAs hybridize with the ssDNA probes, as also reported in [80]. Formation of a ssDNA/RNA duplex increases the local refractive index, resulting in a measurable red shift in the LSPR spectrum. This shift is quantified via UV–vis extinction spectroscopy [81]. This spectral shift is directly proportional to the concentration of the miRNAs, enabling accurate, label-free quantification.

In an earlier development involving the 96-well format [82], this solid-state nanoplasmonic sensor could detect miRNAs from as little as 10 µL of plasma with a LoD of 10−18 M (attomolar). To improve scalability, this work optimized the platform for a 384-well format, significantly enhancing sensitivity and throughput. In this configuration, the sensor achieved a LoD of 637.7 aM and a quantification limit of 45 fM.

The sensor exhibited exceptional diagnostic performance, effectively distinguishing PDAC from chronic pancreatitis (CP) and healthy controls, surpassing the accuracy of CA199, the current clinical biomarker standard [83,84]. Combined biomarker strategy using miR-10b-5p and miR-let7a-5p achieved approximately 91% sensitivity and 87% specificity in distinguishing early-stage (I/II) from late-stage (III/IV) PDAC [85], demonstrating strong potential for the early detection of cancer.

Despite these promising results, there are still challenges to overcome, including the need for overnight assay incubation, ensuring sensor stability, and conducting large-scale clinical validation. Future improvements should focus on achieving greater multiplexing capabilities to enable the simultaneous detection of multiple miRNAs, optimizing surface chemistry to reduce non-specific binding and integrating the technology into point-of-care diagnostic devices. Validation in larger and more diverse patient cohorts is essential to establish its clinical applicability. Nevertheless, this solid-state nanoplasmonic sensor is a significant advancement in non-invasive cancer diagnostics, offering a

highly sensitive, specific and scalable solution for early detection, disease monitoring and personalized medicine.

- 4.2. Electro-Optical Nanopore Sensing


In this study, Cai et al. [71] used an electro-optical nanopore sensing platform for the direct detection of miRNAs from serum samples in a label-free, amplification-free, multiplexed approach. This single-molecule technique combines size-encoded molecular probes, nanopore electrical sensing and fluorescence microscopy. This enables highly sensitive and specific quantification of miRNAs with minimal sample input.

The detection mechanism is based on dual-mode signal readout, combining electrical nanopore sensing to discriminate between molecular probes based on size, with fluorescence-based optical detection to recognize target miRNAs based on sequence. This approach enables multiple miRNAs to be detected simultaneously in a single sample, making it a powerful tool for high-throughput liquid biopsy applications.

As shown in Figure 5, the system uses custom-designed molecular probes, each of which consists of a DNA carrier encoded molecular probe and a molecular beacon (MB). The MB is a stem-loop DNA structure labeled with a fluorophore and a quencher. It is designed to remain closed in the absence of the target miRNA, which prevents fluorescence emission. Upon hybridization with its complementary miRNA, the MB unfolds, separating the fluorophore from the quencher and restoring fluorescence for optical detection.

![image 5](images/imageFile5.png)

- Figure 5. Single-molecule multiplexed sensing using an electro-optical nanopore platform: (i) Patient serum is incubated with a length-encoded molecular probe consisting of a DNA carrier and a molecular beacon (MB). (ii) Electro-optical sensing is performed. (iii) MiRNA expression levels are determined. Figure adapted with permission from [71]. Figure 1B of [71] shows a schematic representation of the preparation of size-coded DNA probes and their binding to respective miRNA targets.


At the same time, the DNA carrier acts as a molecular barcode, enabling size differentiation using nanopores. Each probe–miRNA complex is driven through a solid-state nanopore by electrophoresis, generating distinct current blockade signals that depend on the length of the DNA carrier. Since each miRNA-specific probe is attached to a carrier of a unique length, nanopore analysis can distinguish between multiple miRNAs based on their electrical signatures. Integrating electrical and optical readouts enhances specificity,

enabling the effective discrimination of single-base mismatches and improving the accuracy of miRNA profiling. Figure 5 shows the electro-optical nanopore sensing workflow.

This technology was validated using prostate cancer (PCa)-associated miRNAs, including miR-141-3p and miR-375-3p, which are significantly upregulated in PCa patients [86,87]. The assay achieved an ultra-low LoD of 5–8 femtomolar (fM), surpassing the sensitivity of RT-qPCR and fluorescence-based bulk assays. Moreover, a three-miRNA panel (miR-141-3p, miR-375-3p, and let-7b) enabled classification of localized versus metastatic PCa, demonstrating its potential for disease staging and treatment monitoring [88,89]. The system exhibited an accuracy of 98.8% in differentiating PCa patients from controls, underscoring its clinical relevance.

A key advantage of this nanopore sensing platform is its minimal sample requirement—

only 0.1 µL of unprocessed serum—making it a minimally invasive and efficient tool for clinical diagnostics (Figure 5). Unlike PCR-based methods, which are prone to variability due to amplification bias, this amplification-free and extraction-free approach ensures more reliable quantification of miRNAs in biofluids. Additionally, the ability to perform multiplexed detection using size-encoded DNA carriers significantly enhances the system’s throughput and scalability, making it suitable for high-throughput screening applications [71].

Despite its advantages, several challenges remain. Further clinical validation across larger and more diverse patient cohorts is essential to confirm the platform’s diagnostic utility. Additionally, expanding multiplexing capacity to detect a broader range of cancerassociated miRNAs and optimizing the platform for point-of-care applications would enhance its clinical feasibility. Future developments should focus on automating sample processing, increasing detection speed, and integrating the system into hospital workflows to facilitate real-world implementation.

- 4.3. Singlet Oxygen-Based Photoelectrochemical


The singlet oxygen (1O2)-based photoelectrochemical (PEC) sensor used by Shanmugam et al. [72] represents a promising advancement in the detection of circulating miRNAs, providing a label-free, amplification-free, and highly sensitive strategy for early cancer diagnosis [90]. Unlike conventional methods that require complex reagents, enzymatic reactions, or nucleic acid amplification, this PEC system uniquely uses air as the oxygen source, significantly reducing costs and simplifying sensor fabrication and operation [91].

As shown in Figure 6A, the detection relies on a sandwich hybridization assay in which the target miRNA is specifically captured between two complementary DNA probes: a biotinylated capture probe immobilized on streptavidin-coated magnetic beads and a detection probe labeled with Chlorin e6 (ChlE6), a photosensitizer [92]. After hybridization, the magnetic beads are drawn to the sensor surface using an external magnetic field, ensuring the proximity of the probe-miRNA complex to the electrode for efficient signal generation [92,93].

When the sensor is exposed to light, the photosensitizer produces singlet oxygen

(1O2), which rapidly reacts with the redox mediator hydroquinone (HQ), oxidizing it to benzoquinone (BQ). The BQ is then electrochemically reduced at the electrode back to HQ, establishing a redox cycling loop that greatly amplifies the PEC signal (Figure 6B).

Optimization of the system involved fine-tuning the electrode potential to −0.2 V vs. an Ag quasi-reference electrode, adjusting the number of magnetic beads to 100 µg per assay and the HQ concentration to 1 mM. This resulted in a LoD of 0.62 pM for miR141-3p in buffer. The method demonstrated high specificity, low background signal and robust performance in untreated plasma samples, highlighting its potential for clinical

use. Its simplicity, cost-effectiveness and rapid response time make it ideal for point-ofcare diagnostics. The clinical applicability of this PEC platform was further validated by analyzing circulating miRNAs in plasma samples from prostate cancer patients [94]. Following assaying of buffer samples, detection limits of 3.5 pM for miR-145-5p and 8.3 pM for miR-141-3p were established in pooled plasma spiked with target miRNAs at varying concentrations. Finally, when the platform was used with plasma samples from eight prostate cancer patients, significantly higher photocurrent responses (8–18 nA) were detected compared to healthy controls (4.5–5.5 nA). This is consistent with the elevated levels of miR-145-5p and miR-141-3p observed in prostate cancer [95,96]. Notably, miR-1455p showed more consistent elevation across samples than miR-141-3p. This method enables sensitive and specific miRNA detection directly in untreated plasma, eliminating the need for pre-amplification and simplifying data interpretation. This makes it particularly attractive for point-of-care applications in clinical biomarker analysis [97].

![image 6](images/imageFile6.png)

- Figure 6. (A) Schematic of the sandwich hybridization assay for miRNA detection. The target miRNA is captured between a biotinylated capture probe immobilized on streptavidin-coated magnetic beads and a detection probe labeled with the photosensitizer Chlorin e6 (ChlE6). (B) Principle of the (1O2)-based photoelectrochemical (PEC) detection. Upon light exposure, the photosensitizer generates singlet oxygen (1O2), which oxidizes hydroquinone (HQ) to benzoquinone (BQ). Figure adapted with permission from [72].


- 4.4. Tandem Bead-Based Hybridization Assay


The tandem bead-based hybridization assay used by Slott et al. [73] offers a novel, amplification-free strategy for both detecting miRNAs and performing single-nucleotide polymorphism (SNP) analysis directly in miRNA sequences. This dual capability enables sensitive and specific quantification of circulating miRNAs while simultaneously distinguishing single-base mutations, which are increasingly recognized as important biomarkers in diseases such as colitis and colorectal cancer [98,99].

The detection system is based on a two-step hybridization assay that uses locked nucleic acid (LNA)-enriched probes to maximize binding affinity and SNP discrimination [100]. The assay workflow is summarized in Figure 7. Briefly, in the first step, biotinylated, mutation-specific capture probes (C1-C14) are immobilized on streptavidin-coated magnetic beads, selectively binding either wild-type or mutant miRNA sequences. In the second step, a linker probe—designed using the Peyrard–Bishop mesoscopic model—binds

to the 5′ end of the miRNA and incorporates a calf thymus DNA (CTD) booster sequence to enhance the fluorescence signal.

![image 7](images/imageFile7.png)

- Figure 7. Procedure for the bead-based miRNA detection assay. Step 1: (i) Streptavidin-coated magnetic beads were incubated with biotinylated, mutation-specific capture probes (C1–C14) derived from Table 1 [69]; (ii) beads were washed; (iii) incubated with samples containing miR-128-2-3p and its variants; and (iv) washed again. Step 2: (v–vi) beads were incubated with CTD, linker, and buffer; (vii–viii) washed and denatured by heating at 92 ◦C for 10 min; (ix–x) the supernatant was transferred to QuantiFluor (QF) solution, incubated at 92 ◦C for 5 min, and then cooled to 23 ◦C over 60 min. Finally, the concentration of miR-128-2-3p and its variants was quantified by fluorescence detection. Figure adapted with permission from [73].


The detection is achieved using QuantiFluor dye, which was selected after systematic evaluation of five fluorophores (EvaGreen, AccuClear, QuantiFluor, Acridine Orange and Thiazole Orange) for photostability and emission performance [101]. QuantiFluor provided the most stable signal with minimal photobleaching (2.5% over seven cycles) and enabled the assay to achieve a LoD of 2.2 pM.

The assay was validated using plasma samples from 20 colorectal cancer patients, 24 patients with colitis, and 20 healthy controls. It successfully identified distinct SNP profiles in miR-128-2-3p that correlated with disease status [98,99]. Notably, mutations at the 3′-2 position (U > G and U > C) were found to be significantly elevated in diseased samples, suggesting their potential as biomarkers for colorectal cancer and colitis.

This technology offers several key advantages: (a) It enables simultaneous miRNA detection and SNP analysis in a single assay. (b) It is completely enzyme-free and amplification-free, reducing assay complexity, cost, and technical variability. (c) It provides high specificity and discrimination for SNPs, with melting temperature differences (∆Tm) ranging from 6.6 ◦C to 25.5 ◦C between perfectly matched and mismatched sequences. (d) The bead-based format supports multiplexing and high-throughput screening, making it suitable for large-scale clinical applications. (e) Compared to traditional enzymatic assays, it significantly simplifies the workflow while delivering robust sensitivity and reproducibility.

Overall, this tandem hybridization assay is a powerful and cost-effective platform for directly detecting miRNAs and their SNP variants from plasma. It has strong potential for clinical translation in the areas of early cancer diagnosis and personalized medicine.

However, further refinements are required to improve its multiplexing capabilities, automate sample processing and validate its performance across different patient groups. Nevertheless, the assay remains a promising amplification-free approach for non-invasive cancer diagnostics, providing a rapid, sensitive and scalable tool for miRNA mutation profiling in clinical settings.

- 4.5. Dynamic Chemical Labeling


Dynamic Chemical Labeling (DCL) is a chemical-based nucleic acid testing (NAT) strategy developed to directly detect and quantify circulating miRNAs without the need for extraction, reverse transcription or enzymatic amplification [102]. Unlike conventional techniques, DCL relies on a sequence-selective chemical labeling process that provides exceptional specificity, single-nucleotide discrimination and direct detection in complex biological fluids [103].

As shown in Figure 8, the DCL detection process involves two highly controlled molecular steps. First, an abasic PNA probe selectively hybridizes to the complementary miRNA sequence, forming a chemical pocket at the abasic site. Once hybridization is complete, a SMART base with a specific labeling tag, such as biotin, is covalently incorporated into the abasic site. This creates a chemical lock that tags the abasic PNA probe-miRNA duplex for detection. The labeled duplex is then recognized by a reporter molecule—typically a streptavidin-conjugated detection system—enabling signal generation across a variety of platforms [103–108]. A key feature of DCL is its dual molecular requirement for signal generation: (a) Perfect hybridization between the miRNA and the abasic PNA probe as well as (b) Selective molecular recognition and covalent incorporation of the SMART base following Watson–Crick base-pairing rules. If either event fails, the SMART base is not incorporated, resulting in 100% specificity [107,109].

![image 8](images/imageFile8.png)

- Figure 8. Schematic representation of the DCL process. (A) The abasic PNA probe hybridizes with the target miRNA to form a specific chemical pocket. Through a selective covalent reaction, a SMART base carrying a detectable tag is incorporated into this pocket, forming a stable chemical lock. (B) This tag is subsequently recognized by a reporter molecule, enabling signal generation and (C) Read-out. In most implementations, abasic PNA probes are immobilized on a solid surface, depending on the platform used in conjunction with DCL technology. Common immobilization formats include magnetic beads, sensor chips, or membranes integrated into detection devices. This solid-phase setup enhances hybridization stability, facilitates washing steps and supports high-throughput or multiplexed detection.


This dual specificity drastically reduces false positives and allows single-nucleotide specificity, a rare feature in amplification-free miRNA detection systems [104,110,111]. The labeled abasic PNA probe–miRNA duplexes can be detected using various optical and bead-based platforms, making DCL highly versatile [112–114].

Importantly, the sensitivity of DCL is not intrinsic to the chemistry itself but is rather determined by the detection platform with which it is integrated. DCL is a versatile technology

that can be successfully integrated with various platforms, including fluorescence-based and chemiluminescence detection systems, as well as silicon photomultiplier (SiPM)-based readers and time-gated luminescence imaging systems [103,105,108,115,116]. This flexibility allows the sensitivity, throughput and multiplexing capability of the system to be adjusted according to the specific platform, application and target RNA or DNA [110,114,117–119]. It also enables the simultaneous detection of miRNAs and proteins associated with liquid biopsy [115,120].

The group successfully applied DCL technology to analyze circulating hsa-miR-21-5p (miR-21) in patients with non-small cell lung cancer (NSCLC) [121]. To achieve this, DCL was combined with a novel SiPM-based optical reader, resulting in the development of the innovative ODG platform [122]. This method utilized biotinylated SMART bases and abasic PNA probes specifically designed to capture miR-21 sequences, enabling highly selective, sequence-specific miRNA detection. The captured and labeled miRNAs were detected through a chemiluminescent reaction, in which streptavidin-conjugated horseradish peroxidase (HRP) catalyzed the luminol oxidation, generating a light signal. This signal was subsequently measured and analyzed using the SiPM-based reader. The platform achieved a LoD of 4.7 pmol/L and successfully identified miR-21 in plasma samples from NSCLC patients. Although this approach provided accurate, amplification-free quantification of miRNAs, it faced challenges related to signal stability and background noise, which are inherent limitations of chemiluminescence-based detection systems. miR-21 was also interrogated using DCL technology merged with flow cytometry in a PCR-free manner as reported in [123].

In 2024, a multiplexed miRNA detection platform was developed that integrated DCL with time-gated photoluminescence imaging (TG-PLIM) to enhance signal and significantly reduce background interference. Similar to the previously developed ODG platform, this system employed abasic PNA probes and SMART bases. However, instead of using chemiluminescence detection, the platform was adapted to a fluorescence-based detection system that utilized fluorophores with long luminescence lifetimes, specifically lanthanidebased luminescent probes such as Eu(III) cryptates conjugated to the SMART base [74].

In this novel application of DCL, the system was designed to simultaneously detect three clinically relevant miRNAs involved in cancer diagnostics: (a) miR-122-5p (miR-122), increasingly recognized as a potential biomarker for cancer diagnosis and prognosis due to its dysregulation in various cancers [124], (b) miR-371a-3p (miR-371), a well-validated biomarker for germ cell tumors, commonly used in both clinical and research settings [125], and (c) miR-451a-5p (miR-451), an erythroid cell-specific miRNA with emerging relevance as a biomarker in cancer diagnostics and therapeutic response monitoring [126].

In this study, magnetic beads functionalized with specific abasic PNA capture probes (capturing beads) were combined with SMART bases labeled with DTBTA-Eu cryptates and conventional fluorophores such as FAM and Cy5, enabling the simultaneous detection of three miRNA targets within the same assay (Figure 9A). A key advantage of using DTBTA-Eu cryptates is their long luminescence lifetime of 1.09 ms, which allows errorfree multiplexing by separating signal detection into distinct time windows, effectively preventing photon crosstalk [127]. Following bead incubation, the DCL reaction, and time-resolved imaging, spectral and lifetime filtering were applied to differentiate each miRNA based on its distinct emission properties (Figure 9B,C). TG-PL intensity images of individual beads demonstrated a concentration-dependent detection of miRNAs, with a linear correlation between TG-PL emission intensity and miRNAs concentrations.

![image 9](images/imageFile9.png)

- Figure 9. (A) Scheme of the multiplexed analysis of miR-371, miR-451 and miR-122. It uses abasic PNA probes in magnetic beads and three different SMART bases tagged with FMA, Eu and Cy5. The different spectra and analysis time windows are shown in panels (B,C).


The system achieved a LoD of 1.4 nM for miR-122, validating its sensitivity for detecting clinically relevant miRNA levels in human serum. The combination of spectral and temporal separation enabled the simultaneous detection of multiple miRNAs in a single assay, each assigned a unique fluorescent label. The labeled beads were further analyzed using machine learning algorithms, which classified and quantified the detected miRNAs with high accuracy and minimal misclassification.

This study successfully demonstrated the proof of concept for a multiplexed miRNA detection platform using DCL and TG-PLIM. The platform exhibited high specificity and the ability to simultaneously detect three cancer-related miRNAs. While the achieved LoD of 1.4 nM confirms the platform’s clinical potential, further improvements are essential to reach the femtomolar to picomolar range typical of circulating miRNAs. The group is currently working to enhance sensitivity to unlock the full diagnostic potential of the platform.

## 5. Conclusions and Future Direction

Conventional technologies such as qRT-PCR, microarrays and NGS are widely used for miRNA analysis. However, their application to the detection of circulating miRNAs in clinical settings presents several challenges. These techniques often require complex and labour-intensive workflows involving RNA extraction, enzymatic amplification and labeling steps, all of which introduce potential sources of bias, increase contamination risks, extend turnaround times and drive up costs. Their limited scalability and technical demands also hinder their integration into routine diagnostics or point-of-care applications.

In response to these limitations, amplification-free detection platforms have emerged as promising alternatives. The technologies reviewed in this article—including solid-state nanoplasmonic sensors, electro-optical nanopore sensing, singlet oxygen-based photoelectrochemical detection, tandem bead-based hybridization assays and DCL—enable the direct detection and quantification of circulating miRNAs in biological fluids without the need for RNA extraction, reverse transcription or enzymatic amplification. This represents a significant advancement in liquid biopsy diagnostics, offering enhanced specificity, reduced variability and simplified sample processing. Many of these methods are compatible with multiplexed and bead-based formats, making them adaptable to diverse clinical workflows and potentially suitable for decentralized testing environments.

Crucially, these platforms offer multiple advantages for clinical translation. By eliminating the need for multiple processing steps, they streamline workflows, shorten assay times and reduce operational complexity. Several of the reviewed technologies, including DCL and nanopore-based methods, can be adapted for partial or full automation using closed-cartridge or bead-based systems, enabling standardization and minimizing user input. Moreover, reduced reliance on costly enzymes and reagents lowers the per-test cost, an important consideration for widespread screening and healthcare adoption.

Each of the technologies discussed offers distinct features, strengths and limitations. Their potential for multiplexing, label-free detection and compatibility with various readout platforms support a range of use cases across different stages of cancer diagnostics. Some platforms focus on single-analyte precision, while others are designed for high-throughput or point-of-care testing. Collectively, they reflect a growing shift toward streamlined, clinically adaptable solutions for miRNA-based diagnostics.

The clinical value of miRNA biomarkers was further underscored by the 2024 Nobel Prize in Medicine, which recognized the transformative potential of circulating nucleic acids in non-invasive diagnostics. miRNAs are now well established as key regulators of cancerrelated pathways, with distinct expression profiles across tumor types, disease stages and therapeutic responses. Technologies capable of reliably detecting these biomarkers in their native form—without reverse transcription or amplification—are essential for real-time, non-invasive diagnosis, prognosis and patient stratification.

Beyond miRNAs, amplification-free detection technologies also hold promise for broader applications, including the analysis of other RNA species such as circular RNAs (circRNAs) and long non-coding RNAs (lncRNAs), without the need for preprocessing steps [128,129]. Ongoing research within our group is actively exploring these extended capabilities.

Looking forward, the continued refinement of user-friendly, scalable and highly specific amplification-free platforms will be critical to advancing the clinical adoption of liquid biopsy diagnostics. Technologies that combine rapid turnaround, minimal sample input and accurate detection of low-abundance targets in complex matrices are poised to shape the future of molecular diagnostics. Ultimately, these platforms could redefine standard practice in cancer diagnostics, enabling earlier disease detection, improved monitoring and more personalized therapeutic strategies.

Author Contributions: Conceptualization, methodology, and writing—original draft preparation were carried out by B.S. and S.P. Writing—review and editing was performed by B.S. and S.P., with supervision and funding acquisition provided by J.J.D.M. and S.P. All authors have read and agreed to the published version of the manuscript.

Funding: This review was prepared within the framework of ColoMARK, funded by the European Union’s Horizon Europe research and innovation programme under the Marie Skłodowska-Curie Doctoral Network Grant Agreement No. 101072448 (DOI: 10.3030/101072448), as part of the main programme HORIZON.1.2—Marie Skłodowska-Curie Actions (MSCA), Topic HORIZON-MSCA2021-DN-01-01—MSCA Doctoral Networks 2021, Call HORIZON-MSCA-2021-DN-01.

Conflicts of Interest: S.P. and B.S. are employees of Destina Genomica S.L. J.J.D.M. serves as a board member and director of Destina Genomics Ltd., the parent company that owns Destina Genomica S.L. Additionally, S.P. and J.J.D.M. are shareholders in Destina Genomics Ltd. These affiliations do not influence the objectivity of the research and do not affect our adherence to Cancers journal policies on data and material sharing, as outlined in the author guidelines. The funders had no role in the design of the study; in the collection, analyses, or interpretation of data; in the writing of the manuscript; or in the decision to publish the results.

## References

- 1. Siegel, R.L.; Giaquinto, A.N.; Jemal, A. Cancer statistics. CA Cancer J. Clin. 2024, 74, 12–49. [PubMed]
- 2. Dizon, D.S.; Kamal, A.H. Cancer statistics 2024: All hands on deck. CA Cancer J. Clin. 2024, 74, 8–9. [CrossRef]
- 3. American Cancer Society. American Cancer Society Annual Cancer Statistics 2024 Shows Drop in Cancer Mortality but Increasing Incidence for Six of the Top Ten Cancers. Del. J. Public Health 2024, 10, 6–7.
- 4. Miller, K.D.; Nogueira, L.; Devasia, T.; Mariotto, A.B.; Yabroff, K.R.; Jemal, A.; Kramer, J.; Siegel, R.L. Cancer treatment and survivorship statistics, 2022. CA Cancer J. Clin. 2022, 72, 409–436. [CrossRef]


- 5. Armakolas, A.; Kotsari, M.; Koskinas, J. Liquid Biopsies, Novel Approaches and Future Directions. Cancers 2023, 15, 1579. [CrossRef] [PubMed]
- 6. Ma, L.; Guo, H.; Zhao, Y.; Liu, Z.; Wang, C.; Bu, J.; Sun, T.; Wei, J. Liquid biopsy in cancer current: Status, challenges and prospects. Signal Transduct. Target. Ther. 2024, 9, 336. [CrossRef] [PubMed]
- 7. Takizawa, S.; Matsuzaki, J.; Ochiya, T. Circulating microRNAs: Challenges with their use as liquid biopsy biomarkers. Cancer Biomark. 2022, 35, 1–9. [CrossRef]
- 8. Tivey, A.; Church, M.; Rothwell, D.; Dive, C.; Cook, N. Circulating tumour DNA—looking beyond the blood. Nat. Rev. Clin. Oncol. 2022, 19, 600–612. [CrossRef]
- 9. Sallam, R.M. Proteomics in cancer biomarkers discovery: Challenges and applications. Dis. Markers 2015, 2015, 321370. [CrossRef]
- 10. Shi, J.; Zhang, Y.; Fan, Y.; Liu, Y.; Yang, M. Recent advances in droplet-based microfluidics in liquid biopsy for cancer diagnosis. Droplet 2024, 3, e92. [CrossRef]
- 11. Primorac, D.; Ciechanover, A. Personalized medicine: The future is here. Croat. Med. J. 2024, 65, 169–173. [CrossRef]
- 12. Bartel, D.P. Review MicroRNAs: Genomics, Biogenesis, Mechanism, and Function. Cell 2004, 116, 281–297. [CrossRef]
- 13. Li, Z.; Xu, R.; Li, N. MicroRNAs from plants to animals, do they define a new messenger for communication? Nutr. Metab. (Lond.) 2018, 15, 68. [CrossRef]
- 14. Ratti, M.; Lampis, A.; Ghidini, M.; Salati, M.; Mirchev, M.B.; Valeri, N. Micro RNAs (miRNAs) and Long Non-Coding RNAs (lncRNAs) as New Tools for Cancer Therapy: First Steps from Bench to Bedside. Target. Oncol. 2020, 15, 261–278. [CrossRef]
- 15. Ha, T.Y. MicroRNAs in Human Diseases: From Cancer to Cardiovascular Disease. Immune Netw. 2011, 11, 135. [CrossRef] [PubMed]
- 16. Metcalf, G.A.D. MicroRNAs: Circulating biomarkers for the early detection of imperceptible cancers via biosensor and machinelearning advances. Oncogene 2024, 43, 2135–2142. [CrossRef] [PubMed]
- 17. Burki, T. 2024 Nobel Prize awarded for work on microRNAs. Lancet 2024, 404, 1507–1508. [CrossRef] [PubMed]
- 18. Felekkis, K.; Papaneophytou, C. The Circulating Biomarkers League: Combining miRNAs with Cell-Free DNAs and Proteins. Int. J. Mol. Sci. 2024, 25, 3403. [CrossRef]
- 19. Chakrabortty, A.; Patton, D.J.; Smith, B.F.; Agarwal, P. miRNAs: Potential as Biomarkers and Therapeutic Targets for Cancer. Genes 2023, 14, 1375. [CrossRef]
- 20. Cicatiello, A.G.; Musone, M.; Imperatore, S.; Giulioni, C.; La Rocca, R.; Cafarelli, A.; Del Giudice, F.; Dentice, M.; Crocetto, F. Circulating miRNAs in genitourinary cancer: Pioneering advances in early detection and diagnosis. J. Liq. Biopsy 2025, 8, 100296. [CrossRef]
- 21. Berger, F.; Reiser, M.F. Micro-RNAs as potential new molecular biomarkers in oncology: Have they reached relevance for the clinical imaging sciences? Theranostics 2013, 3, 943–952. [CrossRef]
- 22. Condrat, C.E.; Thompson, D.C.; Barbu, M.G.; Bugnar, O.L.; Boboc, A.; Cretoiu, D.; Suciu, N.; Cretoiu, S.M.; Voinea, S.C. MiRNAs as biomarkers in disease: Latest findings regarding their role in diagnosis and prognosis. Cells 2020, 9, 276. [CrossRef] [PubMed]
- 23. Lan, H.; Lu, H.; Wang, X.; Jin, H. MicroRNAs as potential biomarkers in cancer: Opportunities and challenges. BioMed Res. Int. 2015, 2015, 125094. [CrossRef] [PubMed]
- 24. Das, S.; Dey, M.K.; Devireddy, R.; Gartia, M.R. Biomarkers in Cancer Detection, Diagnosis, and Prognosis. Sensors 2024, 24, 37. [CrossRef] [PubMed]
- 25. Cui, C.; Cui, Q. The relationship of human tissue microRNAs with those from body fluids. Sci. Rep. 2020, 10, 5644. [CrossRef]
- 26. Norouzi, S.; Soltani, S.; Alipour, E. Recent advancements in biosensor designs toward the detection of intestine cancer miRNA biomarkers. Int. J. Biol. Macromol. 2023, 245, 125509. [CrossRef]
- 27. Quang, M.T.; Nguyen, M.N. The potential of microRNAs in cancer diagnostic and therapeutic strategies: A narrative review. J. Basic Appl. Zool. 2024, 85, 7. [CrossRef]
- 28. Mou, G.; Wang, K.; Xu, D.; Zhou, G. Evaluation of three RT-qPCR-based miRNA detection methods using seven rice miRNAs. Biosci. Biotechnol. Biochem. 2013, 77, 1349–1353. [CrossRef]
- 29. Falak, S.; O’Sullivan, D.M.; Cleveland, M.H.; Cowen, S.; Busby, E.J.; Devonshire, A.S.; Valiente, E.; Jones, G.M.; Kammel, M.; Milavec, M.; et al. The Application of Digital PCR as a Reference Measurement Procedure to Support the Accuracy of Quality Assurance for Infectious Disease Molecular Diagnostic Testing. Clin. Chem. 2025, 71, 378–386. [CrossRef]
- 30. Strutt, R.; Xiong, B.; Abegg, V.F.; Dittrich, P.S. Open microfluidics: Droplet microarrays as next generation multiwell plates for high throughput screening. Lab a Chip 2024, 24, 1064–1075. [CrossRef]
- 31. Satam, H.; Joshi, K.; Mangrolia, U.; Waghoo, S.; Zaidi, G.; Rawool, S.; Thakare, R.P.; Banday, S.; Mishra, A.K.; Das, G.; et al. Next-Generation Sequencing Technology: Current Trends and Advancements. Biology 2023, 12, 977. [CrossRef]
- 32. Precazzini, F.; Detassis, S.; Imperatori, A.S.; Denti, M.A.; Campomenosi, P. Measurements Methods for the Development of MicroRNA-Based Tests for Cancer Diagnosis. Int. J. Mol. Sci. 2021, 22, 1176. [CrossRef] [PubMed]
- 33. Hong, M.; Tao, S.; Zhang, L.; Diao, L.T.; Huang, X.; Huang, S.; Xie, S.J.; Xiao, Z.D.; Zhang, H. RNA sequencing: New technologies and applications in cancer research. J. Hematol. Oncol. 2020, 13, 166. [CrossRef] [PubMed]


- 34. Zhang, L.; Hou, D.; Chen, X.; Li, D.; Zhu, L.; Zhang, Y.; Li, J.; Bian, Z.; Liang, X.; Cai, X.; et al. Exogenous plant MIR168a specifically targets mammalian LDLRAP1: Evidence of cross-kingdom regulation by microRNA. Cell Res. 2012, 22, 107–126. [CrossRef]
- 35. Gines, G.; Menezes, R.; Xiao, W.; Rondelez, Y.; Taly, V. Emerging isothermal amplification technologies for microRNA biosensing: Applications to liquid biopsies. Mol. Asp. Med. 2020, 72, 100832. [CrossRef]
- 36. Redshaw, N.; Wilkes, T.; Whale, A.; Cowen, S.; Huggett, J.; Foy, C.A. A comparison of miRNA isolation and RT-qPCR technologies and their effects on quantification accuracy and repeatability. Biotechniques 2013, 54, 155–164. [CrossRef]
- 37. Kuang, J.; Yan, X.; Genders, A.J.; Granata, C.; Bishop, D.J. An overview of technical considerations when using quantitative real-time PCR analysis of gene expression in human exercise research. PLoS ONE 2018, 13, e0196438. [CrossRef] [PubMed]
- 38. Sanders, R.; Mason, D.J.; Foy, C.A.; Huggett, J.F. Considerations for accurate gene expression measurement by reverse transcription quantitative PCR when analysing clinical samples. Anal. Bioanal. Chem. 2014, 406, 6471–6483. [CrossRef]
- 39. Choi, C.; Yoon, S.; Moon, H.; Bae, Y.U.; Kim, C.B.; Diskul-Na-Ayudthaya, P.; Ngu, T.V.; Munir, J.; Han, J.; Park, S.B.; et al. mirRICH, a simple method to enrich the small RNA fraction from over-dried RNA pellets. RNA Biol. 2018, 15, 763–772. [CrossRef]
- 40. Ginzinger, D.G. Gene quantification using real-time quantitative PCR: An emerging technology hits the mainstream. Exp. Hematol. 2002, 30, 503–512. [CrossRef]
- 41. Chen, C.; Tan, R.; Wong, L.; Fekete, R.; Halsey, J. Quantitation of MicroRNAs by Real-Time RT-qPCR. In PCR Protocols; Humana Press: Totowa, NJ, USA, 2011; pp. 43–55.
- 42. Tajadini, M.; Panjehpour, M.; Javanmard, S. Comparison of SYBR Green and TaqMan methods in quantitative real-time polymerase chain reaction analysis of four adenosine receptor subtypes. Adv. Biomed. Res. 2014, 3, 85. [CrossRef] [PubMed]
- 43. Pinheiro, L.B.; Coleman, V.A.; Hindson, C.M.; Herrmann, J.; Hindson, B.J.; Bhat, S.; Emslie, K.R. Evaluation of a droplet digital polymerase chain reaction format for DNA copy number quantification. Anal. Chem. 2012, 84, 1003–1011. [CrossRef] [PubMed]
- 44. Quan, P.L.; Sauzade, M.; Brouzes, E. DPCR: A technology review. Sensors 2018, 18, 1271. [CrossRef] [PubMed]
- 45. Binderup, H.G.; Madsen, J.S.; Helweg Heegaard, N.H.; Houlind, K.; Andersen, R.F.; Brasen, C.L. Quantification of microRNA levels in plasma—Impact of preanalytical and analytical conditions. PLoS ONE 2018, 13, e0201069. [CrossRef]
- 46. Racˇki, N.; Dreo, T.; Gutierrez-Aguirre, I.; Blejec, A.; Ravnikar, M. Reverse transcriptase droplet digital PCR shows high resilience to PCR inhibitors from plant, soil and water samples. Plant Methods 2014, 10, 42. [CrossRef]
- 47. Chen, C.; Ridzon, D.A.; Broomer, A.J.; Zhou, Z.; Lee, D.H.; Nguyen, J.T.; Barbisin, M.; Xu, N.L.; Mahuvakar, V.R.; Andersen, M.R.; et al. Real-time quantification of microRNAs by stem-loop RT-PCR. Nucleic Acids Res. 2005, 33, e179. [CrossRef]
- 48. Beaulieu, Y.B.; Kleinman, C.L.; Landry-Voyer, A.M.; Majewski, J.; Bachand, F. Polyadenylation-Dependent Control of Long Noncoding RNA Expression by the Poly(A)-Binding Protein Nuclear 1. PLoS Genet. 2012, 8, e1003078. [CrossRef]
- 49. Nejad, C.; Pépin, G.; Behlke, M.A.; Gantier, M.P. Modified polyadenylation-based RT-qPCR increases selectivity of amplification of 3’-MicroRNA isoforms. Front. Genet. 2018, 9, 11. [CrossRef]
- 50. Rao, M.S.; Van Vleet, T.R.; Ciurlionis, R.; Buck, W.R.; Mittelstadt, S.W.; Blomme, E.A.G.; Liguori, M.J. Comparison of RNA-Seq and microarray gene expression platforms for the toxicogenomic evaluation of liver from short-term rat toxicity studies. Front. Genet. 2019, 9, 636. [CrossRef]
- 51. Love, C.; Dave, S. MicroRNA Expression Profiling Using Microarrays. In Hematological Malignancies Methods and Protocols; Humana Press: Totowa, NJ, USA, 2013.
- 52. Dave, V.P.; Ngo, T.A.; Pernestig, A.K.; Tilevik, D.; Kant, K.; Nguyen, T.; Wolff, A.; Bang, D.D. MicroRNA amplification and detection technologies: Opportunities and challenges for point of care diagnostics. Lab. Investig. 2019, 99, 452–469. [CrossRef]
- 53. Jet, T.; Gines, G.; Rondelez, Y.; Taly, V. Advances in multiplexed techniques for the detection and quantification of microRNAs. Chem. Soc. Rev. 2021, 50, 4141–4161. [CrossRef]
- 54. Li, W.; Ruan, K. MicroRNA detection by microarray. Anal. Bioanal. Chem. 2009, 394, 1117–1124. [CrossRef]
- 55. Git, A.; Dvinge, H.; Salmon-Divon, M.; Osborne, M.; Kutter, C.; Hadfield, J.; Bertone, P.; Caldas, C. Systemati c comparison of microarray profiling, real-time PCR, and next-generation sequencing technologies for measuring differential microRNA expression. RNA 2010, 16, 991–1006. [CrossRef]
- 56. Del Vescovo, V.; Meier, T.; Inga, A.; Denti, M.A.; Borlak, J. A cross-platform comparison of Affymetrix and Agilent microarrays reveals discordant miRNA expression in lung tumors of c-Raf transgenic mice. PLoS ONE 2013, 8, e78870. [CrossRef] [PubMed]
- 57. Mestdagh, P.; Hartmann, N.; Baeriswyl, L.; Andreasen, D.; Bernard, N.; Chen, C.; Cheo, D.; D’Andrade, P.; DeMayo, M.; Dennis, L.; et al. Evaluation of quantitative mirnA expression platforms in the micrornA quality control (mirQC) study. Nat. Methods 2014, 11, 809–815. [CrossRef]
- 58. Willenbrock, H.; Salomon, J.; Søkilde, R.; Barken, K.B.; Hansen, T.N.; Nielsen, F.C.; Møller, S.; Litman, T. Quantitative miRNA expression analysis: Comparing microarrays with next-generation sequencing. RNA 2009, 15, 2028–2034. [CrossRef] [PubMed]
- 59. Meng, Y.; Ma, X.; Li, J.; Shao, C. Creating and maintaining a high-confidence microRNA repository for crop research: A brief review and re-examination of the current crop microRNA registries. J. Plant Physiol. 2022, 270, 153636. [CrossRef] [PubMed]


- 60. Li, Y.; Bletsa, M.; Boonen, I.; Lemey, P. NGS Library Preparation Using NEXTFLEX Rapid Directional RNAseq Kit (NOVA-5138-08) for Animal Tissue Samples. Version v1. 2022. Available online: https://www.protocols.io/ (accessed on 18 August 2025).
- 61. Fuchs, R.T.; Sun, Z.; Zhuang, F.; Robb, G.B. Bias in ligation-based small RNA sequencing library construction is determined by adaptor and RNA structure. PLoS ONE 2015, 10, e0126049. [CrossRef]
- 62. Wang, B.; Sun, F.; Luan, Y. Comparison of the effectiveness of different normalization methods for metagenomic cross-study phenotype prediction under heterogeneity. Sci. Rep. 2024, 14, 7024. [CrossRef]
- 63. Zhao, S.; Ye, Z.; Stanton, R. Misuse of RPKM or TPM normalization when comparing across samples and sequencing protocols. RNA 2020, 26, 903–909. [CrossRef]
- 64. Cheng, C.; Fei, Z.; Xiao, P. Methods to improve the accuracy of next-generation sequencing. Front. Bioeng. Biotechnol. 2023, 11, 982111. [CrossRef]
- 65. Bustin, S.; Dhillon, H.S.; Kirvell, S.; Greenwood, C.; Parker, M.; Shipley, G.L.; Nolan, T. Variability of the reverse transcription step: Practical implications. Clin. Chem. 2015, 61, 202–212. [CrossRef] [PubMed]
- 66. Xu, J.; Tang, Q.; Zhang, R.; Chen, H.; Khoo, B.L.; Zhang, X.; Chen, Y.; Yan, H.; Li, J.; Shao, H.; et al. Sensitive detection of microRNAs using polyadenine-mediated fluorescent spherical nucleic acids and a microfluidic electrokinetic signal amplification chip. J. Pharm. Anal. 2022, 12, 808–813. [CrossRef]
- 67. Zhang, R.; Shao, H.; Hu, X.; Liang, Y.; Chen, H.; Zheng, S.; Liu, L. Universal, sensitive, and visual sandwich-type biosensor based on nanogold-catalyzed reduction and its application for detecting C-reactive protein in serum by a portable colorimeter. Sens. Actuators B Chem. 2025, 431, 137408. [CrossRef]
- 68. Sha, Y.; Huang, R.; Huang, M.; Yue, H.; Shan, Y.; Huab, J.; Xing, D. Cascade CRISPR/cas enables amplification-free microRNA sensing with fM-sensitivity and single-base-specificity. Chem. Commun. 2021, 57, 247–250. [CrossRef] [PubMed]
- 69. Uhd, J.; Miotke, L.; Ji, H.P.; Dunaeva, M.; Pruijn, G.J.M.; Jørgensen, C.D.; Kristoffersen, E.L.; Birkedal, V.; Yde, C.W.; Nielsen, F.C.; et al. Ultra-fast detection and quantification of nucleic acids by amplification-free fluorescence assay. Analyst 2020, 17, 5836–5844. [CrossRef]
- 70. Masterson, A.N.; Chowdhury, N.N.; Fang, Y.; Yip-Schneider, M.T.; Hati, S.; Gupta, P.; Cao, S.; Wu, H.; Schmidt, C.M.; Fishel, M.L.; et al. Amplification-Free, High-Throughput Nanoplasmonic Quantification of Circulating MicroRNAs in Unprocessed Plasma Microsamples for Earlier Pancreatic Cancer Detection. ACS Sens. 2023, 8, 1085–1100. [CrossRef] [PubMed]
- 71. Cai, S.; Pataillot-Meakin, T.; Shibakawa, A.; Ren, R.; Bevan, C.L.; Ladame, S.; Ivanov, A.P.; Edel, J.B. Single-molecule amplificationfree multiplexed detection of circulating microRNA cancer biomarkers from serum. Nat. Commun. 2021, 12, 3515. [CrossRef]
- 72. Shanmugam, S.T.; Campos, R.; Trashin, S.; Daems, E.; Carneiro, D.; Fraga, A.; Ribeiro, R.; De Wael, K. Singlet oxygen-based photoelectrochemical detection of miRNAs in prostate cancer patients’ plasma: A novel diagnostic tool for liquid biopsy. Bioelectrochemistry 2024, 158, 108698. [CrossRef]
- 73. Ferreira, I.; Slott, S.; Schi, C. Mutations in microRNA-128-2-3p identified with amplification-free hybridization assay. PLoS ONE 2023, 18, e0289556.
- 74. Padial-Jaudenes, M.; Tabraue-Chávez, M.; Detassis, S.; Ruedas-Rama, M.J.; Gonzalez-Garcia, M.C.; Fara, M.A.; López-Delgado, F.J.; Gonzàlez-Vera, J.A.; Guardia-Monteagudo, J.J.; Diaz-Mochon, J.J.; et al. Multiplexed MicroRNA biomarker detection by bridging lifetime filtering imaging and dynamic chemical labeling. Sens. Actuators B Chem. 2024, 417, 136136. [CrossRef]
- 75. Sarantis, P.; Koustas, E.; Papadimitropoulou, A.; Papavassiliou, A.G.; Karamouzis, M.V. Pancreatic ductal adenocarcinoma: Treatment hurdles, tumor microenvironment and immunotherapy. World J. Gastrointest. Oncol. 2020, 12, 173–181. [CrossRef]
- 76. Beatty, G.L.; Werba, G.; Lyssiotis, C.A.; Simeone, D.M. The biological underpinnings of therapeutic resistance in pancreatic cancer. Genes Dev. 2021, 35, 940–962. [CrossRef]
- 77. Willets, K.A.; Van Duyne, R.P. Localized surface plasmon resonance spectroscopy and sensing. Annu. Rev. Phys. Chem. 2007, 58, 267–297. [CrossRef]
- 78. Mayer, K.M.; Hafner, J.H. Localized surface plasmon resonance sensors. Chem. Rev. 2011, 111, 3828–3857. [CrossRef]
- 79. Kelly, K.L.; Coronado, E.; Zhao, L.L.; Schatz, G.C. The optical properties of metal nanoparticles: The influence of size, shape, and dielectric environment. J. Phys. Chem. B 2003, 107, 668–677. [CrossRef]
- 80. Joshi, G.K.; Deitz-McElyea, S.; Liyanage, T.; Lawrence, K.; Mali, S.; Sardar, R.; Korc, M. Label-Free Nanoplasmonic-Based Short Noncoding RNA Sensing at Attomolar Concentrations Allows for Quantitative and Highly Specific Assay of MicroRNA-10b in Biological Fluids and Circulating Exosomes. ACS Nano 2015, 9, 11075–11089. [CrossRef] [PubMed]
- 81. Joshi, G.K.; Deitz-Mcelyea, S.; Johnson, M.; Mali, S.; Korc, M.; Sardar, R. Highly specific plasmonic biosensors for ultrasensitive MicroRNA detection in plasma from pancreatic cancer patients. Nano Lett. 2014, 14, 6955–6963. [CrossRef]
- 82. Couture, M.; Ray, K.K.; Poirier-Richard, H.P.; Crofton, A.; Masson, J.F. 96-Well Plasmonic Sensing with Nanohole Arrays. ACS Sens. 2016, 1, 287–294. [CrossRef]
- 83. Salleh, S.; Thyagarajan, A.; Sahu, R.P. Exploiting the relevance of CA 19-9 in pancreatic cancer. J. Cancer Metastasis Treat. 2020, 6, 31. [CrossRef] [PubMed]


- 84. Cheng, J.J.; Matsumoto, Y.; Dombek, G.E.; Stackhouse, K.A.; Ore, A.S.; Glickman, J.N.; Heimburg-Molinaro, J.; Cummings, R.D. Differential expression of CD175 and CA19-9 in pancreatic adenocarcinoma. Sci. Rep. 2025, 15, 4177. [CrossRef]
- 85. Quirico, L.; Orso, F. The power of microRNAs as diagnostic and prognostic biomarkers in liquid biopsies. Cancer Drug Resist. 2020, 3, 117–139. [CrossRef] [PubMed]
- 86. Rawla, P. Epidemiology of Prostate Cancer. World J. Oncol. 2019, 10, 63–89. [CrossRef]
- 87. Zedan, A.H.; Osther, P.J.S.; Assenholt, J.; Madsen, J.S.; Hansen, T.F. Circulating miR-141 and miR-375 are associated with treatment outcome in metastatic castration resistant prostate cancer. Sci. Rep. 2020, 10, 227. [CrossRef]
- 88. Liu, C.; Liu, R.; Zhang, D.; Deng, Q.; Liu, B.; Chao, H.P.; Rycaj, K.; Takata, Y.; Lin, K.; Lu, Y.; et al. MicroRNA-141 suppresses prostate cancer stem cells and metastasis by targeting a cohort of pro-metastasis genes. Nat. Commun. 2017, 8, 14270. [CrossRef]
- 89. Brase, J.C.; Johannes, M.; Schlomm, T.; Fälth, M.; Haese, A.; Steuber, T.; Beissbarth, T.; Kuner, R.; Sültmann, H. Circulating miRNAs are correlated with tumor progression in prostate cancer. Int. J. Cancer 2011, 128, 608–616. [CrossRef]
- 90. Trashin, S.; Rahemi, V.; Ramji, K.; Neven, L.; Gorun, S.M.; De Wael, K. Singlet oxygen-based electrosensing by molecular photosensitizers. Nat. Commun. 2017, 8, 16108. [CrossRef]
- 91. Daems, E.; Bassini, S.; Mariën, L.; Op de Beeck, H.; Stratulat, A.; Zwaenepoel, K.; Vandamme, T.; Op de Beeck, K.; Koljenovic´, S.; Peeters, M.; et al. Singlet oxygen-based photoelectrochemical detection of single-point mutations in the KRAS oncogene. Biosens. Bioelectron. 2024, 249, 115957. [CrossRef] [PubMed]
- 92. Shanmugam, S.T.; Trashin, S.; De Wael, K. Singlet oxygen-based photoelectrochemical detection of DNA. Biosens. Bioelectron. 2022, 195, 113652. [CrossRef]
- 93. Verrucchi, M.; Giacomazzo, G.E.; Sfragano, P.S.; Laschi, S.; Conti, L.; Pagliai, M.; Gellini, C.; Ricci, M.; Ravera, E.; Valtancoli, B.; et al. Characterization of a Ruthenium(II) Complex in Singlet Oxygen-Mediated Photoelectrochemical Sensing. Langmuir 2023, 39, 679–689. [CrossRef] [PubMed]
- 94. Sita-Lumsden, A.; Fletcher, C.E.; Dart, D.A.; Brooke, G.N.; Waxman, J.; Bevan, C.L. Circulating nucleic acids as biomarkers of prostate cancer. Biomark. Med. 2013, 7, 867–877. [CrossRef]
- 95. Shen, J.; Hruby, G.W.; McKiernan, J.M.; Gurvich, I.; Lipsky, M.J.; Benson, M.C.; Santella, R.M. Dysregulation of circulating microRNAs and prediction of aggressive prostate cancer. Prostate 2012, 72, 1469–1477. [CrossRef] [PubMed]
- 96. Xu, Y.; Qin, S.; An, T.; Tang, Y.; Huang, Y.; Zheng, L. MiR-145 detection in urinary extracellular vesicles increase diagnostic efficiency of prostate cancer based on hydrostatic filtration dialysis method. Prostate 2017, 77, 1167–1175. [CrossRef] [PubMed]
- 97. Garg, S.; Sachdeva, A.; Peeters, M.; McClements, J. Point-of-Care Prostate Specific Antigen Testing: Examining Translational Progress toward Clinical Implementation. ACS Sens. 2023, 8, 3643–3658. [CrossRef]
- 98. Fajardo, P.; Taskova, M.; Martín-Serrano, M.A.; Hansen, J.; Slott, S.; Jakobsen, A.K.; Wibom, M.L.; Salegi, B.; Muñoz, A.; Barbachano, A.; et al. p38γ and p38δ as biomarkers in the interplay of colon cancer and inflammatory bowel diseases. Cancer Commun. 2022, 42, 897–901. [CrossRef]
- 99. Fonseca, A.; Ramalhete, S.V.; Mestre, A.; das Neves, R.P.; Marreiros, A.; Castelo-Branco, P.; Roberto, V.P. Identification of colorectal cancer associated biomarkers: An integrated analysis of miRNA expression. Aging (Albany N. Y.) 2021, 13, 21991–22029. [CrossRef]
- 100. Domljanovic, I.; Taskova, M.; Miranda, P.; Weber, G.; Astakhova, K. Optical and theoretical study of strand recognition by nucleic acid probes. Commun. Chem. 2020, 3, 111. [CrossRef]
- 101. Kalies, S.; Kuetemeyer, K.; Heisterkamp, A.; Denk, W.; Strickler, J.H.; Webb, W.W. Mechanisms of high-order photobleaching and its relationship to intracellular ablation. Biomed. Opt. Express 2011, 2, 805–816. [CrossRef]
- 102. Bowler, F.R.; Diaz-Mochon, J.J.; Swift, M.D.; Bradley, M. DNA analysis by dynamic chemistry. Angew. Chem. Int. Ed. 2010, 49, 1809–1812. [CrossRef]
- 103. Venkateswaran, S.; Luque-González, M.A.; Tabraue-Chávez, M.; Fara, M.A.; López-Longarela, B.; Cano-Cortes, V.; López-Delgado, F.J.; Sánchez-Martín, R.M.; Ilyine, H.; Bradley, M.; et al. Novel bead-based platform for direct detection of unlabelled nucleic acids through Single Nucleobase Labelling. Talanta 2016, 161, 489–496. [CrossRef]
- 104. Rissin, D.M.; López-Longarela, B.; Pernagallo, S.; Ilyine, H.; Vliegenthart, A.D.B.; Dear, J.W.; Díaz-Mochón, J.J. Polymerase-free measurement of microRNA-122 with single base specificity using single molecule arrays: Detection of drug-induced liver injury. PLoS ONE 2017, 12, e0179669. [CrossRef]
- 105. Garcia-Fernandez, E.; Gonzalez-Garcia, M.C.; Pernagallo, S.; Ruedas-Rama, M.J.; Fara, M.A.; López-Delgado, F.J.; Dear, J.W.; Ilyine, H.; Ress, C.; Díaz-Mochón, J.J.; et al. MiR-122 direct detection in human serum by time-gated fluorescence imaging. Chem. Commun. 2019, 55, 14958–14961. [CrossRef]
- 106. Marín-Romero, A.; Robles-Remacho, A.; Tabraue-Chávez, M.; López-Longarela, B.; Sánchez-Martín, R.M.; Guardia-Monteagudo, J.J.; Fara, M.A.; López-Delgado, F.J.; Pernagallo, S.; Díaz-Mochón, J.J. A PCR-free technology to detect and quantify microRNAs directly from human plasma. Analyst 2018, 143, 5676–5682. [CrossRef]
- 107. López-Longarela, B.; Morrison, E.E.; Tranter, J.D.; Chahman-Vos, L.; Léonard, J.F.; Gautier, J.C.; Laurent, S.; Lartigau, A.; Boitier, E.; Sautier, L.; et al. Direct Detection of miR-122 in Hepatotoxicity Using Dynamic Chemical Labeling Overcomes Stability and isomiR Challenges. Anal. Chem. 2020, 92, 3388–3395. [CrossRef]


- 108. Marín-Romero, A.; Tabraue-Chávez, M.; Dear, J.W.; Sánchez-Martín, R.M.; Ilyine, H.; Guardia-Monteagudo, J.J.; Fara, M.A.; López-Delgado, F.J.; Díaz-Mochón, J.J.; Pernagallo, S. Amplification-free profiling of microRNA-122 biomarker in DILI patient serums, using the luminex MAGPIX system. Talanta 2020, 219, 121265. [CrossRef]
- 109. Marín-Romero, A.; Di Zeo-Sánchez, D.E.; Tabraue-Chávez, M.; Villanueva-Paz, M.; Pinazo-Bandera, J.M.; Sanabria-Cabrera, J.; García-Cortés, M.; Díaz-Mochón, J.J.; Lucena, M.I.; Andrade, R.J.; et al. Short communication: miRNA122 interrogation via PCR-Free method to track liver recovery. PLoS ONE 2025, 20, e0324858. [CrossRef]
- 110. Robles-Remacho, A.; Martos-Jamai, I.; Tabraue-Chávez, M.; Aguilar-González, A.; Laz-Ruiz, J.A.; Cano-Cortés, M.V.; LópezDelgado, F.J.; Guardia-Monteagudo, J.J.; Pernagallo, S.; Diaz-Mochon, J.J.; et al. Click chemistry-based dual nanosystem for microRNA-122 detection with single-base specificity from tumour cells. J. Nanobiotechnol. 2024, 22, 791. [CrossRef] [PubMed]
- 111. Robles-Remacho, A.; Luque-Gonzalez, M.A.; López-Delgado, F.J.; Guardia-Monteagudo, J.J.; Fara, M.A.; Pernagallo, S.; SanchezMartin, R.M.; Diaz-Mochon, J.J. Direct detection of alpha satellite DNA with single-base resolution by using abasic Peptide Nucleic Acids and Fluorescent in situ Hybridization. Biosens. Bioelectron. 2023, 219, 114770. [CrossRef] [PubMed]
- 112. Pernagallo, S.; Ventimiglia, G.; Cavalluzzo, C.; Alessi, E.; Ilyine, H.; Bradley, M.; Diaz-Mochon, J.J. Novel biochip platform for nucleic acid analysis. Sensors 2012, 12, 8100–8111. [CrossRef] [PubMed]
- 113. Marín-Romero, A.; Pernagallo, S. A comprehensive review of Dynamic Chemical Labelling on Luminex xMAP technology: A journey towards Drug-Induced Liver Injury testing. Anal. Methods 2023, 15, 6139–6149. [CrossRef]
- 114. Marín-Romero, A.; Tabraue-Chávez, M.; Dear, J.W.; Díaz-Mochón, J.J.; Pernagallo, S. Open a new window in the world of circulating microRNAs by merging ChemiRNA Tech with a Luminex platform. Sens. Diagn. 2022, 1, 1243–1251. [CrossRef]
- 115. Detassis, S.; Precazzini, F.; Brentari, I.; Ruffilli, R.; Ress, C.; Maglione, A.; Pernagallo, S.; Denti, M.A. SA-ODG platform: A semi-automated and PCR-free method to analyse microRNAs in solid tissues. Analyst 2024, 149, 3891–3899. [CrossRef]
- 116. Marín-Romero, A.; Regele, V.; Kolanovic, D.; Hofner, M.; Díaz-Mochón, J.J.; Nöhammer, C.; Pernagallo, S. MAGPIX and FLEXMAP 3D Luminex platforms for direct detection of miR-122-5p through dynamic chemical labelling. Analyst 2023, 148, 5658–5666. [CrossRef] [PubMed]
- 117. Tabraue-Chávez, M.; Luque-González, M.A.; Marín-Romero, A.; Sánchez-Martín, R.M.; Escobedo-Araque, P.; Pernagallo, S.; Díaz-Mochón, J.J. A colorimetric strategy based on dynamic chemistry for direct detection of Trypanosomatid species. Sci. Rep. 2019, 9, 3696. [CrossRef]
- 118. Luque-González, M.A.; Tabraue-Chávez, M.; López-Longarela, B.; Sánchez-Martín, R.M.; Ortiz-González, M.; Soriano-Rodríguez, M.; García-Salcedo, J.A.; Pernagallo, S.; Díaz-Mochón, J.J. Identification of Trypanosomatids by detecting Single Nucleotide Fingerprints using DNA analysis by dynamic chemistry with MALDI-ToF. Talanta 2018, 176, 299–307. [CrossRef] [PubMed]
- 119. Martín-Sierra, C.; Chavez, M.T.; Escobedo, P.; García-Cabrera, V.; López-Delgado, F.J.; Guardia-Monteagudo, J.J.; Ruiz-García, I.; Erenas, M.M.; Sanchez-Martin, R.M.; Capitán-Vallvey, L.F.; et al. SARS-CoV-2 viral RNA detection using the novel CoVradar device associated with the CoVreader smartphone app Biosensors and Bioelectronics SARS-CoV-2 viral RNA detection using the novel CoVradar device associated with the CoVreader smartphone app Luis Ferm. Biosens. Bioelectron. 2023, 230, 115268. [CrossRef] [PubMed]
- 120. Marín-Romero, A.; Tabraue-Chávez, M.; López-Longarela, B.; Fara, M.A.; Sánchez-Martín, R.M.; Dear, J.W.; Ilyine, H.; DíazMochón, J.J.; Pernagallo, S. Simultaneous Detection of Drug-Induced Liver Injury Protein and microRNA Biomarkers Using Dynamic Chemical Labelling on a Luminex MAGPIX System. Analytica 2021, 2, 130–139. [CrossRef]
- 121. Bica-Pop, C.; Cojocneanu-Petric, R.; Magdo, L.; Raduly, L.; Gulei, D.; Berindan-Neagoe, I. Overview upon miR-21 in lung cancer: Focus on NSCLC. Cell. Mol. Life Sci. 2018, 75, 3539–3551. [CrossRef]
- 122. Detassis, S.; Grasso, M.; Tabraue-Chávez, M.; Marín-Romero, A.; López-Longarela, B.; Ilyine, H.; Ress, C.; Ceriani, S.; Erspan, M.; Maglione, A.; et al. New Platform for the Direct Profiling of microRNAs in Biofluids. Anal. Chem. 2019, 91, 5874–5880. [CrossRef] [PubMed]
- 123. Delgado-Gonzalez, A.; Robles-Remacho, A.; Marin-Romero, A.; Detassis, S.; Lopez-Longarela, B.; Lopez-Delgado, F.J.; de Miguel-Perez, D.; Guardia-Monteagudo, J.J.; Fara, M.A.; Tabraue-Chavez, M.; et al. PCR-free and chemistry-based technology for miR-21 rapid detection directly from tumour cells. Talanta 2019, 200, 51–56. [CrossRef]
- 124. Zhang, J.; Wu, L.; Ding, R.; Deng, X.; Chen, Z. Role of miRNA-122 in cancer (Review). Int. J. Oncol. 2024, 65, 83. [CrossRef]
- 125. He, D.; Miao, H.; Xu, Y.; Xiong, L.; Wang, Y.; Xiang, H.; Zhang, H.; Zhang, Z. MiR-371-5p facilitates pancreatic cancer cell proliferation and decreases patient survival. PLoS ONE 2014, 9, e112930. [CrossRef]
- 126. Li, Z.; Li, Y.; Fu, J.; Li, N.; Shen, L. Clinical utility of microRNA-451 as diagnostic biomarker for human cancers. Biosci. Rep. 2019, 39, BSR20180653. [CrossRef]
- 127. Lu, Y.; Lu, J.; Zhao, J.; Cusido, J.; Raymo, F.M.; Yuan, J.; Yang, S.; Leif, R.C.; Huo, Y.; Piper, J.A.; et al. On-the-fly decoding luminescence lifetimes in the microsecond region for lanthanide-encoded suspension arrays. Nat. Commun. 2014, 5, 3741. [CrossRef] [PubMed]


- 128. Wen, G.; Zhou, T.; Gu, W. The potential of using blood circular RNA as liquid biopsy biomarker for human diseases. Protein Cell 2021, 12, 911–946. [CrossRef]
- 129. Beylerli, O.; Gareev, I.; Sufianov, A.; Ilyasova, T.; Guang, Y. Long noncoding RNAs as promising biomarkers in cancer: Long non-coding RNAs and cancer. Noncoding RNA Res. 2022, 7, 66–70. [CrossRef] [PubMed]


Disclaimer/Publisher’s Note: The statements, opinions and data contained in all publications are solely those of the individual author(s) and contributor(s) and not of MDPI and/or the editor(s). MDPI and/or the editor(s) disclaim responsibility for any injury to people or property resulting from any ideas, methods, instructions or products referred to in the content.

