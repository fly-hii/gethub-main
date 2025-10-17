
import type { ExamDetails } from '@/lib/types';

interface ExamCategory {
  category: string;
  exams: ExamDetails[];
}

export const examCategories: ExamCategory[] = [
  {
    category: 'Civil Services & Government Jobs',
    exams: [
            {
              examId: 'upsc-civil-services',
              examName: 'UPSC Civil Services Exam (IAS, IPS, IFS, etc.)',
              description: 'Central Civil Services of the Government of India.',
              stages: [
                {
                  stageId: 'prelims',
                  stageName: 'Preliminary Examination',
                  papers: [
                    {
                      paperId: 'GS-Paper-I',
                      paperName: 'General Studies Paper I',
                      type: 'Objective (MCQ)',
                      duration: '2 hours',
                      totalMarks: 200,
                      totalQuestions: 100,
                      negativeMarking: '1/3 per wrong answer',
                      topics: [
                        'Current events of national and international importance',
                        'History of India and Indian National Movement',
                        'Indian & World Geography',
                        'Indian Polity and Governance',
                        'Economic and Social Development',
                        'Environmental Ecology, Biodiversity & Climate Change',
                        'General Science',
                      ],
                    },
                    {
                      paperId: 'CSAT',
                      paperName: 'General Studies Paper II (CSAT)',
                      type: 'Objective (MCQ, Qualifying)',
                      duration: '2 hours',
                      totalMarks: 200,
                      totalQuestions: 80,
                      negativeMarking: '1/3 per wrong answer',
                      qualifyingMarks: '33%',
                      topics: [
                        'Comprehension',
                        'Interpersonal and communication skills',
                        'Logical reasoning & analytical ability',
                        'Decision making & problem solving',
                        'General mental ability',
                        'Basic numeracy and data interpretation (Class X level)',
                      ],
                    },
                  ],
                },
                {
                  stageId: 'mains',
                  stageName: 'Main Examination',
                  papers: [
                    {
                      paperId: 'A',
                      paperName: 'Paper A – Indian Language (Qualifying)',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 300,
                      qualifying: true,
                      notes: 'Marks not counted for ranking; minimum 25% required to qualify',
                    },
                    {
                      paperId: 'B',
                      paperName: 'Paper B – English (Qualifying)',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 300,
                      qualifying: true,
                      notes: 'Marks not counted for ranking; minimum 25% required to qualify',
                    },
                    {
                      paperId: 'Essay',
                      paperName: 'Essay',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                    },
                    {
                      paperId: 'GS-1',
                      paperName: 'General Studies-I',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                      topics: [
                        'Indian Heritage and Culture',
                        'History (Modern & World)',
                        'Society (Diversity, Poverty, Empowerment)',
                        'World & Indian Geography',
                      ],
                    },
                    {
                      paperId: 'GS-2',
                      paperName: 'General Studies-II',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                      topics: [
                        'Indian Constitution and Polity',
                        'Governance and Social Justice',
                        'International Relations',
                      ],
                    },
                    {
                      paperId: 'GS-3',
                      paperName: 'General Studies-III',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                      topics: [
                        'Indian Economy',
                        'Technology & Biodiversity',
                        'Environment & Disaster Management',
                        'Internal Security',
                      ],
                    },
                    {
                      paperId: 'GS-4',
                      paperName: 'General Studies-IV',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                      topics: [
                        'Ethics, Integrity & Aptitude',
                        'Emotional Intelligence',
                        'Probity in Governance',
                      ],
                    },
                    {
                      paperId: 'Optional-I',
                      paperName: 'Optional Subject – Paper I',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                    },
                    {
                      paperId: 'Optional-II',
                      paperName: 'Optional Subject – Paper II',
                      type: 'Descriptive',
                      duration: '3 hours',
                      totalMarks: 250,
                    },
                  ],
                  personalityTest: {
                    stageName: 'Personality Test / Interview',
                    totalMarks: 275,
                  },
                },
              ],
              totalMarks: 2025,
            },
            {
              examId: 'rrb-ntpc',
              examName: 'RRB NTPC',
              description: 'Railway Recruitment Board Non‑Technical Popular Categories recruitment.',
              stages: [
                {
                  stageId: 'cbt-1',
                  stageName: 'CBT Stage I (Preliminary Exam)',
                  papers: [
                    {
                      paperId: 'c­bt1',
                      paperName: 'CBT Stage I',
                      type: 'Objective (MCQ)',
                      duration: '90 minutes',
                      totalMarks: 100,
                      totalQuestions: 100,
                      negativeMarking: '1/3 per wrong answer',
                      topics: [
                        'General Awareness – 40 questions',
                        'Mathematics (Arithmetic Ability) – 30 questions',
                        'General Intelligence & Reasoning – 30 questions',
                      ],
                    },
                  ],
                },
                {
                  stageId: 'cbt-2',
                  stageName: 'CBT Stage II (Main Exam)',
                  papers: [
                    {
                      paperId: 'cbt2',
                      paperName: 'CBT Stage II',
                      type: 'Objective (MCQ)',
                      duration: '90 minutes',
                      totalMarks: 120,
                      totalQuestions: 120,
                      negativeMarking: '1/3 per wrong answer',
                      topics: [
                        'General Awareness – 50 questions',
                        'Mathematics – 35 questions',
                        'General Intelligence & Reasoning – 35 questions',
                      ],
                    },
                  ],
                },
                {
                  stageId: 'skill-test',
                  stageName: 'Skill Test / Typing / CBAT',
                  papers: [
                    {
                      paperId: 'typing-skill-test',
                      paperName: 'Typing Skill Test / Computer-Based Aptitude Test',
                      type: 'Skill Test',
                      notes: 'For applicable posts (e.g., Clerk, Typist)',
                    },
                  ],
                },
              ],
              totalStages: 3,
            }, 
    
            
            {
              examId: 'ibps-clerk',
              examName: 'IBPS Clerk (CRP‑CSA)',
              description: 'Institute of Banking Personnel Selection Clerical exam for Customer Service Associates.',
              stages: [
                {
                  stageId: 'prelims',
                  stageName: 'Preliminary Examination',
                  papers: [
                    {
                      paperId: 'prelims',
                      paperName: 'Prelims',
                      type: 'Objective (MCQ)',
                      duration: '60 minutes',
                      totalMarks: 100,
                      totalQuestions: 100,
                      negativeMarking: '0.25 per wrong answer',
                      sections: [
                        { sectionName: 'English Language', questions: 30, marks: 30, time: '20 minutes' },
                        { sectionName: 'Numerical Ability', questions: 35, marks: 35, time: '20 minutes' },
                        { sectionName: 'Reasoning Ability', questions: 35, marks: 35, time: '20 minutes' },
                      ],
                    },
                  ],
                },
                {
                  stageId: 'mains',
                  stageName: 'Main Examination',
                  papers: [
                    {
                      paperId: 'mains-objective',
                      paperName: 'Mains – Objective',
                      type: 'Objective (MCQ)',
                      duration: '160 minutes',
                      totalMarks: 200,
                      sections: [
                        { sectionName: 'Reasoning Ability & Computer Aptitude', questions: 50, marks: 60, time: '45 minutes' },
                        { sectionName: 'General/Financial Awareness', questions: 50, marks: 50, time: '35 minutes' },
                        { sectionName: 'General English', questions: 40, marks: 40, time: '35 minutes' },
                        { sectionName: 'Quantitative Aptitude', questions: 50, marks: 50, time: '45 minutes' },
                      ],
                      negativeMarking: '0.25 per wrong answer',
                    },
                    {
                      paperId: 'mains-descriptive',
                      paperName: 'Mains – Descriptive (if applicable)',
                      type: 'Descriptive (essay/letter)',
                      duration: '30 minutes',
                      totalMarks: 25,
                      notes: 'English only; timing and inclusion may vary',
                    },
                  ],
                },
                {
                  stageId: 'final',
                  stageName: 'Final Selection',
                  papers: [
                    {
                      paperId: 'final-scoring',
                      paperName: 'Final Merit – Mains only',
                      type: 'Evaluation',
                      notes: 'Final selection based only on Mains score; Prelims is qualifying.',
                    },
                  ],
                },
              ],
              totalStages: 3,
            },        
            { examId: 'sbi-po-clerk-so', examName: 'SBI PO / Clerk / SO', description: 'State Bank of India exams for various banking roles.', stages: [] },
            { examId: 'lic-aao-ado', examName: 'LIC AAO / ADO', description: 'Life Insurance Corporation exams for officer roles.', stages: [] },
            { examId: 'nabard-grade-a-b', examName: 'NABARD Grade A & B', description: 'National Bank for Agriculture and Rural Development officer exams.', stages: [] },
            { examId: 'rbi-grade-b-assistant', examName: 'RBI Grade B / Assistant', description: 'Reserve Bank of India exams for officer and assistant roles.', stages: [] },
            { examId: 'indian-coast-guard', examName: 'Indian Coast Guard Exam', description: 'Recruitment exam for the Indian Coast Guard.', stages: [] },
            { examId: 'nda', examName: 'NDA (National Defence Academy)', description: 'For admission to the Army, Navy, and Air Force wings of the NDA.', stages: [] },
            { examId: 'cds', examName: 'CDS (Combined Defence Services)', description: 'For recruitment into the Indian Military Academy, Officers Training Academy, etc.', stages: [] },
            { examId: 'afcat', examName: 'AFCAT (Air Force Common Admission Test)', description: 'For selection of officers in all branches of the Indian Air Force.', stages: [] },
            { examId: 'capf', examName: 'CAPF (Central Armed Police Forces)', description: 'Recruitment of Assistant Commandants in the Central Armed Police Forces.', stages: [] },
        ]
      },
       {
        category: 'Language & Communication',
        exams: [
          {
            examId: 'ielts',
            examName: 'IELTS (International English Language Testing System)',
            description: 'Measures English language proficiency for study, migration, and work.',
            stages: []
          },
        ]
      },
      {
        category: 'Engineering & Technical',
        exams: [
          {
  examId: 'jee-main-advanced',
  examName: 'JEE Main / JEE Advanced',
  description: 'For admission to undergraduate engineering programs in IITs, NITs, etc. The overall syllabus is based on the entire Class XI and XII curriculum (NCERT/CBSE level).',
  stages: [
    {
      stageId: 'jee-main',
      stageName: 'JEE Main (Paper 1 - B.E./B.Tech)',
      papers: [
        {
          paperId: 'main-paper-1',
          paperName: 'B.E./B.Tech Objective Exam',
          type: 'Objective (MCQ and Numerical Value)',
          duration: '3 hours',
          totalMarks: 300,
          sections: [
            {
              sectionName: 'Physics',
              topics: [
                'Physics and Measurement (Units, Dimensions, Errors)',
                'Kinematics (Motion in 1D and 2D)',
                'Laws of Motion (Newton’s Laws, Friction)',
                'Work, Energy, and Power (Conservation of Energy)',
                'Rotational Motion (Moment of Inertia, Torque, Angular Momentum)',
                'Gravitation (Kepler’s Laws, Acceleration due to Gravity)',
                'Properties of Solids and Liquids (Elasticity, Surface Tension, Fluid Dynamics)',
                'Thermodynamics (First and Second Law, Specific Heats)',
                'Kinetic Theory of Gases (K.T.G.)',
                'Oscillations and Waves (SHM, Doppler Effect, Transverse/Longitudinal waves)',
                'Electrostatics (Coulomb’s Law, Gauss’s Theorem, Capacitors)',
                'Current Electricity (Ohm’s Law, Kirchhoff’s Rules, Heating Effects)',
                'Magnetic Effects of Current and Magnetism (Biot-Savart Law, Permanent Magnets)',
                'Electromagnetic Induction (EMI) and Alternating Current (AC)',
                'Electromagnetic Waves (EM Waves)',
                'Optics (Ray Optics: Reflection, Refraction, Instruments; Wave Optics: Interference, Diffraction, Polarization)',
                'Modern Physics (Dual Nature of Matter, Atoms and Nuclei, Radioactivity)',
                'Electronic Devices (Semiconductors, Diodes, Transistors, Logic Gates)',
                'Communication Systems (Basics, Modulation/Demodulation)',
              ],
            },
            {
              sectionName: 'Chemistry',
              topics: [
                // Physical Chemistry
                'Stoichiometry and Mole Concept (Basic Concepts)',
                'States of Matter (Gaseous, Liquid, Solid State)',
                'Chemical Thermodynamics (Laws, Enthalpy, Entropy, Gibbs Energy)',
                'Equilibrium (Chemical and Ionic)',
                'Surface Chemistry (Adsorption, Colloids)',
                'Chemical Kinetics (Rate Laws, Order of Reactions)',
                'Solutions (Colligative Properties)',
                'Electrochemistry (Cells, Electrolysis, Conductance)',
                // Inorganic Chemistry
                'Atomic Structure and Chemical Bonding',
                'Periodic Classification of Elements (Periodic Trends)',
                'Hydrogen and S-Block Elements',
                'P-Block Elements (Groups 13 to 18)',
                'D and F Block Elements (Transition and Inner-Transition)',
                'Coordination Compounds and Environmental Chemistry',
                'Metallurgy (Principles and Processes)',
                // Organic Chemistry
                'Purification and Basic Principles of Organic Chemistry (Nomenclature, Isomerism)',
                'Hydrocarbons (Alkanes, Alkenes, Alkynes)',
                'Haloalkanes and Haloarenes',
                'Alcohols, Phenols, and Ethers',
                'Aldehydes, Ketones, and Carboxylic Acids',
                'Nitrogen Containing Compounds (Amines, Diazonium Salts)',
                'Polymers, Biomolecules, and Chemistry in Everyday Life',
              ],
            },
            {
              sectionName: 'Mathematics',
              topics: [
                'Sets, Relations and Functions',
                'Complex Numbers & Quadratic Equations',
                'Matrices & Determinants',
                'Permutations & Combinations',
                'Binomial Theorem and Its Applications',
                'Sequences & Series (Arithmetic, Geometric, Harmonic Progressions)',
                'Limits, Continuity & Differentiability',
                'Integral Calculus (Definite and Indefinite)',
                'Differential Calculus (Applications of Derivatives)',
                'Differential Equations (First Order, Linear)',
                'Coordinate Geometry (2D & 3D: Straight Lines, Circles, Conics, Planes, Straight lines in 3D)',
                'Vector Algebra',
                'Statistics & Probability (Measures of Dispersion, Probability, Binomial Distribution)',
                'Trigonometry (Ratios, Identities, Equations)',
                'Mathematical Induction and Reasoning',
              ],
            },
          ],
          notes: 'This paper determines ranking for admission to NITs/IIITs and eligibility for JEE Advanced.',
        },
      ],
    },
    {
      stageId: 'jee-advanced',
      stageName: 'JEE Advanced (Admission to IITs) - Core Syllabus Applied',
      papers: [
        {
          paperId: 'advanced-paper-1',
          paperName: 'Advanced – Paper 1',
          type: 'Multiple Choice/Numerical/Matrix Match (Advanced Level)',
          duration: '3 hours',
          totalMarks: 180, 
          sections: [
            {
              sectionName: 'Physics, Chemistry, and Mathematics (Entire Syllabus)',
              topics: [
                'All topics from the JEE core syllabus (same as JEE Main list), tested with **high analytical complexity** and requiring **deep conceptual understanding**.',
              ],
            },
          ],
          notes: 'Paper 1 is one half of the ranking criteria. Syllabus is the full JEE curriculum, emphasizing complex, multi-concept problems.',
        },
        {
          paperId: 'advanced-paper-2',
          paperName: 'Advanced – Paper 2',
          type: 'Multiple Choice/Numerical/Matrix Match (Advanced Level)',
          duration: '3 hours',
          totalMarks: 180, 
          sections: [
            {
              sectionName: 'Physics, Chemistry, and Mathematics (Entire Syllabus)',
              topics: [
                'All topics from the JEE core syllabus (same as JEE Main list), tested with **high analytical complexity** and requiring **deep conceptual understanding**.',
              ],
            },
          ],
          notes: 'Paper 2 is the second half of the ranking criteria. Final rank depends on the aggregate score of Paper 1 and Paper 2.',
        },
      ],
    },
  ],
  totalMarks: 480,
},
          {
            examId: 'gate',
            examName: 'GATE (Graduate Aptitude Test in Engineering)',
            description: 'For admission to postgraduate engineering programs and PSU recruitment.',
            stages: [
              {
                stageId: 'gate-exam',
                stageName: 'GATE Exam',
                papers: [
                  {
                    paperId: 'general',
                    paperName: 'General Aptitude',
                    type: 'Objective',
                    duration: '3 hours',
                    totalMarks: 100,
                    topics: [
                      'Engineering Mathematics',
                      'General Aptitude (Verbal Ability, Numerical Ability)',
                    ],
                  },
                  {
                    paperId: 'subject-specific',
                    paperName: 'Subject-Specific Paper',
                    type: 'Objective',
                    duration: '3 hours',
                    totalMarks: 100,
                    topics: [
                      'Depends on the chosen engineering discipline, e.g., Mechanical, Electrical, Civil, Computer Science, etc.',
                    ],
                  },
                ],
              },
            ],
            totalMarks: 200,
          },
          {
            examId: 'isro-drdo',
            examName: 'ISRO / DRDO Recruitment',
            description: 'Recruitment exams for scientists and engineers in space and defense organizations.',
            stages: [
              {
                stageId: 'written-test',
                stageName: 'Written Test',
                papers: [
                  {
                    paperId: 'engineering-knowledge',
                    paperName: 'Engineering Knowledge',
                    type: 'Objective',
                    duration: '2 hours',
                    totalMarks: 100,
                    topics: [
                      'Core engineering subjects as per the applied discipline',
                      'Basic Mathematics and Physics',
                      'Technical knowledge related to the role',
                    ],
                  },
                ],
              },
              {
                stageId: 'interview',
                stageName: 'Interview',
                papers: [],
                notes: 'Technical and HR interview to assess suitability.',
              },
            ],
          },
            { examId: 'psu-recruitment', examName: 'BHEL / NTPC / ONGC / IOCL Recruitments', description: 'Recruitment for various Public Sector Undertakings.', stages: [] },
            { examId: 'barc-oces-dgfs', examName: 'BARC OCES/DGFS', description: 'Bhabha Atomic Research Centre training schemes for engineers and scientists.', stages: [] },
        ]
      },
      {
          category: 'Medical / Science / Research',
          exams: [
             {
  examId: 'neet-ug-pg',
  examName: 'NEET UG / NEET PG',
  description: 'National Eligibility cum Entrance Test. UG for MBBS/BDS (Class XI & XII curriculum); PG for MD/MS/PG Diploma (MBBS curriculum).',
  stages: [
    {
      stageId: 'neet-ug',
      stageName: 'NEET (UG) - Undergraduate Exam (720 Marks)',
      papers: [
        {
          paperId: 'neet-ug-paper',
          paperName: 'Physics, Chemistry, and Biology (Botany & Zoology)',
          type: 'Objective (MCQ)',
          duration: '3 hours 20 minutes',
          totalMarks: 720,
          sections: [
            {
              sectionName: 'Physics (Class 11 & 12)',
              marks: 180,
              topics: [
                'Physical World and Measurement, Kinematics, Laws of Motion, Work/Energy/Power, Rotational Motion (Torque, Angular Momentum, Moment of Inertia, Parallel/Perpendicular Axes Theorems).',
                'Gravitation (Kepler’s Laws, Motion/Energy of Satellites, Escape Velocity, Variation of g).',
                'Properties of Solids and Liquids (Elasticity, Hooke’s Law, Pascal’s Law, Viscosity, Bernoulli’s Principle, Surface Tension, Heat Transfer).',
                'Thermodynamics (Zeroth, First, and Second Laws, Isothermal/Adiabatic Processes).',
                'Kinetic Theory of Gases (RMS speed, Degrees of freedom, Law of Equipartition of Energy).',
                'Oscillations and Waves (SHM, Simple Pendulum, Wave motion, Doppler Effect, Standing Waves).',
                'Electrostatics (Coulomb’s Law, Electric Field/Potential, Capacitors, Gauss’s Law).',
                'Current Electricity (Ohm’s Law, Kirchhoff’s Laws, Wheatstone Bridge, Measuring Instruments).',
                'Moving Charges and Magnetism (Biot-Savart’s Law, Ampere’s Law, Magnetic Dipoles, Dia/Para/Ferromagnetism).',
                'Electromagnetic Induction and Alternating Currents (Faraday’s Law, Lenz’s Law, LCR circuit, Resonance, Transformer).',
                'Optics (Ray Optics: Reflection/Refraction, Optical Instruments; Wave Optics: Huygens’ Principle, Interference, Diffraction, Polarization, Brewster’s Law).',
                'Dual Nature of Matter and Radiation (Photoelectric Effect, de Broglie relation).',
                'Atoms and Nuclei (Bohr Model, Radioactivity, Nuclear Energy, Mass-Energy relation).',
                'Electronic Devices (Semiconductors, P-N Junction Diode, Rectifiers, Zener Diode, Logic Gates: OR, AND, NOT, NAND, NOR).',
                'Experimental Skills (Practical applications, error analysis).',
              ],
            },
            {
              sectionName: 'Chemistry (Class 11 & 12)',
              marks: 180,
              topics: [
                'Some Basic Concepts of Chemistry (Mole concept, Stoichiometry).',
                'Atomic Structure (Bohr model, Quantum numbers, Orbitals, Hund’s rule).',
                'Chemical Bonding and Molecular Structure (Ionic/Covalent bonds, VSEPR Theory, Hybridization, MO Theory).',
                'Chemical Thermodynamics (Laws, Enthalpy, Entropy, Gibbs Energy).',
                'Equilibrium (Chemical and Ionic, Le Chatelier’s Principle).',
                'Redox Reactions and Electrochemistry (Oxidation number, Nernst equation, Galvanic/Electrolytic cells).',
                'Chemical Kinetics (Rate law, Factors affecting rate, Zero and First-order reactions, Arrhenius theory).',
                'Solutions (Vapour Pressure, Raoult’s Law, Colligative Properties, van’t Hoff factor).',
                'Inorganic Chemistry: Classification, Periodicity, P/D/F Block Elements, Coordination Compounds (Nomenclature, Isomerism, VBT, CFT).',
                'Organic Chemistry: Basic Principles (Nomenclature, Isomerism, Reaction Mechanisms), Hydrocarbons, Haloalkanes/Haloarenes.',
                'Organic Compounds Containing O & N (Alcohols/Phenols/Ethers, Aldehydes/Ketones/Carboxylic Acids, Amines/Diazonium Salts).',
                'Biomolecules, Polymers, Chemistry in Everyday Life (Drugs, Food preservatives).',
                'Principles Related to Practical Chemistry (Purification, Qualitative Analysis).',
              ],
            },
            {
              sectionName: 'Biology (Botany & Zoology, Class 11 & 12)',
              marks: 360,
              topics: [
                'Diversity in Living World (Classification, Taxonomy, Viruses).',
                'Structural Organisation in Animals and Plants (Morphology, Anatomy, Animal Tissues, Cockroach).',
                'Cell Structure and Function (Cell Theory, Organelles, Biomolecules, Enzymes, Cell Cycle & Division).',
                'Plant Physiology (Transport, Photosynthesis C3/C4, Respiration, Plant Growth Regulators).',
                'Human Physiology (Digestion, Breathing, Circulation, Excretion, Locomotion, Neural/Chemical Control).',
                'Reproduction (Reproduction in Organisms, Sexual Reproduction in Plants & Humans, Reproductive Health).',
                'Genetics and Evolution (Mendelism, Inheritance, Molecular Basis of Inheritance, DNA/RNA, Lac Operon, Human Genome Project, Origin of Life, Darwinism).',
                'Biology and Human Welfare (Health and Disease, Immunity, Cancer, AIDS, Microbes in Human Welfare).',
                'Biotechnology and Its Applications (rDNA Technology, Applications in Health/Agriculture, Gene Therapy, Biosafety issues).',
                'Ecology and Environment (Organisms and Populations, Ecosystem, Biodiversity and Conservation, Environmental Issues).',
              ],
            },
          ],
          notes: 'Syllabus is exclusively based on the entire Class XI and XII NCERT curriculum.',
        },
      ],
    },
    {
      stageId: 'neet-pg',
      stageName: 'NEET (PG) - Postgraduate Exam (MBBS Curriculum)',
      papers: [
        {
          paperId: 'neet-pg-paper',
          paperName: 'Medical Sciences (Pre-clinical, Para-clinical, Clinical)',
          type: 'Objective (MCQ)',
          totalMarks: 800,
          sections: [
            {
              sectionName: 'Pre-Clinical Subjects',
              topics: [
                'Anatomy (Gross Anatomy, Histology, Embryology, Neuroanatomy, Surface Marking).',
                'Physiology (General Physiology, Haematology, Nerve/Muscle, Cardiovascular, Respiratory, Renal, Neurophysiology, Endocrine).',
                'Biochemistry (Enzymes, Metabolism of Carbohydrates/Lipids/Proteins, Molecular Biology, Nutrition).',
              ],
            },
            {
              sectionName: 'Para-Clinical Subjects',
              topics: [
                'Pathology (Cell Injury, Inflammation, Neoplasia, Immunopathology, Organ System Pathology).',
                'Pharmacology (Basic Principles, ANS/CNS Drugs, Chemotherapy, Hormones, Antimicrobials).',
                'Microbiology (General Microbiology, Immunology, Bacteriology, Virology, Mycology, Parasitology).',
                'Forensic Medicine (Forensic Pathology, Medical Jurisprudence, Toxicology, Forensic Psychiatry).',
                'Social & Preventive Medicine (SPM) (Health Concepts, Epidemiology, Biostatistics, Nutrition, Environmental Health, Communicable/Non-Communicable Diseases).',
              ],
            },
            {
              sectionName: 'Clinical Subjects',
              topics: [
                'General Medicine (Cardiology, Respiratory, Renal, Endocrine, Infections, Psychiatry, Dermatology).',
                'General Surgery (Trauma, Burns, Surgical Infections, Orthopaedics, Anaesthesia, Radiodiagnosis).',
                'Obstetrics & Gynaecology (Normal/Abnormal Pregnancy, Labour, Contraception, Infertility, Gynaecological Cancers).',
                'Paediatrics (Growth/Development, Nutrition, Immunization, Neonatology, Pediatric Emergencies).',
                'Ophthalmology and ENT (Anatomy/Physiology, Diagnostics, Management of Diseases).',
                'Radiology/Radiotherapy (Diagnostic Imaging, Radiation Safety, Oncology Principles).',
              ],
            },
          ],
          notes: 'The PG syllabus is holistic, covering all subjects taught during the entire MBBS course as stipulated by the NMC.',
        },
      ],
    },
  ],
},
              { examId: 'aiims-jipmer', examName: 'AIIMS / JIPMER Entrance Exams', description: 'Entrance exams for premier medical colleges.', stages: [] },
              { examId: 'icmr-jrf', examName: 'ICMR JRF', description: 'Indian Council of Medical Research Junior Research Fellowship.', stages: [] },
              { examId: 'csir-ugc-net', examName: 'CSIR-UGC NET', description: 'For Junior Research Fellowship and Lectureship in science subjects.', stages: [] },
              { examId: 'ugc-net', examName: 'UGC NET', description: 'For Lectureship/JRF in various subjects.', stages: [] },
          ]
      },
      {
          category: 'Law / Commerce / Management',
          exams: [
              { examId: 'clat-ailet', examName: 'CLAT / AILET (Law Entrance Exams)', description: 'Common Law Admission Test and All India Law Entrance Test.', stages: [] },
              { examId: 'ca', examName: 'CA Foundation / Intermediate / Final', description: 'Chartered Accountancy exams.', stages: [] },
              { examId: 'cs', examName: 'CS (Company Secretary)', description: 'Company Secretary professional exams.', stages: [] },
              { examId: 'cma', examName: 'CMA', description: 'Cost and Management Accountancy exams.', stages: [] },
              { examId: 'cat', examName: 'CAT (MBA Entrance)', description: 'Common Admission Test for MBA programs.', stages: [] },
              { examId: 'xat-snap-nmat', examName: 'XAT / SNAP / NMAT / MAT / CMAT', description: 'Other popular MBA entrance exams.', stages: [] },
              { examId: 'iift-tissnet', examName: 'IIFT / TISSNET', description: 'Entrance exams for management courses at IIFT and TISS.', stages: [] },
          ]
      },
      {
          category: 'School / Junior Level',
          exams: [
            {
              examId: 'ntse',
              examName: 'National Talent Search Examination (NTSE)',
              description: 'A national level scholarship exam for Class 10 students to identify and nurture talent.',
              stages: [
                {
                  stageId: 'stage-1',
                  stageName: 'Stage 1 (State Level)',
                  papers: [
                    {
                      paperId: 'mental-ability-test',
                      paperName: 'Mental Ability Test (MAT)',
                      type: 'Objective (MCQ)',
                      duration: '120 minutes',
                      totalMarks: 100,
                      topics: [
                        'Analogy',
                        'Classification',
                        'Series',
                        'Pattern Perception',
                        'Coding-Decoding',
                        'Puzzle',
                        'Logical Venn Diagrams',
                        'Problem Solving',
                        'Direction Sense Test',
                        'Non-Verbal Reasoning',
                        'Alphabet Test',
                      ],
                    },
                    {
                      paperId: 'scholastic-aptitude-test',
                      paperName: 'Scholastic Aptitude Test (SAT)',
                      type: 'Objective (MCQ)',
                      duration: '120 minutes',
                      totalMarks: 100,
                      topics: [
                        'Science: Physics, Chemistry, Biology (Class 9 & 10 level)',
                        'Mathematics: Algebra, Geometry, Arithmetic (Class 9 & 10 level)',
                        'Social Science: History, Geography, Civics, Economics (Class 9 & 10 level)',
                      ],
                    },
                  ],
                },
                {
                  stageId: 'stage-2',
                  stageName: 'Stage 2 (National Level)',
                  papers: [
                    {
                      paperId: 'mental-ability-test-2',
                      paperName: 'Mental Ability Test (MAT)',
                      type: 'Objective (MCQ)',
                      duration: '120 minutes',
                      totalMarks: 100,
                      topics: [
                        'Higher difficulty logical reasoning and problem-solving',
                        'Advanced pattern recognition',
                        'Complex coding-decoding',
                        'Analytical reasoning',
                      ],
                    },
                    {
                      paperId: 'scholastic-aptitude-test-2',
                      paperName: 'Scholastic Aptitude Test (SAT)',
                      type: 'Objective (MCQ)',
                      duration: '120 minutes',
                      totalMarks: 100,
                      topics: [
                        'In-depth Science (Physics, Chemistry, Biology)',
                        'Advanced Mathematics',
                        'Comprehensive Social Science',
                      ],
                    },
                    {
                      paperId: 'language-test',
                      paperName: 'Language Test (Qualifying)',
                      type: 'Objective (MCQ)',
                      duration: '45 minutes',
                      totalMarks: 'Qualifying only',
                      topics: [
                        'English Language Comprehension and Grammar',
                        'Regional Language',
                      ],
                    },
                  ],
                },
              ],
              totalMarks: 400,
            },
              {
                examId: 'nmms',
                examName: 'National Means-cum-Merit Scholarship (NMMS) Exam',
                description: 'Scholarship exam for students of class 8 to support education expenses.',
                stages: [
                  {
                    stageId: 'nmms-exam',
                    stageName: 'NMMS Scholarship Exam',
                    papers: [
                      {
                        paperId: 'mental-ability-test',
                        paperName: 'Mental Ability Test (MAT)',
                        type: 'Objective (MCQ)',
                        duration: '90 minutes',
                        totalMarks: 90,
                        topics: [
                          'Analogies',
                          'Classification',
                          'Series (Number and Alphabetical)',
                          'Coding-Decoding',
                          'Blood Relations',
                          'Directions',
                          'Spatial Visualization',
                          'Problem Solving',
                          'Decision Making',
                          'Visual Memory',
                          'Non-Verbal Reasoning',
                        ],
                      },
                      {
                        paperId: 'scholastic-aptitude-test',
                        paperName: 'Scholastic Aptitude Test (SAT)',
                        type: 'Objective (MCQ)',
                        duration: '90 minutes',
                        totalMarks: 90,
                        topics: [
                          'Language Comprehension (English or Regional Language)',
                          'Mathematics (Class 7 and 8 level)',
                          'Science (Class 7 and 8 level)',
                          'Social Studies (Class 7 and 8 level)',
                        ],
                      },
                    ],
                  },
                ],
                totalMarks: 180,
              },
              { examId: 'kvpy', examName: 'KVPY (Now merged with INSPIRE)', description: 'Scholarship program to encourage students to take up research careers.', stages: [] },
              { examId: 'olympiads', examName: 'Olympiads (NSO, IMO, IEO, etc.)', description: 'Various national and international Olympiads for school students.', stages: [] },
              { examId: 'rmo-inmo', examName: 'RMO / INMO (Math Olympiad)', description: 'Mathematical Olympiad program in India.', stages: [] },
          ]
      },
      {
          category: 'Andhra Pradesh Public Service Commission (APPSC)',
          exams: [
              { examId: 'appsc-group1', examName: 'APPSC Group 1', description: 'Executive & Administrative Services in Andhra Pradesh.', stages: [] },
              { examId: 'appsc-group2', examName: 'APPSC Group 2', description: 'Non-Executive Posts in Andhra Pradesh.', stages: [] },
              { examId: 'appsc-group3', examName: 'APPSC Group 3', description: 'Panchayat Secretary and other posts in Andhra Pradesh.', stages: [] },
              { examId: 'appsc-group4', examName: 'APPSC Group 4', description: 'Clerical posts in Andhra Pradesh.', stages: [] },
              { examId: 'appsc-ae-aee', examName: 'APPSC AE / AEE', description: 'Assistant Engineer/Assistant Executive Engineer jobs in AP.', stages: [] },
          ]
      },
      {
          category: 'Andhra Pradesh - Police & Defence',
          exams: [
              { examId: 'ap-police-si', examName: 'AP Police SI Exam', description: 'Andhra Pradesh Police Sub-Inspector recruitment.', stages: [] },
              { examId: 'ap-police-constable', examName: 'AP Police Constable Exam', description: 'Andhra Pradesh Police Constable recruitment.', stages: [] },
              { examId: 'ap-fire-services', examName: 'AP Fire Services Exams', description: 'Recruitment for Andhra Pradesh State Disaster Response & Fire Services.', stages: [] },
              { examId: 'ap-jail-warder', examName: 'AP Jail Warder', description: 'Recruitment for prison department staff in Andhra Pradesh.', stages: [] },
          ]
      },
      {
          category: 'Andhra Pradesh - Educational Service Exams',
          exams: [
             {
  examId: 'ap-tet',
  examName: 'AP TET (Teacher Eligibility Test)',
  description: 'Andhra Pradesh Teacher Eligibility Test for recruitment of teachers for Classes I-VIII.',
  stages: [
    {
      stageId: 'tet-paper-i',
      stageName: 'Paper I (Classes 1 to 5 Teachers)',
      papers: [
        {
          paperId: 'paper-i-cdp',
          paperName: 'Child Development & Pedagogy',
          type: 'Objective (MCQ)',
          totalMarks: 30,
          topics: [
            // I. Development of Child
            'Childhood: meaning, multiple childhoods, parenting, child rearing styles.',
            'Development, Growth & Maturation — Concept & Nature, Differences.',
            'Principles of development and their educational implication.',
            'Factors influencing Development (Biological, Psychological, Sociological, emotional).',
            'Dimensions of Development (Physical & Motor, Cognitive, Emotional, Social, Moral, Language) relating to Infancy, Early/Late Childhood, Adolescence.',
            'Understanding Development — Piaget, Kohlberg, Chomsky, Carl Rogers, Erikson.',
            'Individual differences (Concept, Types, Factors: Heredity & Environment) in Attitudes, Aptitude, Interest, Habits, Intelligence, Creativity, Personality.',
            'Mental Health, Adjustment, Behavioural problems, Conflicts, Defense Mechanism.',
            'Methods and Approaches of Child Development (Observation, Interview, Case study, Experimental).',

            // II. Understanding Learning
            'Learning – Meaning, Concept, Definitions, Characteristics, Types.',
            'Factors of Learning (Personal and Environmental).',
            'Dimensions of Learning (Cognitive, Affective and Psycho-Motor).',
            'Motivation and Sustenance – its role in learning.',
            'Concepts (Formation, Classification, Development); Perception; Memory & Forgetting; Transfer of Learning.',
            'Approaches to Learning: Behaviourism (Skinner, Pavlov, Thorndike), Constructivism (Piaget, Vygotsky), Gestalt (Kohler, Koffka), Observational (Bandura).',

            // III. Pedagogical Concerns
            'Teaching and its relationship with learning and learner.',
            'Learners in Contexts: Children from diverse contexts (CWSN), Inclusive Education.',
            'Pedagogic Methods (Enquiry based, Project based, Survey, Cooperative/Collaborative learning).',
            'Issues in organizing learning in classroom (Study habits, Self learning, Learning styles).',
            'Paradigms of organizing Learning (Teacher centric, Subject centric and Learner centric).',
            'Teaching as Planned activity (Elements of Planning, Phases of Teaching).',
            'Learning resources (Self, Home, School, Community, Technology).',
            'Classroom Management (Role of student/teacher, Guidance & Counseling, Rights of a child).',
            'Assessment: Distinction between Assessment for Learning & Assessment of Learning (CCE).',
          ],
        },
        {
          paperId: 'paper-i-language-i-ii',
          paperName: 'Language I & II (English)',
          type: 'Objective (MCQ)',
          totalMarks: 60,
          topics: [
            'Language I (Telugu/Urdu/Hindi/Kannada/Tamil/Odia): Content (Unseen Passages, Grammar, Vocabulary) and Methodology.',
            'Language II (English): Grammar (Parts of Speech, Tenses, Articles, Prepositions, Clauses, Active/Passive Voice, Direct/Indirect Speech, Degrees of Comparison, Question Tags).',
            'English Vocabulary (Synonyms, Antonyms, Spellings, Phrasal Verbs, Word Formation).',
            'Composition, Comprehension, Correction of Sentences.',
            'Methodology: Aspects of English, Objectives of teaching English, Development of Language skills (LSRW), Communicative skills.',
          ],
        },
        {
          paperId: 'paper-i-maths',
          paperName: 'Mathematics',
          type: 'Objective (MCQ)',
          totalMarks: 30,
          topics: [
            'Content: Number System (Natural, Whole, Integers, Rational Numbers, Place Value, L.C.M./G.C.D.), Fractions, Arithmetic (Unitary method, Averages, Ratio & Proportion, Percentages, Time & Work), Algebra (Basic Terminology, Linear Equations), Geometry (2D & 3D Shapes, Angles, Triangles), Data Handling, Mensuration (Area, Perimeter, Volume of Cube/Cuboid).',
            'Pedagogy: Aims, Values, Instructional Objectives, Methods of Teaching, TLM, Instructional Planning, CCE, Diagnostic & Remedial Teaching.',
          ],
        },
        {
          paperId: 'paper-i-evs',
          paperName: 'Environmental Studies',
          type: 'Objective (MCQ)',
          totalMarks: 30,
          topics: [
            'Content: Family, Food, Health & Hygiene, Water, Air, Shelter, Natural Resources, Our Universe (Solar System), Plants and Animals, Professions and Services, Transport and Communication.',
            'Pedagogy: Aims and Objectives of Teaching EVS, Teaching Methods, Learning Resources, CCE, Evaluation.',
          ],
        },
      ],
      totalMarks: 150,
      notes: 'Paper I-A is for Regular Schools. Paper I-B includes Special Education Pedagogy.',
    },
    {
      stageId: 'tet-paper-ii',
      stageName: 'Paper II (Classes 6 to 8 Teachers)',
      papers: [
        {
          paperId: 'paper-ii-cdp',
          paperName: 'Child Development & Pedagogy',
          type: 'Objective (MCQ)',
          totalMarks: 30,
          topics: [
            '**Development of Child, Understanding Learning, and Pedagogical Concerns** (Same detailed syllabus as Paper I, but applied to the age group 11-14 with a focus on adolescent psychology and advanced educational issues).',
          ],
        },
        {
          paperId: 'paper-ii-language-i-ii',
          paperName: 'Language I & II (English)',
          type: 'Objective (MCQ)',
          totalMarks: 60,
          topics: [
            'Language I (Regional Languages): Content and Methodology (Higher difficulty level).',
            'Language II (English): Grammar (Detailed Parts of Speech, Advanced Clauses), Vocabulary, Reading Comprehension, and Methodology (Aspects of English, LSRW Skills, Communicative skills).',
          ],
        },
        {
          paperId: 'paper-ii-subject-option',
          paperName: 'Mathematics & Science OR Social Studies OR Language Subject',
          type: 'Objective (MCQ)',
          totalMarks: 60,
          sections: [
            {
              sectionName: 'Mathematics (Content & Methodology)',
              topics: [
                'Content: Number System (Prime/Composite, Real Numbers, Exponents, Logarithms), Sets, Algebra (Expressions, Factorization, Linear/Quadratic Equations, Progressions AP/GP), Geometry (Euclid, Lines & Angles, Triangles, Quadrilaterals, Polygons, Circles), Coordinate Geometry, Mensuration (Area/Volume of 2D & 3D Solids), Data Handling (Statistics & Probability), Trigonometry (Ratios, Identities).',
                'Methodology: Aims, Values, Methods of Teaching Math, Instructional Planning, CCE, Diagnostic & Remedial Teaching.',
              ],
            },
            {
              sectionName: 'Science (Content & Methodology)',
              topics: [
                'Physics: Natural Resources (Air, Water), Our Universe (Solar System, Eclipses), Light, Sound, Mechanics (Kinematics, Dynamics), Magnetism, Electricity (Circuits, Ohm’s Law).',
                'Chemistry: Matter around us, Laws of Chemical Combination, Atomic Structure, Metallurgy.',
                'Biology: Parts of a plant & functions, Plant Reproduction, Nutrition in Plants, Plant Processes (Photosynthesis, Respiration), Microbes, Our Environment (Ecosystems, Biodiversity, Pollution).',
                'Methodology: Aims and Objectives of Teaching Science, Teaching Methods (Activity-based), TLM, Evaluation.',
              ],
            },
            {
              sectionName: 'Social Studies (Content & Methodology)',
              topics: [
                'Geography: DIVERSITY ON THE EARTH (Universe, Earth Movements, Environment, Maps), Landforms, Resources, Climate, Geography of India and A.P., Natural Regions, Natural Hazards.',
                'History & Civics: POLITICAL SYSTEMS AND GOVERNANCE (Early Life, Kingdoms & Empires-Mauryan/Gupta/Mughal, Delhi Sultanate, 1857 Revolt, Freedom Struggle), SOCIAL ORGANISATION AND INEQUITIES (Equality, Constitutional Provisions, Women/Caste/Reform, Marginalisation, Judiciary, Laws).',
                'Economics: PRODUCTION EXCHANGE AND LIVELIHOODS (Markets, Consumer Protection, Road Safety, Mineral/Power Resources, Development, Poverty).',
                'Culture: RELIGION AND SOCIETY (Religions, Bhakti/Sufi Movement), CULTURE AND COMMUNICATION (Media, Transport).',
                'Methodology: Approaches (Collaborative, Problem Solving), Concept Mapping, Assessment Tools.',
              ],
            },
          ],
        },
      ],
      totalMarks: 150,
      notes: 'Paper II-A is for Math/Science or Social Studies teachers. Paper II-B is for Special Schools.',
    },
  ],
  totalStages: 2,
},
             {
  examId: 'ap-dsc',
  examName: 'AP DSC (Teacher Recruitment)',
  description: 'Andhra Pradesh District Selection Committee (TRT) for teacher recruitment (SGT, School Assistant, TGT, PGT). Selection typically includes 80% TRT score + 20% TET score.',
  stages: [
    {
      stageId: 'dsc-main-exam',
      stageName: 'Teacher Recruitment Test (TRT) - Written Examination (80 Marks)',
      papers: [
        {
          paperId: 'gk-ca',
          paperName: 'General Knowledge & Current Affairs',
          type: 'Objective (MCQ)',
          totalMarks: '8 to 10', // 8 marks for SGT, 10 marks for School Assistant
          totalQuestions: '16 to 20',
          topics: [
            'Standard GK and events of the current year.',
            'National and international events, Scientific, Cultural, and Economic developments.',
            'Socio-political issues and government initiatives related to Andhra Pradesh and India.',
          ],
        },
        {
          paperId: 'perspectives-in-education',
          paperName: 'Perspectives in Education (PIE)',
          type: 'Objective (MCQ)',
          totalMarks: '4 to 5', // 4 marks for SGT, 5 marks for School Assistant
          topics: [
            'History of Education (Ancient, Medieval, British Era Commissions: Woods, Hunter, Sargent, Kothari, NPE-1986, NEP-2020).',
            'Teacher Empowerment (Code of conduct, Professional development, Motivation, Organizations).',
            'Educational Concerns in Contemporary India (Democracy, Equality, Literacy, Value Education, Inclusive Education).',
            'Acts / Rights (RTE Act 2009, NCF 2005, Human Rights).',
            'Programs like SSA, RMSA, NPEGEL, KGBVs.',
          ],
        },
        {
          paperId: 'educational-psychology',
          paperName: 'Educational Psychology',
          type: 'Objective (MCQ)',
          totalMarks: '5 to 8', // 8 marks for SGT, 5 marks for School Assistant
          topics: [
            'Development of Child (Concepts of Growth/Maturation, Principles of Development, Factors influencing development, Theories by Piaget, Kohlberg, Erikson).',
            'Individual Differences (Intelligence theories - Multiple Intelligence, IQ, EQ; Creativity, Aptitude, Attitude, Habits).',
            'Learning (Theories - Behaviourism, Constructivism; Learning Curves, Transfer of Learning, Memory, Forgetting, Inclusive Education).',
            'Personality (Nature, Theories, Assessment, Emotional Intelligence, Adjustment, Mental Health).',
            'Classroom Implications (Problem solving, Guidance, Counseling).',
          ],
        },
        {
          paperId: 'content-methodology',
          paperName: 'Content & Methodology of Concerned Subject (SGT: All Subjects; SA: One Subject)',
          type: 'Objective (MCQ)',
          totalMarks: 60, // Total marks for this section (SGT: 60; SA: 40 Content + 20 Methodology)
          sections: [
            {
              sectionName: 'Content (Maximum Weightage)',
              topics: [
                'SGT: Content based on AP State Board Textbooks from **Classes III to VIII** (Difficulty level up to Class X). Includes: Language I & II, Mathematics, Science (Physical & Biological), Social Studies.',
                'School Assistant (SA): Content based on AP State Board Textbooks from **Classes VI to Intermediate** level syllabus in the concerned subject (Maths, Bio. Science, Physical Science, Social Studies, English, etc.).',
              ],
            },
            {
              sectionName: 'Methodology (Pedagogy)',
              topics: [
                'Aims, Objectives, and Values of Teaching the specific subject.',
                'Methods of Teaching (e.g., Activity-based, Problem-solving, Project method).',
                'Teaching Learning Material (TLM) and Resources.',
                'Lesson Planning, Unit Planning, Academic Standards.',
                'Evaluation and Assessment (Formative, Summative, CCE).',
              ],
            },
          ],
        },
      ],
      notes: 'The structure above is primarily for SGT (Secondary Grade Teacher). For School Assistants, the focus shifts entirely to the candidate\'s specialization subject for Content & Methodology.',
    },
  ],
},
              { examId: 'apset', examName: 'APSET (State Eligibility Test for Lecturers)', description: 'AP State Eligibility Test for Assistant Professor/Lecturer.', stages: [] },
              { examId: 'deecet', examName: 'DEECET (Diploma in Elementary Education CET)', description: 'AP Diploma in Elementary Education Common Entrance Test.', stages: [] },
          ]
      },
      {
          category: 'Andhra Pradesh - Entrance Exams (Higher Education)',
          exams: [
            {
  examId: 'ap-eapcet',
  examName: 'EAMCET (AP EAPCET)',
  description: 'Engineering, Agriculture, Pharmacy Common Entrance Test in Andhra Pradesh.',
  stages: [
    {
      stageId: 'eapcet-exam',
      stageName: 'EAPCET Exam',
      papers: [
        {
          paperId: 'engineering-stream',
          paperName: 'Engineering Stream (MPC)',
          type: 'Objective (MCQ)',
          duration: '3 hours',
          totalMarks: 160,
          sections: [
            { 
              sectionName: 'Physics', 
              marks: 40, 
              topics: [
                'Physical world and Measurement', 
                'Kinematics', 
                'Laws of Motion', 
                'Work, Energy and Power', 
                'Motion of System of Particles and Rigid Body', 
                'Gravitation', 
                'Properties of Bulk Matter', 
                'Thermodynamics', 
                'Electricity & Magnetism', 
                'Oscillations and Waves', 
                'Modern Physics'
              ] 
            },
            { 
              sectionName: 'Chemistry', 
              marks: 40, 
              topics: [
                'Some Basic Concepts of Chemistry', 
                'Atomic Structure', 
                'Chemical Bonding and Molecular Structure', 
                'States of Matter', 
                'Thermodynamics', 
                'Equilibrium', 
                'Redox Reactions', 
                'The s, p, d, & f-Block Elements', 
                'Organic Chemistry Principles', 
                'Hydrocarbons', 
                'Environmental Chemistry'
              ] 
            },
            { 
              sectionName: 'Mathematics', 
              marks: 80, 
              topics: [
                'Relations and Functions', 
                'Algebra (Matrices, Determinants)', 
                'Trigonometry', 
                'Analytical Geometry (2D and 3D)', 
                'Differential Calculus', 
                'Integral Calculus', 
                'Vectors'
              ] 
            },
          ],
          notes: 'Syllabus based on the Intermediate (Class XI and XII) curriculum of AP Board.',
        },
        {
          paperId: 'agriculture-pharmacy-stream',
          paperName: 'Agriculture & Pharmacy Stream (BiPC)',
          type: 'Objective (MCQ)',
          duration: '3 hours',
          totalMarks: 160,
          sections: [
            { 
              sectionName: 'Physics', 
              marks: 40,
              // Explicitly repeating the topics as requested, confirming they are the same as MPC
              topics: [
                'Physical world and Measurement', 
                'Kinematics', 
                'Laws of Motion', 
                'Work, Energy and Power', 
                'Motion of System of Particles and Rigid Body', 
                'Gravitation', 
                'Properties of Bulk Matter', 
                'Thermodynamics', 
                'Electricity & Magnetism', 
                'Oscillations and Waves', 
                'Modern Physics'
              ] 
            },
            { 
              sectionName: 'Chemistry', 
              marks: 40,
              // Explicitly repeating the topics as requested, confirming they are the same as MPC
              topics: [
                'Some Basic Concepts of Chemistry', 
                'Atomic Structure', 
                'Chemical Bonding and Molecular Structure', 
                'States of Matter', 
                'Thermodynamics', 
                'Equilibrium', 
                'Redox Reactions', 
                'The s, p, d, & f-Block Elements', 
                'Organic Chemistry Principles', 
                'Hydrocarbons', 
                'Environmental Chemistry'
              ]
            },
            { 
              sectionName: 'Botany', 
              marks: 40,
              topics: ['Plant Diversity', 'Structural Organization', 'Physiology', 'Genetics', 'Ecology', 'Biotechnology']
            },
            { 
              sectionName: 'Zoology', 
              marks: 40,
              topics: ['Animal Diversity', 'Human Physiology', 'Reproduction', 'Genetics & Evolution', 'Applied Biology']
            },
          ],
          notes: 'Physics and Chemistry topics are common to both streams. Biology topics (Botany & Zoology) cover the Class XI and XII curriculum.',
        },
      ],
    },
  ],
  totalMarks: 160,
},
           {
  examId: 'ap-ecet',
  examName: 'AP ECET',
  description: 'For Diploma Holders seeking lateral entry into B.Tech courses in Andhra Pradesh.',
  stages: [
    {
      stageId: 'ecet-exam',
      stageName: 'ECET Exam (200 Marks)',
      papers: [
        {
          paperId: 'ecet-common-subjects',
          paperName: 'Common Subjects (Maths, Physics, Chemistry)',
          type: 'Objective (MCQ)',
          totalMarks: 100,
          sections: [
            {
              sectionName: 'Engineering Mathematics (50 Marks)',
              marks: 50,
              topics: [
                'Matrices (Determinants, Inverse, Rank, Linear Equations)',
                'Trigonometry (Compound Angles, Inverse, Properties of Triangles)',
                'Analytical Geometry',
                'Differentiation and its Applications',
                'Integration and Its Applications',
                'Differential Equations',
                'Vector Algebra, Complex Numbers, Partial Fractions',
              ],
            },
            {
              sectionName: 'Physics (25 Marks)',
              marks: 25,
              topics: [
                'Units and Dimensions, Elements of Vectors',
                'Kinematics and Friction',
                'Work, Power, and Energy',
                'Simple Harmonic Motion and Acoustics',
                'Heat and Thermodynamics',
                'Modern Physics (Photoelectric Effect, Radioactivity)',
              ],
            },
            {
              sectionName: 'Chemistry (25 Marks)',
              marks: 25,
              topics: [
                'Atomic Structure, Chemical Bonding',
                'Solutions, Acids and Bases, Electrochemistry',
                'Water Technology, Corrosion, Polymers, Fuels',
                'Environmental Chemistry',
              ],
            },
          ],
        },
        {
          paperId: 'ecet-engineering-subjects',
          paperName: 'Engineering Subject (100 Marks) - Core Branches',
          type: 'Objective (MCQ)',
          totalMarks: 100,
          sections: [
            {
              sectionName: 'Civil Engineering Core (CE)',
              marks: 100,
              topics: [
                'Strength of Materials (Stresses, Strains, Shear Force & Bending Moment)', 
                'Theory of Structures (Trusses, Beams, Columns-Euler/Rankine)', 
                'Reinforced Concrete Structures (RCC Beams & Slabs)', 
                'Surveying (Chain, Compass, Levelling, Theodolite)', 
                'Hydraulics (Flow, Bernoulli’s, Pumps)', 
                'Irrigation Engineering (Dams, Headworks, Water requirements)',
              ],
            },
            {
              sectionName: 'Mechanical Engineering Core (ME)',
              marks: 100,
              topics: [
                'Workshop Technology & Conventions in Drawing', 
                'Engineering Materials and Solid Mechanics', 
                'Design of Machine Elements', 
                'Thermodynamics & Heat Power Engineering (Boilers, Turbines)', 
                'Hydraulic Machines and Pneumatics', 
                'Refrigeration and Air Conditioning', 
                'Industrial Management and Engineering', 
                'Automobile Engineering',
              ],
            },
            {
              sectionName: 'Electrical & Electronics Engineering Core (EEE)',
              marks: 100,
              topics: [
                'Basic Electrical Engineering (AC/DC Circuits, Network Theorems)', 
                'DC Machines, Batteries & Measuring Instruments', 
                'AC Circuits and Transformers (Single/Three-Phase)', 
                'AC Machines (Alternators, Synchronous & Induction Motors)', 
                'Power Systems (Generation, Protection, T&D)', 
                'Basic Electronics & Digital Electronics', 
                'Power Electronics and Micro Controller (8051)',
              ],
            },
            {
              sectionName: 'Electronics & Communication Engineering Core (ECE)',
              marks: 100,
              topics: [
                'Electronic Devices and Circuits (Diodes, Transistors, Rectifiers)', 
                'Circuit Theory & Electronic Measuring Instruments', 
                'Industrial and Power Electronics', 
                'Communication Systems (Analog & Digital Modulation)', 
                'Advanced Communication Systems (Microwave, Satellite)', 
                'Digital Electronics (Logic Gates, Flip-flops, Counters)', 
                'Microcontrollers and Microprocessors (8086/8051)', 
                'Data Communications and Computer Networks, Audio Video Systems',
              ],
            },
            {
              sectionName: 'Computer Science Engineering Core (CSE)',
              marks: 100,
              topics: [
                'Digital Electronics, Computer Organization & Microprocessors (8086)', 
                'Data Structures through C', 
                'Computer Networks, Operating Systems', 
                'DBMS & RDBMS (SQL, PL/SQL)', 
                'Object Oriented Programming through C++ & Java Programming', 
                'Software Engineering (Life Cycle Models, Testing)', 
                'Web Technologies (HTML, XML, JavaScript, PHP)',
              ],
            },
            // Note: Other branches (Chemical, Mining, EIE, etc.) follow a similar structure.
          ],
          notes: 'The syllabus for the Engineering Subject is based on the entire curriculum of the relevant Diploma course.',
        },
      ],
    },
  ],
  totalMarks: 200,
},
            {
              examId: 'ap-icet',
              examName: 'AP ICET',
              description: 'Integrated Common Entrance Test for MBA and MCA admissions in Andhra Pradesh.',
              stages: [
                {
                  stageId: 'icet-exam',
                  stageName: 'ICET Exam',
                  papers: [
                    {
                      paperId: 'icet-paper',
                      paperName: 'Integrated Common Entrance Test',
                      type: 'Objective (MCQ)',
                      duration: '3 hours',
                      totalMarks: 200,
                      sections: [
                        {
                          sectionName: 'Analytical Ability',
                          topics: [
                            'Data Sufficiency',
                            'Problem Solving',
                            'Data Analysis and Interpretation',
                          ],
                        },
                        {
                          sectionName: 'Mathematical Ability',
                          topics: [
                            'Arithmetic',
                            'Algebra',
                            'Geometry',
                          ],
                        },
                        {
                          sectionName: 'Communication Ability',
                          topics: [
                            'Vocabulary',
                            'Business and Computer Terminology',
                            'Functional Grammar',
                            'Reading Comprehension',
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              totalMarks: 200,
            },        
              { examId: 'ap-lawcet', examName: 'LAWCET / PGLCET', description: 'Law Common Entrance Test for AP.', stages: [] },
              { examId: 'ap-edcet', examName: 'EDCET', description: 'Education Common Entrance Test for B.Ed admissions in AP.', stages: [] },
              { examId: 'ap-pgcet', examName: 'PGCET', description: 'Post Graduate Common Entrance Test for AP.', stages: [] },
              { examId: 'ap-polycet', examName: 'POLYCET', description: 'Polytechnic Common Entrance Test for AP.', stages: [] },
          ]
      },
      {
          category: 'Andhra Pradesh - Health & Paramedical',
          exams: [
              { examId: 'ap-medical-officer', examName: 'APPSC Medical Officer Recruitment', description: 'Recruitment for Medical Officers in AP.', stages: [] },
              { examId: 'ap-paramedical', examName: 'AP Paramedical Recruitment', description: 'For Staff Nurse, Pharmacist, etc. in AP.', stages: [] },
              { examId: 'ap-ayush', examName: 'AP Ayush Department Exams', description: 'Exams for the Department of Ayurveda, Yoga, Unani, Siddha and Homoeopathy.', stages: [] },
          ]
      }
    ].map(category => ({
      ...category,
      exams: category.exams.map(exam => ({
        ...exam,
        description: exam.description || 'No description available.',
        stages: exam.stages || [], 
      }))
    }));
    
    

    
