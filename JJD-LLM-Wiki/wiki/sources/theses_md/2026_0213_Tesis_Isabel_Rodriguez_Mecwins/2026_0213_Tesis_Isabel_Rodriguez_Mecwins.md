Desarrollo de una plataforma de detección de
miRNAs en biopsias líquidas basada en
tecnología plasmónica y química dinámica
Isabel Rodríguez Mariblanca
Programa de doctorado en Biociencias Moleculares
Universidad Autónoma de Madrid, Facultad de Medicina
Madrid, 2025
Desarrollo de una plataforma de detección de
miRNAs en biopsias líquidas basada en tecnología
plasmónica y química dinámica

Universidad Autónoma de Madrid
Departamento de Bioquímica
Programa de doctorado en Biociencias Moleculares
Isabel Rodríguez Mariblanca
Grado en Biotecnología
Directores:
Óscar Ahumada Heredero
Juan José Díaz Mochon
Mecwins. S.A y Destina Genómica S.L.
AGRADECIMIENTOS
2

RESUMEN EN CASTELLANO
Esta tesis doctoral se centró en el desarrollo de una tecnología innovadora para la detección de
microRNAs (miRNAs) integrando la química dinámica de Destina Genómica y la tecnología
plasmónica ultrasensible de Mecwins, conocida como AVAC. La necesidad de biomarcadores
3

más sensibles y específicos para el diagnóstico temprano y el pronóstico de enfermedades,
como el cáncer y la enfermedad de Alzheimer, impulsó esta investigación. Los miRNAs,
pequeñas moléculas de RNA no codificantes, han emergido como prometedores
biomarcadores debido a su estabilidad en fluidos corporales y su capacidad para reflejar
estados fisiopatológicos. La metodología de esta investigación se basó en un estudio
secuencial de diferentes modelos de complejidad creciente (estreptavidina – biotina, captura e
hibridación) para optimizar las condiciones clave de la tecnología antes de la integración de la
química dinámica y la tecnología plasmónica. Se evaluaron diversas químicas de conjugación,
lo que condujo a la selección de la combinación COOH – NH para la unión de la sonda a las
2
nanopartículas de oro y anti – FITC – FITC para la unión de la SMART – nucleobase a la
superficie de silicio. Entre los desafíos más importantes de este trabajo se encontraron la
superación de las interferencias y problemas de compatibilidad de ambas tecnologías y la
optimización de la accesibilidad de los componentes de la química dinámica, tanto de la sonda
que hibrida con el miRNA diana como la SMART – nucleobase que se introduce en su
posición blanco para detectar la hibridación. La tecnología desarrollada se adaptó con éxito
para la detección directa de miRNAs en muestras de suero de pacientes, sin necesidad de
extracción de RNA, lo que incrementa la reproducibilidad y reduce el tiempo de respuesta,
logrando una sensibilidad con un límite de cuantificación de 596 fM para un miRNA modelo.
Finalmente, se demostró la capacidad de la plataforma para la detección multiplexada de
miRNAs (miR – 200a – 3p y miR – 486 – 5p, relevantes en la enfermedad de Alzheimer) y la
detección combinada de miRNAs y biomarcadores proteicos (miR – 122 – 5p e IL – 6,
importantes en la lesión hepática inducida por fármacos). La capacidad de detectar
simultáneamente diferentes tipos de biomarcadores en un solo dispositivo representa un
avance significativo en el campo del diagnóstico. En conclusión, esta tesis presenta una
tecnología innovadora, sensible, específica y reproducible para la detección de miRNAs
directamente en fluidos corporales, con potencial para mejorar el diagnóstico y pronóstico de
diversas enfermedades y para la detección simultánea de múltiples analitos.
Palabras clave: miRNAs, química dinámica, tecnología plasmónica, biomarcadores, sonda,
nanopartículas de oro, SMART – nuclebase, superficie de silicio.
RESUMEN EN INGLÉS
This doctoral thesis focused on the development of an innovative technology for the detection
of microRNAs (miRNAs) integrating the dynamic chemistry of Destina Genómica and the
4

ultrasensitive plasmonic technology of Mecwins, known as AVAC. The need for more
sensitive and specific biomarkers for the early diagnosis and prognosis of diseases, such as
cancer and Alzheimer's disease, drove this research. miRNAs, small non-coding RNA
molecules, have emerged as promising biomarkers due to their stability in body fluids and
their ability to reflect pathophysiological states. The methodology of this research was based
on a sequential study of different models of increasing complexity (streptavidin – biotin,
capture and hybridization) to optimize the key conditions of the technology before the
integration of dynamic chemistry and plasmonic technology. Various conjugation chemistries
were evaluated, leading to the selection of the COOH – NH2 combination for the binding of
the probe to the gold nanoparticles and anti – FITC – FITC for the binding of the SMART –
nucleobase to the silicon surface. Among the most important challenges of this work were
overcoming the interferences and compatibility problems of both technologies and optimizing
the accessibility of the components of the dynamic chemistry, both probe that hybridizes with
the target miRNA and the SMART – nucleobase that is introduced into its target position to
detect hybridization. The developed technology was successfully adapted for the direct
detection of miRNAs in patient serum samples, without the need for RNA extraction, which
increases reproducibility and reduces response time, achieving a sensitivity with a limit of
quantification of 596 fM for a model miRNA. Finally, the capacity of the platform for the
multiplexed detection of miRNAs (miR – 200a – 3p and miR – 486 – 5p, relevant in
Alzheimer's disease) and the combined detection of miRNAs and protein biomarkers (miR –
122 – 5p and IL – 6, important in drug-induced liver injury) was demonstrated. The capacity
to simultaneously detect different types of biomarkers in a single device represents a
significant advance in the field of diagnostics. In conclusion, this thesis presents an
innovative, sensitive, specific and reproducible technology for the detection of miRNAs
directly in body fluids, with potential to improve the diagnosis and prognosis of various
diseases and for the simultaneous detection of multiple analytes.
Keywords: miRNAs, dynamic chemistry, plasmonic technology, biomarkers, probe, gold
nanoparticles, SMART – nucleobase, silicon surface.
ÍNDICE
5

1. CLAVE DE ABREVIATURAS 9
2. INTRODUCCIÓN 11
El rol de los biomarcadores en el diagnóstico y el pronóstico 11
La irrupción de los miRNAs como biomarcadores clave 12
¿Qué son los miRNAs? 12
Biogénesis y mecanismo de acción de los miRNAs 13
miRNAs circulantes y su potencial en el diagnóstico y el pronóstico 15
Metodologías y dificultades en la detección de miRNAs 19
Tecnología plasmónica ultrasensible de Mecwins 22
Principio básico de la detección con nanopartículas metálicas 22
Componentes y propiedades de la tecnología 23
Metodología del inmunoensayo 24
Tecnología de química dinámica de Destina Genómica 25
¿En qué consiste la química dinámica? 25
Química dinámica aplicada a la detección de ácidos nucleicos 26
Combinación de ambas tecnologías 28
3. OBJETIVOS 30
4. MATERIAL Y MÉTODOS 31
Reactivos 31
GNPs 31
DGLs, PNAs y SMART – nucleobases 31
Ácidos nucleicos 31
Fabricación de superficies de silicio con linkers 32
Primer paso: silanización (generación de grupos amino) 32
Segundo paso: inmovilización del linker 32
Protocolos de biotinilación de anticuerpos 33
Funcionalización de GNPs – COOH con un linker 35
6

GNPs – COOH con anti – FITC 36
GNPs – COOH con DGL 122 – 5p 37
GNPs – COOH con PNA 122 – 5p 37
GNPs – COOH con anti – IL – 6 38
GNPs – COOH con DGL 200a – 3p 38
GNPs – COOH con DGL 486 – 5p 38
Cuantificación de la cantidad de anticuerpo inmovilizado en GNPs – COOH 38
ELISA para la evaluación del funcionamiento de anticuerpos 39
Ley de Stokes 39
v = velocidad de sedimentación de las partículas (m/s) 39
s
r = radio de la partícula (m) 39
η = viscosidad dinámica del líquido (kg/(m x s)) 39
ρ = densidad de la nanopartícula (kg/m3) 39
p
ρ = densidad del fluido (kg/m3) 39
f
g = aceleración de la gravedad 40
Metodología y químicas propuestas para la combinación de ambas tecnologías 40
Químicas candidatas 40
Metodología propuesta: empleo de diferentes modelos 41
¿Uno o dos pasos? 44
Compatibilidad entre modelos, químicas y metodologías 44
Modelo SAv – Biotina 46
GNPs de 100 nm con los componentes de la DR y distintos tipos de lavados 46
Monoplex con GNPs – biotina de distintos tamaños 46
Multiplexado con GNPs – biotina de distintos tamaños 47
Modelo de captura 48
Química A: anti – FITC – FITC + SAv – Biotina 48
Química B: SAv – Biotina + anti – FITC – FITC 48
7

| Modelo de hibridación                         |     | 49  |
| --------------------------------------------- | --- | --- |
| Química A: anti – FITC – FITC + SAv – Biotina |     | 49  |
| Química C: COOH – NH + SAv – Biotina          |     | 50  |
2
| Monoplex de miR – 122 – 5p con DR             |     | 50  |
| --------------------------------------------- | --- | --- |
| Química A: anti – FITC – FITC + SAv – Biotina |     | 50  |
| Química C: COOH – NH + SAv – Biotina          |     | 50  |
2
| Química D: COOH – NH |  + anti – FITC – FITC | 51  |
| -------------------- | --------------------- | --- |
2
Evaluación de la interferencia de distintas SMART – nucleobases FITC 51
| Monoplex de IL – 6 |     | 52  |
| ------------------ | --- | --- |
Cinética de diferentes biomarcadores con GNPs de distintos tamaños 52
| Cinética de IL – 6                                    |     | 52  |
| ----------------------------------------------------- | --- | --- |
| Cinética de ssDNA 122 – 5p                            |     | 52  |
| Detección combinada de IL – 6 y miR – 122 – 5p con DR |     | 52  |
| En la misma solución y superficie                     |     | 52  |
| En distinta solución y en la misma superficie         |     | 53  |
| Multiplex de miR – 200a – 3p y miR – 486 – 5p con DR  |     | 53  |
Metodología de lavado de los ensayos en superficies de silicio 54
| Curvas de calibración y análisis de la sensibilidad |     | 54  |
| --------------------------------------------------- | --- | --- |
| 5. RESULTADOS                                       |     | 55  |
Objetivo 1: Desarrollar una tecnología innovadora para la detección de un único
miRNA mediante la integración de la química dinámica de Destina Genómica con la
| tecnología plasmónica de Mecwins. |     | 55  |
| --------------------------------- | --- | --- |
Modelo SAv – biotina: Evaluación de la Interacción y Optimización de las
| Condiciones de Unión. |     | 55  |
| --------------------- | --- | --- |
Modelo de captura: Optimización de la Captura de Ácidos Nucleicos y Selección de
| la Química de Inmovilización. |     | 58  |
| ----------------------------- | --- | --- |
Modelo de hibridación: Optimización de la Hibridación entre la Sonda DGL y el
| miRNA Diana |     | 64  |
| ----------- | --- | --- |
8

Modelo de hibridación frente a DR: identificación de problemas e interferencias 68
Evaluación de las soluciones propuestas para abordar los problemas e interferencias
identificados en la DR 73
Optimización de la DR 81
Objetivo 2: Validar la tecnología para el análisis de muestras reales de pacientes,
adaptando la metodología para garantizar su aplicación práctica y estableciendo las
especificaciones técnicas en términos de sensibilidad, especificidad y precisión. 88
Optimización de la detección de miRNAs en suero 88
Funcionamiento de la DR en suero 91
Interpolación de muestras de suero con concentración conocida 92
Objetivo 3: Adaptar la tecnología a la detección simultánea de varios miRNAs
(multiplexado) y a la detección combinada de miRNAs y biomarcadores proteicos. 93
Modelo SAv – Biotina: Evaluación del Comportamiento de GNPs de Diferentes
Tamaños 93
Dúplex de miR – 200a – 3p y miR – 486 – 5p 98
Detección combinada de IL – 6 y miR – 122 – 5p 99
6. DISCUSIÓN 105
7. CONCLUSIONES EN ESPAÑOL 116
8. CONCLUSIONES EN INGLÉS 118
9. BIBLIOGRAFÍA 120
1. CLAVE DE ABREVIATURAS
5PL Five – Parameter Logistic
Aβ Amyloid – Beta
9

AGO Argonaute
APAP N – acetyl – p – aminophenol
APTS (3 – aminopropyl) triethoxysilane
CSF Cerebrospinal Fluid
CVD Chemical Vapor Deposition
DBCO Dybenzocyclooctyne
DCC Dynamic Combinatorial Chemistry
DCL Dynamic Combinatorial Library
DF – SPS Dark – Field Single Particle Spectrophotometry
DGCR8 DiGeorge Syndrome Critical Region 8
DGL PNA probe with an abasic position
DILI Drug-Induced Liver Injury
DR Destina Reaction
EDC 1 – ethyl – 3 – (3 – dimethylaminopropyl) carbodiimide
FITC Fluorescein Isothiocyanate
GalT Galactose – 1 – Phosphate Uridyltransferase
GNPs Gold Nanoparticles
HDL High Density Lipoproteins
HRP Horseradish Peroxidase
IL6 Interleukin 6
LNA Locked Nucleic Acid
LLoQ Lower Limit of Quantification
LOD Limit of Detection
MCI Mild Cognitive Impairments
miRNA microRNA
mPEG-SH methyl – PEG – thiol
NaBHCN Sodium Cyanoborohydride
3
NGS Next Generation Sequencing
NPM1 Nucleophosmin 1
OD Optical Density
ON Overnight
PK Proteinase K
PNA Peptide Nucleic Acid
10

pre - miRNA Precursor microRNA
pri - miRNA Primary microRNA
RA Reducing Agent
RFU Relative Fluorescence Units
RISC RNA – Induced Silencing Complex
RT Room Temperature
RT – qPCR Reverse – Transcription Quantitative Polymerase Chain Reaction
SAv Streptavidin
S/B Signal/Background
S/C SMART/Control
SIRT1 Sirtuin 1
SPR Surface Plasmonic Resonance
ssDNA Single – Stranded DNA
Sulfo-NHS Sulfo – N – hydroxysulfosuccinimide
TE Tris – EDTA
TMB 3,3’,5,5’ – Tetramethylbenzidine
TRBP Transactivation Response RNA Binding Protein
ULoQ Upper Limit of Quantification
UDP – GalNAz Uridine Diphosphate – N – Acetylgalactosamine
UTR Unstranslated Region
WHO World Health Organization
2. INTRODUCCIÓN
El rol de los biomarcadores en el diagnóstico y el pronóstico
Un biomarcador es una característica medible que se utiliza para evaluar, de manera objetiva,
un proceso biológico normal, un proceso patogénico o una respuesta a un tratamiento
terapéutico (Aronson y Ferner, 2017). En términos generales, un biomarcador puede incluir
diversos datos fisiológicos, como el ritmo cardíaco o el volumen pulmonar. Sin embargo, el
11

concepto más específico de biomarcador molecular se enfoca en parámetros o patrones
bioquímicos o genéticos (Strimbu et al., 2010).
La investigación en campos como la genómica, proteómica, glicómica y metabolómica ha
destacado la importancia de la detección y cuantificación de una amplia variedad de analitos,
que incluyen genes, proteínas, pequeñas moléculas y combinaciones de estas (Wang et al.,
2016). Se han realizado grandes esfuerzos en el estudio del genoma y del proteoma, lo que ha
permitido un conocimiento más profundo de la base molecular de diferentes enfermedades
(Vogenberg et al., 2010).
Los biomarcadores deben cumplir un número de criterios clave, dependiendo de su potencial
(Wu et al., 2021). Entre los criterios más importantes, se encuentran los siguientes:
 Accesibilidad: deben ser detectables mediante métodos no invasivos.
 Especificidad: deben ser específicos para la enfermedad o patología de interés.
 Detección temprana: deben proporcionar información fiable sobre la enfermedad antes de
la aparición de síntomas clínicos.
 Sensibilidad: deben ser capaces de reflejar cambios en la patología, como la progresión de
la enfermedad o la respuesta al tratamiento.
 Transferibilidad: los resultados obtenidos en modelos experimentales deben ser aplicables
a humanos, abarcando tanto estudios preclínicos como clínicos.
 Estabilidad: deben tener una vida media prolongada en la muestra para garantizar la
fiabilidad del análisis.
 Robustez: deben permitir una detección precisa sin ser afectados por factores ambientales
o condiciones no relacionadas con la enfermedad.
Además de estos criterios, los nuevos biomarcadores también deben superar desafíos
regulatorios y de validación clínica para ser aprobados para su uso en la práctica médica.
En este contexto, el diagnóstico temprano de enfermedades es fundamental para un manejo
terapéutico eficaz, lo cual es de suma importancia para el pronóstico y la supervivencia del
paciente (Li et al., 2014). De hecho, el empleo de biomarcadores con alta sensibilidad y
especificidad resulta crucial para lograr un diagnóstico preciso en etapas tempranas de la
enfermedad (Saalberg et al., 2016; Benkoe et al., 2015). Actualmente, el mayor desafío en el
campo de la biomedicina es trasladar el conocimiento adquirido sobre biología molecular a lo
largo de los años a la detección de enfermedades para mejorar el tratamiento de los pacientes.
12

Por ejemplo, el conocimiento de las vías de señalización del cáncer ha llevado al desarrollo de
terapias dirigidas que se basan en la detección de biomarcadores específicos. A pesar de los
avances, la mayoría de los biomarcadores disponibles no son lo suficientemente potentes, ya
que carecen de la sensibilidad y especificidad necesarias, especialmente en las primeras etapas
de enfermedades como el cáncer o en la enfermedad de Alzheimer (Sims et al., 2020; Su,
2013).
Por lo tanto, existen dos grandes retos en el campo del diagnóstico clínico. El primero
consiste en identificar biomarcadores más específicos (Diamandis, 2004), y el segundo en
desarrollar plataformas más sensibles y con capacidad de detección multiplexada, es decir,
que permitan detectar múltiples biomarcadores simultáneamente. Estos avances mejorarían el
valor predictivo del diagnóstico al analizar las respuestas colectivas de varios biomarcadores
presentes en una muestra (Makarov et al., 2009). Por ejemplo, en el cáncer, la detección
multiplexada podría aumentar la precisión diagnóstica y reducir el número de pacientes que
requieren biopsias invasivas y dolorosas (Arellano – García et al., 2008; Wei et al., 2009).
Además, en las primeras etapas de la enfermedad, las concentraciones de biomarcadores
pueden variar en un rango de hasta ocho órdenes de magnitud, y algunos pueden estar
presentes en concentraciones muy bajas (Kozak et al., 2005). Esto plantea un reto
significativo para las técnicas actuales, que deben ser capaces de detectar simultáneamente
biomarcadores de distinta naturaleza, como péptidos, proteínas, anticuerpos y ácidos
nucleicos (Flamini et al., 2006), dentro de un amplio rango de concentraciones y a partir de
pequeñas cantidades de muestra (Su, 2013).
La irrupción de los miRNAs como biomarcadores clave
¿Qué son los miRNAs?
Los miRNAs (microRNAs) son pequeñas moléculas de RNA no codificantes de
aproximadamente 20 – 25 nucleótidos y que están implicadas en la regulación génica (He y
Hannon, 2004; Lee et al., 1993). Los miRNAs fueron descubiertos por primera vez en
Caenorhabditis Elegans a principios de la década de 1990 (Lee et al., 1993). Unos años
después, se verificó por primera vez una correlación entre la abundancia de miRNAs y una
enfermedad humana, en particular la leucemia de células B (Calin et al., 2002). Estos dos
eventos fueron la clave para una serie de investigaciones genómicas que revelaron una
extensa transcripción de muchos miRNAs y otros RNA no codificantes (Bartel, 2004;
Reinhart et al., 2000; Estellar, 2011). Los miRNAs son particularmente prometedores como
13

biomarcadores debido a su estabilidad en fluidos corporales y su relación con procesos
patológicos específicos.
Hasta la fecha se han identificado más de 4800 miRNAs, incluidos 2693 miRNAs de origen
humano (Kozomara et al., 2019). Si bien el número exacto de miRNAs funcionales en
humanos aún está en investigación. La función de los miRNAs eucariotas es regular la
expresión génica a nivel postranscripcional (Gebert y MacRae, 2019), desempeñando un
papel fundamental en la diferenciación, proliferación y supervivencia celular. Esto se logra al
unirse a moléculas de mRNA diana complementarias, bloqueando su función mediante dos
posibles mecanismos: la degradación del mRNA o la inhibición de su traducción uniéndose a
la región 3’UTR (Unstranslated Region) (Friedman et al., 2009; Ha y Kim, 2014; Li et al.,
2014). Por lo tanto, se considera que los miRNAs desempeñan funciones reguladoras clave en
prácticamente todos los aspectos fisiológicos y patológicos de la biología, constituyendo un
mecanismo de control epigenético fundamental a nivel postranscripcional que permite la
regulación temporal de la expresión del mRNA. Así, la expresión disfuncional de los miRNAs
es una característica de muchos procesos patológicos, incluidos el cáncer, los trastornos
metabólicos, las enfermedades inflamatorias, las enfermedades cardiovasculares, las
enfermedades del neurodesarrollo y las enfermedades autoinmunes (Rupaimoole y Slack,
2017).
Biogénesis y mecanismo de acción de los miRNAs
La biogénesis canónica de los miRNAs (figura 1) es un proceso con varios pasos que empieza
en el núcleo y termina en el citoplasma (Ho et al., 2022). Inicialmente, los miRNAs se
transcriben principalmente por las enzimas RNA polimerasas tipo II a pri – miRNA (Primary
microRNA) de 300 a 1000 nucleótidos con una o más estructuras de horquilla (Lee et al.,
2004; Lin et al., 2003). Dentro del núcleo, el pri – miRNA es procesado por la RNasa Drosha
y su cofactor DGCR8 (DiGeorge Syndrome Critical Region 8) a un pre – miRNA (Precursor
microRNA) de 60 a 90 nucleótidos (Lin et al., 2003; Denli et al., 2004). Este pre – miRNA es
transportado al citoplasma por la Exportina – 5 a través de los poros nucleares (Yi et al.,
2003). En el citoplasma, la RNasa Dicer junto con la proteína TRBP (Transactivation
Response RNA Binding Protein) corta el pre – miRNA generando un RNA bicatenario de
aproximadamente 22 nucleótidos. Una de las cadenas de la horquilla del pre – miRNA será la
hebra guía que forme el
miRNA maduro para la Figura 1. Biogénesis canónica de miRNAs.
regulación génica, y la otra cadena será la hebra pasajera, que suele ser degradada (Meijer et
14

al., 2014; Bartel, 2004). Este RNA bicatenario se incorpora a una proteína AGO (Argonaute)
formando el complejo RISC (RNA – Induced Silencing Complex). Entonces, la hebra guía se
retiene, que será el miRNA maduro, mientras que la hebra pasajera se libera. El miRNA
maduro se clasifica como 5p o 3p dependiendo de si proviene del brazo 5’ o 3’ del pre –
miRNA. Una vez incorporado al complejo RISC, el miRNA maduro dirige al complejo hacia
el extremo 3’UTR del mRNA objetivo, lo que da como resultado la escisión del mRNA o la
inhibición de la traducción (Bartel, 2004; Meister, 2013).
Por otro lado, algunos miRNAs, conocidos como miRtrons, se procesan a partir del intrón del
gen codificador de proteínas mediante la maquinaria de empalme de pre – mRNA (splicing),
en lugar de seguir la vía de biogénesis canónica (Berezikov et al., 2007).
Generalmente sólo existe complementariedad parcial entre los nucleótidos de la región
“semilla” del miRNA (una secuencia de 6 a 8 nucleótidos en el extremo 5’) y la del mRNA
diana. La complementariedad perfecta entre miRNA y mRNA no es fundamental para reducir
la expresión génica, y, de hecho, rara vez ocurre en mamíferos. Tanto el pequeño tamaño de la
región semilla, como el incompleto emparejamiento con el mRNA diana, permiten que un
mismo miRNA pueda suprimir la expresión de diferentes genes, a menudo funcionalmente
relacionados. A su vez, un mismo mRNA puede contener múltiples sitios de unión para varios
miRNAs. Esto genera una compleja red de interacción miRNA – mRNA (Brennecke et al.,
2005; Doench y Sharp, 2004; Lai, 2002; Jee y Lai, 2014). Por lo tanto, los miRNAs
constituyen una densa red reguladora de la expresión génica con múltiples efectos
cooperativos sobre un gran número de genes; lo que permite controlar diversas rutas
moleculares a distintos niveles.
miRNAs circulantes y su potencial en el diagnóstico y el pronóstico
La mayoría de los miRNAs se localizan dentro de las células, y se estima que cada célula
contiene aproximadamente 500 copias de miRNAs individuales (Liang et al., 2007). Sin
embargo, se han detectado bajos niveles de miRNAs en entornos extracelulares, pasando a
llamarse miRNAs circulantes, que son aquellos que migran fuera de las células e ingresan en
los fluidos corporales y que tienen un papel fundamental en la comunicación intercelular
(Pritchard et al., 2012; Arroyo et al., 2011; Vickers et al., 2011; Théry, 2011; Kogure et al.,
2011; Weber et al., 2010).
15

Aproximadamente el 90% de los miRNAs circulantes forman complejos con proteínas como,
por ejemplo, AGO2 (Arroyo et al., 2011), NPM1 (Nucleophosmin 1) y HDL (High Density
Lipoproteins) (Vickers et al., 2011). El 10% restante de los miRNAs circulantes son
secretados en exosomas (Théry, 2011), una forma de microvesículas derivadas de endosomas
que se fusionan con la membrana plasmática (Théry et al., 2002). Tanto el empaquetamiento
en exosomas como la asociación con proteínas son mecanismos esenciales para proteger a los
miRNAs circulantes de la digestión por parte de RNAsas presentes en los fluidos biológicos
(Weickmann y Glitz, 1982). La investigación sobre los mecanismos exactos de liberación y
captación de miRNAs circulantes aún está en curso.
Los exosomas que contienen miRNAs pueden introducirse en las células a través de la
captación endocítica, la fusión de membranas o la integración con receptores específicos en la
superficie celular. Una vez que los miRNAs entran en las células, realizan su función al unirse
a los mRNAs diana, ya sea degradándolos o inhibiendo su traducción (Valadi et al., 2007;
Morello et al., 2013). El contenido específico de los exosomas varía según la célula de origen
y puede cambiar en función de las condiciones fisiológicas y patológicas. Por lo tanto, los
miRNAs circulantes en los exosomas pueden reflejar estas variaciones. El hecho de que los
miRNAs estén presentes en varios fluidos corporales, sean estables y puedan reflejar la
condición fisiopatológica del tejido de origen hace que sean un nuevo grupo de biomarcadores
prometedor (Valihrach et al., 2020). Esto sugiere que es posible desarrollar métodos de
diagnóstico y pronóstico no invasivo utilizando miRNAs circulantes (Validi et al., 2007;
Hayes et al., 2014).
La primera evidencia de que los miRNAs podían tener potencial diagnóstico y pronóstico se
presentó poco después de la identificación de los primeros miRNAs en humanos. El estudio
mostró una correlación entre la pérdida de miR – 15 y miR – 16 y la aparición de leucemia de
células B (Calin et al., 2002). Sin embargo, la primera indicación de que los miRNAs se
podían convertir en biomarcadores de fácil acceso para el diagnóstico y el pronóstico de
distintas enfermedades, se produjo tres años después, cuando se aislaron miRNAs de suero de
un paciente, y su perfil reveló patrones específicos en diferentes grupos de enfermedades
(Lawrie et al, 2008; Mitchell et al., 2008; Chen et al., 2008). A partir de este momento,
distintos estudios han confirmado firmas de miRNAs específicas en muchos tipos de
enfermedades humanas, incluidos diferentes cánceres, y han demostrado que estas firmas se
pueden detectar en fluidos corporales (Godoy et al., 2018; Izzotti et al., 2016; Larrea et al.,
2016). Hay evidencias de que los niveles de los miRNAs pueden cambiar según el avance de
16

una enfermedad o en respuesta a un tratamiento. Gracias a estas características, los miRNAs
pueden usarse como un método no invasivo para diagnosticar de forma precisa, pronosticar la
evolución de la enfermedad, y guiar el tratamiento evaluando la respuesta del paciente al
mismo.
miR – 122 – 5p y su potencial en el daño hepático
El daño hepático inducido por medicamentos (DILI, por sus siglas en inglés, Drug – Induced
Liver Injury) es un término utilizado para describir el daño inesperado que los fármacos de
uso común pueden ocasionar en el hígado, un órgano particularmente susceptible debido a su
papel central en el metabolismo de los xenobióticos que ingresan a través del tracto
gastrointestinal (Andrade et al., 2019). El tipo intrínseco, también conocido como predecible,
ocurre poco después de la exposición al fármaco, en un rango de horas a días, y afecta a la
mayoría de las personas expuestas cuando la toxicidad del compuesto supera un nivel umbral
específico (Andrade et al., 2019). Por otro lado, el tipo idiosincrásico, o impredecible, está
influenciado por una interacción compleja entre factores ambientales y características del
huésped, lo que lo hace mucho menos frecuente, afectando a menos de 1 de cada 10.000
personas expuestas. Este tipo de daño suele manifestarse tras un período de latencia más
prolongado, que varía desde unos pocos días hasta varios meses (Chen et al., 2015). El
principal ejemplo de DILI de tipo intrínseco es la hepatotoxicidad por paracetamol o APAP (N
– acetyl – p – aminophenol), que representa aproximadamente el 50% de los casos de
insuficiencia hepática aguda en Estados Unidos y algunos países europeos (Reuben et al.,
2016; Donnelly et al., 2017). El APAP es un agente notablemente seguro cuando se usa en
dosis terapéuticas, pero la mayoría de las sobredosis de APAP reportadas son el resultado de
intentos de suicidio (Gunnell et al., 2000).
El miR – 122 – 5p es un miRNA de gran relevancia clínica, ya que es liberado al torrente
sanguíneo por las células hepáticas y ha demostrado ser un indicador fiable de DILI (Howell
et al., 2018; Sanjay y Girish, 2017). Este biomarcador es más sensible y temprano que otros
como la alanina y la aspartato aminotransferasa (Moreno – Torres et al., 2022; Howell et al.,
2018; Sanjay y Girish, 2017). Además, el miR – 122 – 5p se ha utilizado in vitro para evaluar
la toxicidad celular de nuevos fármacos y como biomarcador para el desarrollo de una prueba
rápida de sobredosis de fármacos y daño hepático (Wang et al., 2015; Kilic et al., 2016). Por
otro lado, Sherlock et al. han demostrado que el APAP aumenta la expresión de IL-6
(Interleukin 6). Por lo tanto, este estudio sugiere que el proceso inflamatorio juega un papel
importante en la respuesta hepática al daño inducido por el APAP (Sherlock et al., 2022).
17

La evaluación conjunta de miR – 122 – 5p e IL-6 proporciona una herramienta poderosa para
mejorar la precisión y rapidez del diagnóstico de DILI. Mientras que el miR – 122 – 5p
proporciona una señal directa y específica del daño hepático, la IL-6 refleja la magnitud de la
respuesta inflamatoria asociada al daño, aportando una perspectiva complementaria. Integrar
estos dos biomarcadores en un solo análisis ofrecería una visión más completa del estado
hepático y permitiría distinguir mejor entre distintos mecanismos de lesión, facilitando
intervenciones clínicas más precisas.
Por lo tanto, la detección simultánea de miR-122-5p e IL-6 podría mejorar significativamente
la capacidad de diagnóstico y pronóstico en casos de DILI.
miRNAs en el diagnóstico de la enfermedad de Alzheimer
La enfermedad de Alzheimer, una de las principales causas de demencia, es un trastorno
neurodegenerativo progresivo que afecta a millones de personas en todo el mundo (Khan et
al., 2020). En 2019, la WHO (World Health Organization) estimó que aproximadamente 55
millones de personas padecían demencia en todo el mundo, una cifra que se prevé que
aumentará a 139 millones en 2050 (World Health Organization, 2024). La neurodegeneración,
que involucra procesos como la atrofia y la pérdida de neuronas, está relacionada con varios
mecanismos patológicos. Entre ellos se encuentra la deposición tóxica de oligómeros de Aβ
(Amyloid – beta) en el parénquima y la vasculatura cerebral, formando placas amiloides, así
como la formación de ovillos neurofibrilares intraneuronales compuestos por la proteína Tau
hiperfosforilada. (Kumar et al., 2015; Magalingam et al., 2018). El desarrollo de la
enfermedad de Alzheimer pasa por tres etapas: la etapa presintomática, la etapa prodrómica
de MCI (Mild Cognitive Impairments) y la forma clínica de la enfermedad de Alzheimer
(Dubois et al., 2007; Reitz et al., 2011). Actualmente, no existen agentes en la práctica clínica
que puedan frenar el desarrollo de la enfermedad y solo se dispone de tratamiento
sintomático. Una posible razón es la etapa avanzada de la enfermedad en el momento de
intervención farmacológica (Mossello & Ballini 2012). Por lo tanto, existe una necesidad
urgente de biomarcadores que puedan identificar a los pacientes con MCI y etapas tempranas
de la enfermedad de Alzheimer para lograr un efecto sólido de las terapias modificadoras de
la enfermedad (Bateman et al., 2012).
En diferentes estudios se ha visto que los niveles de varios miRNAs y sus mRNAs diana se
alteran en la enfermedad de Alzheimer, afectando a procesos clave en su desarrollo y
progresión, como la producción de Aβ y la fosforilación de Tau (Dehghani et al., 2018).
18

Debido a que los miRNAs presentan un perfil dinámico en la enfermedad de Alzheimer, se
han realizado estudios para caracterizar aquellos que se expresan diferencialmente en fluidos
corporales de pacientes, como el CSF (Cerebrospinal Fluid), el plasma y el suero (Kumar y
Reddy, 2016). Los exosomas que contienen miRNAs pueden cruzar la barrera
hematoencefálica, permitiendo una detección indirecta y no invasiva (Saeedi et al., 2019).
Estos miRNAs reflejan la fisiopatología de la enfermedad y responden a los cambios
asociados con su desarrollo (Klyucherev et al., 2022).
En diferentes estudios se ha observado que el miR – 200a – 3p puede ser fundamental en la
enfermedad de Alzheimer. Schipper et al. encontraron niveles altos del miR – 200a – 3p en
células mononucleares de la sangre de pacientes con enfermedad de Alzheimer temprana
(Schipper et al., 2007), y Lau et al. observaron un aumento en la corteza cerebral (Lau et al.,
2013). Estos estudios indican que el miR – 200a – 3p desempeña un papel crítico en la
neuroinflamación, la respuesta inflamatoria y la apoptosis, modulando varios mRNAs
objetivo como SIRT1 (Sirtuin 1), que es una proteína antiapoptótica con función protectora en
enfermedades neurodegenerativas como la enfermedad de Alzheimer (Herskovits y Guarante,
2014; Humpel, 2011). Por otro lado, Nagaraj et al. identificaron un perfil de 6 miRNAs en
muestras de plasma que serviría para discriminar entre sujetos control y pacientes con MCI,
con un probable desarrollo temprano de la enfermedad de Alzheimer, entre los cuales se
encuentra el miR – 200a – 3p (Nagaraj et al., 2017). Otro miRNA incluido en este perfil es el
miR – 486 – 5p, cuya relación con la enfermedad de Alzheimer ha sido descrita en un estudio
posterior (Peña – Bautista et al., 2022). Estos son solo dos ejemplos de miRNAs que parecen
tener un papel fundamental en la enfermedad de Alzheimer. Sin embargo, existen otros
muchos miRNAs que son buenos candidatos para entender y diagnosticar esta enfermedad
(Klyucherev et al., 2022).
Por lo tanto, detectar de manera simultánea los miRNAs miR – 200a – 3p y miR – 486 – 5p
en fluidos corporales, como el plasma y el CSF, podría proporcionar una herramienta
diagnóstica poderosa para la enfermedad de Alzheimer, permitiendo no solo una
identificación más temprana de la enfermedad, sino también una monitorización más precisa
de su progresión. Este enfoque puede ser crucial para identificar a los individuos en riesgo
antes de que se manifiesten síntomas clínicos significativos, lo que abre la puerta a la
aplicación de terapias modificadoras de la enfermedad en una etapa más efectiva. Además, la
capacidad de seguir estos miRNAs a lo largo del tiempo proporcionará una herramienta
valiosa para monitorizar la progresión de la enfermedad, permitiendo observar los cambios
19

moleculares asociados con el deterioro cognitivo y ajustar las intervenciones terapéuticas de
manera más precisa, mejorando el pronóstico de los pacientes. En resumen, la detección
combinada de miR-200a-3p y miR-486-5p representa una estrategia prometedora para el
diagnóstico temprano y el seguimiento de la enfermedad de Alzheimer.
Metodologías y dificultades en la detección de miRNAs
Los miRNAs existen en tres formas diferentes, pri – miRNA, pre – miRNA y miRNA
maduro. La detección y cuantificación de las dos primeras formas, debido a su tamaño, es
similar a la de los mRNAs. Sin embargo, la detección y cuantificación de los miRNAs
maduros es más complicada debido a que son mucho más pequeños. Existen varios métodos
para la detección y cuantificación de miRNAs, como son el Northern Blot, los microarrays de
miRNAs, la RT – qPCR (Reverse – Transcription Quantiative Polymerase Chain Reaction),
la PCR digital y la NGS (Next Generation Sequencing) (Ho et al., 2022).
El método Northern Blot es considerado el gold estándar para confirmar si una nueva
molécula es un miRNA, porque permite identificar el tamaño del RNA. Este método se puede
utilizar para cuantificar los miRNAs y fue el primer método utilizado para ello. Sin embargo,
su sensibilidad es baja, ya que requiere cantidades elevadas de RNA y el uso de sondas de
oligonucleótidos, además de ser una metodología que consume mucho tiempo (Ho et al.,
2022; Laneve y Giangrande, 2014).
La técnica de RT – qPCR permite detectar y cuantificar miRNAs de forma más rápida y
sensible en comparación con el Northern Blot, utilizando una cantidad mucho menor de RNA.
Sin embargo, para detectar miRNAs mediante RT – qPCR, es fundamental diseñar
correctamente los cebadores, ya que los miRNAs son muy cortos (20 – 25 nucleótidos) y
tienen secuencias muy similares entre ellos. Los cebadores comunes, empleados en una PCR
normal, suelen tener la misma longitud que los miRNAs (20 – 25 nucleótidos), y, por lo tanto,
no pueden extenderse cuando se unen a sus miRNAs objetivo. Además, la variabilidad en la
eficiencia de la transcripción interesa puede ser una fuente adicional de error (Ho et al., 2022;
Androvic et al., 2017; Benes y Castoldi, 2010; Raymond et al., 2005; Vester y Wengel, 2004).
Para superar este reto, se han desarrollado técnicas más avanzadas. Una de ellas consiste en
aumentar la longitud de los miRNAs añadiendo una cola poli A en el extremo 3’ del miRNA a
través de la polimerasa poli A (Ho et al., 2022; Androvic et al., 2017; Raymond et al., 2005).
Otra técnica, reemplaza los nucleótidos normales de los cebadores por nucleótidos LNA
(Locked Nucleic Acid). Los LNA son un grupo de nucleótidos “bloqueados” más estables y
20

que se unen con mayor afinidad a los miRNAs, mejorando así la precisión de la detección
(Vester y Wengel, 2004). Sin embargo, estos métodos son complejos y costosos, lo que
dificulta su implementación en la rutina médica.
Aunque la RT – qPCR es una herramienta poderosa para la cuantificación de miRNAs, en las
muestras de RNA total también están presentes otras formas de RNA, como pri – miRNA y
pre – miRNA, lo que pude reducir la efectividad de la transcripción inversa y la PCR
cuantitativa. Por ello, es necesario separar los miRNAs del RNA total antes de realizar la
transcripción inversa, especialmente cuando los miRNAs están poco expresados (Kramer,
2011). Este paso adicional hace que la metodología sea más larga y compleja, y puede resultar
en la pérdida de material.
Sin embargo, la RT – qPCR también ofrece una gran ventaja, la detección simultánea de
varios miRNAs (Chen et al., 2005). Aunque, la multiplexación con esta técnica tiene una gran
complejidad debido a la dificultad en el diseño de los cebadores y a la necesidad de ajustar las
condiciones de la reacción, pudiendo producir resultados poco fiables.
La PCR digital ayuda a cuantificar un miRNA dividiendo una reacción de PCR en miles de
reacciones de PCR. Por lo tanto, la PCR digital permite una cuantificación absoluta, a
diferencia de la RQ – qPCR que permite una cuantificación relativa. Se ha demostrado que la
PCR digital ofrece una gran precisión y es eficaz para la cuantificación absoluta de miRNAs
objetivo en suero en comparación con la PCR en tiempo real (Ho et al., 2022; Campomenosi
et al., 2016).
Al mismo tiempo, se pueden detectar y cuantificar miRNAs utilizando técnicas como los
microarrays de miRNAs o la NGS, que proporcionan perfiles completos de expresión de
miRNAs a un precio aceptable y con alto rendimiento. Mientras que los microarrays requieren
una cantidad sustancial de material de partida, la NGS necesita menos material de entrada.
Además, la NGS es la única técnica que permite identificar miRNAs nuevos. Sin embargo,
esta técnica tiene la desventaja de que la preparación de la biblioteca es compleja y puede
introducir un sesgo significativo en la secuenciación, es decir, puede generar variaciones en
los datos de salida debido a los métodos utilizados en la preparación de la biblioteca (Ho et
al., 2022). Además, el análisis bioinformático de los datos de secuenciación también puede
ser un desafío, especialmente en la identificación de miRNAs raros o modificados.
En la práctica clínica, debido a la baja concentración que tienen los miRNAs circulantes, la
RT – qPCR y la NGS son las plataformas que se emplean habitualmente para medir miRNAs,
21

pero los diferentes procesos de normalización de los datos pueden producir inconsistencias y
cierta irreproducibilidad. Para abordar el problema, es fundamental una normalización
adecuada con controles internos fiables. En diferentes estudios se han utilizado diversos
transcritos de RNA pequeños como agentes de referencia, por ejemplo, miRNA – 16 – 5p,
pero ninguno de ellos es satisfactorio, ni se ha generalizado su uso como control de
normalización para la medición de miRNAs. Además, es probable que el uso de un solo gen
de referencia sea insuficiente para medir con precisión los miRNAs, por lo que se recomienda
una combinación de diferentes miRNAs como control (Ho et al., 2022).
La mayoría de los problemas parecen estar relacionados con una falta generalizada de
reproducibilidad. Una de las principales causas de dicha irreproducibilidad es el
procesamiento de las muestras, que incluye su recogida y almacenamiento, el aislamiento del
RNA total y el enriquecimiento de la fracción pequeña de RNA cuando sea necesario (Khoury
y Tran, 2015; Tiberio et al., 2015; He et al., 2015; Weber et al., 2010). Un enfoque alternativo
representa la detección directa de miRNAs en biopsias líquidas sin extracción de RNA, lo que
supone un tiempo de respuesta reducido, facilidad de uso y ninguna pérdida de material
durante la extracción. Sin embargo, la RT – qPCR con este enfoque alternativo se caracteriza
por una menor sensibilidad, precisión y reproducibilidad (Godoy et al., 2019). Por lo tanto, es
importante equilibrar los beneficios de este enfoque con sus limitaciones.
Para poder implementar los miRNAs como biomarcadores en entornos clínicos, es necesario
desarrollar nuevas plataformas de detección que mantengan algunas características de las
tecnologías actuales, pero que superen sus limitaciones. Estas nuevas plataformas deben ser
robustas, sensibles y específicas, así como tener la capacidad de detectar varios miRNAs
simultáneamente. Además, deben ofrecer resultados rápidos, ser fáciles de usar y permitir el
análisis directo de miRNAs en muestras biológicas sin necesidad de tratamientos complejos.
También sería deseable que estas plataformas puedan detectar miRNAs y otras biomoléculas,
como proteínas, en un solo dispositivo, lo que permitiría contar con un panel de
biomarcadores de diferente naturaleza química, proporcionando información complementaria
que mejore el diagnóstico. Cabe destacar que todas estas tecnologías están diseñadas
exclusivamente para la detección y cuantificación de ácidos nucleicos. Si se quisiera detectar
otras biomoléculas, como por ejemplo proteínas, juntos a los miRNAs, se necesitaría usar
tecnologías independientes. Para el análisis de proteínas, el método más utilizado es la
tecnología ELISA, que tiene mecanismos de detección y propiedades diferentes (Flamini et
al., 1999; Sansonno et al., 1997; Ideker et al., 2001).
22

Con el objetivo de superar estas limitaciones, esta tesis propone el desarrollo de una nueva
plataforma de detección de miRNAs basada en la integración de la química dinámica de
Destina Genómica y la tecnología plasmónica ultrasensible de Mecwins. Esta plataforma tiene
el potencial de ofrecer una mayor sensibilidad, especificidad y capacidad de multiplexación
en comparación con las tecnologías existentes, lo que podría mejorar el diagnóstico y el
pronóstico de diversas enfermedades.
Tecnología plasmónica ultrasensible de Mecwins
Principio básico de la detección con nanopartículas metálicas
Mecwins S.A ha desarrollado la tecnología plasmónica AVAC (patentes: US11519856B2,
US11519843B2), un sistema innovador que combina un inmunoensayo tipo sándwich
convencional con nanopartículas metálicas, permitiendo la detección ultrasensible del
biomarcador de interés (Cebrián et al., 2025).
En los últimos años, el uso de nanopartículas en aplicaciones biomédicas ha demostrado ser
una herramienta muy efectiva, especialmente en la detección de biomarcadores. Esta
detección puede alcanzar sensibilidades extremadamente altas, incluso a niveles de pico y
femtomolar. Esto se logra al convertir el reconocimiento biológico en señales físicas que se
pueden medir y amplificar (Nam et al., 2003; Xie et al., 2012, Saha et al., 2012). En
particular, las GNPs (Gold Nanoparticles) son ideales para estas aplicaciones debido a su fácil
síntesis, estabilidad, funcionalización y detección (Amina y Guo, 2020). Además, gracias a
sus propiedades plasmónicas permiten la dispersión la luz cuando son irradiadas con una
radiación electromagnética apropiada, lo que las hace idóneas para su uso en la tecnología
AVAC (Olson et al., 2015; Mayer&Hafner, 2011).
La tecnología AVAC consiste en un microscopio de campo oscuro que ilumina la muestra,
haciendo que las GNPs dispersen luz de forma característica debido a sus propiedades
plasmónicas. Posteriormente, esta luz dispersada es amplificada por la tecnología, logrando
así una sensibilidad excepcional mediante el conteo digital de nanopartículas individuales. El
principio clave de esta tecnología es la SPR (Surface Plasmonic Resonance), un fenómeno
que ocurre cuando los electrones conductores de la superficie de las GNPs oscilan en
respuesta a una fuente de luz blanca. Esta resonancia, que se extiende desde el espectro visible
hasta el infrarrojo, depende de parámetros como el tamaño, la forma y el material de las
nanopartículas, proporcionando una huella óptica única que facilita su diferenciación. La
tecnología analiza los espectros de emisión de GNPs de diferentes tamaños y formas, lo que la
23

convierte en una herramienta poderosa para la detección simultánea de varios analitos. No
obstante, el comportamiento de las GNPs en la plataforma está influenciado por factores
como el movimiento browniano y las fuerzas de sedimentación, que dependen del tamaño de
las nanopartículas (Haw, 2002). Esto es relevante en ensayos de multiplexado, donde el
tiempo de incubación en la superficie es común para todas las nanopartículas utilizadas,
independientemente de su tamaño. Finalmente, la síntesis reproducible de GNPs permite
modificaciones químicas con diversos grupos funcionales (Dykman y Khlebtsov, 2012). Estas
modificaciones son fundamentales para la inmovilización de anticuerpos específicos, lo que
facilita la detección precisa de biomarcadores. Este proceso constituye un factor clave en la
efectividad de la tecnología AVAC, al garantizar la funcionalización de las GNPs para la
detección de biomarcadores específicos
Componentes y propiedades de la tecnología
La tecnología óptica AVAC para la detección ultrasensible de biomarcadores proteicos consta
de dos componentes principales. El primero es un cartucho desechable de 96 pocillos,
diseñado específicamente para cada aplicación clínica, en el que se realiza el inmunoensayo
para detectar biomarcadores específicos en las muestras de pacientes. Este cartucho cumple
con los estándares especificados por el American National Standards Institute (ANSI/SBS 1 –
2004), lo que asegura su compatibilidad con los sistemas de manejo de muestras utilizados en
hospitales y laboratorios. La superficie del cartucho está funcionalizada con anticuerpos de
captura específicos para los biomarcadores que se quieren detectar y cuantificar. El protocolo
de fabricación del cartucho se ha optimizado para garantizar una alta densidad de moléculas
de anticuerpos, una correcta orientación y un bloqueo eficiente, reduciendo las interacciones
inespecíficas y maximizando la captura de los biomarcadores.
El segundo componente es una plataforma óptica automatizada, que utiliza un principio óptico
basado en la emisión plasmónica de nanopartículas metálicas. Esta tecnología ha sido
optimizada mediante tres pilares fundamentales para lograr una sensibilidad excepcional en la
detección de biomarcadores. Primero, el inmunoensayo se lleva a cabo sobre un sustrato con
multicapa dieléctrica, diseñado para amplificar la dispersión de la luz mucho más que un
sustrato de silicio convencional. Este diseño avanzado aumenta significativamente la señal
luminosa, hasta 40 veces más, lo que permite detectar concentraciones extremadamente bajas
de biomarcadores. En segundo lugar, la plataforma AVAC cuenta con la capacidad de realizar
un conteo directo y preciso de nanopartículas individuales. Estas nanopartículas, unidas
específicamente a los biomarcadores de interés, sirven como indicadores que reflejan de
24

manera indirecta la cantidad de biomarcador presente en la muestra. Este enfoque no solo
mejora la precisión del análisis, sino que también garantiza una medición cuantitativa
confiable. Finalmente, la tecnología incluye un análisis espectral avanzado, capaz de
diferenciar entre nanopartículas individuales y aglomerados de partículas. Esta capacidad es
crucial para minimizar el ruido de fondo que podría interferir con los resultados, aumentando
la especificidad del sistema.
Gracias a estas innovaciones, la tecnología AVAC logra sensibilidades extraordinarias, en el
rango de femtogramos por mililitro, superando ampliamente las capacidades de las
tecnologías actuales en la práctica clínica. Esto, junto con la capacidad de la tecnología de
detectar simultáneamente varios analitos, posiciona a AVAC como una herramienta de
vanguardia en el diagnóstico y monitoreo de enfermedades. Como ya se ha mencionado
anteriormente, la capacidad de detectar simultáneamente miRNAs y proteínas con alta
sensibilidad y especificidad es fundamental para abordar la complejidad de enfermedades
como el DILI y el Alzheimer.
Metodología del inmunoensayo
La muestra del paciente se mezcla con las GNPs
que previamente han sido recubiertas con un
anticuerpo de detección específico del biomarcador
de interés. Esta mezcla se deposita en cada pocillo
del cartucho, el cual está recubierto con anticuerpos
de captura específicos del biomarcador de interés.
Por lo tanto, los biomarcadores son capturados por
el anticuerpo de captura y etiquetados con las GNPs
formando la estructura tipo sándwich (figura 2).
Entre todas las proteínas presentes en la muestra del
paciente, únicamente el biomarcador de interés es Figura 2. Mecanismo de detección del
biomarcador de interés utilizando la
reconocido tanto por el anticuerpo de captura en la tecnología AVAC a través de un
superficie como por el anticuerpo de detección conjugado con las GNPs. Posteriormente, se
realizan lavados para eliminar las GNPs que no se han unido a la superficie.
25

Finalizado el ensayo biológico, el cartucho se introduce en la plataforma de lectura AVAC
para medir la concentración de los biomarcadores de interés a través del conteo de las GNPs.
Para ello, se ilumina la muestra con una fuente de luz blanca de longitudes de onda
específicas, generalmente entre 520 y 600 nm, lo que permite excitar de forma óptima las
GNPs. Esta longitud de onda coincide con la SPR de las GNPs, generando una intensa
absorción y dispersión de la luz que es amplificada por el sustrato dieléctrico. El detector
óptico de la tecnología AVAC captura esta luz y, a través de un análisis espectral, identifica las
GNPs individuales en las imágenes. Este análisis permite diferenciar partículas de diversos
tamaños y formas, distinguir partículas individuales de agregados, y separar partículas de
posibles contaminantes, mejorando así la especificidad de la detección y reduciendo el ruido
en los resultados. Tras el análisis de las señales, la tecnología AVAC permite contar
digitalmente las nanopartículas individuales, lo que permite determinar la cantidad de cada
biomarcador presente en la muestra (figura 3).
Figura 3. Mapa de ruta de un inmunoensayo con la tecnología AVAC.
Tecnología de química dinámica de Destina Genómica
¿En qué consiste la química dinámica?
La DCC (Dynamic Combinatorial Chemistry) es una estrategia innovadora dentro de la
química supramolecular y el diseño molecular, que utiliza DCLs (Dynamic Combinatorial
Library) para identificar y optimizar compuestos con propiedades específicas. A diferencia de
los enfoques tradicionales, las DCLs están formadas por moléculas en equilibrio dinámico,
generadas a través de reacciones reversibles, ya sean covalentes o no covalentes, entre los
componentes iniciales. Este equilibrio es adaptable y puede modificarse en respuesta a señales
externas, como la presencia de un receptor biológico, cambios en las condiciones
26

fisicoquímicas o interacciones moleculares. En este sistema, los compuestos que mejor
interactúan con un objetivo, con una proteína o un metal, se estabilizan y predominan en la
mezcla. Una de las principales ventajas de la DCC es su capacidad para adaptarse a entornos
dinámicos. Cuando se introduce un nuevo componente en la DCL, este puede interactuar con
otros elementos del sistema, generando combinaciones con mayor afinidad hacia el objetivo.
Este enfoque ha demostrado ser especialmente útil en áreas como la biología molecular y el
desarrollo de fármacos, facilitando tanto la identificación de inhibidores de proteínas como la
optimización de compuestos bioactivos (Anderson et al., 1993; Corbett et al., 2006).
El análisis y la caracterización de las DCLs, así como de los compuestos generados, se llevan
a cabo mediante herramientas analíticas avanzadas, como espectroscopía y cromatografía.
Estas técnicas permiten comparar los productos obtenidos con los compuestos iniciales y
profundizar en las dinámicas moleculares subyacentes. Así, la DCC no solo identifica
moléculas con afinidad por un objetivo específico, sino que también garantiza que estas
exhiban actividad biológica relevante, consolidando su papel en la investigación biomédica y
farmacológica (Anderson et al., 1993; Corbett et al., 2006).
Química dinámica aplicada a la detección de ácidos nucleicos
Destina Genómica S.L. ha desarrollado una tecnología innovadora para la detección de ácidos
nucleicos que no requiere amplificación, como en la PCR, y permite etiquetar una sola
nucleobase con alta especificidad. Este sistema, basado en un enfoque de DCC, utiliza un
proceso dinámico y reversible donde únicamente la nucleobase complementaria al ácido
nucleico diana se estabiliza termodinámicamente y se fija mediante aminación reductora,
logrando una detección precisa y eficiente (Venkateswaran et al., 2016; Rissin et al., 2017;
Glushakova et al., 2015; Bowler et al., 2010; Sen et al., 2009).
La detección se fundamenta en el emparejamiento de bases de Watson y Crick, facilitando una
reacción dinámica entre el ácido nucleico diana y una hebra de PNA (Peptidic Nucleic Acid),
un polímero sintético similar al DNA, pero con un esqueleto de N – 2 (2 – aminoetil) glicina
en lugar del tradicional azúcar – fosfato. En esta tecnología, el PNA se denomina DGL (PNA
probe with an abasic position), y posee una posición abásica que contiene una amina
secundara libre y que es complementaria a la nucleobase objetivo del ácido nucleico diana
(Venkateswaran et al., 2016; Rissin et al., 2017; Glushakova et al., 2015; Bowler et al., 2010;
Sen et al., 2009).
27

El mecanismo de detección (figura 4) comienza con la hibridación entre la DGL y el ácido
nucleico diana, posicionando la región abásica de la DGL frente a la base a analizar.
Posteriormente, la nucleobase complementaria, conocida como SMART – nucleobase y
modificada con un grupo aldehído, rellena la posición abásica de la DGL a través de una
reacción reversible que forma un intermediario de iminio. Este intermediario se estabiliza al
convertirse en una amina terciaria mediante un proceso conocido como aminación reductora,
utilizando NaBH CH (Sodium Cyanoborohydride) como RA (Reducing Agent). Sin esta
3
reducción, la SMART – nucleobase insertada se desprendería debido a la reversibilidad de la
reacción. Aunque se pueden generar cuatro especies de iminio al usar las cuatro bases
nitrogenadas, solo la SMART – nucleobase complementaria al ácido nucleico diana, que
cumple con el patrón correcto de enlaces de hidrógeno, es termodinámicamente estable. El
paso de la metodología en el que se introduce la SMART – nucleobase y ocurre la aminación
reductora se conoce como DR (Destina Reaction), y para que este proceso se produzca de
forma óptima, es necesario realizarlo en un buffer DR con un pH de 6. Además, el ácido
nucleico diana complementario cataliza la aminación reductora, haciendo que esta ocurra
únicamente en su presencia y dentro del tiempo del ensayo, ya que la introducción de la
SMART – nucleobase en la posición abásica ocurre únicamente cuando se produce una
hibridación perfecta entre la DGL y el ácido nucleico diana (Venkateswaran et al., 2016;
Rissin et al., 2017; Glushakova et al., 2015; Bowler et al., 2010; Sen et al., 2009).
28

Por lo tanto, Destina ha desarrollado un enfoque químico para la detección de ácidos
nucleicos compatible con técnicas de inmunoensayo, permitiendo un ensayo tipo “sándwich”
adaptado para ácidos nucleicos. Destina ha validado esta tecnología en plataformas como
Luminex (Venkateswaran et al., 2016) y Quanterix (Rissin et al., 2017), donde las sondas
DGL complementarias a los miRNAs objetivo se inmovilizan covalentemente en
microesferas. La alta especificidad de esta tecnología, junto con la capacidad de diferenciar
secuencias con un solo desajuste de nucleobase, permite la detección directa de miRNAs en
fluidos biológicos, sin necesidad de preamplificación ni premarcado del ácido nucleico diana.
Figura 4. Mecanismo de detección de ácidos nucleicos con la química de Destina Genómica. Abreviaturas: NA,
Nucleic Acid.
Combinación de ambas tecnologías
29

Hasta este momento, la tecnología AVAC de Mecwins únicamente se ha empleado para la
detección de proteínas, ya que es una plataforma que se basa en un inmunoensayo. Debido a
que el enfoque químico de Destina Genómica para la detección de ácidos nucleicos es
compatible con técnicas de inmunoensayo, es posible combinar ambas tecnologías para
desarrollar una tecnología de detección directa de ácidos nucleicos en biofluidos. En este
trabajo de investigación, ambas tecnologías se han integrado para detectar miRNAs relevantes
en procesos patológicos. La combinación se ha llevado a cabo uniendo la sonda DGL a las
GNPs para detectar el miRNA diana, y posteriormente, inmovilizando las GNPs en la
superficie dieléctrica a través de la etiqueta de la SMART – nucleobase (figura 5). La
tecnología resultante ofrece una alta sensibilidad, proporcionada por la tecnología plasmónica
de Mecwins, y una gran especificidad, gracias a la química dinámica de Destina Genómica.
Esta tecnología mejorará el diagnóstico, pronóstico y monitorización de diferentes
Figura 5. Combinación de la tecnología plasmónica de Mecwins S.A. y la tecnología de química dinámica de
Destina Genómica S.L.
enfermedades.
Las principales ventajas de esta tecnología son:
 Alta sensibilidad, lo que garantiza una mayor fiabilidad en los resultados.
 Rapidez, permitiendo un uso más cómodo para el usuario y la posibilidad de automatizar
las mediciones.
 Bajo volumen de muestra, lo que reduce la invasividad, facilita la obtención de muestras y
puede ser más económico.
 Capacidad de multiplexado, permitiendo medir simultáneamente varios miRNAs en una
sola prueba.
 Detección combinada, lo que posibilita la detección simultánea de miRNAs y otros
biomarcadores, como proteínas.
30

 Simplicidad y menor riesgo de contaminación, ya que no se requiere la extracción, la
purificación, ni la amplificación enzimática del material genético, lo que asegura precisión
y fiabilidad en los resultados.
 Alta especificidad, garantizando que no se produzcan diagnósticos erróneos.
31

3. OBJETIVOS
1. Desarrollar una tecnología innovadora que permita la detección de miRNAs mediante la
integración de la química dinámica de Destina Genómica con la tecnología plasmónica
ultrasensible de Mecwins (AVAC), a través de la unión eficiente de SMART –
nucleobases a superficies de silicio y el anclaje de sondas DGL a nanopartículas de oro
(GNPs). Este objetivo a su vez implica: a) identificar la química más adecuada tanto
para unir eficientemente la SMART – nucleobase a las superficies de silicio como para
anclar las sondas DGL a las GNPs; b) asegurar la correcta incorporación de las GNPs en
la tecnología, determinando si es más eficiente realizar la metodología en uno o dos
pasos, y si resulta preferible unir primero la sonda DGL a las GNPs para posteriormente
llevar a cabo la detección del miRNA, o realizar el proceso inverso; c) estudiar las
interferencias entre los componentes de la química Destina Genómica y la tecnología de
Mecwins; d) optimizar las condiciones del ensayo (tiempos, temperaturas,
concentraciones de reactivos, buffer de la reacción, procedimiento de lavados, etc.); y e)
establecer las especificaciones técnicas del ensayo, tales como el límite de detección, los
límites de cuantificación superior e interior, y el rango dinámico.
2. Validar la tecnología propuesta para el análisis de muestras reales de pacientes (suero),
adaptando la metodología para garantizar su aplicación práctica y estableciendo las
especificaciones técnicas en términos de sensibilidad, especificidad y precisión. Este
objetivo tiene como fin la demostración de que la tecnología es efectiva y fiable para la
detección de miRNAs en muestras clínicas, cumpliendo con los estándares requeridos
en entornos médicos.
3. Adaptar la tecnología a la detección simultánea de varios miRNAs (multiplexado) y a la
detección combinada de miRNAs y biomarcadores proteicos. Este objetivo incluye la
identificación de las condiciones óptimas para mantener las especificaciones técnicas y
asegurar un rendimiento robusto en aplicaciones más complejas.
32

4. MATERIAL Y MÉTODOS
Reactivos
GNPs
Se utilizaron GNPs recubiertas con diversos grupos químicos, como biotina, SAv, y grupos
carboxilo, proporcionadas por Nanopartz Inc. (Loveland, CO, EE. UU.). Se emplearon GNPs
– biotina de 50, 60, 80, 100 y 150 nm de diámetro; GNPs – SAv de 100 nm de diámetro; y
GNPs – COOH de 100 y 150 nm de diámetro. Las GNPs se almacenaron según las
recomendaciones del fabricante y se caracterizaron mediante espectroscopía UV – VIS para
confirmar su tamaño y estabilidad antes de su uso.
DGLs, PNAs y SMART – nucleobases
Todas las DGLs, PNAs y SMART – nucleobases fueron proporcionadas por Destina
Genómica S.L. (Granda, España).
Se emplearon diferentes DGLs con diversos grupos químicos en el extremo. Las secuencias
utilizadas fueron DGL 122 – 5p, etiquetada con un grupo amino, con una molécula de biotina
o con una molécula FITC; DGL 200a – 3p etiquetada con un grupo amino; y DGL 486 – 5p
etiquetada con un grupo amino.
También se utilizó un PNA 122 – 5p, etiquetado con un grupo amino en el extremo.
Se emplearon SMARTs – nucleobases etiquetadas con diferentes grupos químicos: biotina y
FITC.
Las DGLs, PNAs y SMART – nucleobases se recibieron liofilizadas y se reconstituyeron en
buffer TE (Tris – EDTA) para una concentración de 100 µM. Se almacenaron a -20°C hasta su
uso.
Ácidos nucleicos
Se utilizaron ssDNAs (Single – Stranded DNA) con y sin etiquetas químicas en diferentes
posiciones, proporcionados por Integrated DNA Technologies (Coralville, IA, EEUU). Las
secuencias empleadas fueron: ssDNA 122 – 5p sin etiqueta, etiquetado en el extremo con
biotina o con FITC, y etiquetado en ambos extremos (FITC y biotina); además de ssDNA
200a – 3p y ssDNA 486 – 5p sin etiqueta. Las secuencias de ssDNA son las mismas que las
del miRNA objetivo, y por lo tanto, complementarias a las DGL empleadas.
33

Para todas las optimizaciones de la plataforma realizadas en este estudio, se utilizaron
ssDNAs en lugar de miRNAs, debido a que los miRNAs son más inestables, lo que hace más
sencillo trabajar con ssDNAs. Además, dado que el comportamiento de ssDNAs y miRNAs es
similar si comparten la misma secuencia, las curvas de calibración de la plataforma se
generaron utilizando ssDNAs.
Fabricación de superficies de silicio con linkers
Primer paso: silanización (generación de grupos amino)
La deposición de la capa de silano se llevó a cabo mediante CVD (Chemical Vapor
Deposition). En primer lugar, se ajustó la temperatura del horno a 80ºC. Simultáneamente, la
superficie de silicio a silanizar y cuatro vidrios de reloj fueron lavados con acetona y secados
con una pistola de nitrógeno. Posteriormente, los vidrios de reloj se colocaron simétricamente
dentro del horno, depositando 50 µl de APTS ((3 – aminopropyl) triethoxysilane),
proporcionado por Merck S.L. (Madrid, España), en cada uno. La superficie de silicio se situó
en el centro del horno, rodeada por los vidrios de reloj. Una vez posicionados los elementos,
se cerraron tanto el horno como la válvula de ventilación. A continuación, se encendió la
bomba de vacío y se abrió la válvula correspondiente hasta alcanzar una presión de -0.948
bares. Entonces, se cerró la válvula de vacío y se apagó la bomba. La muestra permaneció en
el horno durante 55 minutos. Transcurrido este tiempo, se abrió la válvula de ventilación,
permitiendo que la presión regresara a 0 en un lapso de 5 minutos. Finalizado el proceso, la
superficie de silicio se lavó nuevamente con acetona con una agitación de 200 rpm durante 1
minuto, y se secó con una pistola de nitrógeno. Finalmente, las superficies silanizadas
mediante CVD se almacenaron a 4ºC bajo vacío, con un tiempo máximo de almacenamiento
de 2 semanas.
Segundo paso: inmovilización del linker
El procedimiento de inmovilización del linker se desarrolló de acuerdo con el tipo de
superficie empleada, ya sea con SAv o con anticuerpos biotinilados.
Superficies con SAv
Inicialmente, las superficies se incubaron con glutaraldehído, proporcionado por Merck S.L.
(Madrid, España), al 5% en PBS durante 1 hora a RT (Room Remperature) con agitación y se
realizaron cuatro lavados de 5 minutos con PBS. Posteriormente, las superficies se incubaron
con SAv, proporcionada por Merck S.L. (Madrid, España), a 3 µg/mL en PBS durante 1 hora
a 37ºC con agitación, seguido de tres lavados de 5 minutos con PBS. La concentración de SAv
34

utilizada en este paso se optimizó para asegurar una cobertura adecuada de la superficie. Para
finalizar, se bloqueó la superficie con BSA, proporcionada por Merck S.L. (Madrid, España),
al 1% durante 1 hora a 37ºC con agitación, se realizaron cuatro lavados de 5 minutos, 2 con
PBS y 2 con agua miliQ, y se secaron con una pistola de nitrógeno. Finalmente, las
superficies se almacenaron a 4ºC, con un tiempo máximo de almacenamiento de 3 semanas.
Superficies con anticuerpo biotinilado
Inicialmente, las superficies se incubaron con glutaraldehído, proporcionado por Merck S.L.
(Madrid, España), al 5% en PBS durante 1 hora a RT con agitación y se realizaron cuatro
lavados de 5 minutos con PBS. Posteriormente, las superficies se incubaron con SAv,
proporcionada por Merck S.L. (Madrid, España), a 3 µg/mL en PBS durante 1 hora a 37ºC
con agitación, seguido de tres lavados de 5 minutos con PBS. Una vez inmovilizada la SAv, se
bloqueó la superficie utilizando BSA, proporcionada por Merck S.L. (Madrid, España), al 1%
en PBS durante 1 hora a 37ºC con agitación, seguido de tres lavados de 5 minutos con PBS. A
continuación, se inmovilizó el anticuerpo biotinilado (anti – FITC, anti – IL – 6 o ambos)
mediante una incubación en PBS a 7 µg/mL durante 1 hora a 37ºC con agitación. Para
finalizar, se realizaron cuatro lavados de 5 minutos, dos con PBS y dos con agua miliQ, y se
secaron las superficies con una pistola de nitrógeno. Finalmente, las superficies se
almacenaron a 4ºC, con un tiempo máximo de almacenamiento de 3 semanas.
Protocolos de biotinilación de anticuerpos
Se emplearon dos protocolos de biotinilación de anticuerpos, uno que consiste en unir la
biotina aleatoria a través de los grupos amino del anticuerpo, y otro que modifica los azúcares
del anticuerpo mediante la adición de una azida, a la cual se une posteriormente la biotina de
manera localizada y orientada (figura 6).
Biotinilación aleatoria a través de los grupos amino
Los anticuerpos se biotinilaron utilizando el kit EZ – Link Sulfo – NHS – LC – Biotin de
Thermo Fisher ScientificTM (Waltham, MA, EEUU). Inicialmente, se incubó el anticuerpo con
un exceso de 20 molar del reactivo EZ – LINK Sulfo – NHS – LC – Biotin durante 30 minutos
a RT con agitación. Mientras tanto, se preparó una columna de 40K mediante cuatro
centrifugaciones consecutivas con 2,5 mL de PBS, cada una realizada durante 2 minutos a
1000g, descartando el sobrenadante tras cada centrifugación. Una vez equilibrada la columna
y completada la incubación del anticuerpo con la biotina, la mezcla se añadió a la columna y
se centrifugó durante 2 minutos a 1000g. Este paso permitió separar el anticuerpo biotinilado
35

de la biotina no unida. Finalmente, se midió la OD (Optical Density) para determinar la
280
concentración del anticuerpo biotinilado, que se almacenó 4ºC hasta su uso.
Biotinilación orientada mediante una modificación con azida
Para biotinilar anticuerpos mediante una modificación con azida, se utilizó el kit SiteClickTM
Antibody Azido Modification Kit *1 mg labeling* de Thermo Fisher ScientificTM (Waltham,
MA, EEUU).
Proceso de enriquecimiento del anticuerpo e intercambio del buffer
Se añadieron 500 µL de agua destilada a un concentrador pequeño y se centrifugó durante 6
minutos a 5000g. Tras descartar el sobrenadante, se añadió el volumen de anticuerpo
necesario para que el concentrador contenga 1 mg de anticuerpo y buffer de preparación del
anticuerpo hasta 500 µL, y se centrifugó durante 6 minutos a 5000g. Por último, se recuperó
el anticuerpo concentrado (aproximadamente 100 µL) invirtiendo el concentrador sobre un
tubo colector y centrifugando 3 minutos a 100g.
Modificación con azida
El anticuerpo concentrado se incubó con 20 µL de β – galactosidasa durante 6 horas a 37ºC y
700 rpm. Posteriormente, se añadió una solución de modificación que contenía UDP –
GalNAz (Uridine Diphosphate – N – Acetylgalactosamine), 12 µL de agua destilada, 18 µL
de buffer Tris 20x (pH 7,0), 40 µL de buffer aditivo y 160 µL de la enzima GalT (Galactose –
1 – Phosphate – Uridyltransferase). Esta mezcla se incubó ON (Overnight) a 30ºC y 700 rpm.
Purificación y concentración del anticuerpo modificado con azida
Se equilibró un concentrador grande con 2 mL de Tris 1x (pH 7,0), centrifugando durante 10
minutos a 1000g. Luego, se añadió el anticuerpo modificado con 1,5 mL de Tris 1x (pH 7,0),
se centrifugó durante 8 minutos a 1200g, y se descartó el sobrenadante. El centrifugador se
lavó cuatro veces con 2 mL de Tris 1x (pH 7,0) centrifugando 11 minutos a 1200g y
descartando el sobrenadante. Finalmente, se recuperó el anticuerpo concentrado invirtiendo el
concentrador sobre un tubo colector cónico y centrifugando durante 3 minutos a 1000g. La
concentración del anticuerpo se determinó midiendo la OD .
280
Incorporación de grupos biotina
Para biotinilar 1 mg de anticuerpo modificado con azida, se incubó ON a 25ºC y 700 rpm en
una solución que contenía 1 mL de buffer Tris (pH 7,0) y 150 µL de reactivo DBCO
36

(Dibenzocyclooctyne) – PEG12 – biotina, proporcionado por Thermo Fisher Scientific
(Madrid, España), preparado a 1 mg/mL en DMSO (exceso molar 20x respecto al anticuerpo).
Purificación del anticuerpo biotinilado
Se equilibraron varias columnas de 50K con 500 µL de PBS centrifugando durante 4 minutos
a 14000g. Posteriormente, se añadió el anticuerpo con PBS hasta alcanzar un volumen de 500
µL, se centrifugó tres veces durante 4 minutos a 10000g y se descartó el líquido. Finalmente,
se invirtió la columna para recuperar el anticuerpo biotinilado, centrifugando 2 minutos a
1000g. La concentración final del anticuerpo se determinó midiendo la OD y se almacenó a
280
4ºC hasta su uso.
Figura 6. Protocolos de biotinilación de anticuerpos: 1) Biotinilación por los grupos amino. 2) Biotinilación
mediante una modificación con azida.
Funcionalización de GNPs – COOH con un linker
El protocolo de funcionalización dependía del linker utilizado, aunque la metodología era
generalmente similar en todos los casos. Inicialmente, las GNPs – COOH se incubaron con el
linker seleccionado en una solución de MES (pH 3,8), junto con una mezcla de EDC y sulfo –
NHS que supone 1/13 del volumen total, durante 1 hora a RT con agitación. Esta solución de
EDC/sulfo – NHS se preparó con EDC a 1 mg/ml y sulfo – NHS a 1,5 mg/ml en una
proporción 1:1 en MES (pH 3,8), ambos proporcionados por Merck S.L. (Madrid, España). El
volumen de GNPs – COOH y el linker utilizado no debía superar 2/13 del volumen total de la
solución para evitar alteraciones en el pH. La cantidad de GNPs – COOH empleadas dependía
de su tamaño, asegurándose siempre de utilizar la misma superficie de GNPs. Para una
37

superficie total de 7,8 x 1014 nm2 se utilizaron 2,5 x 1010 GNPs (192,3 µg/mL) para GNPs –
COOH de 100 nm y 1,1 x 1010 GNPs (288,4 µg/mL) para GNPs – COOH de 150 nm. La
concentración óptima de linker se determinó experimentalmente mediante la variación de la
concentración y la medición de la eficiencia de la funcionalización. A continuación, las GNPs
se lavaron mediante tres centrifugaciones de 5 minutos a 13500 rpm y 4ºC, utilizando una
solución de bloqueo. Posteriormente, se incubaron las GNPs con esta solución de bloqueo
durante 1 hora a RT con agitación. Tras el bloqueo, las GNPs se lavaron nuevamente con tres
centrifugaciones de 5 minutos a 13500 rpm y 4ºC, usando una solución de almacenamiento.
Las GNPs funcionalizadas se almacenaron en la solución de almacenamiento a 4ºC hasta su
uso, con un tiempo máximo de almacenamiento de 3 semanas. Finalmente, la concentración
de las GNPs funcionalizadas se estimó mediante la medición de la OD . Las soluciones de
580-650
bloqueo y de almacenamiento varía en función del linker empleado.
GNPs – COOH con anti – FITC
En la fabricación de GNPs – anti – FITC se evaluaron diversos parámetros para optimizar el
procedimiento. En todos los casos, se emplearon soluciones de bloqueo y almacenamiento
que contenían BSA al 0,1% y al 0,2%, respectivamente, en PBS con Tween20 al 0,1%.
Uno de los primeros aspectos que se evaluó fue la cantidad de anticuerpo anti – FITC
utilizada (tabla 1). Para determinar esta cantidad, se calculó el número de moléculas de
anticuerpo necesario para formar una capa o varias capas sobre la superficie de las GNPs.
Para ello, se asumió que la densidad de los anticuerpos es 1,4 g/cm3 y que su forma es
esférica, lo cual simplifica el cálculo del número de moléculas necesarias:
anti - FITC
| Nº moléculas anti -  | Nº moléculas anti -  |     |
| -------------------- | -------------------- | --- |
Capas de anti - FITC
|     | FITC/GNP | FITC/nm2 |
| --- | -------- | -------- |
| 1   | 205,4    | 0,007    |
| 2,5 | 513,5    | 0,016    |
| 5   | 1027,0   | 0,033    |
| 10  | 2054,0   | 0,065    |
38
| 20  | 4107,9 | 0,131 |
| --- | ------ | ----- |
Tabla 1. Cantidades evaluadas de anti – FITC en la fabricación
de GNPs – anti – FITC.

Adicionalmente, se evaluaron dos anticuerpos anti – FITC de diferentes proveedores, el anti –
FITC 1 de Hytest Ltd (Turku, Finlandia) y el anti – FITC 2 de Abcam (Cambridge, Reino
Unido), para comparar su eficiencia de sensado.
GNPs – COOH con DGL 122 – 5p
En la fabricación de GNPs – DGL 122 – 5p se evaluaron diversos parámetros para optimizar
el procedimiento, utilizando en todos los casos una cantidad de 0,260 moléculas de DGL 122
– 5p por nm2 de GNPs.
Para mejorar el rendimiento, se probaron diferentes soluciones de pre – incubación, bloqueo y
almacenamiento. En primer lugar, se utilizaron soluciones de bloqueo y almacenamiento que
contenían BSA al 0,1% y al 0,2%, respectivamente, en PBS con Tween20 al 0,1%. También
se evaluó el uso de mPEG – SH (Methyl – PEG – Thiol) 6K, proporcionado por Merck S.L.
(Madrid, España), al 0,033% en Tris 50 mM con Tween20 al 0,1% como solución de bloqueo
y almacenamiento. Esta misma solución de mPEG – SH 6K al 0,033% en Tris 50 mM con
Tween20 al 0,1% también se probó como solución de pre – incubación, bloqueo y
almacenamiento. Además, se probó una variante de las soluciones de bloqueo y
almacenamiento con mPEG – SH 6K al 0,1% y al 0,2%, respectivamente, en Tris 50 mM con
Tween20 al 0,1%. Finalmente, se evaluó esta última opción combinada con una pre –
incubación con mPEG – SH 6K al 0,033% en Tris 50 mM con Tween20 al 0,1%.
GNPs – COOH con PNA 122 – 5p
En la fabricación de GNPs – PNA 122 – 5p se utilizaron 0,260 moléculas de PNA 122 – 5p
por nm2 de GNPs. Para las soluciones de bloqueo y almacenamiento, se empleó mPEG – SH
6K al 0,1% y al 0,2%, respectivamente, ambos disueltos en Tris 50 mM con Tween20 al
0,1%.
GNPs – COOH con anti – IL – 6
En la fabricación de GNPs – anti – IL – 6 se utilizaron 0,026 moléculas de anti – IL – 6 y
1,103 moléculas de BSA por nm2 de GNPs. Para las soluciones de bloqueo y almacenamiento,
39

se empleó BSA al 0,1% y al 0,2%, respectivamente, ambos disueltos en PBS con Tween20 al
0,1%.
GNPs – COOH con DGL 200a – 3p
En la fabricación de GNPs – DGL 200a – 3p se utilizaron 0,260 moléculas de DGL 200a – 3p
por nm2 de GNPs. Para las soluciones de bloqueo y almacenamiento, se empleó mPEG – SH
6K al 0,1% y al 0,2%, respectivamente, ambos disueltos en Tris 50 mM con Tween20 al
0,1%.
GNPs – COOH con DGL 486 – 5p
En la fabricación de GNPs – DGL 486 – 5p se utilizaron 0,260 moléculas de DGL 486 – 5p
por nm2 de GNPs. Para las soluciones de bloqueo y almacenamiento, se empleó mPEG – SH
6K al 0,1% y al 0,2%, respectivamente, ambos disueltos en Tris 50 mM con Tween20 al
0,1%.
Cuantificación de la cantidad de anticuerpo inmovilizado en GNPs – COOH
Para determinar la cantidad de anticuerpo inmovilizado en las GNPs – COOH se utilizó un
método indirecto basado en la fluorescencia intrínseca del aminoácido triptófano a 350 nm. Se
comparó la fluorescencia de dos muestras, una alícuota de anticuerpo preparada a la misma
concentración utilizada en la funcionalización (concentración inicial) y el sobrenadante
obtenido tras el primer paso de centrifugación del protocolo de funcionalización, después de
incubar las GNPs – COOH con el anticuerpo (concentración final). A partir de estas medidas,
se obtuvieron las RFU
(Relative Fluorescence Units)
correspondientes a las
concentraciones inicial y final,
las cuales se interpolaron en
una curva de calibración para
calcular la cantidad de
anticuerpo en µg/ml. Con estos
datos, se determinó la cantidad
de anticuerpo inmovilizado en Figura 7. Metodología de la medida de la cantidad de anticuerpo
inmovilizado en las GNPs – COOH midiendo la fluorescencia
las GNPs restando la cantidad (RFU) del triptófano de las moléculas de anticuerpo a 350 nm.
final a la inicial (figura 7). La curva de calibración se construyó utilizando soluciones estándar
de anticuerpo de concentración conocida y se verificó la linealidad de la respuesta del
40

espectrofotómetro EnVisionTM de PerkinElmer Life and Analytical Sciences (Waltham, MA,
EE. UU.)
ELISA para la evaluación del funcionamiento de anticuerpos
Se incubaron 50 µL de FITC a 20 µg/mL en PBS en una placa de p96 durante 1 hora a 37ºC,
cubriendo la placa con parafilm para evitar la evaporación. Posteriormente, la solución de
FITC se eliminó mediante tres lavados con PBS con Tween20 al 0,1%. A continuación, se
bloquearon los sitios de unión a proteínas libres añadiendo 200 µL de BSA al 1% en PBS,
incubando durante 1 hora a 37ºC y cubriendo con parafilm para evitar la evaporación. Tras el
bloqueo, la solución de BSA se retiró mediante tres lavados con PBS con Tween20 al 0,1%.
Luego, se añadieron 100 µL de anticuerpo anti – FITC (1 o 2) diluido a 1 µg/mL en PBS,
incubando nuevamente durante 1 hora a 37ºC con parafilm. La solución de anticuerpo
primario fue eliminada con tres lavados en PBS con Tween20 al 0,1%, y se incubaron 100 µL
de anticuerpo secundario conjugado con HRP (Horseradish Peroxidase), anti – mouse para el
anti – FITC 1 y anti – goat para el anti – FITC 2, ambos diluidos a 1/1000 en PBS. Esta
incubación también se realizó durante 1 hora a 37ºC con parafilm. Tras eliminar la solución
de anticuerpo secundario con tres lavados con PBS con Tween20 al 0,1%, se añadieron 100
µL de TMB (3,3’,5,5’ – Tetramethylbenzidine). Una vez alcanzado el cambio de color
deseado, la reacción fue detenida añadiendo 50 µL de ácido sulfúrico 1N. Finalmente, se
midió la absorbancia a 450 nm en un espectrofotómetro EnVisionTM de PerkinElmer Life and
Analytical Sciences (Waltham, MA, EE. UU.)
Ley de Stokes
Se empleó la Ley de Stokes para calcular la velocidad de sedimentación de GNPs en función
de su tamaño.
v = velocidad de sedimentación de las partículas (m/s)
s
r = radio de la partícula (m)
η = viscosidad dinámica del líquido (kg/(m x s))
ρ = densidad de la nanopartícula (kg/m3)
p
ρ = densidad del fluido (kg/m3)
f
g = aceleración de la gravedad
41

Metodología y químicas propuestas para la combinación de ambas tecnologías
Químicas candidatas
Para combinar ambas tecnologías, se propusieron diferentes químicas para la inmovilización
de las sondas DGL sobre las GNPs (unión X – Y), así como para la unión de la SMART –
nucleobase con la superficie dieléctrica (unión A – B) (figura 5).
En la figura 8 se presentan diversas estrategias químicas propuestas para la unión de las GNPs
con la sonda DGL (X – Y):
 La primera estrategia consistía en inmovilizar un anticuerpo anti – FITC (Fluoresein
Isothiocyanate) en la superficie de las GNPs, permitiendo que la sonda DGL se uniese a
los anticuerpos a través de una molécula de FITC, un compuesto químico fluorescente,
que se encontraba en el extremo de la DGL.
 La segunda opción implicaba la unión directa de la sonda DGL a las GNPs con citrato en
su superficie, el cual se adsorbe de manera natural durante la síntesis de las GNPs. Esto es
posible porque la DGL contenía un grupo tiol en su extremo, el cual se enlazaba
covalentemente al metal de las GNPs en presencia de DTT, que mantenía el grupo tiol en
su forma activa no oxidada.
 La tercera alternativa propuso el uso de GNPs con PEG en la superficie con un extremo
carboxilo, y una sonda DGL con un grupo amino en su extremo. En este caso, los grupos
carboxilo y amino reaccionaban formando un enlace covalente al ceder el grupo carboxilo
un ion hidrógeno y el grupo amino aceptarlo. Para ello, era necesario emplear EDC (1 –
ethyl – 3 – (3 – dimethylaminopropyl) carbodiimide) y sulfo – NHS (sulfo – N –
hydroxysulfosuccinimide), ya que el EDC activaba los grupos carboxilo para formar un
intermedio reactivo que, estabilizado por sulfo – NHS, permitía su condensación eficiente
con los grupos amino para generar enlaces amida.
 Finalmente, la cuarta opción consistía en emplear GNPs con moléculas de SAv
(Streptavidin) inmovilizadas en su superficie, y sondas DGL con una biotina en el
extremo. En este caso, la unión entre la SAv y la biotina se daba por una interacción no
covalente de alta afinidad y especificidad.
42

Figura 8. Químicas candidatas para la unión GNPs – DGL (X – Y).
En la figura 9 se muestran las estrategias químicas propuestas para la unión de la SMART –
nucleobase a la superficie dieléctrica (A –
B).
 La primera estrategia consistía en unir la
SMART – nucleobase con FITC en una
superficie dieléctrica en la que
previamente se había inmovilizado el
anticuerpo anti – FITC.
 La segunda estrategia, por su parte,
implicaba la unión de la SMART –
Figura 9. Químicas candidatas para la unión
nucleobase con biotina en una superficie
superficie – SMART – nucleobase (A – B).
dieléctrica donde se había inmovilizado
SAv
Metodología propuesta: empleo de diferentes modelos
Para combinar ambas tecnologías, inicialmente se propuso utilizar los siguientes modelos:
1. Modelo SAv – Biotina
Este modelo consistió en incubar GNPs recubiertas con biotina directamente sobre una
superficie previamente recubierta con SAv (figura 10). El objetivo de este modelo fue analizar
43

cómo las GNPs se adherían a la superficie bajo distintas condiciones, con el fin de optimizar
la combinación de ambas tecnologías. Se evaluó el impacto de los componentes de la DR
(buffer DR, RA y SMART – nucleobase) en la adherencia
de las GNPs. La hipótesis era que, si estos componentes
afectaban a la unión, la DR no podría realizarse
directamente sobre la superficie dieléctrica, por lo que sería
necesario llevarla a cabo en solución. En este caso, se Figura 10. Modelo SAv –
Biotina
tendrían que realizar lavados para eliminar los componentes de la reacción antes de la
incubación sobre la superficie. Este modelo también permitió evaluar el impacto de diferentes
procedimientos de lavado, ya que la centrifugación utilizada podría afectar a las GNPs, y sería
necesario realizar suficientes lavados para eliminar por completo los componentes de la DR,
eliminando su interferencia.
Además, el modelo se empleó para investigar cómo se unían GNPs de distintos tamaños a la
superficie, con el objetivo de optimizar la plataforma para la detección combinada y el
multiplexado. Dado que todas las GNPs se unieron mediante el mismo mecanismo, la
adherencia dependería únicamente del tamaño de las GNPs, no de las moléculas usadas para
detectar los biomarcadores.
2. Modelo de captura
Este modelo consistió en la captura de un ácido nucleico marcado en ambos extremos: uno de
ellos se unió a las GNPs y el otro a la superficie (figura 11). Con este enfoque, se simplificó el
sistema al eliminar la hibridación entre la sonda DGL y el ácido nucleico diana, así como la
introducción de la SMART – nucleobase y la aminación reductora. El objetivo principal fue
evaluar si las GNPs y la superficie podían capturar eficazmente un ácido nucleico. Optimizar
este modelo fue crucial antes de avanzar en etapas más complejas, ya que permitió maximizar
la eficiencia de captura de las GNPs y la superficie. Además, este modelo ayudó a determinar
la cantidad óptima de ácido nucleico que puede ser capturada, lo que ayudó a establecer la
cantidad necesaria
de sonda DGL en la
tecnología.
Figura 11. Modelo de captura. Abreviaturas: NA, Nucleic Acid.
44

3. Modelo de hibridación
Al pasar del modelo de captura al modelo de hibridación, se eliminó una de las etiquetas del
ácido nucleico diana, incorporándose esta etiqueta a la sonda DGL. Con este cambio, el
sistema también se simplificó, pero únicamente eliminando la introducción de la SMART –
nucleobase y la aminación reductora. En el modelo de hibridación, la sonda DGL se hibridó
con el ácido nucleico diana marcado, y el producto hibridado se capturó tanto por las GNPs, a
través de la etiqueta de la sonda DGL, como por la superficie, mediante la etiqueta del ácido
nucleico. En cuanto al proceso de hibridación, se propusieron dos enfoques (figura 12).
 Aproximación 1, donde primero se une la sonda DGL a las GNPs, luego se realiza la
hibridación, y finalmente, se lleva a cabo la captura en la superficie.
 Aproximación 2, donde primero se realiza la hibridación, luego se une la sonda DGL a las
GNPs, y finalmente, se lleva a cabo la captura en la superficie.
Este modelo de hibridación tuvo como objetivo determinar si la sonda DGL puede hibridar
eficientemente con el ácido nucleico diana que se deseaba detectar. Se optimizó para
maximizar la hibridación entre la sonda DGL y el ácido nucleico, buscando el mejor
rendimiento posible, y para seleccionar la aproximación más adecuada que se utilizó
Figura 12. Modelo de hibridación. Aproximación 1 (GNPs + DGL  NA  Superficie) y aproximación 2
(DGL + NA  GNPs  Superficie). Abreviaturas: NA, Nucleic Acid.
45

posteriormente en la DR.
¿Uno o dos pasos?
En cuanto a la metodología para la DR, con la aproximación 1 existían dos posibles enfoques
(figura 13). En el primer enfoque, en un solo paso, se llevaba a cabo simultáneamente la
hibridación de la sonda DGL con el ácido nucleico diana y la DR con la SMART –
nucleobase y el RA. En el segundo enfoque, en dos pasos, primero se realizaba la hibridación
con el ácido nucleico diana, y luego, en un paso posterior, se efectuaba la DR con la SMART
– nucleobase y el RA.
Figura 13. DR con la aproximación 1. Un paso (1) y dos pasos (2). Abreviaturas: NA, Nucleic Acid.
Compatibilidad entre modelos, químicas y metodologías
Es importante destacar que no todas las químicas candidatas para la unión GNPs – DGL
(figura 8) eran compatibles con las químicas propuestas para la unión superficie – SMART –
nucleobase (figura 9), ya que no se podía usar la misma química en ambas uniones (tabla 2).
Además, la metodología en dos pasos resultaba incompatible con la aproximación 2, ya que
para ello era necesario realizar un lavado después de la hibridación. En la aproximación 2, sin
46

embargo, no era posible realizar este lavado tras la hibridación, ya que no se disponía de
GNPs que se pudieran separar mediante centrifugación.
En cuanto a las químicas COOH – NH y citrato – tiol, no eran compatibles ni con el modelo
2
de captura ni con la aproximación 2. Esto se debe a que se requería el uso de EDC y sulfo –
NHS para la química COOH – NH y DTT para la química Citrato – Tiol. Estos reactivos
2
tenían que emplearse exclusivamente en presencia de GNPs y DGL, sin otros componentes
adicionales que pudieran verse afectados. En el modelo de captura, estos reactivos podrían
interferir con la etiqueta adicional en el ácido nucleico, y en la aproximación 2, podrían
afectar al complejo hibridado, a la SMART – nucleobase y al RA (tabla 2).
Por lo tanto, las químicas anti – FITC – FITC y SAv – biotina para las GNPs – DGL fueron
las únicas compatibles con la metodología propuesta. Esta metodología consistía en un primer
paso de optimización del modelo de captura y un segundo paso de optimización del modelo
de hibridación, antes de evaluar el funcionamiento de la DR. Debido a su compatibilidad,
estas dos químicas se consideraron las candidatas iniciales para el desarrollo de la plataforma.
Esta exhaustiva evaluación de diferentes modelos y químicas proporciona una base sólida
para el desarrollo de una tecnología de detección de miRNAs altamente sensible y específica.
Superficie de silicio -
GNPs - DGL Aproximaciones Modelos
SMART - nucleobase
El
anti - FITC - FITC y Sav -
COOH - NH2 1 Hibridación
Biotina
anti - FITC - FITC y Sav -
Citrato -Tiol 1 Hibridación
Biotina
Hibridación y
anti - FITC - FITC SAv- Biotina 1 y 2
captura
Hibridación y
SAv- Biotina anti - FITC - FITC 1 y 2
captura
Tabla 2. Químicas, metodologías y modelos compatibles.
progreso de este trabajo de investigación doctoral estuvo marcado por la identificación y
superación de distintos obstáculos, los cuales fueron cruciales para definir las químicas que
finalmente se evaluaron. En un principio, se identificaron seis posibles combinaciones
químicas, considerando las diferentes estrategias de unión entre GNPs y sondas DGL, así
como entre la superficie de silicio y las SMART – nucleobases. La tabla 3 presenta el
conjunto de químicas que se analizaron en el marco de esta investigación.
47

Superficie de silicio - SMART -
Química GNPs - DGL
nucleobase
A anti-FITC - FITC SAv - biotina
B SAv - biotina anti-FITC - FITC
C COOH - NH2 SAv - biotina
D COOH - NH2 anti-FITC - FITC
Tabla 3. Químicas evaluadas en el trabajo de investigación.
Modelo SAv – Biotina
En este modelo se incubaron a 37ºC las GNPs – biotina sobre la superficie con SAv en PBS
con Tween20 al 0,1%.
GNPs de 100 nm con los componentes de la DR y distintos tipos de lavados
Se incubaron 100 µl de GNPs – biotina de 100 nm a 5 µg/mL durante 1 hora bajo diferentes
condiciones. La condición estándar consistió en GNPs – biotina en PBS con Tween20 al
0,1%. Además, se evaluaron otras condiciones utilizando GNPs – biotina en buffer DR (pH
6), en buffer DR (pH 6) con RA y en buffer DR (pH 6) con SMART – nucleobase a
concentraciones de 5 µM, 2,5 µM o 1,25 µM. También se probaron diferentes números de
lavados (1, 2 o 3) únicamente con el buffer DR (pH 6), utilizando dos tipos de lavados, un
lavado estándar donde directamente se centrifugaron las GNPs – biotina, o un lavado en el
que las GNPs – biotina se diluyeron previamente con más volumen antes de centrifugar. En
ambos casos, las GNPs – biotina se centrifugaron durante 5 minutos a 4ºC y 13500 rpm.
Finalmente, se evaluó el lavado con dilución previa en buffer DR (pH 6) con RA y SMART –
nucleobase con 1, 2 o 3 lavados.
Monoplex con GNPs – biotina de distintos tamaños
Se incubaron 80 µL de GNPs – biotina de distintos tamaños (50, 60, 80, 100 y 150 nm) en una
superficie recubierta con SAv, manteniendo cada tamaño en pocillos separados, durante 1,5
horas. Las cantidades de GNPs – biotina utilizadas oscilaron entre 100 y 1000 partículas,
incrementándose en intervalos de 100. Para optimizar la interacción de las GNPs – biotina con
la superficie, se empleó el volumen mínimo (80 µL) necesario para cubrirla, reduciendo así la
altura del líquido, y favoreciendo la sedimentación de las partículas. Asimismo, se incrementó
el tiempo de incubación (1,5 horas) en comparación con un ensayo estándar, con el fin de
maximizar el número de GNPs – biotina que alcanzan la superficie. Los resultados
48

experimentales obtenidos se contrastaron con los valores teóricos, calculados considerando el
tiempo de incubación, la altura del líquido y la velocidad de sedimentación estimada mediante
la Ley de Stokes (figura 14).
Figura 14. Metodología del monoplex con GNPs – biotina de distintos tamaños para comparar las cuentas
experimentales con lo esperado teóricamente teniendo en cuenta la velocidad de sedimentación, la altura del
líquido y el tiempo de incubación.
Multiplexado con GNPs – biotina de distintos tamaños
Dúplex de GNPs – biotina
Para los ensayos de formato dúplex, se utilizaron GNPs – biotina de 100 y 150 nm tanto en
una cantidad de GNPs – biotina baja, con un total de 2,5 x 106 partículas, como una cantidad
alta, con un total de 1,0 x 108 partículas. En ambos casos, se empleó inicialmente una
condición en la que se usó el mismo número de partículas de cada tamaño (proporción 1:1).
Posteriormente, se evaluó una condición corregida para la cantidad alta de GNPs, ajustando la
proporción de cada tamaño según los resultados obtenidos previamente con la misma cantidad
de cada tamaño. En esta condición corregida, se utilizó un 82% de GNPs – biotina de 100 nm
y un 18% de GNPs biotina de 150 nm.
5 – plex de GNPs – biotina
Para los ensayos en formato 5 – plex, se utilizaron GNPs – biotina de 50, 60, 80, 100 y 150
nm a números bajos, con un total de 2,5 x 106 de GNPs – biotina, ajustando la proporción de
cada tamaño según el tipo de ensayo. En la condición sin corrección, se empleó el mismo
49

número de partículas para todos los tamaños. En la condición con corrección experimental, el
número de partículas de cada tamaño se ajustó en función de los resultados obtenidos en la
condición sin corrección. Por último, en la condición con corrección teórica, el ajuste se
realizó considerando la velocidad de sedimentación específica de cada tamaño de partícula, de
acuerdo con los cálculos teóricos con la Ley de Stokes (tabla 4).
50 nm : 60 nm : 80 nm : 100 nm : 150 nm
Corrección
|     | Sin corrección |     | Corrección teórica |     |
| --- | -------------- | --- | ------------------ | --- |
experimental
|     | 1 : 1 : 1 : 1 : 1 | 6.8 : 6.4 : 5.2 : 4.2 : 1 | 9.1 : 6.3 : 3.5 : 2.3 : 1 |     |
| --- | ----------------- | ------------------------- | ------------------------- | --- |
Tabla 4. Proporción de GNPs de 50, 60, 80, 100 y 150 nm usadas con la finalidad de obtener el miso número
de cuentas de cada tamaño. Sin corrección, con una corrección experimental y con una corrección teórica.
Modelo de captura
Química A: anti – FITC – FITC + SAv – Biotina
Se incubaron 5,0 x 107 GNPs – anti –
Nº moléculas FITC - ssDNA - Nº moléculas FITC - ssDNA -
FITC  de  100  nm,  en  100  µL  por  Biotina/anti-FITC Biotina/nm2
| pocillo  | de  buffer  DR  | (pH  6)  con  | 5,00 | 0,649 |
| -------- | --------------- | ------------- | ---- | ----- |
|          |                 |               | 2,00 | 0,260 |
FITC – ssDNA – Biotina 122 – 5p
|     |     |     | 1,00 | 0,130 |
| --- | --- | --- | ---- | ----- |
durante 1 hora a RT y en agitación.
|                                      |     |     | 0,50 | 0,065 |
| ------------------------------------ | --- | --- | ---- | ----- |
| Posteriormente, las GNPs se lavaron  |     |     | 0,20 | 0,026 |
|                                      |     |     | 0,10 | 0,013 |
mediante dos centrifugaciones de 5
|     |     |     | 0,05 | 0,006 |
| --- | --- | --- | ---- | ----- |
minutos a 4ºC y 13500 rpm. Después
Tabla 5. Cantidades evaluadas de FITC – ssDNA – Biotina en
el modelo de captura.
de los lavados, se resuspendieron en
100 µL de buffer y se incubaron sobre una superficie recubierta con SAv durante 1 hora a
37ºC.  Se  evaluaron  diferentes  buffers  de  incubación  en  superficie,  incluyendo  PBS  con
Tween20 al 0,1%, tanto sin BSA como con BSA al 1%. Además, se probaron diversas
cantidades de FITC – ssDNA – Biotina 122 – 5p, calculadas en función de la cantidad de anti
– FITC inmovilizada por nm2 en las GNPs – COOH (tabla 5).
Química B: SAv – Biotina + anti – FITC – FITC
Se incubaron 5,0 x 107 GNPs – SAv de 100 nm en 100 µL por pocillo de buffer DR (pH 6)
con FITC – ssDNA – Biotina 122 – 5p durante 1 hora a RT y en agitación. Posteriormente, las
GNPs se lavaron mediante dos centrifugaciones de 5 minutos a 4ºC y 13500 rpm. Después de
los lavados, se resuspendieron en 100 µL de PBS con Tween20 al 0,1% y se incubaron sobre
una superficie recubierta con anti – FITC durante 1 hora a 37ºC.
50

Modelo de hibridación
Química A: anti – FITC – FITC + SAv – Biotina
Aproximación 1
Se incubaron 5,0 x 107 GNPs – anti – FITC de 100 nm en 100 µL por pocillo de PBS con
Tween20 al 0,1% con 0,260 moléculas de DGL – FITC 122 – 5p por nm2 de GNPs, durante 1
hora a RT y bajo agitación. Posteriormente, las GNPs se lavaron mediante una centrifugación
de 5 minutos a 4ºC y 13500 rpm. Después del lavado, se incubaron con ssDNA – Biotina 122
– 5p en buffer DR (pH 6) con SDS al 0,1% durante 1 hora a 40ºC y 800 rpm. Tras esta
incubación, las GNPs se lavaron nuevamente mediante dos centrifugaciones de 5 minutos a
4ºC y 13500 rpm. Finalmente, se resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y
BSA al 1%, y se incubaron sobre una superficie recubierta con SAv durante 1 hora a 37ºC.
Aproximación 2
Se incubó DGL – FITC 122 – 5p en 100 µL por pocillo con ssDNA – Biotina 122 – 5p
durante 1 hora a 40ºC y 800 rpm. Luego, se añadieron 5,0 x 107 GNPs – anti – FITC de 100
nm y se incubaron bajo agitación. Posteriormente, las GNPs se lavaron mediante dos
centrifugaciones de 5 minutos a 4ºC y 13500 rpm. Finalmente, se resuspendieron en 100 µL
de PBS con Tween 20 al 0,1% y BSA al 1%, y se incubaron sobre una superficie recubierta
con SAv durante 1 hora a 37ºC.
Con esta aproximación 2 se evaluaron diversas condiciones. Se probaron diferentes buffers de
incubación en los dos primeros pasos, como el buffer DR (pH 6) tanto con SDS como con
Tween20 al 0,1%, como el PBS (pH 7,4) con Tween20 al 0,1%. Además, se evaluaron
distintas temperaturas y tiempos de incubación de las GNPs – anti – FITC, a RT y 37ºC,
durante 15, 30 y 60 minutos. También se investigó el modelo utilizando ssDNA – Biotina 122
– 5p con la biotina tanto en el extremo como en la parte central del ssDNA. Además, se
exploraron diferentes condiciones en el primer paso de hibridación al emplear 0,260
moléculas de DGL – FITC 122 – 5p por nm2 de GNPs, utilizando únicamente ssDNA –
Biotina 122 – 5p, o combinándolo con la SMART – nucleobase Biotina y el RA. En estos
experimentos, se evaluó la SMART – nucleobase Biotina a 5 µM y el RA a 1 mM, tanto por
separado como en combinación; además, se probaron concentraciones de SMART – Biotina a
500 nM y RA a 100 µM. Finalmente, también se evaluó la hibridación con 0,130 moléculas
de DGL – FITC 122 – 5p por nm2 de GNPs en combinación con ssDNA – Biotina 122 – 5p,
SMART – nucleobase Biotina a 5 µM y RA a 1 mM.
51

Química C: COOH – NH + SAv – Biotina
2
Esta química se utilizó únicamente con la aproximación 1, ya que la aproximación 2 es
incompatible con ella.
En el procedimiento, se incubaron 5,0 x 107 GNPs – DGL 122 – 5p de 100 nm en 100 µL por
pocillo de buffer DR (pH 6) con Tween20 al 0.1% y con ssDNA – Biotina 122 – 5p durante 1
hora a 40ºC y 800 rpm. Posteriormente, las GNPs se lavaron mediante dos centrifugaciones
de 5 minutos a 4ºC y 13500 rpm. Finalmente, se resuspendieron en 100 µL de PBS con Tween
20 al 0,1% y BSA al 1%, y se incubaron sobre una superficie recubierta con SAv durante 1
hora a 37ºC.
Con esta metodología se evaluaron diferentes condiciones experimentales. Se utilizó ssDNA –
Biotina 122 – 5p de forma aislada o en combinación con SMART – nucleobase Biotina a 5
µM y RA a 1 mM. En estos experimentos, se evaluó la inclusión de la SMART – nucleobase
Biotina y el RA, tanto por separado como en combinación, en el mismo paso de hibridación
de las GNPs – DGL 122 – 5p con ssDNA 122 – 5p (metodología en un paso).
Adicionalmente, se evaluó la inclusión de ambos en combinación en un paso posterior
después de centrifugar las GNPs tras la hibridación (metodología en dos pasos).
Monoplex de miR – 122 – 5p con DR
Química A: anti – FITC – FITC + SAv – Biotina
Se incubó DGL – FITC 122 – 5p en 100 µl por pocillo de buffer DR (pH 6) con Tween20 al
0,1%, junto con ssDNA 122 – 5p, SMART – nucleobase Biotina y RA, durante 1 hora a 40ºC
y 800 rpm. Tras esta incubación, se añadieron 5,0 x 107 GNPs – anti – FITC de 100 nm y se
incubaron durante 15 minutos a RT y bajo agitación. Posteriormente, las GNPs se lavaron
mediante dos centrifugaciones de 5 minutos a 4ºC y 13500 rpm. Finalmente, se
resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y BSA al 1%, y se incubaron sobre
una superficie recubierta con SAv durante 1 hora a 37ºC. Con esta química, se evaluaron
diferentes condiciones experimentales. Se probaron 0,260 o 0,130 moléculas por nm2 de
GNPs de DGL – FITC 122 – 5p, así como diferentes concentraciones de SMART –
nucleobase Biotina a 5 µM o 500 nM y de RA a 1 mM o 100 µM.
Química C: COOH – NH + SAv – Biotina
2
Se incubaron 5,0 x 107 GNPs – DGL 122 – 5p de 100 nm en 100 µL por pocillo de PBS con
Tween20 al 0,1% y BSA al 1%, junto con ssDNA 122 – 5p, durante 1 hora a 37ºC y 800 rpm.
52

Tras esta incubación, las GNPs se lavaron mediante una centrifugación de 5 minutos a 4ºC y
13500 rpm. Posteriormente, se incubaron con SMART – nucleobase Biotina a 5 µM y RA a
1mM en buffer DR (pH 6) con Tween20 al 0,1% durante 1 hora 40ºC y 800 rpm. Luego, las
GNPs se lavaron nuevamente mediante dos centrifugaciones de 5 minutos a 4ºC y 13500 rpm.
Finalmente, se resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y BSA al 1%, y se
incubaron sobre una superficie recubierta con SAv durante 1 hora a 37ºC.
Química D: COOH – NH + anti – FITC – FITC
2
Se incubaron GNPs – DGL 122 – 5p en 100 µL por pocillo junto con ssDNA 122 – 5p
durante 1 hora a 37ºC y 800 rpm. Tras esta incubación, las GNPs se lavaron mediante una
centrifugación de 5 minutos a 4ºC y 13500 rpm. Posteriormente, las GNPs se incubaron con
SMART – nucleobase FITC a 5 µM y RA a 1mM durante 1 hora a 40ºC y 800 rpm en buffer
DR (pH 6) con Tween20 al 0,1%. Luego, se lavaron nuevamente las GNPs mediante dos
centrifugaciones de 5 minutos a 4ºC y 13500 rpm. Finalmente, se resuspendieron en 100 µL
de PBS con Tween 20 al 0,1% y BSA al 1%, y se incubaron sobre una superficie recubierta
con anti – FITC durante 1 hora a 37ºC.
Con esta química, se evaluaron diferentes condiciones experimentales. Se probaron diferentes
SMART – nucleobases con FITC unido mediante diferentes linkers: RP5, RP13, DBCO P12 y
DBCO RP12. Además, se evaluó el primer paso de hibridación de DGL 122 – 5p y ssDNA
122 – 5p utilizando GNPs – DGL 122 – 5p de 100 nm y 150 nm. En el caso de las GNPs de
100 nm, siempre se utilizaron 5,0 x 107 partículas, mientras que para las de 150 nm se usaron
5,0 x 107 o 2,5 x 107 partículas. También se probaron distintos buffers de incubación para el
primer paso de hibridación: PBS con Tween20 al 0,1% y BSA al 1%; suero diluido 3/10 en
buffer de lisis (fabricado en Destina Genómica S.L, Granada, España) con PK (Proteinase K)
a 0,4 mg/ml y DTT a 5 mM, 50 µM o 5 µM; y por último, suero diluido 1/10 en buffer B
(fabricado en Mecwins S.A., Madrid, España) y buffer de lisis con PK a 0,4 mg/ml y DTT a
50 µM. Finalmente, se evaluó el funcionamiento con muestras de suero con diferentes
concentraciones de miR – 122 – 5p diluidas 3/10 en buffer de lisis con PK a 0,4 mg/ml y DTT
a 50 µM.
Evaluación de la interferencia de distintas SMART – nucleobases FITC
Se incubaron GNPs – COOH, GNPs – DGL 122 – 5p o GNPs – PNA 122 – 5p en 100 µl por
pocillo con y sin SMART – nucleobase FITC (RP13, RP5, DBCO P12 o DBCO RP12) a 5
µM y RA a 1mM en buffer DR (pH 6) con Tween20 al 0,1% durante 1 hora 40ºC y 800 rpm.
53

Luego, se lavaron nuevamente las GNPs mediante dos centrifugaciones de 5 minutos a 4ºC y
13500 rpm. Finalmente, se resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y BSA al
1%, y se incubaron sobre una superficie recubierta con anti – FITC durante 1 hora a 37ºC
Figura 15. Metodología del estudio de interferencias de las SMARTs – nucleobases FITC.
(figura 15).
Monoplex de IL – 6
Se incubaron 2,5 x 107 GNPs – anti – IL – 6 de 150 nm en 100 µL por pocillo de PBS con
Tween20 al 0,1% y BSA al 1%, junto con IL – 6 (Thermo Fisher ScientificTM, Waltham, MA,
EEUU) sobre una superficie recubierta con anti – IL – 6 durante 1 hora a 37ºC.
Cinética de diferentes biomarcadores con GNPs de distintos tamaños
Cinética de IL – 6
Se incubaron 2,5 x 107 GNPs – anti – IL – 6 de 150 nm o 5,0 x 107 GNPs – anti – IL – 6 de
100 nm en 100 µL por pocillo de PBS con Tween20 al 0,1% y BSA al 1%, junto con 3,0 x 108
moléculas de IL – 6(105 pg/ml) sobre una superficie recubierta con anti – IL – 6 a 37ºC desde
10 a 60 minutos, en intervalos de 10 minutos.
Cinética de ssDNA 122 – 5p
Se incubaron 2,5 x 107 GNPs – DGL 122 – 5p de 150 nm o 5,0 x 107 GNPs – DGL 122 – 5p
de 100 nm en 100 µL por pocillo de PBS con Tween20 al 0,1% y BSA al 1%, junto con 3,0 x
108 moléculas de ssDNA – FITC 122 – 5p (5 pM) sobre una superficie recubierta con anti –
FITC a 37ºC desde 10 – 60 minutos, en intervalos de 10 minutos.
Detección combinada de IL – 6 y miR – 122 – 5p con DR
En la misma solución y superficie
54

Se incubaron 1,8 x 107 GNPs – anti – IL – 6 de 150 nm y 8,2 x 107 GNPs – DGL 122 – 5p de
100 nm en 100 µL por pocillo, junto con IL – 6 y ssDNA 122 – 5p durante 1 hora a 37ºC y
800 rpm. Tras esta incubación, las GNPs se lavaron mediante una centrifugación de 5 minutos
a 4ºC y 13500 rpm. Posteriormente, las GNPs se incubaron con SMART – nucleobase FITC a
5 µM y RA a 1 mM durante 1 hora 40ºC y 800 rpm en buffer DR (pH 6) con Tween20 al
0,1%. Luego, se lavaron nuevamente las GNPs mediante dos centrifugaciones de 5 minutos a
4ºC y 13500 rpm. Finalmente, se resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y
BSA al 1%, y se incubaron sobre una superficie recubierta con anti – FITC y anti – IL – 6
durante 1 hora a 37ºC. Con esta condición, el primer paso de captura de biomarcadores se
realizó tanto en PBS con Tween20 al 0,1% y BSA al 1% como en suero diluido 3/10 en buffer
de lisis con PK a 0,4 mg/ml y DTT a 50 µM.
En distinta solución y en la misma superficie
Se incubaron 1,8 x 107 GNPs – anti – IL – 6 de 150 nm en 100 µL por pocillo de suero diluido
1/8 en buffer B junto con IL – 6 durante 1,5 horas a 37ºC y 800 rpm. Tras esta incubación, las
GNPs se lavaron mediante una centrifugación de 5 minutos a 4ºC y 13500 rpm.
Se incubaron 8,2 x 107 GNPs – DGL 122 – 5p de 100 nm en 100 µL por pocillo de suero
diluido 3/10 en buffer de lisis con PK a 0,4 mg/ml y DTT a 50 µM junto con ssDNA 122 – 5p
durante 45 minutos a 37ºC y 800 rpm. Tras esta incubación, las GNPs se lavaron mediante
una centrifugación de 5 minutos a 4ºC y 13500 rpm. Posteriormente, las GNPs se incubaron
con SMART – nucleobase FITC a 5 µM y RA a 1mM en buffer DR (pH 6) con Tween20 al
0,1% durante 1 hora 40ºC y 800 rpm. Luego, se lavaron nuevamente las GNPs mediante dos
centrifugaciones de 5 minutos a 4ºC y 13500 rpm.
Finalmente, se juntaron ambas GNPs en 100 µL de PBS con Tween 20 al 0,1% y BSA al 1%,
y se incubaron sobre una superficie recubierta con anti – FITC y anti – IL – 6 durante 1 hora a
37ºC.
Multiplex de miR – 200a – 3p y miR – 486 – 5p con DR
Se incubaron 1,8 x 107 GNPs – DGL 200a – 3p de 150 nm y 8,2 x 107 GNPs – DGL 486 – 5p
de 100 nm en 100 µL por pocillo de suero diluido 3/10 en buffer de lisis con PK a 0,4 mg/ml
y DTT a 50 µM, junto con ssDNA 200a – 3p y ssDNA 486 – 5p durante 1 hora a 37ºC y 800
rpm. Tras esta incubación, las GNPs se lavaron mediante una centrifugación de 5 minutos a
4ºC y 13500 rpm. Posteriormente, las GNPs se incubaron con SMART – nucleobase FITC a 5
µM y RA a 1mM en buffer DR (pH 6) con Tween20 al 0,1% durante 1 hora 40ºC y 800 rpm.
55

Luego, se lavaron nuevamente las GNPs mediante dos centrifugaciones de 5 minutos a 4ºC y
13500 rpm. Finalmente, se resuspendieron en 100 µL de PBS con Tween 20 al 0,1% y BSA al
1%, y se incubaron sobre una superficie recubierta con anti – FITC durante 1 hora a 37ºC.
Metodología de lavado de los ensayos en superficies de silicio
Las superficies se lavaron con 8 lavados con multicanal con PBS con Tween20 al 0,1%.
Posteriormente, se quitó la gradilla y se lavó la superficie durante 5 minutos en agitación en
agua miliQ. Finalmente, se secó la superficie con una pistola de nitrógeno y se midió con la
tecnología AVAC.
Curvas de calibración y análisis de la sensibilidad
Se hizo un ajuste 5PL (Five – Parameter Logistic) para analizar los datos de curvas de
calibración, calcular el LOD (Limit of Detection), el LLoQ (Lower Limit of Quantification) y
el ULoQ (Upper Limit of Detection), e interpolar muestras. El rango dinámico de la
tecnología se calculó como log(ULoQ/LLoQ).
56

5. RESULTADOS
Objetivo 1: Desarrollar una tecnología innovadora para la detección de un único
miRNA mediante la integración de la química dinámica de Destina Genómica con la
tecnología plasmónica de Mecwins.
Modelo SAv – biotina: Evaluación de la Interacción y Optimización de las Condiciones
de Unión.
Este modelo se basó en la inmovilización de GNPs
(Gold Nanoparticles) recubiertas con biotina sobre una
superficie de silicio previamente funcionalizada con SAv
(Streptavidin) (figura 16) y tuvo como objetivo evaluar
los factores que podrían influir en la unión de las GNPs
al silicio, así como establecer una metodología adecuada
Figura 16. Modelo SAv – Biotina.
para integrar ambas tecnologías de manera eficiente.
Este modelo inicial permitió estudiar la interacción SAv – biotina de forma aislada, sin la
complejidad añadida de la hibridación y la DR (Destina Reaction).
En un primer experimento, se analizó el impacto de los componentes de la DR (buffer DR,
SMART – nucleobase y RA (Reducing Agent)) sobre la unión de las GNPs – biotina al silicio.
Los resultados, presentados en la figura 17, indican que el buffer DR redujo la unión de las
GNPs – biotina en un 52,5% en ausencia de RA y en un 47,3% en presencia de RA, en
comparación con la condición estándar con PBS con Tween20 al 0,1%. Estos datos sugieren
que el principal factor que afecta a la interacción SAv – biotina es el buffer DR, mientras que
el impacto del RA es mínimo. Este último resultado podría explicarse porque el RA
(NaBH CH) actúa principalmente sobre dobles enlaces y grupos carbonilo, que no participan
3
directamente en la interacción SAv- biotina. Por otro lado, la interferencia observada parece
estar relacionada con la sensibilidad de la unión SAv – biotina al pH. En particular, la
interacción fue más eficiente a un pH de 7,4, correspondiente al buffer estándar, mientras que
un pH de 6, característico del buffer DR, redujo significativamente la eficacia de la unión.
Esto podría deberse a que un pH más bajo altera la estructura y carga superficial de la SAv,
disminuyendo su afinidad por la biotina y, en consecuencia, la eficacia de la interacción. Este
57

hallazgo resaltó la importancia de controlar el pH y sugirió la necesidad de optimizar el buffer
de reacción para minimizar la interferencia con la unión SAv – biotina.
Por otro lado, los resultados de la figura 17 también muestran que la adición de diferentes
concentraciones de SMART – nucleobase biotinilada al buffer DR redujo casi por completo la
unión de las GNPs – biotina, con una disminución entre el 95% y el 97%. Aunque la
reducción en la cantidad de SMART – nucleobase mitigó parcialmente esta pérdida, no fue
posible restaurar completamente la unión original. Esto sugiere que la SMART – nucleobase,
debido a su menor tamaño, llega primero a la superficie de silicio y se une a la SAv
disponible, bloqueando así la adhesión de las GNPs – biotina. En este contexto, la SMART –
nucleobase compite directamente con las GNPs – biotina por la unión a la SAv de la
superficie de silicio. Dado que se requiere una cantidad elevada de SMART – nucleobase para
garantizar su introducción eficiente en la posición “blanco” dentro del tiempo establecido
(Bowler et al., 2010), esta interferencia resulta inevitable. Por lo tanto, este modelo demostró
que no es posible realizar la detección del ácido nucleico diana mediante la introducción de la
SMART – nucleobase directamente sobre la superficie de silicio. Este resultado fue crucial
para definir la estrategia metodológica y determinar que la DR debe realizarse en solución
antes de la inmovilización en la superficie.
Figura 17. Modelo de SAv – biotina con los diferentes componentes de la DR (buffer DR, RA, SMART –
nucleobase). Resultados en número de GNPs y en porcentaje de cambio en comparación con la condición
estándar en PBS -Tween20 0,1% (n = 6).
58

Debido a estos resultados, el protocolo de purificación y lavado de las GNPs antes de su
incubación en la superficie de silicio era crucial para eliminar los componentes de la DR y
garantizar una detección precisa. En la figura 18 se muestra la unión de las GNPs – biotina en
función de diferentes números y tipos de lavados mediante centrifugación. Se evaluaron 1, 2 y
3 lavados, así como dos enfoques: uno en el que las GNPs se centrifugaron directamente y
otro en el que primero se diluyeron y luego se centrifugaron. Con ambos tipos de lavado, se
observó que la pérdida de GNPs aumentaba con cada lavado adicional. Esto sugiere que, al
centrifugar, algunas GNPs se arrastran al recoger el sobrenadante, lo que provoca una pérdida
acumulativa conforme se realizan más lavados. Sin embargo, la menor pérdida de GNPs fue
del 7,6% y se produjo al realizar un único lavado con una dilución previa. Esta menor pérdida
podría deberse a que un mayor volumen favorece una distribución más uniforme de las GNPs
en la solución, lo que reduce la probabilidad de que sean arrastradas al recoger el
sobrenadante. Estos hallazgos permitieron establecer un protocolo de lavado optimizado para
minimizar la pérdida de material y mejorar la reproducibilidad del ensayo.
Figura 18. Modelo de SAv – biotina con diferentes números de lavados (1 a 3) y tipos de lavado (L y L(+D)).
Resultados en número de GNPs y en porcentaje de cambio en comparación con la condición estándar en PBS-
Tween20 0,1% (n = 6). Abreviaturas: W, Washing; W (+D), Washing (+ dilution).
Finalmente, después de determinar el tipo de lavado óptimo para la plataforma, se evaluó el
lavado utilizando el RA y la SMART – nucleobase. En este caso, se probaron 1, 2 y 3 lavados,
pero exclusivamente con el lavado con una dilución previa. Los resultados, presentados en la
figura 19, muestran que, al introducir la SMART – nucleobase, la mayor pérdida de GNPs
59

ocurrió con un único lavado, mientras que la menor pérdida se observó al realizar dos
lavados. Esto sugiere que, incluso con la dilución previa, un solo lavado no es suficiente para
eliminar completamente la SMART – nucleobase, lo que hace que compita con las GNPs –
biotina por la SAv superficial, impidiendo su unión. Por lo tanto, parece necesario encontrar
un equilibrio entre la pérdida de GNPs debido al arrastre durante la centrifugación y la
ineficiencia en la eliminación de la SMART – nucleobase. Este equilibrio se alcanzó
realizando dos lavados con una dilución previa después la DR con la SMART – nucleobase y
el RA.
En resumen, la optimización del protocolo de lavado reveló que son necesarios dos lavados
con dilución previa para eliminar los componentes de la DR sin comprometer la cantidad de
GNPs retenidas en la superficie.
Figura 19. Modelo de SAv biotina con SMART – nucleobase y RA, utilizando diferentes cantidades de
lavados (de 1 a 3) de tipo L(+D). Resultados en número de GNPs y en porcentaje de cambio en comparación
con la condición estándar en PBS-Tween20 0,1% (n = 6). Abreviaturas: W (+D), Washing (+ dilution).
Modelo de captura: Optimización de la Captura de Ácidos Nucleicos y Selección de la
Química de Inmovilización.
El modelo de captura se diseñó para evaluar la capacidad tanto de las GNPs como de la
superficie de silicio para capturar ácidos nucleicos, así como para optimizar la cantidad de
sonda DGL que se empleó en etapas posteriores. Como se ha mencionado previamente, sólo
60

había dos químicas candidatas para la inmovilización de la DGL en las GNPs compatibles con
este modelo de captura: anti – FITC – FITC (química A) y SAv – biotina (química B) (figura
20).
Evaluación del modelo de captura utilizando las químicas anti – FITC – FITC y SAv – biotina
en las GNPs – DGL
61

En un primer experimento, se evaluó el funcionamiento del modelo de captura utilizando las
dos químicas propuestas (figura 20). Para asegurar que no hubiera problemas en la captura de
moléculas de ácidos nucleicos por defecto, se empleó una cantidad elevada de FITC – ssDNA
– biotina 122 – 5p, con un exceso de 2 x 104 moléculas de ácido nucleico por GNP (17 nM).
Los resultados, presentados en la figura 21, mostraron un ratio (S/B, signal/background) de
22,6 para la química A (anti – FITC – FITC) y de 3,6 para la química B (SAv – biotina), lo
que evidencia que la química A es considerablemente más eficiente en la captura de ácidos
nucleicos. Esta superioridad se atribuye a una menor unión inespecífica y una mayor señal de
la química A en comparación con la química B. Por lo tanto, se deduce que, cuando la SAv
está unida a las GNPs, la unión inespecífica entre SAv y anti – FITC ocurre con mayor
frecuencia, y la captura de ácidos nucleicos es menos eficiente. Esto puede deberse a que la
SAv es una proteína tetramérica más grande que el anticuerpo anti – FITC, por lo que su
tamaño puede generar un impedimento estérico al inmovilizarse en las GNPs. La orientación
aleatoria de la SAv podría exponer regiones de la proteína que interactúan de forma no
específica con el anti – FITC, y podría obstaculizar el acceso de la biotina a los sitios de unión
Figura 20. Modelo de captura. A) Química anti – FITC – FITC + SAv – Biotina. B) Química SAv – Biotina +
anti – FITC – FITC.
de la SAv, disminuyendo la eficiencia de la captura. Por este motivo, se descartó el uso de
SAv – biotina para la unión GNPs – DGL, y la química A fue seleccionada para optimizar
62

este modelo de captura. Este resultado permitió seleccionar la química anti – FITC – FITC
como la estrategia preferente para la inmovilización de la DGL en las GNPs debido a su
mayor eficiencia y menor unión no específica. En la tabla 6 se muestran las químicas
evaluadas hasta el momento y su estado en el estudio.
Figura 21. Evaluación del modelo de captura con las químicas A (anti – FITC – FITC + SAv – Biotina) y B
(SAv – Biotina + anti – FITC – FITC). Resultados en número de cuentas no específicas, en número de cuentas
específicas a 17 nM y en ratio (S/B) a 17 nM (n = 4).
Superficie de silicio -
Química GNPs - DGL Estado
SMART - nucleobase
A anti - FITC - FITC SAv - biotina Seleccionada con el modelo de captura
B SAv - biotina anti - FITC - FITC Descartada con el modelo de captura
Tabla 6. Químicas evaluadas hasta ahora (A y B) y su estado en el estudio.
Estudio del buffer requerido para la incubación en superficie
Tras seleccionar la química A (anti – FITC – FITC + SAv – biotina) como la candidata para
su optimización (figura 20A), se evaluó la inclusión de un componente biológico, como BSA
en el buffer de incubación de las GNPs sobre la superficie de silicio. Este componente podría
ayudar a reducir las uniones inespecíficas de las GNPs con la superficie de silicio al
adsorberse cubriendo los sitios de unión no específicos. Los resultados, presentados en la
figura 22, muestran que el uso de BSA al 1% en PBS con Tween20 al 0,1% generó un ratio
(S/B) de 41, mientras que el PBS con Tween20 al 0,1% sin BSA obtuvo un ratio (S/B) de
63

22,6. Se observó que la BSA no solo reduce la unión inespecífica, como se esperaba, sino que
también incrementa la señal. Este aumento podría deberse a que la BSA disminuye la
agregación de las GNPs, mejorando su dispersión y la disponibilidad de sitios de unión
específicos. La inclusión de BSA en el buffer de incubación demostró ser esencial para
minimizar la unión no específica y mejorar el ratio (S/B) en la detección de ácidos nucleicos.
Optimización de la cantidad de anticuerpo anti-FTIC inmovilizado en las GNPs – COOH
Figura 22. Estudio del buffer requerido para la incubación en superficie (PBS – Tween20 al 0.1% con y sin
BSA al 1%) utilizando el modelo de captura con la química A (anti – FITC – FITC + SAv – biotina).
Resultados en número de cuentas no específicas, en número de cuentas específicas a 17 nM y en ratio (S/B) a
17nM(n=4)
Se evaluó el funcionamiento del modelo de captura utilizando la química A (figura 20A) con
distintas cantidades de anticuerpo anti – FITC inmovilizado en la superficie de las GNPs –
COOH. Los resultados, presentados en la figura 23, muestran el ratio (S/B) en función de la
densidad de moléculas de anti – FITC por nm2 de superficie de las GNPs, empleando una
concentración de 17 nM de FITC – ssDNA – biotina 122 – 5p. Se observó que la cantidad
más baja de anti – FITC resultó en un ratio (S/B) de 17,6, lo que indica una menor eficiencia
de captura. A medida que aumentaba la cantidad de anti – FITC, el ratio (S/B) incrementaba,
alcanzado un máximo de 70,7 con 0,033 moléculas de anti – FITC por nm2. Sin embargo, con
las cantidades más elevadas de anticuerpo, el ratio (S/B) comenzó a descender, alcanzando un
valor de 41,0 con la mayor cantidad de anticuerpo evaluada.
64

La figura 24 presenta los resultados de las mediciones de fluorescencia del anticuerpo anti –
FITC inmovilizado en las GNPs – COOH. Los datos experimentales coincidieron con los
cálculos teóricos de las capas de anti – FITC teniendo en cuenta la superficie del anti – FITC
y de las GNPs (tabla 3 de Material y Métodos), cuando se utilizaron cantidades bajas de anti –
FITC, hasta un máximo de 0,033 moléculas por nm2. Sin embargo, al superar este límite, la
adición de más anticuerpo no incrementó el número de capas inmovilizadas, lo que generó
una discrepancia significativa entre los resultados experimentales y lo esperado teóricamente
teniendo en cuenta la superficie del anti – FITC y de las GNPs.
Figura 23. Optimización de la cantidad de anti – FITC inmovilizado en GNPs – COOH utilizando el modelo
de captura con la química A (anti – FITC – FITC + SAv – Biotina). Resultados en ratio (S/B) a 17 nM en
función del número de moléculas de anti – FITC por nm2 de GNPs (n = 3).
Estos resultados sugieren que una cantidad insuficiente de anticuerpo limita la captura de
ácidos nucleicos debido a la falta de sitios de unión. Aunque el rendimiento de las GNPs con
anti – FITC mejora a medida que aumenta la cantidad de anticuerpo, se establece un umbral
de 0,033 moléculas por nm2. Superado este límite, la efectividad disminuye, ya que no parece
posible inmovilizar más moléculas de anticuerpo en la superficie de las GNPs – COOH, y las
pocas moléculas adicionales que se inmovilizan bloquean los sitios de unión de los
anticuerpos previamente fijados, reduciendo la eficiencia. Por lo tanto, 0,033 moléculas por
nm2 constituye el punto óptimo para maximizar la efectividad del modelo de captura. Este
hallazgo es clave para optimizar la funcionalización de las GNPs y asegurar una alta
eficiencia de captura de los ácidos nucleicos.
65

Figura 24. Optimización de la cantidad de anti – FITC en GNPs – COOH utilizando el modelo de captura con
la química A (anti – FITC – FITC + SAV – Biotina). Resultados en capas de anti – FITC inmovilizadas, tanto
medidas como teóricas, en función del número de moléculas de anti – FITC por nm2 de GNPs. Las múltiples
capas de anti – FITC se midieron mediante fluorescencia a 350 nm (n = 3).
Evaluación de la cantidad de FITC – ssDNA – biotina para determinar la cantidad de sonda
DGL necesaria en la plataforma
Finalmente, para establecer la cantidad óptima de sonda DGL tanto para el modelo de
hibridación como para la DR, se evaluó el modelo de captura con la química A (figura 20A)
utilizando diversas concentraciones de FITC – ssDNA – biotina 122 – 5p. Los resultados
reveleraon que la eficiencia de captura, medida por el ratio (S/B), alcanzaba un máximo de
Figura 25. Evaluación de la cantidad óptima de FITC – ssDNA – Biotina óptima utilizando el modelo de
captura con la química A (anti – FITC – FITC + SAv – Biotina). Resultados en ratio (S/B) a 17 nM en función
del número de moléculas de FITC – ssDNA – Biotina 122 – 5p por nm2 de GNPs (n = 3).
66

82,3 a una concenración de 0,260 moléculas de ssDNA por nm2 de GNPs. Más allá de esta
cantidad, la señal no aumentaba, lo que indica que esta concentración representa el limite de
captura sin comprometer la eficiencia. La determinación de la cantidad óptima de ssDNA –
FITC – biotina permitió establecer la concentración ideal de sonda DGL para maximizar la
señal y la eficiencia de la captura en la plataforma.
Modelo de hibridación: Optimización de la Hibridación entre la Sonda DGL y el miRNA
Diana
El modelo de hibridación se diseñó para evaluar y optimizar la hibridación entre la sonda
DGL y el miRNA diana, de manera aislada, eliminando la introducción de la SMART –
nucleobase y la aminación reductora con el RA de la DR. En la figura 26 se presentan las dos
posibles aproximaciones con el modelo de hibridación, la primera consistía en unir la sonda
DGL a las GNPs antes de realizar la hibridación, mientras que la segunda implicaba hibridar
primero y luego unir la sonda DGL a las GNPs. La aproximación más eficiente fue la que se
optimizó para su posterior aplicación en el sistema real con la DR. Es importante señalar que
el modelo de hibridación siempre ofrecerá mejores resultados que la DR, ya que no requiere
la incorporación de la SMART – nucleobase en la posición “blanco” para su detección. Este
modelo permitió estudiar la eficiencia de la hibridación en diferentes condiciones y
seleccionar la aproximación más adecuada para la construcción de la plataforma final.
Funcionamiento del modelo de hibridación con las dos aproximaciones
Primero, se evaluó el funcionamiento del modelo de hibridación utilizando las dos
aproximaciones candidatas, 1 (GNPs + DGL  miRNA  Superficie) y 2 (DGL + miRNA
 GNPs  Superficie), bajo las condiciones optimizadas con el modelo de captura (el buffer
de incubación en superficie, la cantidad de anti – FITC y la cantidad de DGL). En la figura 27
se presentan los valores del ratio (S/B) obtenidos con diferentes concentraciones de ácido
nucleico diana (3, 30 y 300 pM) con ambas aproximaciones. Con la aproximación 2, los ratios
(S/B) fueron significativamente superiores a 2 para las tres concentraciones analizadas,
alcanzando valores de 3, 43,1 y 52,3, respectivamente. Por otro lado, la aproximación 1
mostró ratios (S/B) iguales o inferiores a 2 en todos los casos, con valores de 1,3, 1,2 y 2,1,
respectivamente. Estas diferencias significativas evidenciaron que el modelo de hibridación
con la química A es más eficiente cuando se utiliza la aproximación 2, es decir, la hibridación
ocurre de manera más eficaz en solución, sin la presencia de GNPs, en comparación con la
hibridación sobre la superficie de las GNPs. Este comportamiento puede explicarse por la
naturaleza de la interacción entre las GNPs y la sonda DGL en la química A, que se basa en la
67

unión anti – FITC – FITC. Esta interacción involucra el anti – FITC, que tiene un tamaño
considerable de 150 kDa. El gran tamaño del anticuerpo anti – FITC podría interferir con la
hibridación cuando la sonda DGL está inmovilizada en la superficie de las GNPs mediante
esta interacción. En contraste, en solución, la sonda DGL y el ácido nucleico diana tiene
mayor libertad de movimiento, lo que facilita su interacción y aumenta la probabilidad de una
hibridación efectiva. Este resultado confirmó que la hibridación en solución, seguida de la
unión a las GNPs, es la estrategia más eficiente para la detección de ácidos nucleicos en la
plataforma.
Figura 26. Modelo de hibridación utilizando la química A (anti – FITC – FITC + SAv – Biotina): aproximación
1 (GNPs + DGL  miRNA  Superficie) y aproximación 2 (DGL + miRNA  GNPs  superficie).
Figura 27. Funcionamiento del modelo de hibridación con las dos aproximaciones utilizando la química A (anti
– FITC – FITC + SAv – Biotina). Resultados en ratio (S/B) a concentraciones de 3 pM, 30 pM y 300 pM de
ssDNA – Biotina 122 – 5p (n = 4).
68

Evaluación de diferentes anticuerpos anti – FITC y detergentes en el buffer DR
Para optimizar el modelo de hibridación con la química y la aproximación seleccionadas, se
exploraron dos opciones: encontrar un anticuerpo anti – FITC que fuese más sensible en la
detección de FITC, y encontrar un detergente que, utilizado en el buffer DR, interfiriese lo
menos posible con la unión SAv – biotina. En la figura 28 se muestra que se obtuvieron ratios
superiores con el anticuerpo anti – FITC 2 proporcionado por Abcam que con el anti – FITC 1
proporcionado por Hytest con ambos detergentes, 199,9 frente 52,3 con SDS y 469,4 frente a
104,2 con Tween20. Además, en ambos casos, el uso de Tween20 produjo ratios (S/B)
significativamente superiores que el uso de SDS con ambos anticuerpos. El ratio (S/B) más
alto, de 469,4, se consiguió con el anticuerpo anti – FITC 2 y Tween20 en el buffer DR. Estos
resultados correlacionan con el análisis llevado a cabo con un ELISA para evaluar la afinidad
que tienen ambos anticuerpos anti – FITC por el FITC. En la figura 29 se muestran los
resultados que se obtuvieron por fluorescencia, donde se observa que se alcanzó una
fluorescencia máxima de 1,47 con el anti – FITC 2 y de 1,11 con el anti – FITC 1. Por lo
tanto, tanto con un ELISA como con el modelo de hibridación se confirmó que el anticuerpo
anti – FITC 2 tiene mayor afinidad por FITC que el anticuerpo anti – FITC 1. En cuanto a la
diferencia entre los detergentes, podría deberse a que el Tween20 bloquea de manera más
efectiva los sitios inespecíficos sin interferir con las uniones específicas entre anti – FITC –
FITC en la captura de la DGL con las GNPs. En cambio, el SDS, al es ser un detergente
Figura 28. Evaluación de distintos anticuerpos anti – FITC (1, Hytest, y 2, Abcam) y detergentes en el buffer DR
(SDS y Tween20) utilizando el modelo de hibridación con la química A (anti – FITC – FITC + SAv – Biotina) y
con la aproximación 2. Resultados en ratio (S/B) a 300 pM de ssDNA – Biotina 122 – 5p (n = 4).
69

aniónico, podría desestabilizar las uniones anti – FITC – FITC, algo que no ocurre con el
Tween20, ya que es un detergente no iónico. La selección del anticuerpo anti – FITC 2 y el
Tween20 como componentes óptimos del buffer DR permitió maximizar la señal y minimizar
la interferencia en la detección de ácidos nucleicos.
Figura 29. ELISA directo con los anticuerpos anti – FITC 1, Hytest, y 2, Abcam. Resultados en RFU en
función de la concentración de FITC (pg/ml) (n = 3).
Optimización del tiempo y la temperatura para la captura del complejo hibridado con GNPs –
anti – FITC
Se propusieron la temperatura y el tiempo de captura del complejo hibridado con las GNPs –
anti – FITC como factores clave para mejorar el rendimiento del modelo de hibridación. En la
figura 30 se presenta el ratio (S/B) obtenido con 300 pM de ácido nucleico diana en función
del tiempo de incubación, comparando dos temperaturas: RT y 37ºC. Los resultados muestran
que los ratios (S/B) fueron significativamente más altos a temperatura ambiente con todos los
tiempos evaluados: 523,8 frente a 332,2 tras 15 minutos, 489,3 frente a 226,5 tras 30 minutos
y 469,4 frente a 176,8 tras 60 minutos. Además, con ambas temperaturas, se observó una
disminución en los ratios (S/B) a medida que el tiempo de captura aumentaba. Esto sugiere
que las condiciones óptimas para maximizar la captura del complejo hibridado consisten en
incubar las GNPs – anti – FITC con el producto hibridado durante 15 minutos a RT, ya que se
logró un ratio de 523,8. Este comportamiento podría explicarse porque, a mayor temperatura,
la energía cinética de las partículas aumenta, lo que favorece las interacciones entre las GNPs
y, como resultado, su agregación. Asimismo, tiempos de incubación más prolongados
incrementan la probabilidad de encuentros entre partículas, lo que también conduce a su
agregación. Esta agregación, provocada tanto por temperaturas elevadas como por tiempos
70

prolongados, reduce el número de GNPs libres disponibles para capturar el complejo
hibridado, afectando negativamente el rendimiento del modelo. La optimización del tiempo y
la temperatura de captura reveló que una incubación de 15 minutos a temperatura ambiente es
suficiente para lograr una alta eficiencia en la detección de ácidos nucleicos, evitando la
agregación de las GNPs.
Figura 30. Optimización del tiempo (15, 30 y 60 minutos) y la temperatura (37ºC y RT) para la captura del
complejo hibridado NA – DGL con GNPs – anti – FITC, utilizando el modelo de hibridación con la química A
(anti – FITC – FITC + SAv – Biotina) con la aproximación 2. Resultados en ratio (S/B) a 300 pM de ssDNA –
Biotina 122 – 5p (n = 3).
Modelo de hibridación frente a DR: identificación de problemas e interferencias
Hasta este momento del estudio, se habían analizado y validado los tres modelos propuestos,
lo que facilitó la comprensión del sistema antes de combinar ambas tecnologías, es decir,
antes de llevar a cabo la DR con la introducción de la SMART – nucleobase y la aminación
Figura 31. DR con la química A (anti – FITC – FITC + SAv – Biotina) con la aproximación 2.
71

reductora con el RA (figura 31). En este punto, se llevaron a cabo diferentes experimentos
para identificar los problemas e interferencias que podrían surgir al integrar estas tecnologías.
Estos experimentos fueron esenciales para identificar posibles limitaciones y adaptar la
metodología para la detección de miRNAs en la tecnología final.
Análisis de la accesibilidad de la etiqueta del complejo hibridado y del efecto del pH en la
captura mediante GNPs – anti – FITC
Se estudió el efecto del pH en la captura del complejo hibridado mediante GNPs – anti –
FITC y la accesibilidad de la etiqueta biotina considerando su posición dentro del complejo.
Se seleccionó la aproximación 2 (figura 26 – 2) por su mayor efectividad (figura 27); sin
embargo, en esta estrategia, las GNPs – anti – FITC se incorporan después de completar la
hibridación. Esto impide realizar un lavado entre las etapas de hibridación y captura con las
GNPs – anti – FITC, ya que tras la hibridación no es posible separar los componentes
mediante centrifugación. Por lo tanto, ambas etapas, se tienen que llevar a cabo utilizando un
buffer DR con un pH de 6, considerado óptimo para la inserción de la SMART – nucleobase
en la posición “blanco” (Bowler et al., 2010). No obstante, fue crucial verificar si este pH
afectaba de manera negativa la captura del complejo por las GNPs – anti – FITC. Otro factor
importante para evaluar fue la ubicación de la etiqueta biotina, la cual difiere entre el modelo
de hibridación y la DR. En el modelo de hibridación, la biotina se encuentra en el extremo del
ácido nucleico diana, mientras que en la DR está situada en el centro del complejo hibridado.
Esta disposición central podría dificultar el acceso de la biotina para interactuar con la
superficie de silicio recubierta con SAv. Para analizar esta posibilidad, se diseñó una variante
del modelo de hibridación en la que la biotina se colocó en el centro del complejo hibridado
Figura 32. Modelo de hibridación con biotina central utilizando la química A (anti – FITC – FITC + SAv –
Biotina) con la aproximación 2.
(figura 32).
72

La figura 33 muestra el porcentaje de cambio en las cuentas no específicas, las cuentas
específicas y el ratio (S/B) bajo dos condiciones experimentales, una con un pH de 7,4 y otra
con la biotina localizada en el centro del complejo hibridado, en comparación con la
condición estándar (pH de 6 y biotina en el extremo). Con un pH de 7,4, se observó un
aumento del 0,6% en las cuentas no específicas, un incremento del 37,7% en las cuentas
específicas y una mejora del 36,9% en el ratio (S/B) respecto a la condición estándar. Estos
resultados indican que el pH influye más en las cuentas específicas que en las no específicas,
y que, por lo tanto, afecta directamente la captura del complejo hibridado mediante las GNPs
– anti – FITC. Este aumento en la efectividad podría explicarse porque un pH de 7,4 favorece
la estabilidad estructural y la afinidad del anticuerpo anti – FITC por el FITC de la sonda
DGL. A un pH de 6, es probable que el anticuerpo anti – FITC experimente cambios
conformacionales que alteren la estructura de sus sitios de unión, reduciendo su afinidad
específica por el FITC. Por otro lado, cuando la biotina se localizó en el centro del complejo
hibridado, el ratio (S/B) disminuyó en un 75,3%. Este resultado sugiere que la accesibilidad
de la biotina es considerablemente menor cuando se encuentra en la parte central del complejo
hibridado, en comparación a cuando se encuentra en el extremo. Aunque estas condiciones
fueron estudiadas, las limitaciones del sistema impiden modificar la posición de la SMART –
nucleobase para situar la biotina en el extremo, así como cambiar el pH de 6 sin optar por la
Figura 33. Problemas e interferencias de la DR. Química A (anti – FITC – FITC + SAv – Biotina) con la
aproximación 2. Resultados en variación (%) en cuentas no específicas, en cuentas específicas a 300 pM y en
ratio (S/B) a 300 pM, en comparación con la condición estándar que utiliza biotina en el extremo y un pH de 6.
Se incluyen los datos del modelo de hibridación con biotina central y con pH 7,4 (n = 3).
73

aproximación 1, la cual resultó menos eficiente (figura 27). Estos resultados confirmaron la
importancia de optimizar el pH y la posición de la etiqueta para maximizar la eficiencia de la
captura en la plataforma final, pero también destacaron las limitaciones inherentes a la
combinación de las dos tecnologías.
Interferencia de los componentes de la DR: SMART – nucleobase y RA
Se evaluó la interferencia de los componentes de la DR, específicamente la SMART –
nucleobase y el RA, tanto de manera individual como conjunta, utilizando el modelo de
hibridación (figura 26 – 2), y de manera conjunta en la DR (figura 31). Se analizaron los
cambios en las cuentas no específicas, las cuentas específicas y el ratio (S/B) en comparación
con el modelo de hibridación estándar, que no incluye la SMART – nucleobase ni el RA. Los
resultados, resumidos en la figura 34, revelaron un aumento significativo en las cuentas no
específicas y una reducción considerable en las cuentas específicas con todas las condiciones
evaluadas, lo que provocó una disminución notable en el ratio (S/B). Este análisis permitió
cuantificar el impacto negativo de la SMART – nucleobase y el RA en la eficiencia de la
hibridación y la DR.
Figura 34. Problemas e interferencias de la DR. Química A (anti – FITC – FITC + SAv – Biotina) con la
aproximación 2. Resultados en variación (%) en cuentas no específicas, en cuentas específicas a 300 pM y en
ratio (S/B) a 300 pM, en comparación al modelo de hibridación de diferentes condiciones: modelo de
hibridación con RA, con SMART – nucleobase y con ambos, y DR (n = 3).
El mayor incremento en las cuentas no específicas se produjo al usar el RA en solitario con el
modelo de hibridación, seguido por la SMART – nucleobase en solitario y, finalmente, con la
74

combinación de ambos componentes, tanto en el modelo de hibridación como en la DR. Esto
indica que el RA tiene un mayor impacto en el aumento de la señal inespecífica que la
SMART – nucleobase, aunque este efecto disminuye cuando ambos componentes están
presentes simultáneamente. Se propone que el RA puede modificar la carga superficial de las
GNPs, lo que a su vez podría afectar la orientación del anticuerpo anti – FITC, favoreciendo
las interacciones inespecíficas entre las GNPs – anti – FITC y la superficie de silicio
recubierta con SAv al exponer regiones propensas a interacciones electrostáticas o
hidrofóbicas. Por su parte, el efecto de la SMART – nucleobase puede deberse a interacciones
inespecíficas con la DGL, incluso en ausencia del ácido nucleico diana. Esto favorecería la
unión de las GNPs a la superficie de silicio con SAv a través de la biotina de la SMART –
nucleobase. Sin embargo, cuando ambos componentes están presentes, el aumento en las
cuentas no inespecíficas es similar al observado con la SMART – nucleobase en solitario.
Esto sugiere que cuando el RA lleva a cabo su función principal de reducir específicamente la
SMART – nucleobase, no impacta directamente sobre las GNPs. Por lo tanto, el efecto del RA
en las cuentas no específicas podría ser menos relevante de lo esperado.
La disminución en las cuentas específicas fue más pronunciada en la DR, seguida del modelo
de hibridación con ambos componentes, luego con la SMART – nucleobase en solitario, y
finalmente con el RA en solitario. Esto indica que la SMART – nucleobase tiene un mayor
impacto en la reducción de la señal específica que el RA, siendo el impacto más significativo
cuando actúan juntos. En la DR, esta reducción es aún más notable, probablemente debido a
factores adicionales como la baja accesibilidad de la biotina ubicada en el centro del complejo
hibridado, como se demostró en estudios previos (figura 33). Además, la DR presenta
limitaciones inherentes frente al modelo de hibridación, ya que requiere tanto de la
hibridación como de la incorporación de la SMART – nucleobase en la posición “blanco”. Se
propone que el RA disminuye la captura del complejo hibridado por las GNPs – anti – FITC
debido la hipótesis inicial, y es que puede reducir la carga neta negativa de estas partículas.
Por otro lado, la SMART – nucleobase también contribuye a la disminución de las cuentas
específicas. Esto ocurre porque la SMART – nucleobase puede unirse inespecíficamente a la
DGL, incluso en ausencia del ácido nucleico diana, lo que impide la formación del complejo
hibridado entre la sonda DGL y el ácido nucleico diana. La combinación de ambos
componentes amplifica esta disminución de las cuentas específicas. Aunque el efecto del RA
sobre las GNPs y el anti – FITC se elimina al ejercer principalmente su función de reducir la
SMART – nucleobase, esta reducción parece aumentar el efecto de la SMART – nucleobase.
75

Esto puede deberse a que la SMART – nucleobase tiene menor probabilidad de disociarse del
sitio de unión inespecífico en la DGL al ser reducida, intensificando el problema. Por lo tanto,
la combinación de la SMART – nucleobase y el RA parece aumentar la interferencia en la
hibridación y reducir la eficiencia de la DR.
En conjunto, estos resultados indican que tanto el RA como la SMART – nucleobase
interfieren con el sistema al reducir la señal específica y aumentar la señal inespecífica, lo que
impacta negativamente en el rendimiento del sistema. Estos hallazgos demostraron la
necesidad de desarrollar estrategias para mitigar la interferencia de los componentes de la DR
y mejorar la sensibilidad de la plataforma.
Evaluación de las soluciones propuestas para abordar los problemas e interferencias
identificados en la DR
Después de identificar los problemas relacionados con la DR, se propusieron varias
soluciones:
 Reducir el número de moléculas de DGL por superficie de las GNPs para minimizar la
interferencia de la SMART – nucleobase que produce un aumento en las cuentas no
específicas.
 Disminuir la cantidad de SMART – nucleobase y RA para reducir su propia interferencia.
 Implementar un procedimiento en dos pasos (primero hibridación y luego DR) para
minimizar la interferencia de la SMART – nucleobase y el RA con el proceso de
hibridación.
 Utilizar la aproximación 1 para eliminar la interferencia del pH 6 del buffer DR en la
unión específica anti – FITC – FITC.
 Emplear una SMART – nucleobase con FITC, de mayor tamaño que la biotina, para
mejorar la accesibilidad de la proteína en el centro del complejo hibridado.
 Usar una molécula más pequeña que el BSA, como el mPEG – SH (methyl – PEG – tiol)
6K, para bloquear y almacenar las GNPs, para mejorar la accesibilidad de la etiqueta de la
SMART – nucleobase en el centro del complejo hibridado.
Reducción en el número de moléculas de DGL por superficie de GNPs y disminución de la
cantidad de SMART – nucleobase y de RA
Estas dos soluciones se probaron inicialmente porque son compatibles con la metodología
optimizada hasta el momento, que utiliza la química A (anti – FITC – FITC + SAv – biotina)
76

con la aproximación 2. En la figura 35 se presenta el ratio (S/B) a 300 pM con el modelo de
hibridación con SMART – nucleobase y RA, y con la DR, comparando la condición estándar
con las dos soluciones propuestas: reducción en el número de moléculas de DGL por nm2 de
GNPs y disminución de la cantidad de SMART – nucleobase y RA.
Al reducir el número de moléculas de sonda DGL por superficie de las GNPs, el ratio (S/B)
fue de 42,8 para el modelo de hibridación y de 9,3 para la DR, valores casi idénticos a los
obtenidos con la condición estándar (37,3 y 8,7, respectivamente). Esto sugiere que esta
reducción no es suficiente para resolver los problemas interferencia de la SMART –
nucleobase con la DGL que producen un aumento en las cuentas no específicas.
Sin embargo, al disminuir la cantidad de SMART – nucleobase y RA, el ratio (S/B) aumentó
significativamente a 282,3 en el modelo de hibridación, mejorando considerablemente
respecto al valor estándar de 37,3. Este aumento sugiere que la reducción de estos
componentes elimina su inferencia en el modelo de hibridación, restaurando la señal. En
cambio, en la DR, el ratio (S/B) bajó a 1,5, frente al valor estándar de 8,7, lo que indica que
esta solución no es eficaz para la DR. Esto probablemente se debe a que la DR requiere una
cantidad suficiente de estos componentes para funcionar correctamente; cuando se usan en
menor cantidad, el proceso de inserción de la SMART – nucleobase en la posición “blanco”
se vuelve más lento y menos eficiente (Bowler et al., 2010). Estos resultados indicaron que la
reducción de la concentración de SMART – nucleobase y RA es efectiva para mejorar la
hibridación, pero no para la DR, lo que sugiere que este proceso requiere una concentración
77
Figura 35. Soluciones a los problemas e interferencias de la DR: reducción DGL/nm2 y disminución SMART
y RA. Química A (anti – FITC – FITC + SAv – Biotina) con la aproximación 2. Resultados en ratio (S/B) a
300 pM con el modelo de hibridación con SMART – nucleobase y con RA, y con la DR (n = 3).

mínima de estos reactivos.
Funcionamiento e interferencia de los componentes de la DR con la química COOH – NH y
2
evaluación del procedimiento en dos pasos con la aproximación 1
La siguiente solución propuesta consistió en realizar el procedimiento en dos pasos para
eliminar la interferencia de la SMART – nucleobase y el RA, dividiendo el proceso en una
etapa inicial de hibridación seguida de la DR. Sin embargo, esta estrategia no es compatible
con la aproximación 2, ya que, en este enfoque, donde la hibridación y la DR se realizan en
solución, no es posible lavar después de la hibridación. Esto se debe a que las GNPs aún no se
han unido a la DGL, lo que impide su recuperación mediante centrifugación y, por ende, la
incorporación de la SMART – nucleobase y el RA tras ese paso. Por esta razón, se evaluó la
aproximación 1 como una alternativa viable, ya que permite implementar el procedimiento en
dos pasos y además contrarrestar la interferencia del pH 6 del buffer DR. En este caso, el
primer paso de captura de la DGL con las GNPs podría realizarse a pH 7.4. No obstante, la
aproximación 1 demostró no ser compatible con la química A (anti – FITC – FITC + SAv –
biotina) (figura 27), y por ello, para evaluar la aproximación 1 junto con el procedimiento en
dos pasos, fue necesario cambiar la química. Se propuso la química C (COOH – NH + SAv –
2
biotina) (figura 36), ya que es compatible exclusivamente con la aproximación 1 (tabla 2 de
Material y Métodos) y permite implementar el procedimiento en dos pasos (tabla 2 de
Material y Métodos). En la tabla 7 se muestran las químicas que se han evaluado hasta ahora,
y su estado en el estudio. Este cambio de estrategia metodológica permitió explorar nuevas
alternativas para mitigar la interferencia de los componentes de la DR.
Figura 36. Modelo de hibridación con la química C (COOH – NH + SAv – Biotina) con la aproximación 1.
2
Tras proponer esta nueva química con la aproximación 1, el primer paso fue verificar si la
interferencia de la SMART – nucleobase y el RA también se presentaba en este caso. En la
figura 37 se muestra que, en todas las condiciones evaluadas, se produjo un aumento
78

significativo en las cuentas no específicas y una notable disminución en las cuentas
específicas, lo que resultó en una reducción considerable del ratio (S/B), similar a lo
observado previamente con la química A (anti – FITC – FITC + SAv – biotina) (figura 34).
Este resultado confirmó que la interferencia de la SMART – nucleobase y el RA es
independiente de la química utilizada para la inmovilización de la DGL en las GNPs.
Superficie de silicio -
Química GNPs - DGL Estado
SMART - nucleobase
Seleccionada con el modelo de captura
A anti - FITC - FITC SAv - biotina
Descartada por incompatibilidad con la
aproximación 1 y la metodología en 2 pasos.
B SAv - biotina anti - FITC - FITC Descartada con el modelo de captura
Seleccionada por la compatibilidad con la
C COOH - NH2 SAv - biotina
aproximación 1 y la metodología en 2 pasos
Tabla 7. Químicas evaluadas hasta ahora (A, B y C) y su estado en el estudio.
Figura 37. Problemas e interferencias de la DR. Química C (COOH – NH2 + SAv – Biotina) con la
aproximación 1. Resultados en variación (%) en cuentas no específicas, en cuentas específicas a 300 pM y en
ratio (S/B) a 300 pM, en comparación al modelo de hibridación de diferentes condiciones: modelo de
hibridación con RA, con SMART – nucleobase y con ambos, y DR (n = 3).
Una vez confirmada esta interferencia, se procedió a evaluar la solución propuesta, que
consistía en aplicar un procedimiento en dos pasos (figura 38).
La figura 39 presenta una comparación del ratio (S/B) a 300 pM entre el modelo de
hibridación con la SMART – nucleobase y el RA, y la DR, evaluando tanto la metodología
estándar de un solo paso como la propuesta de dos pasos. La metodología en dos pasos mostró
79

un ratio (S/B) de 293,3 en el modelo de hibridación y 19,8 en la DR, lo que representa una
mejora significativa frente a los valores obtenidos con el enfoque de un solo paso (88,2 y 5,0,
respectivamente). Estos resultados demuestran que la implementación del procedimiento en
dos pasos, utilizando la química C (COOH – NH ) + SAv – biotina) y la aproximación 1, es
2
una solución efectiva para reducir la interferencia de los componentes de la DR y del pH 6 del
buffer DR, y, por lo tanto, mejorar el rendimiento del sistema. La implementación el
procedimiento en dos pasos permitió reducir significativamente la interferencia de los
componentes de la DR y mejorar la sensibilidad de la tecnología, lo que representa un avance
importante en el desarrollo de la tecnología final.
Figura 38. DR con la química C (COOH – NH + SAv – Biotina) con la aproximación 1. 1) Un paso. 2) Dos
2
pasos.
Estudio de la accesibilidad de las SMART – nucleobases FITC y biotina con diferentes
bloqueantes y almacenamientos
Se propusieron dos estrategias para mejorar la accesibilidad de la etiqueta de la SMART –
nucleobase. La primera consistió en utilizar una SMART – nucleobase con la etiqueta FITC,
cuya masa molecular (389 Da) es ligeramente superior a la de la biotina (244 Da). La segunda
estrategia fue emplear mPEG – SH 6K, un agente bloqueante y de almacenamiento de GNPs
80

Figura 39. Soluciones a los problemas e interferencias de la DR: procedimiento en uno o dos pasos. Química C
(COOH – NH + SAv – Biotina) con la aproximación 1. Resultados en ratio (S/B) a 300 pM con el modelo de
2
hibridación con SMART – nucleobase y con RA, y con la DR (n = 3).
más pequeño que la BSA, cuyo peso molecular es de 66,5 kDa. Debido a que la nucleobase
81

SMART con etiqueta FITC no es compatible con la química anti – FITC – FITC utilizada en
las GNPs – DGL (tabla 2 de Material y Métodos), esta combinación no se consideró al
seleccionar esta química con el modelo de captura (figura 21). No obstante, dado que el
procedimiento en dos pasos requería el uso de la química COOH – NH en las GNPs – DGL,
2
la química anti – FITC – FITC se consideró una alternativa adecuada para mejorar la
accesibilidad de la SMART – nucleobase. Por ese motivo, es propuso la utilización de la
química D (COOH – NH + anti – FITC – FITC) (figura 40), cuyo objetivo era facilitar la
2
unión de la SMART – nucleobase a la superficie y mejorar la eficiencia de la DR.
Figura 40. DR con la química D (COOH – NH + anti – FITC – FITC) con la aproximación 1 en dos pasos.
2
82

La figura 41 representa el ratio (S/B) a 300 pM utilizando la DR con dos tipos de SMART –
nucleobases y dos agentes bloqueantes y de almacenamiento para las GNPs. Cuando se
empleó BSA como agente bloqueante, los resultados fueron similares para ambas SMART –
nucleobases, alcanzando un ratio (S/B) de 19,8 con la SMART – nucleobase biotina y de 17,5
con la SMART – nucleobase FITC. Sin embargo, al usar mPEG – SH como agente
bloqueante, los resultados mejoraron significativamente: el ratio (S/B) aumentó a 28,3 con la
SMART – nucleobase biotina y a 95,9 con la SMART – nucleobase FITC. De hecho, la
combinación de mPEG – SH con la SMART – nucleobase FITC demostró ser particularmente
efectiva, logrando un rendimiento superior del sistema. Esta mejora se atribuye a la sinergia
entre el uso de una etiqueta más grande y un agente bloqueante más pequeño, lo que optimiza
la accesibilidad de la SMART – nucleobase. Como resultado, se seleccionó la química D
(COOH – NH + anti – FITC – FITC) como la metodología óptima para la tecnología,
2
implementada mediante un procedimiento en dos pasos, la aproximación 1 y el mPEG – SH
6K como agente bloqueante. La comparación entre el ratio (S/B) inicial de 8,7, obtenido antes
de implementar estas soluciones, y el nuevo ratio de 95,9 logrado tras su aplicación en la DR,
evidencia una mejora significativa en el rendimiento de detección (figura 42). Estos resultados
confirmaron que la combinación de la SMART – nucleobase FITC con el agente bloqueante
mPEG – SH 6K mejora significativamente la accesibilidad y la eficiencia de la DR.
Figura 41. Soluciones a los problemas e interferencias de la DR: SMART – nucleobase Biotina o FITC, BSA o
mPEG – SH como bloqueo y almacenamiento. DR con la química COOH – NH en 2 pasos con la aproximación
2
1. Resultados en ratio (S/B) a 300 pM (n = 3).
83

Estos resultados no solo validan la efectividad de las estrategias adoptadas para resolver los
problemas detectados, sino que también optimizan el sistema, estableciendo una base sólida
para futuras investigaciones y avances en la mejora de la plataforma de detección
desarrollada. La optimización de la accesibilidad de la SMART – nucleobase, la realización
del procedimiento en dos pasos, y la selección de la química D (COOH – NH + anti – FITC –
2
FITC) representaron un avance crucial para el desarrollo de una tecnología de detección de
miRNAs altamente sensible y específica. En la tabla 8 se muestran las químicas que se han
evaluado hasta ahora, y su estado en el estudio
Figura 42. DR con y sin soluciones. Sin soluciones con la química A (anti – FITC – FITC + SAv – biotina) con
la aproximación 2 en un paso y con BSA como bloqueante y almacenamiento. Con soluciones con la química D
(COOH -NH + anti – FITC – FITC) con la aproximación 1 en dos pasos y con mPEG – SH con bloqueante y
2
almacenamiento (n = 3).
Superficie de silicio -
Química GNPs - DGL Estado
SMART - nucleobase
Seleccionada con el modelo de captura
A anti-FITC - FITC SAv - biotina
Descartada por incompatibilidad con la
aproximación 1 y la metodología en 2 pasos.
B SAv - biotina anti-FITC - FITC Descartada con el modelo de captura
Seleccionada por la compatibilidad con la
aproximación 1 y la metodología en 2 pasos
C COOH - NH2 SAv - biotina
Descartada por la baja accesibilidad de la
etiqueta de la SMART - nucleobase
Seleccionada por la compatibilidad con la
aproximación 1 y la metodología en 2 pasos,
D COOH - NH2 anti-FITC - FITC
y por la elevada accesibilidad de la etiqueta
de la SMART - nucleobase
Tabla 8. Químicas evaluadas hasta ahora (A, B, C y D) y su estado en el estudio.
84

Optimización de la DR
Una vez identificados los problemas e interferencias que surgían al trasladar los modelos
establecidos a un ensayo real de detección de ácidos nucleicos utilizando la DR, y después de
determinar las condiciones óptimas para mitigar dichos problemas e interferencias, se
procedió a optimizar las dos soluciones que demostraron una mejora significativa en la
detección. La primera de estas soluciones consistió en el uso de mPEG – SH 6K como agente
bloqueante y de almacenamiento en el procedimiento de inmovilización de la sonda DGL en
las GNPs. La segunda solución implicó la implementación de la química anti – FITC – FITC
en la unión de la SMART – nuclebase a la superficie de silicio (química D, COOH – NH +
2
anti – FITC – FITC). El objetivo de esta sección fue refinar las condiciones de la DR para
maximizar la señal y minimizar el ruido de fondo en la detección de miRNAs.
Optimización del empleo de mPEG – SH en la fabricación de las GNPs – DGL
Para optimizar el uso de mPEG – SH en la fabricación de las GNPs – DGL, se evaluaron dos
estrategias. La primera consistió en realizar una preincubación de las GNPs con mPEG – SH
antes de la inmovilización de la sonda DGL. Esta opción se planteó como una posible mejora,
ya que el mPEG – SH puede formar una capa estable alrededor de las GNPs, evitando su
agregación y mejorando su dispersión y estabilidad en solución. Este efecto favorecería una
inmovilización más eficiente de la sonda DGL en las GNPs, lo que optimizaría la hibridación
de la sonda DGL con el miRNA diana. La segunda estrategia consistió en aumentar la
cantidad de mPEG – SH utilizada para el bloqueo y almacenamiento de las GNPs – DGL.
Esta estrategia podría mejorar el sistema al incrementar la capa protectora alrededor de las
GNPs, lo que reduciría los sitios de unión no específicos con la superficie anti – FITC, y
también mejoraría la estabilidad de las GNPs y evitaría su agregación, lo que permitiría una
detección más eficiente del miRNA diana.
En la figura 43 se muestran los resultados obtenidos en términos de cuentas inespecíficas,
cuentas específicas y ratio (S/B) para la condición estándar y las dos estrategias, tanto de
manera individual como combinadas. Al realizar la preincubación de las GNPs con mPEG –
SH, se observó un aumento en el número de cuentas, tanto específicas como no específicas,
siendo este aumento más notable en las cuentas no específicas. Este resultó en una
disminución de la efectividad del sistema, evidenciada por una disminución en el ratio (S/B),
que pasó de 95,9 en la condición estándar a 34,4. Esto sugiere que, aunque la preincubación
facilita la inmovilización de más moléculas de DGL en las GNPs, lo que mejora la detección
del miRNA diana, también provoca un incremento significativo de las interacciones
85

inespecíficas entre las GNPs – DGL y la superficie de silicio recubierta con anti – FITC. Esto
podría explicarse por la mayor cantidad de moléculas de DGL que interactúan de manera
inespecífica con la SMART – nucleobase FITC. Por otro lado, al aumentar la cantidad de
mPEG – SH para el bloqueo y el almacenamiento, se observó una disminución en el número
de cuentas, tanto específicas como no específicas, siendo más pronunciada en las cuentas no
específicas. Este ajuste resultó en un ratio (S/B) de 369,0, notablemente superior al de la
condición estándar. Esto sugiere que el aumento de mPEG – SH disminuye las uniones
inespecíficas de la SMART – nucleobase con las GNPs – DGL, evitando interacciones no
deseadas con la superficie de silicio recubierta con anti – FITC. Finalmente, al combinar
ambas estrategias, se obtuvo un efecto similar al de la preincubación por sí sola, aunque de
menor magnitud, resultando en un ratio (S/B) de 71.5, aún inferior al de la condición estándar.
Esto indica que el aumento en el bloqueo y almacenamiento contrarrestó parcialmente el
efecto negativo de la preincubación, llevando a un rendimiento intermedio. Estos resultados
demostraron que el aumento de la cantidad de mPEG – SH en el bloqueo y almacenamiento
de las GNPs – DGL es la estrategia más efectiva para reducir la unión no específica y mejorar
Figura 43. Optimización de la DR: pre – incubación con mPEG – SH y aumento de la cantidad de mPEG – SH
en el bloqueo y el almacenamiento. Química D (COOH -NH + anti – FITC + FITC) con la aproximación 1 en 2
2
pasos. Resultados en cuentas no específicas, en cuentas específicas a 300 pM y en ratio (S/B) a 300 pM (n = 3).
la sensibilidad de la plataforma.
86

Optimización de la química anti – FITC – FITC en la unión de la SMART – nucleobase a la
superficie de silicio
Para optimizar la química anti – FITC – FITC en la unión de la SMART – nucleobase a la
superficie de silicio, se plantearon dos estrategias. La primera consistió en probar distintas
versiones de la SMART – nucleobase con FITC, que varían en el grupo químico utilizado
para enlazar el FITC (figura 44). Esta diferencia es importante, ya que el tipo de enlace
químico podría afectar la accesibilidad de la etiqueta FITC de la SMART – nucleobase,
particularmente en la posición “blanco”, lo que podría influir en su capacidad para unirse
eficientemente a la superficie de silicio recubierta con anti – FITC. La segunda estrategia
consistió en evaluar dos métodos distintos de biotinilación del anticuerpo anti – FITC que
posteriormente se inmoviliza en la superficie de silicio con SAv. En uno de los métodos, los
grupos amino del anticuerpo se utilizan para unir la biotina de manera aleatoria, mientras que,
en el otro, la biotina se une a grupos azida generados en las cadenas de carbohidratos del
anticuerpo de manera localizada y orientada (figura 12 de Material y Métodos). La manera en
que se biotinila el anticuerpo anti – FITC puede influir en su orientación sobre la superficie de
silicio, lo que a su vez podría afectar la disponibilidad de sus sitios de unión al FITC de la
SMART – nucleobase. El objetivo de estas estrategias era mejorar la eficiencia de la unión de
la SMART – nucleobase a la superficie y maximizar la señal en la detección de miRNAs a
través de la orientación sobre la superficie de los anticuerpos anti – FITC y de la accesibilidad
de la etiqueta FITC de la SMART – nucleobase.
1
2
3
4
Figura 44. SMART – nucleobases FITC: 1) DBCO P12. 2) DBCO RP12. 3) RP5. 4) RP13.
87

En la figura 45 se presentan los resultados obtenidos al aplicar estas dos posibles
optimizaciones, comparados con la condición estándar, en la que se utilizó el protocolo de
biotinilación aleatoria mediante grupos amino y la SMART – nucleobase FITC RP5. Al
emplear el protocolo de biotinilación orientada con azida, se observó un aumento en el
número de cuentas, tanto específicas como no específicas, siendo el incremento más
pronunciado en las cuentas no específicas. Esto resultó en un ratio (S/B) de 125,3,
significativamente inferior al ratio (S/B) de 369,0 obtenido con el protocolo de biotinilación
aleatorio por los grupos amino. Este comportamiento sugiere que, aunque la biotinilación con
azida favorece una mejor orientación de las moléculas de anti – FITC sobre la superficie,
facilitando la captura de la SMART – nucleobase introducida en la posición “blanco”, esta
mayor accesibilidad también aumenta las interacciones inespecíficas entre las GNPs- DGL y
la superficie de silicio recubierta con anti – FITC. En consecuencia, la mejora en la
accesibilidad de los sitios de unión no parece ser compatible con esta plataforma de detección
de ácidos nucleicos.
Por otro lado, al utilizar la SMART – nucleobase RP13, también se observó un aumento en el
número de cuentas, tanto específicas como no específicas, con incrementos bastante similares
en ambos casos. Esto resultó en un ratio (S/B) de 372,8, cercano al valor de 369,0 obtenido en
la condición estándar. Este comportamiento podría explicarse porque la SMART – nucleobase
RP13 es más accesible para ser capturada por la superficie de silicio recubierta con anti –
FITC, lo que incrementa las cuentas específicas; sin embargo, también presenta una mayor
tendencia a unirse de forma inespecífica a las GNPs – DGL, lo que aumenta las cuentas no
específicas de igual forma. En el caso de las SMART – nucleobases DBCO P12 y RP12,
también se observó un aumento en ambos tipos de cuentas, aunque el incremento en las
cuentas no específicas fue mucho más pronunciado. Con estas SMART – nucleobases se
obtuvieron 676,0 y 1412,8 cuentas inespecíficas, un aumento considerable en comparación
con las 7,0 y 8,5 cuentas inespecíficas observadas con las otras dos nucleobases. Este aumento
significativo en las cuentas inespecíficas provocó una pérdida casi total de la señal, con ratios
(S/B) de 4,1 y 2,5, respectivamente. Por lo tanto, parece que el grupo químico DBCO en estas
SMART – nucleobases genera un incremento en las interacciones inespecíficas de la SMART
– nucleobase con las GNPs – DGL, lo que, a su vez, incrementa las interacciones no deseadas
con la superficie de silicio recubierta con anti – FITC. Estos resultados indicaron que el
protocolo de biotinilación aleatorio mediante grupos amino y la SMART – nucleobase FITC
88

RP13 son los más adecuados para maximizar la señal y minimizar la unión no específica en la
tecnología propuesta.
Figura 45. Optimización de la DR: SMART – nucleobases FITC (RP5, RP13, DBCO P12 y DBCO RP12) y
protocolos de biotinilación (por los grupos amino y mediante una azida). Química D (COOH -NH + anti –
2
FITC + FITC) con la aproximación 1 en 2 pasos. Resultados en cuentas no específicas, en cuentas específicas a
300 pM y en ratio (S/B) a 300 pM (n = 3).
Interferencias de las distintas SMART – nucleobases FITC con las GNPs
Debido a las diferencias significativas observadas en el comportamiento de las SMART –
nucleobases con FITC unido mediante diferentes grupos químicos, se investigó la
interferencia que cada una de ellas genera para comprender mejor su funcionamiento en la
plataforma. El ensayo de interferencia consistió en incubar GNPs – COOH, GNPs – DGL y
GNPs – PNA con y sin SMART – nucleobase, y posteriormente, sobre una superficie de
silicio recubierta con anti – FITC (figura 15 de Material y Métodos). El objetivo de este
ensayo fue identificar las interacciones no específicas entre las SMART – nucleobases y las
GNPs que podrían afectar el rendimiento de la tecnología.
En la figura 46 se presentan los resultados de los ratios de interferencia (S/C: SMART/control)
con las diferentes GNPs y las SMART – nucleobases FITC. Los ratios de interferencia (S/C)
fueron más altos con las GNPs – COOH cuando se usaron las SMART – nucleobases DBCO
RP12 y P12, con valores de 186,3 y 22,0, respectivamente, en comparación con los obtenidos
con las SMART – nucleobases RP5 y RP13, que fueron mucho más bajos, de 1,7 y 2,2,
respectivamente. Con las GNPs – DGL, los ratios de interferencia (S/C) fueron, en general,
más bajos que con las GNPs – COOH. Sin embargo, al igual que en el caso anterior, las
89

SMART – nucleobases DBCO RP12 y P12 presentaron ratios más altos, de 44,6 y 6,8,
respectivamente, mientras que las SMART – nucleobases RP5 y RP13 mostraron ratios muy
bajos, de 0,6 en ambos casos. Finalmente, con las GNPs – PNA, los ratios de interferencia
(S/C) fueron inferiores a 2,0 en todos los casos, excepto con la SMART – nucleobase DBCO
RP12, con la que se obtuvo un ratio de 4,1. Estos resultados confirmaron que las SMART –
nucleobases DBCO P12 y RP12 presentan una mayor tendencia a interactuar de forma no
específica con las GNPs, lo que podría explicar su bajo rendimiento en la tecnología
propuesta.
En resumen, la mayor interferencia se observó con las GNPs – COOH y las GNPs – DGL al
usar las SMART – nucleobases DBCO P12 y RP12, las cuales habían provocado la pérdida de
señal en las pruebas anteriores (figura 45). De estas dos nucleobases, DBCO P12 presentó una
menor interferencia con ambas GNPs y no mostró interferencia con las GNPs – PNA, a
diferencia de la SMART – nucleobase DBCO RP12. Por otro lado, no se observó interferencia
con las SMART – nucleobases RP13 y RP5 con ninguna de las GNPs evaluadas, lo cual
coincide con su buen rendimiento en la tecnología propuesta (figura 45). Estos resultados
sugieren que la interferencia observada con las SMART – nucleobases que contienen DBCO
se debe a la afinidad del anillo aromático del DBCO por las GNPs – COOH mediante
interacciones electrostáticas. Esta afinidad es mayor cuando el DBCO está unido mediante un
enlace simple (DBCO RP12) que cuando está unido por un doble enlace (DBCO P12), lo que
puede deberse a que el anillo aromático del DBCO está más libre para interactuar de forma
inespecífica con las GNPs – COOH cuando está unido mediante un enlace simple. En cambio,
un doble enlace reduce la flexibilidad de la estructura y bloquea parcialmente el movimiento
del anillo aromático, disminuyendo la capacidad del DBCO para interactuar con las GNPs –
COOH. Esta afinidad del anillo aromático podría estar permitiendo que las SMART –
nucleobases con DBCO se acerquen a las moléculas de DGL inmovilizadas en las GNPs –
COOH, ocupando la posición “blanco”, lo que no debería ocurrir en ausencia del miRNA
diana dentro del tiempo establecido. En menor medida, la DBCO RP12 también muestra
interferencia con las GNPs – PNA, lo que sugiere que, cuando la interferencia con las GNPs –
COOH es muy alta, no solo se introduce en la posición “blanco”, sino que también tiende
ligeramente a unirse a las bases libres de la DGL. En este contexto, las GNPs actúan como un
catalizador, facilitando que las SMART – nucleobases DBCO RP12 y P12 ocupen la posición
“blanco” de la DGL, incluso en ausencia del miRNA diana. Por lo tanto, es crucial emplear
SMART – nucleobases FITC sin el grupo DBCO. Este análisis exhaustivo de las
90

interferencias permitió seleccionar la SMART – nucleobase FITC RP13 como la opción más
adecuada para la tecnología, debido a su baja interferencia con las GNPs y su alta eficiencia
en la detección de miRNAs.
Figura 46. Optimización de la DR: interferencia de las diferentes SMART – nucleobases FITC (DBCO P12,
DBCO RP12, RP5, RP13) con GNPs – COOH, GNPs – DGL 122 – 5p, y GNPs – PNA 122 -5p. Resultados en
ratio de interferencia (S/C) (n = 3).
Funcionamiento de la plataforma en la detección de miRNAs
91

Finalmente,  aplicando  las  modificaciones  que  permitían  mejorar  la  compatibilidad  de  la
tecnología para la detección de miRNAs (tabla 9), se evaluó el funcionamiento de la DR
mediante una curva de calibración que correlaciona el número de GNPs detectadas con la
concentración del ácido nucleico. En la figura 47 se muestra que, con la concentración más
alta de 300 pM, se alcanzaron 2577,1 cuentas de GNPs. Se obtuvo un LLoQ de 0,221 pM y
un ULoQ de 2980 pM mediante un ajuste 5PL, con un rango dinámico de 4,1, lo que indica
que  el  sistema  es  capaz  de  detectar  concentraciones  en  un  amplio  rango,  desde  niveles
elevados hasta concentraciones extremadamente bajas. Esta sensibilidad es suficiente para el
|     |     | Superficie - SMART -  |     | Biotinilación del anti- |     | SMART - nucleobase  |     |
| --- | --- | --------------------- | --- | ----------------------- | --- | ------------------- | --- |
GNPs - DGL
|            |     |     | nucleobsae       |     | FITC         |     | FITC |
| ---------- | --- | --- | ---------------- | --- | ------------ | --- | ---- |
| COOH - NH2 |     |     | anti-FITC - FITC |     | Grupos amino |     | RP13 |
Buffer de incubación
| Aproximación |     |     | Pasos |     |     |     | Buffer DR |
| ------------ | --- | --- | ----- | --- | --- | --- | --------- |
en superficie
1% BSA - PBS - Tween20
|     | 1   |     | 2   |     |     | Con Tween20 0,1% |     |
| --- | --- | --- | --- | --- | --- | ---------------- | --- |
0,1%
| Nº moléculas  |      |     |         |                       |     | Almacenamiento        |      |
| ------------- | ---- | --- | ------- | --------------------- | --- | --------------------- | ---- |
|               |      |     | Lavado  | Bloqueo GNPs          |     |                       |      |
| DGL / nm2     |      |     |         |                       |     |                       | GNPs |
|               |      |     |         | Tris 50 mM + Tween20  |     | Tris 50 mM + Tween20  |      |
|               | 0,26 |     | 2W (+D) |                       |     |                       |      |
|               |      |     |         | 0,1% + mPEG-SH 0,1 %  |     | 0,1% + mPEG-SH 0,2 %  |      |
Figura 47. Funcionamiento de la DR con la química D (COOH – NH + anti – FITC – FITC) con la
2
apTraobxliam a9c.i óCno 1n deinc i2o npeass oqsu. eR epseurlmtaidteons  elan  ncúommepraoti bdiel iGdaNdP sd ee nla f utenccnióolno gdíea  lpaa crao nlac ednettreaccciióónn  ddee  smsiDRNNAA –s.
5pA b(rpevMia).t urLaOs: DW,  (L+LDo)Q, W  ays hUinLgo (Q+  dcilaulctiuolna)d.os  con  un  ajuste  5PL.  Rango  dinámico  calculado  como
log(ULoQ/LLoQ)  (n = 3).
caso específico del miR – 122 – 5p, ya que las plataformas de detección de este miRNA en el
diagnóstico de este miRNA en el diagnóstico de DILI necesitan concentraciones cercanas a 3
pM (Vliegenthart et al., 2017).
Objetivo  2:  Validar  la  tecnología  para  el  análisis  de  muestras  reales  de  pacientes,
adaptando la metodología para garantizar su aplicación práctica y estableciendo las
especificaciones técnicas en términos de sensibilidad, especificidad y precisión.
Optimización de la detección de miRNAs en suero
Para detectar miRNAs en suero de pacientes, se seleccionaron diversos componentes para
diluir la muestra y facilitar su identificación. Se utilizó un buffer de lisis proporcionado por
Destina  Genómica,  que  rompe  los  exosomas  que  contienen  los  miRNAs,  liberándolos  y
haciéndolos accesibles en el suero. Además, se incorporó la enzima PK (Proteinase K) para
eliminar las RNAsas presentes en la muestra, las cuales podrían degradar los miRNAs. Por
92

último, se utilizó DTT para prevenir procesos oxidativos que podrían dañar los miRNAs
durante el análisis. El objetivo de esta sección fue adaptar la metodología desarrollada en los
modelos anteriores para su aplicación en muestras de suero, minimizando las interferencias y
maximizando la sensibilidad.
Estudio de la cantidad de DTT necesaria
La cantidad de buffer de lisis y de la enzima PK utilizada en la detección de miRNAs en suero
se fijó tomando como referencia los protocolos empleados por Destina Genómica en otras
plataformas de detección. En este proceso, el suero se diluyó en una proporción de 3/10 con el
buffer de lisis que contenía PK a 0,4 mg/ml y DTT. Sin embargo, se evaluaron distintas
concentraciones de DTT, ya que este agente reductor puede influir en las GNPs y su
interacción con la sonda DGL.
En la figura 48 se presentan los resultados obtenidos al emplear diferentes concentraciones de
DTT. La cantidad estándar utilizada por Destina Genómica en otras plataformas es de 5 mM,
pero también se probaron concentraciones menores de 50 µM y 5 µM. El ratio (S/B) más alto,
de 81,2, se obtuvo con DTT a 50 µM, mientras que las concentraciones de 5 mM y 5 µM
dieron ratios (S/B) más bajos, de 9,4 y 12,4 respectivamente. Estos resultados sugieren que el
DTT es esencial para prevenir la oxidación de los miRNAs en suero, ya que, a
concentraciones bajas, no ofrece suficiente protección, comprometiendo así la estabilidad de
los miRNAs y dificultando su detección. Sin embargo, también es importante evitar
concentraciones muy altas de DTT, ya que pueden afectar la estabilidad de las GNPs y
Figura 48. Optimización de la plataforma en suero con la química COOH – NH2 + anti – FITC – FITC con la
aproximación 1 en dos pasos con distintas concentrac9i3ones de DTT (5 mM, 50 µM y 5 µM). Resultados en
ratio (S/B) a 300 pM (n = 3).

desestabilizar la unión de las moléculas de DGL en su superficie, reduciendo la eficiencia de
la detección de los miRNAs. Estos resultados indicaron que una concentración de 50 µM de
DTT es óptima para la detección de miRNAs en suero, equilibrando la protección contra la
degradación por oxidación y la estabilidad de las GNPs.
Evaluación del empleo del buffer B
Los tres componentes seleccionados para diluir la muestra de suero y detectar miRNAs fueron
los mismos que Destina Genómica ha optimizado para su tecnología en otras plataformas de
detección. Sin embargo, Mecwins ha diseñado un buffer específico, denominado buffer B,
para minimizar la interferencia del suero en la detección de proteínas con su tecnología. Dado
su potencial, se propuso utilizarlo también para mejorar la detección de miRNAs en suero.
Para evaluar su efectividad, se diluyó el suero en una proporción de 1/10, en lugar de 3/10,
con el fin de mantener constante la cantidad de buffer de lisis con enzima PK y DTT, y
completar la dilución con buffer B, logrando así la proporción final de 1/10.
En la figura 49 se presentan los resultados obtenidos al utilizar el buffer B con una dilución de
1/10 comparados con los resultados de la dilución de 3/10 sin buffer B. El ratio (S/B)
obtenido con buffer B fue de 15,5, significativamente más bajo que el obtenido sin buffer B,
que fue de 81,2. Esto sugiere que, aunque el buffer B está diseñado para reducir las
interferencias en la detección de proteínas con la tecnología de Mecwins, no es adecuado para
Figura 49. Optimización de la plataforma en suero con la química COOH – NH2 + anti – FITC – FITC con la
aproximación 1 en dos pasos sin buffer B (dilución 3/10) y con buffer B (dilución 1/10). Resultados en ratio
(S/B) a 300 pM (n = 3).
94

la detección de miRNAs con esta tecnología. Esto podría deberse a que los componentes del
buffer B podrían introducir interferencias con las GNPs – DGL, lo que limita su eficacia en la
detección de miRNAs. El buffer B, diseñado para la detección de proteínas, resultó ser
inadecuado para la detección de miRNAs, lo que sugiere que las condiciones óptimas para la
detección biomarcadores de diferente naturaleza pueden ser distintas.
Funcionamiento de la DR en suero
Una vez optimizadas las condiciones para detectar miRNAs en suero, se evaluó el
funcionamiento y la sensibilidad utilizando una curva de calibración que muestra la relación
entre el número de GNPs detectadas y la concentración del ácido nucleico, comparándola con
la obtenida previamente en el buffer estándar de BSA al 1% en PBS con Tween20 al 0,1%.
En la figura 50 se muestra que, con la concentración más alta de 300 pM, se alcanzaron
1151,2 cuentas en suero, en comparación con las 2577,1 cuentas obtenidas con el buffer
estándar. En suero, se determinó un LLoQ de 0,596 pM, un ULoQ de 2990 pM y un rango
dinámico de 3,7, lo que indica una pérdida de sensibilidad, ya que con el buffer estándar se
obtuvo un LLoQ de 0,221 pM, un ULoQ de 2980 pM y un rango dinámico de 4,1. Esta
reducción en la señal podría deberse a la interferencia de los componentes del suero tanto con
la detección del miRNA como con las interacciones de las GNPs y la superficie de silicio. A
Figura 50. Funcionamiento de la DR con la química D (COOH – NH + anti – FITC – FITC) con la
2
aproximación 1 en 2 pasos en suero 3/10 en buffer de lisis con DTT y PK y en BSA al 1% en PBS – Tween 20
0,1%. Resultados en número de GNPs en función de la concentración de ssDNA – 5p (pM). LLoQ, ULoQ
y rango dinámico calculados con un ajuste 5PL (n = 3).
95

pesar de la reducción en la señal, la sensibilidad de la plataforma en suero se mantuvo dentro
del rango necesario para la detección del miR – 122 – 5p en aplicaciones clínicas
(Vliegenthart et al., 2017).
Interpolación de muestras de suero con concentración conocida
Después de estudiar el funcionamiento de la detección de miRNAs en suero, se procedió a
interpolar muestras enriquecidas con concentraciones conocidas de miR – 122 – 5p para
evaluar la precisión de la tecnología.
En la tabla 10 se presentan los porcentajes de recuperación (recoveries) de las muestras
analizadas. El recovery se refiere al porcentaje de la cantidad conocida de un analito que
puede ser recuperado o detectado mediante el método de análisis. Este porcentaje se calcula
dividiendo la cantidad medida por la plataforma entre la cantidad real y se expresa como un
porcentaje. Un porcentaje de recuperación cercano al 100% indica que el método es preciso y
no hay pérdidas significativas del analito, mientras que un valor demasiado bajo sugiere
interferencias o pérdidas en la detección. Por otro lado, un porcentaje de recuperación
superior al 100% podría indicar una sobreestimación del analito. Se considera aceptable un
rango entre el 80% y el 120%.
Se evaluaron tres muestras de suero con concentraciones de 100, 30 y 10 pM, que, al diluirse
a 3/10 en la plataforma, resultaron en concentraciones de 30, 9 y 3 pM. Los porcentajes de
recuperación obtenidos fueron 87.4%, 94.4% y 102.8%, respectivamente, lo que indica que
todas las muestras se encuentran dentro de los límites aceptables y confirma que la plataforma
es capaz de detectar correctamente las concentraciones de miR – 122 – 5p. Los porcentajes de
recuperación obtenidos en las muestras de suero con concentraciones conocidas confirmaron
la precisión de la plataforma en la detección del miR – 122 – 5p.
Concentración Concentración en la
Muestra Recuperación (%)
(pM) dilución 3/10 (pM)
1 100 30 87,40%
2 30 9 94,39%
3 10 3 102,84%
Tabla 10. Interpolación de muestras de suero con concentración de miR – 122 – 5p conocida. Muestras 1
(100 pM), 2 (30 pM) y 3 (10 pM) diluidas 3/10 en buffer de lisis con DTT y PK. Resultados en porcentajes
de recuperación (%) calculado como la concentración medida entre la concentración conocida. Rango
aceptable entre 80 – 120% (n = 4).
96

Objetivo 3: Adaptar la tecnología a la detección simultánea de varios miRNAs
(multiplexado) y a la detección combinada de miRNAs y biomarcadores proteicos.
Modelo SAv – Biotina: Evaluación del Comportamiento de GNPs de Diferentes Tamaños
Este modelo se eligió para realizar pruebas iniciales con el fin de evaluar cómo se comportan
las GNPs de diferentes tamaños. El objetivo era eliminar factores externos, como la afinidad
de las biomoléculas utilizadas para detectar diversos biomarcadores y las reacciones cruzadas
entre los diferentes sistemas de detección. De este modo, la unión de las GNPs a la superficie
dependía únicamente de su tamaño, ya que todas las GNPs se adhieren a la superficie a través
de la interacción entre la SAv y la biotina. Este modelo permitió estudiar el comportamiento
de GNPs de distintos tamaños de forma aislada, lo que facilitó la optimización de las
condiciones para el multiplexado.
Evaluación de la unión de GNPs de diferentes tamaños a la superficie
En un primer experimento, se evaluó por separado el comportamiento de GNPs – biotina de
cinco tamaños diferentes. Para evitar la aglomeración de las partículas y facilitar un recuento
preciso de las que llegaron a la superficie, se utilizaron cantidades bajas de GNPs – biotina.
Una vez contado el número de partículas de cada tamaño que se unieron a la superficie, se
calculó el porcentaje de cuentas experimentales en relación con la cantidad inicial de GNPs –
biotina (tabla 11). En la misma tabla, también se muestra la velocidad de sedimentación
calculada con la Ley de Stokes y la distancia teórica que las GNPs – biotina recorrerían bajo
las condiciones del experimento. Con esta distancia teórica, se estimó el porcentaje esperado
de cuentas, que luego se comparó con los resultados experimentales para calcular la diferencia
entre lo esperado teóricamente y lo obtenido experimentalmente. Según la Ley de Stokes, la
velocidad de sedimentación aumenta con el tamaño de las partículas, lo que implica que las
GNPs – biotina más grandes recorrerían una mayor distancia y, por lo tanto, llegaría una
mayor cantidad de partículas a la superficie en el mismo tiempo. Para los cuatro tamaños más
pequeños de GNPs – biotina (50, 60, 80 y 100 nm), la diferencia entre el porcentaje esperado
y el experimental fue de aproximadamente ± 1 – 5%. Sin embargo, para las GNPs de 150 nm,
la diferencia fue significativamente mayor, alcanzando un +22,6%. Esto puede explicarse por
la mayor superficie de las GNPs de 150 nm en comparación con el resto de GNPs debido a la
relación cuadrática entre el radio y la superficie. La mayor superficie de las GNPs de 150 nm
proporciona más puntos de contacto, lo que facilita las interacciones inespecíficas entre
97

partículas. Estas interacciones promueven la formación de agregados, los cuales, debido a su
mayor tamaño y masa, sedimentan a una velocidad más alta. En resumen, se observó que la
diferencia entre los valores teóricos y experimentales aumentaba con el tamaño de las GNPs –
biotina. Estos resultados sugieren que la Ley de Stokes es una buena aproximación para
predecir el comportamiento de las GNPs más pequeñas, pero que existen factores adicionales
Diámetro Velocidad de µm recorridos % teórico % experimental Δ% GNPs (experimental -
que in(fnlumy)en esne dlaim uenntiaócnió dn e(n lma/ss )GNPesn 9m0 ámsi ngranddee sG.NPs de GNPs teórico)
50 24,9 134,6 8,8 10,4 1,6
60 35,9 193,8 12,7 10,7 -2,0
80 63,8 344,6 22,6 19,6 -3,0
100 99,7 538,4 35,4 30,4 -5,0
150 224,3 1211,4 79,6 102,2 22,6
Tabla 11. Modelo SAv – biotina: comportamiento de sedimentación de GNPs de diferentes tamaños. Velocidad
de sedimentación (nm/s), µm recorridos en 90 minutos, % teórico de GNPs, % experimental de GNPs y Δ%
GNPs (experimental – teórico) (n = 4).
Comportamiento de un multiplexado con 5 tamaños de GNPs
Una vez evaluado el comportamiento de las GNPs – biotina de cinco tamaños de manera
individual, se procedió a analizar su comportamiento en un sistema multiplex, utilizando el
mismo número de partículas de cada tamaño. La figura 53 muestra el ratio tanto en velocidad
de sedimentación (teórico) como en cuentas de GNPs (experimental) de todos los tamaños, y
en ambos casos comparados con las partículas más pequeñas de 50 nm. Los resultados siguen
una tendencia similar a lo esperado teóricamente teniendo en cuenta la velocidad de
sedimentación, es decir, se unen más GNPs – biotina cuanto mayor es su tamaño, aunque no
coinciden exactamente con lo que se había previsto teóricamente. Esto podría deberse a que la
eficiencia de la unión SAv – biotina no es del 100% y a que pueden producirse interacciones
entre las GNPs – biotina de distintos tamaños.
Se compararon los resultados obtenidos al utilizar el mismo número de GNPs de cada tamaño
con dos experimentos en los que se corrigieron dichos números con la finalidad de obtener las
mismas cuentas de todos los tamaños. Para estas correcciones se aplicaron dos enfoques: el
primero, basado en los ratios teóricos calculados a partir de la velocidad de sedimentación; y
el segundo, empleando los ratios experimentales obtenidos mediante el conteo de GNPs
cuando se usó la misma cantidad de cada tamaño (figura 51). La figura 52 muestra los
resultados del conteo de GNPs bajo estas tres condiciones evaluadas, así como la variabilidad
en el número de cuentas de cada tamaño. Se observó un CV del 17,6% al aplicar la corrección
experimental y un CV del 25,4% con la corrección teórica. Estos valores contrastan
significativamente con el CV del 106,3% obtenido al utilizar el mismo número de GNPs sin
aplicar correcciones. Ambas correcciones lograron equilibrar el número de cuentas entre los
98

diferentes tamaños de GNPs, pero la corrección basada en datos experimentales demostró una
menor variabilidad. Esto resalta la importancia de este modelo para evaluar el
comportamiento de las GNPs y para aplicar correcciones basadas en datos experimentales al
diseñar ensayos de multiplexado (dúplex, tríplex, etc.). Los resultados confirmaron la
necesidad de corregir la cantidad de GNPs en base a su tamaño para lograr un rendimiento
equilibrado en ensayos de multiplexado, y demostraron que la corrección basada en datos
experimentales es más efectiva que la basada en cálculos teóricos.
Figura 51. Modelo SAv – biotina: multiplexado con el mismo número de GNPs de cada tamaño: ratio en
velocidad de sedimentación (teórico) y en cuentas de GNPs (experimental) respecto a las GNPs de 50 nm (n = 4).
Figura 52. Modelo SAv – biotina: multiplexado con el mismo número de GNPs de cada tamaño, con una
corrección experimental (cuentas de GNPs) y con una corrección teórica (velocidad de sedimentación).
Resultados en cuentas de GNPs y en CV (%) (n = 4).
99

Comportamiento de un dúplex de GNPs de 100 y 150 nm
Para la detección combinada de una proteína y un miRNA, así como para un dúplex de dos
miRNAs, se seleccionaron GNPs de 100 y 150 nm debido a su mayor velocidad de
sedimentación, lo que les permite unirse más rápidamente a la superficie. Se evaluó
simultáneamente el comportamiento de estas GNPs durante su adhesión a la superficie. En
experimentos previos con este modelo, se empleó una cantidad reducida de GNPs para evitar
la formación de aglomerados, lo que dificultaría el conteo y la comparación con los valores
teóricos. Sin embargo, en ensayos de detección de biomarcadores es crucial utilizar un mayor
número de GNPs para garantizar suficiente disponibilidad en relación con el biomarcador. Por
ello, con este sistema se evaluaron ambas condiciones: números bajos (106) y números altos
(108) de GNPs. Los números bajos permitieron analizar el comportamiento individual de cada
tamaño en un dúplex, mientras que los números altos permitieron establecer las condiciones
necesarias para un dúplex con biomarcadores reales. Los resultados, mostrados en la figura
53, indican que al emplear la misma cantidad de GNPs de ambos tamaños, las de 150 nm se
unieron más que las de 100 nm, siendo esta diferencia más significativa con números altos de
GNPs. Con números bajos, se registraron 173,9 GNPs de 100 nm y 605,3 GNPs de 150 nm.
En contraste, con números altos, las cifras aumentaron a 1441,4 GNPs de 100 nm y 8216,0
GNPs de 150 nm.
Figura 53. Modelo SAv – Biotina: comportamiento de GNPs de 100 nm y 150 nm en sistemas dúplex.
Resultados en número de GNPs empleando el mismo número de GNPs de cada tamaño tanto en cantidades
bajas como altas (n = 4).
100

La figura 54 presenta estos resultados como el ratio entre las GNPs de 150 nm y las de 100
nm, incluyendo el ratio teórico calculado a partir de la velocidad de sedimentación. También
se muestra un ratio de un experimento llevado a cabo con números altos de GNPs, donde se
corrigió la cantidad empleada de cada tamaño utilizando los resultados obtenidos al usar el
mismo número de cada tamaño. Con números bajos, el ratio experimental fue de 3,5, mientras
que con números altos alcanzó un valor de 5,7, ambos superiores al ratio teórico de 2,3. Estos
resultados sugieren que, con números bajos, la diferencia entre tamaños se explica únicamente
por la velocidad de sedimentación. Sin embargo, al usar números altos, la diferencia se
amplifica debido a un fenómeno de competencia por el espacio disponible en la superficie de
silicio. Las GNPs de 150 nm, al sedimentar más rápidamente, ocupan el espacio antes que las
de 100 nm, limitando la adhesión de estas últimas. El ratio de 5,7 se estableció como
referencia para corregir el número de GNPs empleado de cada tamaño en un dúplex real con
números altos, ya que, a pesar de la competencia por espacio y la posible aglomeración, es
fundamental utilizar cantidades altas para evitar deficiencias en relación con el biomarcador a
detectar. Al aplicar esta corrección, se logró un ratio de 1,1, indicando que se unieron
cantidades equivalentes de GNPs de ambos tamaños. Esta corrección fue posteriormente
utilizada en ensayos de detección combinada y dúplex empleando GNPs de 100 y 150 nm,
asegurando un rendimiento óptimo. El estudio del comportamiento del dúplex de GNPs de
Figura 54. Modelo SAv – Biotina: comportamiento de GNPs de 100 nm y 150 nm en sistemas dúplex.
Resultados expresados como ratio 150 nm / 100 nm empleando el mismo número de GNPs de ambos tamaños
tanto en cantidades bajas como altas, empleando distinto número de GNPs con una corrección en cantidades
altas, y calculado teóricamente considerando la velocidad de sedimentación de las GNPs (n = 4).
101

100 y 150 nm con el sistema modelo de SAv – biotina permitió establecer una estrategia de
corrección para equilibrar la señal de ambos tamaños y optimizar la detección combinada y el
multiplexado.
Dúplex de miR – 200a – 3p y miR – 486 – 5p
Se evaluó la eficacia de un dúplex diseñado para detectar dos miRNAs implicados en la
enfermedad de Alzheimer: miR – 200a – 3p y miR – 486 – 5p, según lo reportado por Peña –
Bautista et al., 2022 (figura 55). Este experimento
permitió evaluar la capacidad de la tecnología
propuesta para detectar simultáneamente dos
miRNAs diferentes.
La figura 56 presenta los resultados obtenidos al
realizar la detección en dúplex de estos miRNAs. El
número de cuentas de GNPs fue significativamente
mayor para el ssDNA 200a – 3p, alcanzando 4336,8
Figura 55. Dúplex de dos miRNAs.
cuentas, en comparación con 2059,6 cuentas para el ssDNA 486 – 5p.
También se observaron diferencias en la sensibilidad, ya que con el ssDNA 200a – 3p se
obtuvo un LLoQ de 1,2 pM, un ULoQ de 531 pM y un rango dinámico de 2,6; en cambio, con
el ssDNA 486 – 5p se obtuvo un LLoQ de 2,1 pM, un ULoQ de 2980 pM y un rango
Figura 56. Dúplex de ssDNAs 200a – 3p y 486 – 5p. Resultados en número de GNPs en función de la
concentración de ssDNAs (pM). LOD, LLoQ, ULoQ y rango dinámico calculados con un ajuste 5PL (n = 3).
102

dinámico de 3,1. En resumen, el dúplex mostró un funcionamiento adecuado para la detección
simultánea de ambos miRNAs asociados con la enfermedad de Alzheimer.
Detección combinada de IL – 6 y miR – 122 – 5p
Selección de las condiciones óptimas para la detección combinada
Se evaluó el funcionamiento de los anticuerpos de captura y detección para IL – 6, y del
anticuerpo anti – FITC y la sonda DGL 122 – 5p para miR – 122 – 5p, mediante un
experimento de cinética que incluyó diferentes tiempos de incubación con la misma cantidad
de moléculas de biomarcador. Para este estudio, se utilizó un ssDNA – FITC 122 – 5p,
eliminando la detección mediante DR. Esta decisión se tomó por dos razones: en primer lugar,
la DR no permite la incubación directa de las GNPs en la superficie; y, en segundo lugar, el
objetivo era evaluar específicamente la efectividad del anticuerpo anti – FITC y la sonda DGL
122 – 5p, lo que hacía innecesario incluir la SMART – nucleobase. Este experimento permitió
comparar la cinética de los sistemas de detección de IL – 6 y el miR – 122 – 5p por separado,
para establecer las condiciones óptimas en la detección simultánea de ambos biomarcadores.
103

La figura 57 presenta el número de GNPs adheridas en función del tiempo para ambos
sistemas de detección (IL – 6 y miR – 122 – 5p) utilizando GNPs de 100 nm y 150 nm. En el
sistema de IL – 6, el número de GNPs aumentó significativamente con el tiempo, alcanzando
4698,5 cuentas con las GNPs de 150 nm y 2579,3 con las de 100 nm. En contraste, el sistema
de miR – 122 – 5p mostró un menor rendimiento, con 379,0 cuentas al usar GNPs de 150 nm
y solo 88,3 con las de 100 nm. Estos resultados indican que el sistema de IL – 6 es más
efectivo que el de miR – 122 – 5p en términos de número de GNPs adheridas. Por lo tanto,
para optimizar la detección combinada, se recomienda emplear GNPs de menor adhesión para
el biomarcador de mayor eficiencia (100 nm para IL – 6) y de mayor adhesión para el de
menor eficiencia (150 nm para miR – 122 – 5p). Estos resultados sugirieron que es
fundamental tener en cuenta el biomarcador que se va a detectar con cada tamaño de GNPs en
Figura 57. Selección de las condiciones óptimas para la detección combinada. Resultados en número de GNPs
respecto al tiempo en minutos con GNPs – DGL 122 – 5p de 100 nm y 150 nm, y con GNPs – anti – IL – 6 de
100 nm y 150 nm (n = 3).
la detección combinada.
104

Al analizar los dos tamaños de GNPs conjugadas con anti – IL – 6 y DGL 122 – 5p mediante
la tecnología AVAC, se observó que las GNPs unidas a anti – IL – 6 tendían a formar más
agregados que aquellas unidas a DGL 122 – 5p (figura 58). Este comportamiento implicaba
que, al utilizar GNPs de 100 nm con anti – IL – 6, sus agregados se ubicaban en la misma
región del histograma proporcionado por la tecnología AVAC en base al brillo y al color
característico de cada tamaño de GNPs, que los monómeros de las GNPs de 150 nm
conjugadas con DGL 122 – 5p. Como consecuencia, ambos tipos de partículas se volvían
indistinguibles, lo que dificultaba el conteo preciso de las GNPs de 150 nm con DGL 122 –
5p en las mediciones. Por este motivo, aunque el sistema basado en anti – IL – 6 era más
eficiente que el basado en miR – 122 – 5p, se optó por utilizar GNPs de 100 nm para el
Figura 58. Selección de las condiciones óptimas para la detección combinada. Histogramas obtenidos con la
tecnología AVAC con GNPs – DGL 122 – 5p de 100 nm y 150 nm y con GNPs – anti – IL – 6 de 100 nm y 150
nm.
sistema de miR – 122 – 5p y GNPs de 150 nm para el sistema de IL – 6. La formación de
agregados por las GNPs unidas a anti – IL – 6 impuso una limitación técnica que requirió una
asignación no intuitiva de los tamaños de GNPs para cada biomarcador.
Funcionamiento de la detección combinada en comparación con el monoplex
105

Se evaluó el rendimiento de la detección combinada de IL – 6 y miR – 122 – 5p (figura 59) en
comparación con la detección de cada biomarcador por separado en formato monoplex. Para
ello, se utilizó la misma cantidad de anticuerpo de captura de IL – 6 y anticuerpo anti – FITC
sobre la superficie de silicio. Sin embargo, se
empleó una mayor cantidad de GNPs
funcionalizadas con DGL 122 – 5p de 100 nm
que de GNPs conjugadas con anti – IL – 6 de
150 nm. Esta decisión se basó en dos
observaciones clave: que en un mismo tiempo las
GNPs de 150 nm se unen más a la superficie de
silicio debido a su mayor velocidad de
sedimentación en comparación con las de 100
Figura 59. Detección combinada de un
nm (figuras 53 y 54), y que el sistema de
miRNA y una proteína.
detección de IL – 6 es más eficiente que el de
miR – 122 – 5p (figura 57).
La figura 60 muestra los resultados obtenidos para ambos biomarcadores, tanto en detección
monoplex como combinada, utilizando un buffer estándar de BSA al 1% en PBS – Tween20
0,1%. Para miR – 122 – 5p, el ratio (S/B) a 300 pM de ssDNA 122 – 5p fue de 360,0 en el
formato monoplex, pero disminuyó significativamente a 42,0 en la detección combinada. Esta
reducción se atribuye principalmente a una caída en las cuentas específicas, que bajaron de
2577,1 a 138,5. En el caso de IL – 6, el ratio (S/B) a 150 pg/ml de IL – 6 fue de 213,4 en el
monoplex, mientras que en el formato combinado se redujo a 98,5. De manera similar, esta
disminución se debió a una reducción en las cuentas específicas, que pasaron de 3486,0 a
1095,3. Estos resultados indican que, aunque la detección combinada permitió la medición de
ambos biomarcadores, su rendimiento fue inferior al observado en el formato de monoplex
para ambos casos. Esta disminución de eficacia podría explicarse por interacciones entre las
diferentes GNPs empleadas, así como por interacciones cruzadas entre los biomarcadores y
los componentes (GNPs y anticuerpos) del otro sistema de detección. Los resultados
indicaron que la detección combinada en el buffer estándar funcionó correctamente con
ambos analitos, aunque de forma menos eficiente que en monoplex.
106

Figura 60. Funcionamiento de la detección combinada con comparación con el monoplex de IL – 6 y ssDNA
122 – 5p en buffer BSA 1% - PBS – Tween20 0,1%. Resultados en cuentas inespecíficas, cuentas específicas a
150 pg/ml y ratio (S/B) a 150 pg/ml con IL – 6, y en cuentas inespecíficas, cuentas específicas a 300 pM y ratio
(S/B) a 300 pM con ssDNA 122 – 5p (n = 3).
Evaluación de la influencia de la PK en la detección combinada en suero
La enzima PK se utiliza en la detección de miRNAs en suero para protegerlos de la
degradación causada por las RNAsas presentes en la muestra. Sin embargo, la PK no solo
degrada las RNAsas, sino también todas las proteínas presentes en el suero, incluidas las
proteínas diana como la IL – 6 y el anticuerpo de detección anti – IL – 6 conjugado a las
GNPs. Para evaluar su impacto, se realizó un ensayo de detección combinada de IL – 6 y
ssDNA 122 – 5p bajo las mismas condiciones utilizadas para detectar miRNAs: dilución 3/10
en buffer de lisis con DTT a 50 µM, tanto en ausencia como en presencia de PK (a 0,4
mg/ml).
La figura 61 muestra los resultados obtenidos para ssDNA 122 – 5p e IL – 6 en la detección
combinada con y sin PK. En el caso de ssDNA 122 – 5p, el número de cuentas de GNPs
disminuyó drásticamente al eliminar la PK, pasando de 367,5 cuentas con PK a solo 85,3 sin
PK. Además, con PK se obtuvo un LLoQ de 10,4 pM, un ULoQ de 2990 pM y un rango
dinámico de 2,5; mientras que sin PK no pudo calcularse. Estos resultados confirman que la
PK es esencial no solo para evitar la degradación de los miRNAs por las RNAsas, sino
107

también en las curvas de calibración con ssDNA, que es más estable. Esto sugiere que la PK
también degrada restos proteicos generados tras la ruptura de los exosomas con el buffer de
lisis. Dichos restos pueden interferir con las GNPs al adsorberse en su superficie, lo que
puede producir su agregación y bloquear la hibridación entre la sonda DGL 122 – 5p en las
GNPs y el ácido nucleico diana. En el caso de IL – 6, no se observó un aumento en el número
de cuentas de GNPs al incrementar la concentración de IL – 6, independientemente de la
presencia o ausencia de PK. En ambas condiciones, no fue posible calcular el LOQ. Esto
indica que la detección de IL – 6 no funcionó con estas condiciones experimentales. Los
resultados sugieren que, además de la PK, tanto el DTT como el buffer de lisis afectan
negativamente la detección de proteínas. Es probable que el buffer de lisis altere la estructura
y afinidad del anticuerpo anti – IL – 6 conjugado a las GNPs, dificultando su interacción con
la IL – 6. Además, al romper los exosomas, la liberación de lípidos y proteínas adicionales
puede competir con la IL – 6 en su interacción con su anticuerpo de detección. Por su parte, el
DTT, como agente reductor, podría alterar la estructura tanto del biomarcador IL – 6 como del
anticuerpo de detección anti – IL – 6 al romper sus enlaces disulfuro.
En conclusión, la detección combinada de IL – 6 y miR – 122 – 5p necesitan reactivos
diferentes para diluir la muestra debido a la degradación proteica inducida por la PK y a los
efectos desestabilizadores del DTT y el buffer de lisis. Esto destaca la importancia de diseñar
condiciones específicas y diferenciadas para la detección simultánea de miRNAs y proteínas,
considerando las necesidades particulares de cada biomarcador y los efectos de los reactivos
utilizados
Figura 61. Evaluación de la influencia de la PK en la detección combinada en suero. Detección de ssDNA 122
– 5p con GNPs de 100 nm y de IL – 6 con GNPs de 150 nm, con y sin PK. Resultados en número de GNPs en
función de la concentración de ssDNA – 5p (pM) e IL – 6 (pg/ml). LOD, LLoQ, ULoQ y rango dinámico
calculados con un ajuste 5PL (n = 3). Abreviaturas: NC, Not Calculable.
108

Funcionamiento de la detección combinada de IL – 6 y miR - 122 – 5p
Como alternativa para superar las limitaciones observadas, se propuso realizar la detección de
cada biomarcador en la muestra con sus condiciones optimizadas, dividiendo la muestra en
dos en un primer paso. En el caso de IL – 6 se llevó a cabo con una dilución 1/8 en el buffer B
optimizad por Mecwins para la detección de proteínas, y en el caso de la detección de ssDNA
122 – 5p con una dilución 3/10 en el buffer de lisis con PK a 0,04 mg/ml y DTT a 50 µM.
Como se muestra en la figura 61, al usar esta metodología, se obtuvieron 1005,9 cuentas de
GNPs con la concentración más alta de ssDNA 122 – 5p, con un LLoQ de 0,701 pM, un
ULoQ de 1605 pM y un rango dinámico de 3,4. De manera similar, para IL – 6, se alcanzaron
557,6 cuentas de GNPs con la concentración más alta, con un LLoQ de 0,19 pg/ml, un ULoQ
de 195 pg/ml y un rango dinámico de 3. Estos resultados confirman que la detección
combinada de IL – 6 y ssDNA 122 – 5p puede realizarse exitosamente con la tecnología al
emplear esta aproximación de analizar la muestra de forma separada para cada biomarcador
con sus condiciones óptimas.
Figura 62. Detección combinada. Detección de ssDNA 122 – 5p con GNPs de 100 nm y de IL – 6 con GNPs
de 150 nm en la detección combinada. Resultados en número de GNPs en función de la concentración de
ssDNA 122 – 5p (pM) o IL – 6 (pg/ml). LOD, LLoQ, ULoQ y rango dinámico calculados con un ajuste 5PL
( 3)
109

6. DISCUSIÓN
El objetivo principal de esta investigación doctoral fue el desarrollo de una tecnología
innovadora para la detección de miRNAs, mediante la integración de la química dinámica de
Destina Genómica y la tecnología plasmónica ultrasensible de Mecwins. La relevancia de esta
tecnología se fundamenta en la creciente evidencia que vincula las variaciones en los niveles
de miRNAs con la progresión de enfermedades y la respuesta a tratamientos (Godoy et al.,
2018; Izzotti et al., 2016; Larrea et al., 2016). La presencia y estabilidad de los miRNAs en
fluidos corporales, junto con su capacidad para reflejar el estado fisiopatológico del tejido de
origen, respalda su potencial como herramientas diagnósticas y pronósticas (Valihrach et al.,
2020). En consecuencia, existe una necesidad de desarrollar métodos de diagnóstico y
pronóstico no invasivos basados en la detección de miRNAs circulantes. Si bien existen
diversas técnicas para la detección y cuantificación de miRNAs, esta nueva tecnología busca
superar las limitaciones en cuanto a reproducibilidad y sensibilidad, mejorando el diagnóstico
de enfermedades mediante una detección precisa y sensible de miRNAs (Godoy et al., 2019).
Durante el transcurso de esta investigación, se logró desarrollar una tecnología capaz de
detectar miRNAs de manera reproducible y sencilla. La implementación de una metodología
basada en el estudio secuencial de diferentes modelos, de menor a mayor complejidad, de
forma previa a la integración de ambas tecnologías, permitió la identificación de los diferentes
puntos clave de la tecnología. Este enfoque estratégico, que descompone un problema
complejo en componentes más simples, facilitó la comprensión y optimización de la
tecnología en desarrollo. Como resultado, se seleccionaron las químicas de conjugación
óptimas para la integración de los componentes de la química dinámica de Destina Genómica
con los de la tecnología plasmónica de Mecwins. Esto incluye la unión de la sonda DGL a las
GNPs y de la SMART – nucleobase a la superficie de silicio. Para ello, se diseñaron e
implementaron tres modelos experimentales: el modelo de SAv – biotina permitió estudiar la
unión de las GNPs a la superficie de silicio; el modelo de captura, la eficiencia de la captura
de un ácido nucleico mediante las GNPs y la superficie de silicio; y, el modelo de hibridación,
la eficacia de la hibridación de la sonda DGL con el ácido nucleico diana. En este proceso, se
evaluaron comparativamente cuatro químicas de conjugación distintas, cuyos detalles se
presentan en la tabla 12. Los resultados obtenidos condujeron a la selección de la química D
como la configuración óptima para la tecnología. Esta química se basa en la unión de la DGL
a las GNPs mediante la química COOH – NH, y la unión de la SMART – nucleobase a la
2
superficie de silicio mediante la química anti – FITC – FITC. La selección de esta química fue
110

el resultado de una evaluación exhaustiva de múltiples condiciones y parámetros de la
tecnología. Dentro de este proceso de optimización, se identificaron cuatro puntos clave que
merecen especial atención.
Superficie de silicio - SMART -
Química GNPs - DGL
nucleobase
A anti - FITC - FITC SAv - biotina
B SAv - biotina anti - FITC - FITC
C COOH - NH2 SAv - biotina
D COOH - NH2 anti - FITC - FITC
Tabla 12. Químicas evaluadas en la investigación.
Uno de los principales desafíos superados durante la integración de las tecnologías fue la
presencia de interferencias y problemas de compatibilidad entre los componentes de la
química dinámica de Destina Genómica y la tecnología plasmónica de Mecwins.
Específicamente, la SMART – nucleobase, esencial para la detección de la hibridación al
insertarse en la posición “blanco” de la sonda DGL, mostró una competencia con las GNPs
por la unión a la superficie de silicio (figura 17 de los Resultados). Este efecto competitivo se
atribuye al exceso de SMART – nucleobase requerido para asegurar una inserción eficiente en
la sonda DGL (Bowler et al., 2010). Sin embargo, se consiguió diseñar un protocolo
experimental que eliminaba este efecto competitivo. Este protocolo consistió en eliminar la
incubación directa de las GNPs sobre la superficie de silicio y realizar un protocolo de lavado
optimizado, diluyendo las GNPs de forma previa a realizar dos lavados mediante
centrifugación (figuras 18 y 19 de los Resultados). Con este protocolo de lavado optimizado,
se logró encontrar un equilibrio óptimo entre la eliminación del exceso de SMART –
nucleobase y la pérdida de las GNPs durante la centrifugación.
Adicionalmente, se observó que tanto el RA como la SMART – nucleobase, ya sea de forma
individual o conjunta, incrementaban la señal inespecífica y disminuían la señal específica en
el modelo de hibridación (figura 34 y 37 de los Resultados). Esto sugiere que el RA podría
modificar la carga superficial de las GNPs, afectando la orientación de las moléculas
inmovilizadas (anti – FITC o DGL). Esta alteración podría exponer regiones susceptibles a
interacciones no específicas de estas moléculas, lo que favorecía la unión inespecífica de las
GNPs a la superficie de silicio. Adicionalmente, se reduciría la eficiencia de la captura del
complejo hibridado con el anti – FITC en la química A, o la hibridación de la sonda DGL con
el miRNA en las químicas C y D. Estos resultados son consistentes con el uso de este RA en
111

la preparación de GNPs de distintos tamaños, debido a su influencia en las propiedades
superficies de las GNPs (DiScipio, 1996). En este contexto, esta alteración podría estar
afectando la orientación de las moléculas inmovilizadas, como anti – FITC o DGL, y, por
ende, la especificidad de la detección.
Asimismo, se observó que la SMART – nucleobase interactúa de forma inespecífica con la
DGL, facilitando la unión inespecífica de las GNPs a la superficie de silicio a través de su
etiqueta, e impidiendo la hibridación con el miRNA. Este fenómeno no se produce en la
química dinámica de Destina Genómica al emplear otro tipo de partículas, lo que sugiere que
las GNPs actúan como catalizador, debido a la alta afinidad de las bases nitrogenadas por el
oro, como se ha documentado en estudios previos (Liu, 2012; Carnerero et al., 2017). La
adsorción de la SMART – nucleobase en la superficie de oro acerca esta molécula a la DGL
inmovilizada en la superficie de las GNPs. Esto resulta en una unión específica a las bases
nitrogenadas complementarias de la DGL, incluso en ausencia del miRNA diana, un resultado
no deseado. De esta manera, se produce un incremento en la unión inespecífica de las GNPs a
la superficie de silicio, debido a la presencia de la SMART – nucleobase con su
correspondiente etiqueta, y una disminución en la señal específica, ya que la presencia de la
SMART – nucleobase en la DGL dificulta la hibridación con el miRNA diana.
Curiosamente, el mayor incremento en la señal inespecífica se observó con el RA solo,
mientras que el menor incremento ocurrió con la combinación de RA y SMART – nucleobase.
Sin embargo, esta combinación resultó en la mayor disminución de la señal específica, lo que
sugiere un efecto aditivo. Una posible explicación es que el RA, en presencia de la SMART –
nucleobase, podría estar reduciendo preferentemente esta última, disminuyendo su efecto
sobre la carga de las GNPs y el aumento de la inespecificidad. Por ello, al combinar el RA y
la SMART – nucleobase, únicamente se produce el efecto de la SMART – nucleobase sobre la
inespecificidad. En contraste, la reducción de la SMART – nucleobase por el RA asegura que
esta no se libere de la DGL, incrementando la disminución en la hibridación con el miRNA.
En conjunto, estos resultados indican que tanto el RA como la SMART – nucleobase
interfieren con el sistema, disminuyendo la señal específica y aumentando la inespecífica.
Durante el desarrollo de este trabajo doctoral, se consiguió eliminar estas interferencias con
éxito, realizando el procedimiento en dos pasos. Se pasó a realizar en un primer paso la
hibridación del miRNA diana con la DGL y en un segundo paso la introducción de la SMART
– nucleobase y su reducción con el RA, es decir, la DR, en lugar de realizarse ambos procesos
de forma simultánea (figura 39 de los Resultados).
112

Adicionalmente, se observó que el conector utilizado para unir la etiqueta a la SMART –
nucleobase es un factor clave en su interferencia con el sistema. Específicamente, se constató
que cuando la etiqueta se une mediante un conector que contiene DBCO, esta interferencia se
intensifica, impidiendo la detección de miRNAs (figura 46 de los Resultados). Esta
observación es consistente con estudios previos que demuestran la afinidad del DBCO por las
GNPs, como el descrito por Jeon et al., donde se utiliza DBCO para la funcionalización de
GNPs en procesos de radiomarcaje (Jeon et al., 2016). Se evidenció que las SMART –
nucleobases que contienen DBCO se unen de forma inespecífica y significativa a las GNPs –
COOH. Por lo tanto, debido a su afinidad por los grupos COOH, la SMART – nucleobase se
une a regiones libres de sonda DGL. De esta manera, la SMART – nucleobase se aproxima a
la DGL inmovilizada en la superficie de las GNPs, incrementando su interacción inespecífica.
Por lo tanto, las GNPs actúan como catalizador, facilitando que la SMART – nucleobases
DBCO RP12 y P12 ocupen la posición “blanco” de la DGL, incluso en ausencia del miRNA
diana. Este efecto se observa con ambas SMART – nucleobases evaluadas que contienen
DBCO, pero es significativamente mayor cuando la unión es mediante un enlace simple
(DBCO RP12) que cuando es mediante un doble enlace (DBCO P12). Esto puede deberse a
que el anillo aromático del DBCO tiene mayor libertad para interactuar de forma inespecífica
con las GNPs – COOH cuando la unión es mediante un enlace simple.
Es importante destacar que la SMART – nucleobase y el RA no son los únicos componentes
de la DR que muestran interferencias con la tecnología plasmónica; también se identificó que
el buffer DR, necesario para la química dinámica, afecta a la tecnología desarrollada. Se
observó que el detergente presente en este tampón es fundamental, siendo necesario emplear
un detergente no iónico como el Tween20, en lugar de un detergente aniónico como el SDS.
Esto se debe a que, como se destaca en investigaciones previas (Unterlander&Doucette,
2018), el SDS puede interactuar fuertemente con las proteínas, alterando su estructura y
desestabilizando las uniones específicas, lo cual es crucial para la detección en este sistema.
Por lo tanto, es fundamental que no se produzcan cambios conformaciones en las moléculas
de detección (anti – FITC SAv y DGL) y que las uniones específicas que se produzcan no se
desestabilicen (figura 28 de los Resultados). Por otro lado, este buffer se caracteriza por un pH
de 6, crucial para la inserción de la SMART – nucleobase (Bowler et al., 2010), el cual parece
comprometer la efectividad de la detección (figura 33 de los Resultados), posiblemente
induciendo cambios conformacionales en las moléculas de detección (anti – FITC, SAv y
DGL) y desestabilizando las uniones específicas. Este efecto del pH en la estabilidad de las
113

proteínas está bien documentado; por ejemplo, Zbacnik et al. subrayan la importancia crítica
de la elección del buffer y su pH en la formulación de proteínas (Zbacnik et al., 2016). Esta
interferencia se eliminó con éxito con la metodología implementada de lavados previos a la
incubación de las GNPs en la superficie de silicio y con el procedimiento en dos pasos,
previamente mencionados. En resumen, se logró con éxito identificar y abordar diversas
interferencias y problemas de compatibilidad entre los componentes de la química dinámica y
la tecnología plasmónica, optimizando el protocolo experimental para mejorar el rendimiento
de la tecnología.
El segundo desafío principal de esta investigación doctoral se centró en optimizar la
accesibilidad de los componentes de la química dinámica de Destina Genómica. Por un lado,
la accesibilidad de la sonda DGL es fundamental para la hibridación con el miRNA diana; por
otro lado, la etiqueta de la SMART – nucleobase debe unirse a la superficie de silicio para
inmovilizar las GNPs tras la hibridación. Inicialmente, se observó que la hibridación entre la
DGL y el miRNA no ocurre cuando se realiza sobre la superficie de las GNPs (aproximación
1: GNPs + DGL  miRNA) con la química A seleccionada con el modelo de captura. En
contraste, la hibridación se produce cuando se lleva a cabo en solución y posteriormente se
captura el complejo hibridado con las GNPs (aproximación 2: DGL + miRNA  GNPs)
(figura 27 de los Resultados). Esto sugiere que la inmovilización de la DGL en la superficie
de las GNPs restringe la libertad de las bases para hibridar correctamente con el miRNA
diana. Sin embargo, cuando la DGL se encuentra en solución, su libertad de movimiento
permite que las bases nitrogenadas hibriden eficientemente con el miRNA diana. Diversos
estudios han investigado los factores clave en la inmovilización de ácidos nucleicos en GNPs,
destacando la importancia de asegurar la accesibilidad de las bases nitrogenadas (Carnerero et
al., 2017; Liu, 2012; Hazarika et al., 2024).
Sin embargo, tras observar las interferencias previamente mencionadas de los componentes de
la DR (SMART – nucleobase, RA y buffer DR), se propuso realizar el procedimiento en dos
pasos: primero, la hibridación entre la DGL y el miRNA, y posteriormente, la DR. Este
procedimiento en dos pasos es incompatible con la realización de la hibridación en solución y
la posterior captura del complejo hibridado con las GNPs (tabla 2 de Material y Métodos), es
decir, con la aproximación 2 (figura 27 de los Resultados). Por lo tanto, se buscó una química
compatible con la aproximación 1, ya que la química A no lo era. Esto podría deberse a que la
DGL se inmoviliza en la superficie de las GNPs mediante la unión anti – FITC – FITC. En
consecuencia, esta interacción implica inmovilizar una DGL de pequeño tamaño en la
114

superficie de las GNPs uniéndola a un anticuerpo de 150 kDa. Este anticuerpo anti – FITC
podría interferir con la hibridación cuando la sonda DGL está inmovilizada en la superficie de
las GNPs, debido a su gran tamaño, impidiendo que las bases nitrogenadas queden libres y se
produzca la hibridación correcta con el miRNA. En resumen, para realizar el procedimiento
en dos pasos y eliminar las interferencias de los componentes de la DR, se seleccionó la
aproximación 1 para la metodología de la tecnología. Dado que esta aproximación era
incompatible con la química A seleccionada, se buscó otra química para la unión GNPs –
DGL compatible. La química candidata fue la química COOH – NH, es decir, unir la DGL
2
con un extremo amino a GNPs con grupos carboxilo en su superficie. Con esta química, se
consiguió eliminar la presencia de una biomolécula tan grande como un anticuerpo de la
superficie de las GNPs, eliminando su interferencia con la hibridación. Con esta nueva
propuesta se obtuvieron resultados exitosos, ya que la plataforma funcionó correctamente,
consiguiendo que la hibridación entre la DGL y el miRNA diana se produjese en la superficie
de las GNPs (figura 39 de los Resultados). De esta forma, se validó la hipótesis inicial de que
la DGL es accesible para hibridar con el miRNA diana en la superficie de las GNPs cuando
no existen moléculas de gran tamaño que interfieran con las bases nitrogenadas de la DGL.
En cuanto a la accesibilidad de la SMART – nucleobase, se investigaron dos propuestas
metodológicas para optimizarla. Se evaluaron dos etiquetas candidatas para la SMART –
nucleobase, biotina y FITC, y se evaluaron diferentes compuestos para bloquear y almacenar
las GNPs – DGL, BSA y mPEG – SH 6K. Se observó que la tecnología funcionó de forma
óptima al emplear FITC como etiqueta y mPEG – SH 6K como bloqueante y almacenamiento
(figura 41 de los Resultados). Esta observación es consistente con estudios previos que
demuestran la efectividad del mPEG – SH 6K en la funcionalización y estabilización de
GNPs, como describe Li et al. En este estudio, se demuestra que el mPEG – SH previene la
agregación no específica y mejora la estabilidad de las GNPs funcionalizadas con
oligonucleótidos (Li et al., 2015). Además, otro estudio respalda el uso de mPEG – SH para
crear una capa protectora en las nanopartículas, minimizando la interacción no específica con
componentes biológicos (Aido et al., 2021). Por lo tanto, parece que estas condiciones son
óptimas para que la SMART – nucleobase sea accesible y pueda unirse a la superficie de
silicio, inmovilizando las GNPs en las que se ha producido la hibridación con el miRNA
diana. El FITC es la etiqueta óptima debido a su mayor tamaño en comparación con la
biotina, 389 Da frente a 244 Da. Sin embargo, esta etiqueta solo es más accesible cuando se
combina con el uso de mPEG – SH 6K como bloqueante y almacenamiento. Este compuesto
115

tiene un tamaño menor que el BSA y, por lo tanto, no interfiere ni con la DGL para que
hibride con el miRNA ni con la etiqueta FITC de la SMART – nucleobase para que pueda
unirse al anti-FITC de la superficie de silicio. Adicionalmente, puede estar ayudando al
correcto funcionamiento de la tecnología al reducir la tendencia a la agregación de las GNPs.
En consecuencia, con estas estrategias, en combinación con las previamente mencionadas
para reducir las interferencias de los componentes de la DR, se logró de forma exitosa que
tanto la DGL como la etiqueta de la SMART – nucleobase fueran accesibles para detectar
miRNAs mediante la hibridación de la sonda DGL con el miRNA diana y la unión de la
SMART – nucleobase a la superficie de silicio.
El tercer desafío de esta investigación se abordó con éxito al adaptar la tecnología de
detección de miRNAs desarrollada para su empleo en muestras reales de suero de pacientes.
Para ello, se evaluaron cuidadosamente los componentes empleados en Destina Genómica
para la detección de miRNAs, y los componentes utilizados en Mecwins para la detección de
proteínas mediante tecnología plasmónica. Destina Genómica emplea un buffer de lisis
desarrollado internamente, suplementado con enzima PK y DTT. El buffer de lisis cumple
eficazmente la función de romper los exosomas que contienen los miRNAs, liberándolos y
haciéndolos accesibles en suero; la enzima PK demostró ser valiosa para eliminar las RNAsas
presentes en la muestra, protegiendo así los miRNAs de la degradación; y el DTT contribuyó
de manera importante a prevenir procesos oxidativos que podrían degradar los miRNAs
durante el análisis. La detección de miRNAs con la tecnología desarrollada funcionó
correctamente al diluir el suero en estos componentes. Sin embargo, se observó que la
cantidad de DTT requirió una optimización para evitar efectos en la estabilidad de las GNPs.
Se consiguió encontrar un equilibrio favorable entre la cantidad suficiente de DTT para
prevenir procesos oxidativos que dañen los miRNAs y una cantidad no excesiva para no
desestabilizar la unión de las moléculas de DGL a la superficie de las GNPs, asegurando así la
eficacia de la detección de los miRNAs. Estos resultados evidenciaron que la concentración
de DTT es un factor crítico en la detección de miRNAs en suero. Como se ha visto en otro
estudio (Tsai et al., 2012), el DTT puede desplazar ligandos de tiol de la superficie de las
GNPs, afectando su estabilidad y capacidad de unión. Por lo tanto, se logró optimizar la
concentración de DTT para encontrar un equilibrio entre la protección de los miRNAs contra
la degradación oxidativa y la preservación de la integridad de las GNPs. Este equilibrio es
crucial para garantizar la eficacia y precisión de este método de detección.
116

Al emplear la tecnología desarrollada para detectar miRNAs en suero, se observó una ligera
disminución en la sensibilidad, con un LLoQ que pasó de 0,221 pM con el buffer estándar a
0,596 pM en suero. Esta modesta pérdida de sensibilidad puede atribuirse a la interferencia de
los componentes del suero tanto con la detección del miRNA como con la interacción entre
las GNPs y la superficie de silicio. A pesar de esta pequeña variación, se consiguió una
sensibilidad muy buena en suero, dentro del rango necesario para la detección del miR – 122
– 5p en aplicaciones clínicas (Vliegenthart et al., 2017), y se logró recuperar la concentración
de este biomarcador en diferentes muestras de concentración conocida. Por lo tanto, se
demostró con éxito que la tecnología desarrollada funciona correctamente en la detección
directa de miRNAs en muestras de suero de pacientes. Como se ha mencionado previamente,
una de las principales causas de la irreproducibilidsad de las plataformas de detección de
miRNAs es el procesamiento de las muestras, que incluye su recogida y almacenamiento, el
aislamiento del RNA total y el enriquecimiento de la fracción pequeña de RNA (Khoury y
Tran, 2015; Tiberio et al., 2015; He et al., 2015; Weber et al., 2010). Por lo tanto, este logro es
fundamental, ya que la detección directa de miRNAs en biopsias liquidas sin extracción de
RNA es una metodología cada vez más demandada, debido a su tiempo de respuesta reducido,
facilidad de uso y ausencia de pérdida de material al no requerir la extracción de miRNAs
(Godoy et al., 2019).
El cuarto y último desafío abordado consistió en adaptar esta tecnología a la detección
simultánea de múltiples miRNAs y a la detección combinada de un miRNA y un biomarcador
proteico. En primer lugar, se observó que la selección de tamaños de GNPs es fundamental
para cada biomarcador, ya que, a mayor diámetro de las GNPs, mayor será su velocidad de
sedimentación y, por lo tanto, mayor será el número de GNPs que llegarán a la superficie de
silicio en el mismo tiempo. Diversos estudios han demostrado que el movimiento de las
nanopartículas es el resultado de la combinación de los fenómenos de sedimentación y
difusión (Haw, 2002). Por lo tanto, los resultados obtenidos concuerdan con la teoría, ya que
se ha observado que, a mayor tamaño de las GNPs, mayor es el número de partículas que
alcanzan la superficie de silicio debido a que la sedimentación es mayor a medida que
aumenta el diámetro de las GNPs. Esto es crucial, ya que tanto la selección del tamaño de
GNPs para cada biomarcador, como el número de GNPs empleado de cada tamaño, son
factores clave en un sistema de multiplexado. En este estudio, se seleccionaron GNPs de 100
y 150 nm, y se estudió el ajuste necesario para que el número de partículas unidas a la
superficie de silicio fuera similar con ambos tamaños. Se observó que, al emplear números
117

totales elevados de nanopartículas, para evitar una deficiencia de partículas frente al
biomarcador que se desea detectar, las diferencias entre el número de GNPs de 100 y 150 nm
fueron superiores a lo esperado teóricamente, considerando su velocidad de sedimentación.
Esto no ocurre cuando se emplean números totales bajos de nanopartículas, lo que sugiere
que, al emplear números elevados, al efecto de la velocidad de sedimentación se suma un
efecto de competencia entre ambas GNPs por la superficie de silicio disponible. Esto significa
que las GNPs de 150 nm llegan primero a la superficie debido a su mayor velocidad de
sedimentación y ocupan la superficie de silicio, limitando el espacio para que las GNPs de
100 nm se unan posteriormente. Por lo tanto, se consiguió entender el comportamiento de las
GNPs de distintos tamaños empleadas en un multiplexado. Es fundamental evaluar los
tamaños de GNPs seleccionados para un sistema de multiplexado y utilizar estos resultados
experimentales para realizar la corrección necesaria en el número de GNPs de cada tamaño.
En el caso de un ensayo de multiplexado para la detección de dos miRNAs relacionados con
la enfermedad de Alzheimer, dado que los sistemas de detección para cada biomarcador
funcionan de manera similar, el único ajuste necesario fue la corrección en función de sus
tamaños. La detección simultánea de estos miRNAs funcionó correctamente, obteniendo un
LLoQ de 1,2 pM para el miR – 200a – 3p y un LloQ de 2,1 pM para el miR – 486 – 5p. Por lo
tanto, esta tecnología permite detectar simultáneamente dos miRNAs relacionados con la
enfermedad de Alzheimer de manera exitosa, constituyendo una herramienta diagnóstica con
gran potencial para la enfermedad de Alzheimer, facilitando su identificación y la
monitorización de su progresión.
Por otro lado, en el caso de un ensayo de detección combinada de un miRNA y un
biomarcador proteico, los sistemas de detección para cada biomarcador no funcionan de
manera similar. Por ello, se realizó un estudio cinético de cada biomarcador, en el que se
observó que el sistema de IL – 6 funcionaba de forma más eficiente que el sistema del miR –
122 – 5p. Estos resultados sugirieron que lo óptimo era emplear el sistema con una cinética
más lenta, el del miR – 122 – 5p, con las GNPs que llegan primero a la superficie, es decir,
con las de 150 nm; y, por lo tanto, se deben emplear las GNPs de 100 nm con el sistema con
una cinética más rápida, el de IL – 6. Sin embargo, al estudiar el comportamiento de las GNPs
de ambos tamaños con los dos sistemas, se observó que las GNPs con el anticuerpo de
detección de IL – 6 tienen una mayor tendencia a agregarse que cuando tienen la DGL del
miR – 122 – 5p. Los agregados de las GNPs de 100 nm tienen un brillo y un color similar a
las GNPs de 150 nm, y, por lo tanto, si se emplea el anticuerpo de detección de IL – 6 con las
118

GNPs de 100 nm, sus agregados pueden interferir con las GNPs de 150 nm con la DGL del
miR – 122 – 5p. Por ello, se cambió el sistema seleccionado previamente para cada tamaño de
GNPs, es decir, se pasó a emplear GNPs de 100 nm con la DGL del miR – 122 – 5p y GNPs
de 150 nm con el anticuerpo de detección de IL – 6. De esta forma, se consiguió evitar un
efecto interferente de los agregados de las GNPs. La detección combinada de ambos
biomarcadores funcionó correctamente, sin perder mucha sensibilidad respecto a la detección
en monoplex, lo que hace pensar que no se produce una gran cantidad de interferencias
cruzadas entre ambos sistemas (figura 60 de los Resultados). Al pasar a muestras de suero de
pacientes, se consiguió que la detección combinada de IL – 6 y miR – 122 – 5p funcionase
analizando la muestra de forma separada para cada biomarcador con sus condiciones óptimas.
De esta forma, se eliminaron las interferencias observadas con el buffer de lisis, la PK y el
DTT, con el sistema de detección de IL – 6 (figura 62 de los Resultados). La hipótesis que se
planteó es que la enzima PK podría digerir el biomarcador proteico y su anticuerpo de
detección presente en la superficie de GNPs. Sin embargo, se observó que la enzima PK no es
el único problema del sistema de miRNAs, ya que el buffer de lisis y el DTT también parecen
interferir con la detección del biomarcador proteico (figura 61 de los Resultados). El buffer de
lisis podría estar liberando lípidos y proteínas que interfieren con la interacción de IL – 6 con
su anticuerpo de detección al romper los exosomas. El DTT, al ser un agente reductor, podría
romper los enlaces de disulfuro de estas proteínas, alterando su estructura y, por lo tanto,
dificultando su detección, ya que se ha reportado en diferentes estudios que el DTT se emplea
con esta finalidad (Duong-Ly et al., 2014; Mitra et al., 2023). Al eliminar estas interferencias
con el sistema de detección de IL – 6, se logró detectar de forma exitosa IL – 6 y miR – 122 –
5p simultáneamente, obteniendo un LLoQ de 0,19 pg/ml y 0,701 pM respectivamente (figura
62 de los Resultados). Este logro representa un avance significativo, proporcionando una
herramienta poderosa para mejorar la precisión y rapidez del diagnóstico de DILI, ya que el
miR – 122 – 5p ha demostrado ser un indicador fiable de DILI (Howell et al., 2018; Sanjay y
Girish, 2017), e IL – 6 ha demostrado estar relacionado con la sobredosis de paracetamol, ya
que el proceso inflamatorio juega un papel fundamental en la respuesta hepática (Sherlock et
al., 2022). La evaluación conjunta de ambos biomarcadores aporta una perspectiva
complementaria, ya que el miR – 122 – 5p proporciona una señal directa y específica del daño
hepática, e IL – 6 refleja la magnitud de la respuesta inflamatoria asociada al daño.
Por lo tanto, se ha logrado diseñar una tecnología que permite la detección simultánea de
múltiples miRNAs, o miRNAs y proteínas, de manera fiable y reproducible en un solo
119

dispositivo. En este caso, se detectan diferentes miRNAs mediante una metodología más
sencilla que la RT – qPCR, donde el diseño de cebadores para la detección de ácidos
nucleicos tan pequeños supone una gran dificultad (Chen et al., 2005). Por otro lado, el
método más utilizado para la detección de miRNAs es la RT – qPCR (Chen et al., 2005; Ho et
al., 2022) y para la detección de proteínas es la tecnología ELISA (Flamini et al., 1999;
Sansonno et al., 1997; Ideker et al., 2001). Estas tecnologías tienen mecanismos de detección
y propiedades diferentes, por lo que el desarrollo de una tecnología que permita la detección
simultánea de ambos biomarcadores de diferente naturaleza representa un avance significativo
en el campo de diagnóstico.
En resumen, esta tesis doctoral presenta el desarrollo y la optimización de una tecnología
innovadora para la detección de miRNAs, basada en la integración de la química dinámica de
Destina Genómica y la tecnología plasmónica de Mecwins. Esta tecnología representa un
avance significativo en la detección de miRNAs para el diagnóstico y pronóstico de
enfermedades, ya que permite la detección directa en biopsias líquidas sin necesidad de
extracción de RNA. Esto se traduce en una mayor reproducibilidad, simplicidad y rapidez en
la detección de miRNAs, sin pérdida de material durante la extracción de RNA.
Adicionalmente, esta tecnología es robusta, sensible y específica, y permite la detección
simultánea tanto de múltiples miRNAs como de miRNAs y biomarcadores proteicos,
proporcionando información complementaria para un diagnóstico y pronóstico más preciso.
120

7. CONCLUSIONES EN ESPAÑOL
1. La integración de la química dinámica de Destina Genómica y la tecnología plasmónica de
Mecwins ha culminado en el desarrollo de una tecnología de detección de miRNAs de alta
precisión. La meticulosa secuencia de experimentos, que incluyó los modelos de
estreptavidina – biotina, captura e hibridación, permitió la optimización de las condiciones
clave, resultando en una herramienta avanzada y robusta para la detección de miRNAs en
muestras complejas.
2. La combinación de la química dinámica y la tecnología plasmónica presentó desafíos
significativos debido a interferencias de componentes como la nucleobase y el agente
reductor. La identificación y resolución de estas interferencias ha sido crucial para lograr una
detección precisa y fiable. El control y la optimización de estos parámetros han mejorado la
especificidad y eficacia del sistema, consolidando la integración exitosa de ambas tecnologías
y alcanzando una buena sensibilidad con un límite de detección de 143 fM, un límite de
cuantificación de 221 fM y un rango dinámico de 4,1.
3. La accesibilidad tanto de las bases de la sonda como de la etiqueta de la nucleobase ha
demostrado ser un factor crítico para el funcionamiento de la plataforma. La eficiencia de la
detección de miRNAs depende tanto del protocolo de inmovilización de la sonda en las
nanopartículas de oro como de la elección de la etiqueta y su método de unión a la
nucleobase, requiriendo una optimización cuidadosa. La estrategia óptima para inmovilizar la
sonda en las nanopartículas de oro es la unión carboxilo – amino, y para unir la nucleobase a
la superficie de silicio es la unión anti-FITC – FITC.
4. La optimización de los componentes para la dilución de muestras de suero de pacientes ha
sido fundamental para el desarrollo de una plataforma diagnóstica efectiva. El ajuste preciso
de reactivos y condiciones experimentales ha maximizado la estabilidad de los miRNAs y
minimizado las interacciones no deseadas, mejorando la calidad de los resultados y
alcanzando un límite de detección de 167 fM, un límite de cuantificación de 596 fM y un
121

rango dinámico de 3,7. Esta adaptación asegura la detección precisa de miRNAs en
concentraciones clínicamente relevantes y amplía la aplicabilidad de la plataforma en diversos
contextos diagnósticos.
5. La detección y recuperación exitosa de miRNAs en muestras de suero, con porcentajes de
recuperación de entre 80 – 120%, valida la viabilidad de la tecnología para el análisis de
muestras reales de pacientes y subraya su potencial para aplicaciones diagnósticas directas,
eliminando la necesidad de pasos de extracción de RNA y simplificando el flujo de trabajo.
6. La adaptación de la plataforma para la detección simultánea de miRNAs y proteínas
representa un avance significativo. Se ha demostrado que el tamaño de las nanopartículas de
oro influye en su unión a la superficie y en la competencia por el espacio, siendo un
parámetro clave para el diseño de sistemas de multiplexado. Esto abre nuevas vías para la
detección combinada de biomarcadores relevantes, mejorando la precisión diagnóstica en
enfermedades complejas. Se ha conseguido detectar de forma simultánea el miR – 200a – 3p
y el miR – 486 – 5p, lo que puede mejorar el diagnóstico de la enfermedad de Alzheimer, y el
miR – 122 – 5p e IL – 6, lo que puede mejorar el diagnóstico de la lesión hepática inducida
por fármacos.
122

8. CONCLUSIONES EN INGLÉS
1. The integration of Destina Genómica's dynamic chemistry and Mecwins' plasmonic
technology has culminated in the development of a high-precision miRNA detection
technology. The meticulous sequence of experiments, which included streptavidin – biotin,
capture, and hybridization models, enabled the optimization of key conditions, resulting in
an advanced and robust tool for miRNA detection in complex samples.
2. The combination of dynamic chemistry and plasmonic technology presented significant
challenges due to interferences from components such as the nucleobase and the reducing
agent. The identification and resolution of these interferences have been crucial for
achieving accurate and reliable detection. The control and optimization of these parameters
have improved the specificity and effectiveness of the system, consolidated the successful
integration of both technologies and achieved good sensitivity with a limit of detection of
143 fM, a limit of quantification of 221 fM, and a dynamic range of 4.1.
3. The accessibility of both the probe bases and the nucleobase label has proven to be a
critical factor for the platform's operation. The efficiency of miRNA detection depends on
both the probe immobilization protocol on the gold nanoparticles and the choice of the
label and its binding method to the nucleobase, requiring careful optimization. The optimal
strategy for immobilizing the probe on the gold nanoparticles is carboxyl – amine binding,
and for binding the nucleobase to the silicon surface is anti – FITC – FITC binding.
4. The optimization of components for the dilution of patient serum samples has been
fundamental for the development of an effective diagnostic platform. The precise
adjustment of reagents and experimental conditions has maximized the stability of
miRNAs and minimized unwanted interactions, improving the quality of the results and
123

achieving a limit of detection of 167 fM, a limit of quantification of 596 fM, and a
dynamic range of 3.7. This adaptation ensures the accurate detection of miRNAs at
clinically relevant concentrations and expands the applicability of the platform in various
diagnostic contexts.
5. The successful detection and recovery of miRNAs in serum samples, with recovery
percentages between 80 – 120%, validates the viability of the technology for the analysis
of real patient samples and underscores its potential for direct diagnostic applications,
eliminating the need for RNA extraction steps and simplifying the workflow.
6. The adaptation of the platform for the simultaneous detection of miRNAs and proteins
represents a significant advancement. The size of the gold nanoparticles has been shown to
influence their binding to the surface and the competition for space, being a key parameter
for the design of multiplexing systems. This opens new avenues for the combined detection
of relevant biomarkers, improving diagnostic accuracy in complex diseases. Simultaneous
detection of miR – 200a – 3p and miR – 486 – 5p has been achieved, which can improve
the diagnosis of Alzheimer's disease, and miR – 122 – 5p and IL – 6, which can improve
the diagnosis of drug-induced liver injury.
124

9. BIBLIOGRAFÍA
Aido A, Zaitseva O, Wajant H, Buzgo M, Simaite A (2021). Anti-Fn14 Antibody-Conjugated
Nanoparticles Display Membrane TWEAK-Like Agonism. Pharmaceutics 13(7):1072.
Amina SJ, Guo B (2020). A Review on the Synthesis and Functionalization of Gold
Nanoparticles as a Drug Delivery Vehicle. Int J Nanomedicine 15:9823-9857.
Anderson S, Anderson HL, Sanders JKM (1993). Expanding roles for template synthesis. Acc
Chem Res 26:469.
Andrade RJ, Chalasani N, Björnsson ES, Suzuki A, Kullak-Ublick GA, Watkins PB,
Devarbhavi H, Merz M, Lucena MI, Kaplowitz N, Aithal GP (2019). Drug-induced liver
injury. Nat Rev Dis Primers 5(1):58.
Androvic P, Valihrach L, Elling J, Sjoback R, Kubista M (2017). Two-tailed RT-qPCR: a
novel method for highly accurate miRNA quantification. Nucleic Acids Res 45(15).
Arellano-Garcia MT, Hu S, Wang J, et al. (2008). Multiplexed immunobead-based assay for
detection of oral cancer protein biomarkers in saliva. Oral Dis 14:705–712.
Aronson JK, & Ferner RE (2017). Biomarkers – A general review. Curr Protoc Pharmacol
76: 9.23.1-9.23.17.
Arroyo JD, et al. (2011). Argonaute2 complexes carry a population of circulating microRNAs
independent of vesicles in human plasma. Proc Natl Acad Sci USA 108:5003-5008.
Bartel, DP (2004). MicroRNA: genomics, biogenesis, mechanism, and function. Cell
116:281–297.
Bateman RJ, et al. (2012). Clinical and biomarker changes in dominantly inherited
Alzheimer’s disease. N Engl J Med 367(9):795-804.
125

Benes V, Castoldi M (2010). Expression profiling of microRNA using real-time quantitative
PCR, how to use it and what is available. Methods 50(4):244–249.
Benkoe TM, Mechtler TP, Pones M, Prusa AR, Klebermass-Schrehof K, Rebhandl W, Kasper
DC (2015). The plasma activities of lysosomal enzymes in infants with necrotizing
enterocolitis: new promising class of biomarkers? Clin Chim Acta 438:279-283.
Berezikov E, Chung WJ, Willis J, Cuppen E, Lai EC (2007). Mammalian mirtron genes. Mol
Cell 28:328-336.
Bowler FR, Diaz-Mochon JJ, Swift MD, Bradley M (2010). DNA analysis by dynamic
chemistry. Angew Chem Int Ed Engl 49:1809-1812.
Brennecke J, et al. (2005). Principles of microRNA-target recognition. PLoS Biol 3:e85.
Calin GA, et al. (2002). Frequent deletions and down-regulation of micro-RNA genes miR15
and miR16 at 13q14 in chronic lymphocytic leukemia. Proc Natl Acad Sci USA
99:15524–15529.
Calvo R, Thon A, Saad A, Salvador – Matar A, Manso – Silván, Ahumada Ó, Pini V (2022).
Size characterization of plasmonic nanoparticles with dark – field single particle
spectrophotometry. Sci Rep 12(1):17231.
Campomenosi P, Gini E, Noonan DG, Poli A, D’Antona P, Rotolo N, Dominioni L,
Imperatori A (2016). A comparison between quantiative PCR and droplet digital PCR
technologies for circulating microRNA quantification in human lung cancer. BMC Biotechnol
16:60.
Carnerero JM, Jimenez-Ruiz A, Castillo PM, Prado-Gotor R (2017). Covalent and Non-
Covalent DNA-Gold-Nanoparticle Interactions: New Avenues of Research. Chemphyschem
18(1):17-33.
Cebrián V, Pini V, Thon A, Marina – García N, Salvador – Mátar A, Rodríguez C, Ahumada
Ó (2025). Introducing AVAC as an ultra – sensitive platform with broad dynamical range for
high – throughput multiplexed biomarker detection using digital counting of plasmonic
nanoparticles. Sci Rep 15(1):5390.
Chen C, et al. (2005). Real – time quantification of microRNAs by stem – loop RT – PCR.
Nucleic Acids Res 33(20):e179.
126

Chen JJ, et al. (2008). Characterization of microRNAs inserum: a novel class of biomarkers
for diagnosis of cancer and other diseases. Cell Res 18(10):997–1006.
Chen M, Suzuki A, Borlak J, Andrade RJ, Lucena MI (2015). Drug-induced liver injury:
Interactions between drug properties and host factors. J Hepatol 63(2):503-14.
Corbett PT, Leclaire J, Vial L, West KR, Wietor JL, Sanders JKM, Otto S (2006). Dynamic
Combinatorial Chemistry. Chem Rev 106:3652-3711.
Dehghani R., Rahmani F., Rezaei N (2018). MicroRNA in Alzheimer’s disease revisited:
implications for major neurophathological mechanisms. Rev Neurosci 29(2):161-182
Denli AM, Tops BB, Plasterk RH, Ketting RF, Hannon GJ (2004). Processing of primary
microRNAs by the microprocessor complex. Nature 432:231-235.
Diamandis EP (2004). Mass spectrometry as a diagnostic and a cancer biomarker discovery
tool. Mol Cell Proteomics 3:367–378.
DiScipio RG (1996). Preparation of colloidal gold particles of various sizes using sodium
borohydride and sodium cyanoborohydride. Anal Biochem. 236(1):168-70.
Doench JG, Sharp PA (2004). Specificity of microRNA target selection in translational
repression. Genes Dev 18:504-511.
Donnelly MC, Davidson JS, Martin K, Baird A, Hayes PC, Simpson KJ (2017). Acute liver
failure in Scotland: changes in aetiology and outcomes over time (the Scottish Look-Back
Study). Aliment Pharmacol Ther 45(6):833-843.
Dubois B, et al. (2007). Research criteria for the diagnosis of Alzheimer’s disease: revising
the NINCDS-ADRDA criteria. Lancet Neurol 6(8):734-746.
Duong-Ly KC, Gabelli SB (2014). Gel filtration chromatography (size exclusion
chromatography) of proteins. Methods Enzymol 541:105-14.
Dykman L, Khlebtsov N (2012). Gold nanoparticles in biomedical applications: recent
advances and perspectives. Chem Soc Rev 41(6):2256–2282.
Esteller M (2011). Non-coding RNA in human disease. Nat Rev Genet 12:861–874.
Flamini E, Mercatali L, Nanni O, Calistri D, Nunziatini R, Zoli W, Rosetti P, Gardini N,
Lattuneddu A, Verdecchia GM, Amadori D (2006). Free DNA and carcinoembryonic antigen
127

serum levels: an important combination for diagnosis of colorectal cancer. Clin Cancer Res
12(23):6985-6988.
Friedman JM, Jones PA (2009). MicroRNAs: critical mediators of differentiation,
development and disease. Swiss Med Wkly 139(33-34):466-472.
Fu S, Wu D, Jiang W, Li J, Long J, Jia C, Zhout T (2020). Molecular biomarkers in drug –
induced liver injury: challenges and future perspectives. Front Pharmacol 10:1667.
Gebert LFR, MacRae IJ (2019). Regulation of microRNA function in animals. Nat Rev Mol
Cell Biol 20(1):21–37.
Glushakova LG, et al. (2015). High-throughput multiplexed xMAP Luminex array panel for
detection of twenty-two medically important mosquito-borne arboviruses based on
innovations in synthetic biology. J Virol Methods 214:60-74.
Godoy PM, et al. (2018). Large differences in small RNA composition between human
biofluids. Cell Rep 25(5):1346–1358.
Godoy PM, et al. (2019). Comparison of miRNA Profiling Methods Using Synthetic miRNA
Pools and Standardized exRNA Samples Reveals Substantial Performance Differences.
bioRxiv, pp. 645762.
Grove JI, Stephens C, et al. (2023) Study design for development of novel safety biomarkers
of drug-induced liver injury by the translational safety biomarker pipeline (TransBioLine)
consortium: a study protocol for a nested case-control study. Diagn Progn Res 7(1):18.
Gunnell D, Murray V, Hawton K. Use of paracetamol (acetaminophen) for suicide and
nonfatal poisoning: worldwide patterns of use and misuse (2000). Suicide Life Threat Behav
30(4):313-26.
Ha M, Kim VN (2014). Regulation of microRNA biogenesis. Nat Rev Mole Cell Biol
15(8):483-495.
Hayes J, Peruzzi PP, Lawler S. (2014). MicroRNAs in cancer: biomarkers, functions and
therapy. Trends Mol Med 20(8):460–469.
Haw MD 2002. Colloidal suspensions, Brownian motion, molecular reality: a short history. J
Phys: Condens Matter 14:7769.
128

Hazarika P, Giorgi T, Reibner M, Ceyhan B, Niemeyer CM (2024). Synthesis and
characterization of deoxyribonucleic acid-conjugated gold nanoparticles. Methods Mol Biol
283:295-304.
He L, Hannon GJ (2004). MicroARN: small RNA with a big role in gene regulation. Nat Rev
Genet 5 (7):522–531.
He Y, Lin J, Kong D, et al. (2015) Current state of circulating microRNAs as cancer
biomarkers. Clin Chem 61(9):1138–1155.
Herskovits AZ, Guarente L (2014). SIRT1 in neurodevelopment and brain senescence.
Neuron 5:471-483.
Ho PTB, Clark IM, Le LTT (2022). MicroRNA – based diagnosis and therapy. Int J Mol Sci
23(13):7167.
Howell LS, Ireland L, Park BK, Goldring CE (2018). MiR-122 and other microRNAs as
potential circulating biomarkers of drug-induced liver injury. Expert Rev Mol Diagn 18(1):47-
54.
Humpel C (2011). Cerebrospinal fluid and blood biomarkers in Alzheimer’s disease. World J
Psychiatry 1:8-18.
Ideker T, Thorsson V, Ranish JA, Christmas R, Buhler J, Eng JK, Bumgarner R, Goodlett DR,
Aebersold R, Hood L (2001). Integrated genomic and proteomic analyses of a systematically
perturbed metabolic network. Science 292(5518):929-934.
Izzotti A, et al. (2016). Extracellular MicroRNA in liquid biopsy: applicability in cancer
diagnosis and prevention. Am J Cancer Res 6(7):1461–1493.
Jee D, Lai EC (2014). Alteration of miRNA activity via context-specific modifications of
Argonaute proteins. Trends Cell Biol 24:546-553.
Jeon J, Shim HE, Mushtaq S, Choi MH, Park SH, Choi DS, Jang BS (2016). An Optimized
Protocol for the Efficient Radiolabeling of Gold Nanoparticles by Using a 125I-labeled Azide
Prosthetic Group. J Vis Exp (116):54759.
Khan S, Barve KH, Kumar MS (2020). Recent Advancements in Pathogenesis, Diagnostics
and Treatment of Alzheimer's Disease. Curr Neuropharmacol 18(11):1106-1125.
129

Khoury S, Tran N (2015). Circulating microRNAs: potential biomarkers for common
malignancies. Biomarkers Med 9(2):131–151.
Kilic T, Kaplan M, Demiroglu S, Erdem A., Ozsoz M (2016). Label-free electrochemical
detection of microRNA-122 in real samples by graphene modified disposable electrodes. J
Electrochem Soc 163:B227-B233.
Klyucherev TO, et al. (2022). Advances in the development of new biomarkers for
Alzheimer’s disease. Transl Neurodegener. 11(1):25.
Kogure T, Lin WL, Yan IK, Braconi C, Patel T (2011). Intercellular nanovesicle-mediated
microRNA transfer: A mechanism of environmental modulation of hepatocellular cancer cell
growth. Hepatology 54:1237-1248.
Kozak KR, Su F, Whitelegge JP, Faull K, Reddy S, Farias-Eisner R (2005). Characterization
of serum biomarkers for detection of early stage ovarian cancer. Proteomics 5:4589–4596.
Kozomara A, Birgaoanu M, Griffiths-Jones S (2019). miRBase: from microRNA sequences to
function. Nucleic Acids Res 47:155–162.
Kramer MF (2011). Stem – loop RT – qPCR for miRNAs. Curr Protoc Mol Biol 95:15.10.1-
15.10.15.
Kumar A, Singh A, Ekavali (2015). A review on Alzheimer’s disease pathophysiology and its
management: an update. Pharmacol Rep 67(2):195-203.
Kumar S, Reddy PH (2016). Are circulating microRNAs peripheral biomarkers for
Alzheimer’s disease? Biochim Biophys Acta 1862(9):1617-1627.
Lai ED (2002). microRNAs are complementary to 3’ UTR sequence motifs that mediate
negative post-transcriptional regulation. Nat Genet 30:363-364.
Laneve P, Giangrande A (2014). Enhanced Northern blot detection of small RNA species in
Drosophila melanogaster. J Vis Exp JoVE 90:e51814.
Larrea E, et al. (2016). New concepts in cancer biomarkers: circulating miRNAs in liquid
biopsies. Int J Mol Sci 17(5).
Lau P, Bossers K, Janky Rs, et al. (2013). Alteration of the microRNA network during the
progression of Alzheimer’s disease. EMBO Mol Med 5:1613-1634.
130

Lawrie CH, et al. (2008). Detection of elevated levels of tumour-associated microRNAs in
serum of patients with diffuse large B-cell lymphoma. Br J Haematol 141(5):672–675.
Lee RC, et al. (1993). The C. elegans heterochronic gene lin-4 encodes small RNA with
antisense complementarity to lin-14. Cell Dec 75(5):843-854.
Lee Y, Kim M, Han J, Yeom KH, Lee S, Bae SH, Kim VN (2004). MicroRNA genes are
transcribed by RNA polymerase II. EMBO J 23:4051-4060.
Li J, Peng Y, Liu Y, Li W, Jin Y, Tang Z, Duan Y (2014). Investigation of potential breath
biomarkers for the early diagnosis of breast cancer using gas chromatography-mass
spectrometry. Clin Chim Acta 436:59-67.
Li J, Zhu B, Zhu Z, Zhang Y, Yao X, Tu S, Liu R, Jia S, Yang CJ (2015). Simple and Rapid
Functionalization of Gold Nanorods with Oligonucleotides Using an mPEG-SH/Tween 20-
Assisted Approach. Langmuir 31(28):7869-76.
Liang Y, Ridzon D, Wong L, Chen C (2007). Characterization of microRNA expression
profiles in normal human tissues. BMC Genomics 8:166.
Lin SL, Chang D, DY W, Ying SY (2003). A novel RNA splicing – mediated gene silencing
mechanism potential for genome evolution. Biochem Biophys Res Commun 310:754-60.
Liu J (2012). Adsorption of DNA onto gold nanoparticles and graphene oxide: surface science
and applications. Phys Chem Chem Phys 14(30):10485-96.
Magalingam KB, Radhakrishnan A, Ping NS, Haleagrahara N (2018). Current concepts of
neurodegenerative mechanisms in Alzheimer’s disease. Biome Res Int 2018:3740461.
Makarov DV, Loeb S, Getzenberg RH, Partin AW (2009). Biomarkers for prostate cancer.
Ann Rev Med 60:139–151.
Mayer KM, Hafner JH (2011). Localized surface plasmon resonance sensors. Chem Rev
111(6):3828-3857.
Meijer HA, Smith EM, Bushell M (2014). Regulation of miRNA strand selection: follow the
leader? Biochem Soc Trans 42:1135-1140.
Meister G (2013). Argonaute proteins: functional insights and emerging roles. Nat Rev Genet
14:447-459.
131

Mitchell PS, et al. (2008). Circulating microRNAs as stable blood-based markers for cancer
detection. Proc Natl Acad Sci USA 105(30):10513–10518.
Mitra A, Mitra A, Sarkar N (2023). Differential effects of DTT on HEWL amyloid fibrillation
and fibril morphology at different pH. Biophys Chem. 294:106962.
Moreno – Torres M, Quintás G, Castell JV (2022). The potential role of metabolomics in drug
– induced liver injury (DILI) assessment. Metabolites 12(6):564.
Morello M, Minciacchi V, De Candia P, Yang J, Posadas E, Kim H. Griffiths D, Bhowmick N,
Chung L, Gandellini P (2013). Large oncosomes mediate itercellular transfer of functional
microRNA. Cell Cycle 12:3526-2526.
Mossello E, Ballini E (2012). Management of patients with Alzheimer’s disease:
pharmacological treatment and quality of life. Ther Adv Chronic Dis 3(4):183-193.
Nagaraj S, Laskowska-Kaszub K, Dębski KJ, et al. (2017). Profile of 6 microRNA in
blood plasma distinguish early stage Alzheimer’s disease patients from non-demented
subjects. Oncotarget 8:16122-16143.
Nam JM, Thaxton CS, Mirkin CA (2003). Nanoparticle-based bio-barcodes for the
ultrasensitive detection of proteins. Science 301:1884–1886.
Olson J, Dominguez-Medina S, Hoggard A, Wang LY, Chang WS, Link S (2015). Optical
characterization of single plasmonic nanoparticles. Chem Soc Rev 44(1):40-57.
Peña – Bautista C, et al. (2022). Plasma microRNAs as potential biomarkers in early
Alzheimer disease expression. Sci Rep 12(1):15589.
Pritchard CC, Cheng HH, Tewari M (2012). MicroRNA profiling: approaches and
considerations. Nat Rev Genet 13(5):358–369.
Raymond CK, Roberts BS, Garrett-Engele P, Lim LP, Johnson JM (2005). Simple,
quantitative primer-extension PCR assay for direct monitoring of microRNAs and short-
interfering RNAs. RNA 11(11):1737–1744.
Reinhart BJ, et al. (2000). The 21nucleotide let7 RNA regulates developmental timing in
Caenorhabditis elegans. Nature 403:901–906.
Reitz C, Brayne C, Mayeux R (2011). Epidemiology of Alzheimer disease. Nat Rev Neurol
7(3):137-52.
132

Reuben A, et al. (2016). Outcomes in Adults With Acute Liver Failure Between 1998 and
2013: An Observational Cohort Study. Ann Intern Med 164(11):724-32.
Rissin DM, et al. (2017). Polymerase-free measurement of microRNA-122 with single base
specificity using single molecule arrays: Detection of drug-induced liver injury. PLoS One
12(7):e0179669.
Rupaimoole R, Slack FJ (2017). MicroRNA therapeutics: towards a new era for the
management of cancer and other diseases. Nat. Rev. Drug Discov 16(3):203–222.
Saalberg Y, Wolff M (2016). VOC breath biomarkers in lung cancer. Clin Chim Acta 459:5-9.
Saeedi S, Israel S, Nagy C, Turecki G (2019). The emerging role of exosomes in mental
disorders. Transl Psychiatry 9(1):122.
Saha K, Agasti SS, Kim C, Li X, Rotello VM (2012). Gold nanoparticles in chemical and
biological sensing. Chem Rev 112:2739–2779.
Sanjay S. Girish C (2017). Role of miRNA and its potential as a novel diagnostic biomarker
in drug-induced liver injury. Eur J Clin Pharmacol 73(4):399-407.
Sansonno D, Cornacchiulo V, Racanelli V, Dammacco F (1997). In situ simultaneous
detection of hepatitis C virus RNA and hepatitis C virus-related antigens in hepatocellular
carcinoma. Cancer 80(1):22-33.
Schipper HM, Maes OC, Chertkow HM., Wang E (2007). MicroRNA expression in
Alzheimer blood mononuclear cells. Gene Regul Syst Bio 1:263-274.
Sen A, Nielsen PE (2009). Hydrogen bonding versus stacking stabilitization by modified
nucleobases incorporated in PNA.DNA duplexes. Biophys Chem 141:29 – 33.
Sherlock LG, et al. (2022). APAP-Induced IκBβ/NFκB Signaling Drives Hepatic Il6
Expression and Associated Sinusoidal Dilation. Toxicol Sci 185(2):158-169.
Sims R, Hill M, Williams J (2020). The multiplex model of the genetics of Alzheimer's
disease. Nat Neurosci 23(3):311-322.
Strimbu K, Tavel JA (2010). What are biomarkers? Curr Opin HIV AIDS 5(6):463-466.
Su M (2013). Multiplexed detection of molecular biomarkers with phase-change
nanoparticles. Nanomedicine (Lond) 8(2):253-263.
133

Tiberio P, Callari M, Angeloni V, Daidone MG, Appierto V (2015). Challenges in using
circulating miRNAs as cancer biomarkers. BioMed Res Int 2015:731479.
Théry C, Zitvogel L, Amigorena S (2002). Exosomes: composition, biogenesis and function.
Nat Rev Immunol 2: 569-579.
Théry C (2011). Exosomes: secreted vesicles and intercellular communications. F1000 Biol
Rep 3:15.
Tsai DH, Shelton MP, DelRio FW, Elzey S, Guha S, Zachariah MR, Hackley VA (2012).
Quantifying dithiothreitol displacement of functional ligands from gold nanoparticles. Anal
Bioanal Chem. 404(10):3015-23.
Unterlander N, Doucette AA (2018). Accelerated SDS depletion from proteins by
transmembrane electrophoresis: Impacts of Joule heating. Electrophoresis 39(11):1349-1356.
Valadi H, Ekström K, Bossios A, Sjöstrand M, Lee JJ, Lötvall JO (2007). Exosome-mediated
transfer of mRNAs and microRNAs is a novel mechanism of genetic exchange between cells.
Nat Cell Biol 9:654-659.
Valihrach L, et al. (2020). Circulating miRNA analysis for cancer diagnostics and therapy.
Mol Aspects Med 72:100825.
Venkateswaran S, et al. (2016). Novel bead-based platform for direct detection of unlabelled
nucleic acids through Single Nucleobase Labelling. Talanta 161:489-496.
Vester B, Wengel J (2004). LNA (locked nucleic acid): high-affinity targeting of
complementary RNA and DNA. Biochemistry 43(42):13233–13241.
Vickers KC, Palmisano BT, Shoucri BM, Shamburek RD, Remaley AT (2011). MicroRNAs
are transported in plasma and delivered to recipient cells by high-density lipoproteins. Nat
Cell Biol 13:423-433.
Vliegenthart ADB, Berends C, Potter CMJ, Kersaudy-Kerhoas M, Dear JW (2017).
MicroRNA-122 can be measured in capillary blood which facilitates point-of-care testing for
drug-induced liver injury. Br J Clin Pharmacol 83(9):2027-2033.
Vogenberg FR, Isaacson Barash C, Pursel M (2010). Personalized medicine: part 1: evolution
and development into theranostics. P T 35(10):560-576.
134

Wang T, Viennois E, Merlin D, Wang G (2015). Microelectrode miRNA sensors enabled by
enzymeless electrochemical signal amplification. Ana Chem 87:8173-8180.
Wang M, Yu G, Ressom HW (2016). Integrative Analysis of Proteomic, Glycomic, and
Metabolomic Data for Biomarker Discovery. IEEE J Biomed Health Inform 20(5):1225-1231.
Weber JA, et al. (2010). The microRNA spectrum in 12 body fluids. Clin Chem
56(11):1733–1741.
Wei F, Patel P, Liao W, Chaudhry K, et al. (2009). Electrochemical sensor for multiplex
biomarkers detection. Clin Cancer Res 15:4446–4452.
Weickmann J, Glitz D (1982). Human ribonucleases. Quantitation of pancreatic – like
enzymes in serum, urine, and organ preparations (1982). J Biol Chem 257:8705-8710.
World Health Organization (2024). Ageing and health. https://www.who.int/news-room/fact-
sheets/detail/ageing-and-health
Wu Y, Li Q, Zhang R, Dai X, Chen W, Xing D (2021). Circulating microRNAs: Biomarkers
of disease. Clin Chim Acta 516:46-54.
Xie X, Xu W, Liu X (2012). Improving colorimetric assays through protein enzyme-assisted
gold nanoparticle amplification. Acc Chem Res 45:1511–1520.
Yang Z, Wu W, Ou P, Wu M, Zeng F, Zhou B, Wu S (2021). MiR – 122 – 5p knockdown
protects against APAP – mediated liver injury through up – regulating NDRG3. Mol Cell
Biochem 476(2):1257-1267.
Yi R, Qin Y, Macara IG, Cullen BR (2003). Exportin – 5 mediates the nuclear export of pre –
microRNAs and short hairpin RNAs. Genes Dev 17:3011-3016.
Zbacnik TJ, Holcomb RE, Katayama DS, Murphy BM, Payne RW, Coccaro RC, Evans GJ,
Matsuura JE, Henry CS, Manning MC (2017). Role of Buffers in Protein Formulations. J
Pharm Sci 106(3):713-733.
135