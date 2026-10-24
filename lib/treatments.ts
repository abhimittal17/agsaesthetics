import { Activity, Calendar, Clock, ShieldCheck, UserCheck } from "lucide-react";


export const treatments = [
{
  id: "injectables",
  categoryTitle: "Injectables",
  title: "Injectables & Facial Sculpting",
  subtitle: "Physician-led neuromodulators, dermal fillers, and bio-stimulators engineered for subtle, anatomical elegance.",
  heroDesc:
    "At AG Aesthetics & Wellness Clinic, our injectable treatments merge deep anatomical precision with conservative clinical restraint. From dynamic expression softening to multi-layer structural restoration and collagen stimulation, every micro-treatment is customized to enhance your natural facial architecture—guaranteeing refreshed symmetry without an overdone or frozen finish.",

  stats: [
    { label: "Consultation & Mapping", val: "Comprehensive 3D Facial Assessment", icon: UserCheck },
    { label: "Product Authenticity", val: "100% US-FDA Approved Brands", icon: ShieldCheck },
    { label: "Session Duration", val: "30–60 Mins", icon: Clock },
    { label: "Downtime Profile", val: "Minimal to Zero Social Downtime", icon: Activity },
  ],

  gallery: {
    heroMain: "/injectables/1.png",
    heroSecondary: "/injectables/2.png",
    microTexture: "/injectables/3.png",
  },

  indications: [
    "Upper-face dynamic lines (forehead furrows, frown lines, lateral canthal crow's feet)",
    "Volume depletion in temples, mid-face zygomatic arches, and hollow tear troughs",
    "Deepening nasolabial folds, marionette lines, and perioral dynamic creases",
    "Masseter muscle hyperactivity associated with jaw clenching, teeth grinding, and lower-face widening",
    "Structural chin recession, ill-defined jawline contours, and submental laxity",
    "Thinning lip vermilion border, loss of oral commissure support, and philtral flattening",
    "Skin laxity and loss of extracellular matrix integrity across the face, neck, and hands",
  ],

  phases: [
    {
      id: "consultation-diagnostics",
      tabLabel: "1. 3D Facial Architecture & Dynamic Mapping",
      title: "Comprehensive Kinematic & Structural Diagnostics",
      description:
        "Every face animates and ages along unique vectors. Our doctors evaluate your facial anatomy both at rest and in full dynamic motion. We map vascular pathways, muscle hyper-contraction zones, and structural bone absorption levels to design a targeted, multi-plane treatment blueprint.",
      photo: "/injectables/4.png",
      takeaways: [
        "Dynamic muscle movement assessment under standardized lighting",
        "Targeted micro-dosing plan tailored to individual tissue density",
        "Safety-first mapping to respect underlying vascular boundaries",
      ],
    },
    {
      id: "sanitization-prep",
      tabLabel: "2. Clinical Sanitization & Patient Comfort",
      title: "Medical-Grade Sterilization & Advanced Analgesia",
      description:
        "Patient safety and procedural comfort are paramount. The treatment area undergoes double sterilization using clinical antimicrobial wash. A customized pharmaceutical topical anesthetic is applied, often combined with targeted cold air analgesia to ensure a painless experience.",
      photo: "/injectables/5.png",
      takeaways: [
        "Hospital-grade aseptic field preparation",
        "High-potency topical numbing paired with localized cooling",
        "Significantly reduced risk of vascular swelling and needle-entry bruising",
      ],
    },
    {
      id: "technique-administration",
      tabLabel: "3. Micro-Delivery & Dual-Plane Sculpting",
      title: "Precision Micro-Droplet Placement & Cannula Delivery",
      description:
        "Administered exclusively by certified medical doctors using ultra-fine 32G micro-needles or blunt-ended microcannulas. Neuromodulators are injected in precise micro-aliquots into hyperactive muscles, while hyaluronic acid and bio-stimulators are positioned across deep structural supraperiosteal levels or superficial dermis.",
      photo: "/injectables/6.png",
      takeaways: [
        "Blunt-tip microcannulas drastically lower bruising and vascular risks",
        "Micro-droplet layering avoids bulkiness and tissue migration",
        "Transparent, tableside reconstitution of sealed, authentic vials",
      ],
    },
    {
      id: "review-stabilization",
      tabLabel: "4. Stabilization & Follow-Up Review",
      title: "14-Day Symmetry Check & Long-Term Optimization",
      description:
        "Because injectable products integrate dynamically with your tissues over 7 to 14 days, we invite you back for a thorough two-week clinical review. We assess muscle movement, balance, and volume settling, administering fine balance adjustments if necessary.",
      photo: "/injectables/7.png",
      takeaways: [
        "Standardized day-14 digital comparison imaging",
        "Complimentary symmetry refinement if clinically indicated",
        "Personalized maintenance schedule to sustain natural longevity",
      ],
    },
  ],
  faqs: [
    {
      q: "What types of injectable treatments are offered at AG Aesthetics?",
      a: "Our injectables portfolio encompasses US-FDA approved neuromodulators (for expression line relaxation and masseter slimming), premium hyaluronic acid dermal fillers (for deep structural volume and contouring), and advanced collagen bio-stimulators/skin boosters (for deep skin hydration and tissue elasticity).",
    },
    {
      q: "How does AG Aesthetics prevent an unnatural or 'overfilled' appearance?",
      a: "Our clinical standard is rooted in restraint and anatomical precision. We prioritize micro-dosing and phased layering rather than large-volume boluses. By respecting your natural facial bone structure and animation dynamics, we enhance your features while keeping your natural expressions completely intact.",
    },
    {
      q: "Who performs the injectable procedures at the clinic?",
      a: "All consultations, anatomical mappings, and injections are carried out strictly by licensed, medically qualified doctors with specialized training in facial aesthetics, vascular safety protocols, and advanced cannula techniques.",
    },
    {
      q: "What should I do to prepare for and recover from an injectable session?",
      a: "We advise pausing blood-thinning supplements (like fish oil, vitamin E, and aspirin) for 3–5 days prior, after consulting your physician. Post-procedure, avoid intense cardio, alcohol, saunas, and pressing the treated areas for 24 hours. Normal desk work and daily light routines can be resumed immediately.",
    },
  ],
},
{
  id: "skin-rejuvenation",
  categoryTitle: "Skin Rejuvenation",
  title: "Skin Rejuvenation & Dermal Remodeling",
  subtitle: "Medical-grade energy devices, clinical resurfacing, and bio-regenerative therapy to restore dermal cellular vitality.",
  heroDesc:
    "A multi-modality clinical rejuvenation program at AG Aesthetics & Wellness Clinic designed to reverse photoaging, uneven tone, compromised texture, and collagen degradation. Combining physician-led optical diagnostics, fractional technology, and cellular growth factors, we induce targeted neocollagenesis while maintaining barrier integrity.",

  stats: [
    { label: "Treatment Duration", val: "45–75 Mins", icon: Clock },
    { label: "Clinical Downtime", val: "1–3 Days (Mild Erythema)", icon: Activity },
    { label: "Collagen Induction", val: "Progressive Over 6–12 Weeks", icon: Calendar },
    { label: "Comfort Control", val: "Topical Anesthesia & Sub-Zero Cooling", icon: ShieldCheck },
  ],

  gallery: {
    heroMain: "/skinrejuvenation/1.png",
    heroSecondary: "/skinrejuvenation/2.png",
    microTexture: "/skinrejuvenation/3.png",
  },

  indications: [
    "Dermal collagen depletion, fine elastotic crepiness, and loss of skin elasticity",
    "Persistent hyperpigmentation, melasma borders, solar lentigines, and uneven skin tone",
    "Post-inflammatory erythema (PIE), shallow acne scarring, and enlarged, slackened pores",
    "Sun-damaged cutaneous texture across the face, neck, décolletage, and dorsal hands",
    "Dull, asphyxiated epidermis exhibiting impaired barrier function and moisture retention",
    "Perioral and periorbital micro-rhytids resistant to classic topical interventions",
  ],

  phases: [
    {
      id: "chromatic-diagnostics",
      tabLabel: "1. Optical Mapping",
      title: "Subsurface Epidermal & Dermal Multispectral Analysis",
      description:
        "Using cross-polarized and UV diagnostic imaging, we evaluate subsurface UV damage, vascular erythema, porphyrin bacterial counts, and epidermal thickness. This objective baseline ensures energy-based settings and acid strengths are calibrated strictly to your skin's phototype.",
      photo: "/skinrejuvenation/4.png",
      takeaways: [
        "Multispectral imaging detecting hidden subsurface melanin clusters",
        "Fitzpatrick phototype profiling to completely mitigate PIH risks",
        "Customized energy-fluence and chemical concentration parameters",
      ],
    },
    {
      id: "barrier-prep",
      tabLabel: "2. Dermal Conditioning",
      title: "Sterile Preparation, Micro-Exfoliation & Topical Desensitization",
      description:
        "The epidermis is prepped with clinical degreasing agents and medical antiseptics. A compounding-grade topical anesthetic is applied for 30 minutes, supported by localized epidermal contact cooling to ensure optimal patient comfort throughout the procedure.",
      photo: "/skinrejuvenation/5.png",
      takeaways: [
        "Aseptic field preparation ensuring zero microbial contamination",
        "Pharmaceutical-grade topical lidocaine formulation",
        "Contact chilling system minimizes thermal sensitivity and post-treatment swelling",
      ],
    },
    {
      id: "remodeling-delivery",
      tabLabel: "3. Synergistic Remodeling",
      title: "Targeted Micro-Injury & Bio-Regenerative Infusion",
      description:
        "Depending on the customized protocol, fractional laser energy, medical microneedling (RF/mechanical), or targeted chemical peels create controlled micro-thermal zones in the dermis. High-potency recombinant growth factors, peptides, or PDRN are immediately delivered via transdermal micro-channels.",
      photo: "/skinrejuvenation/6.png",
      takeaways: [
        "Controlled dermal micro-injury triggers rapid fibroblastic activation",
        "Micro-channel infusion maximizes transdermal nutrient bio-availability",
        "Precision-depth delivery preserves intact tissue bridges for rapid healing",
      ],
    },
    {
      id: "cellular-recovery",
      tabLabel: "4. Barrier Sealing & Review",
      title: "Regenerative Occlusion & Collagen Stabilization",
      description:
        "The skin is treated with a soothing sterile biomimetic lipid emulsion and broad-spectrum zinc oxide barrier. Patients receive an individualized post-procedure kit with a strict 48-hour active-ingredient moratorium and a scheduled day-14 digital healing review.",
      photo: "/skinrejuvenation/7.png",
      takeaways: [
        "Immediate epidermal seal to prevent trans-epidermal water loss (TEWL)",
        "Complimentary post-treatment barrier recovery kit",
        "Day 14 follow-up to evaluate epidermal re-epithelialization and plan session intervals",
      ],
    },
  ],
  faqs: [
    {
      q: "How many sessions are typically required for noticeable skin rejuvenation?",
      a: "While a radiant glow and refined texture are often apparent within 7 to 10 days of the first session, deep collagen remodeling and dermal thickening typically require a structured series of 3 to 4 treatments spaced 4 weeks apart.",
    },
    {
      q: "Is the rejuvenation protocol safe for darker skin tones (Fitzpatrick IV–VI)?",
      a: "Yes. Every treatment plan begins with multispectral skin diagnostics. We calibrate thermal energy densities and utilize non-ablative wavelengths or specialized peel complexes designed specifically to stimulate fibroblasts without triggering melanocyte hyperactivity or post-inflammatory hyperpigmentation (PIH).",
    },
    {
      q: "What does the downtime look like after a treatment?",
      a: "Most patients experience mild erythema and a sensation similar to a light sunburn for 24 to 48 hours. By day 3, micro-crusting or faint dry flaking may occur as old cellular layers shed naturally. Makeup and normal daily light routines can typically be resumed after 48 hours.",
    },
    {
      q: "Can skin rejuvenation be combined with injectables on the same day?",
      a: "Depending on your specific clinical plan, certain superficial resurfacing steps can be paired with injectables in a single visit. However, deep-plane dermal remodeling treatments are typically staged 2 weeks apart from neuromodulators and fillers to ensure optimal settling and prevent product displacement.",
    },
  ],
},
{
  id: "acne-and-scars",
  categoryTitle: "Acne & Scars",
  title: "Acne Resolution & Scar Revision",
  subtitle: "Etiology-focused follicular sterilization and sub-dermal architectural release for active lesions and textural scarring.",
  heroDesc:
    "An advanced medical intervention at AG Aesthetics & Wellness Clinic structured to eliminate persistent acne and remodel fibrotic scar tissue. Integrating dermatological sebum regulation, micro-subcision, fractional energy, and regenerative collagen induction, we address active inflammatory breakouts while restoring smooth, level dermal architecture.",

  stats: [
    { label: "Session Duration", val: "45–60 Mins", icon: Clock },
    { label: "Downtime Spectrum", val: "2–4 Days (Mild Redness/Edema)", icon: Activity },
    { label: "Remodeling Window", val: "Cumulative Over 3–6 Months", icon: Calendar },
    { label: "Target Profiles", val: "Active, Hormonal, Atrophic, Boxcar, Rolling", icon: ShieldCheck },
  ],

  gallery: {
    heroMain: "/acnescars/1.png",
    heroSecondary: "/acnescars/2.png",
    microTexture: "/acnescars/3.png",
    
    
    
  },

  indications: [
    "Persistent inflammatory papules, pustules, comedonal congestion, and cystic flare-ups",
    "Atrophic rolling, boxcar, and deep tethered ice-pick scar depressions",
    "Post-inflammatory hyperpigmentation (PIH) and lingering macular erythema (PIE)",
    "Severe sebum hypersecretion accompanied by enlarged follicular openings",
    "Fibrotic sub-dermal tethering anchoring scar bases to the underlying subcutaneous tissue",
    "Compromised barrier function aggravated by previous harsh topical or over-the-counter protocols",
  ],

  phases: [
    {
      id: "sebaceous-scar-diagnostics",
      tabLabel: "1. Follicular & Scar Mapping",
      title: "Microscopic Sebum & Sub-Surface Scar Morphology",
      description:
        "Every scar type demands a distinct clinical plane of intervention. We begin with polarized dermatoscopy and multi-depth scar staging to distinguish rolling, boxcar, and ice-pick defects while measuring active bacterial load (*Cutibacterium acnes*) and cutaneous vascular dilation.",
      photo: "/acnescars/4.png",
      takeaways: [
        "Classification of individual scar morphology to select exact energy depths",
        "Porphyrin fluorescence imaging to quantify follicular microbial activity",
        "Identification of tethered fibrotic bands requiring mechanical subcision",
      ],
    },
    {
      id: "clarifying-sterilization",
      tabLabel: "2. Follicular Decongestion & Numbing",
      title: "Clinical Comedone Extraction & Targeted Analgesia",
      description:
        "The skin is prepped with clinical-grade antibacterial solutions, followed by ultrasonic non-traumatic comedone extraction to vent clogged pilosebaceous units. A high-strength compounded topical anesthetic is applied for 30 minutes to ensure complete procedural comfort during deep energy delivery.",
      photo: "/acnescars/5.png",
      takeaways: [
        "Gentle, sterile follicular clearing to eliminate active impactions",
        "Medical-grade antiseptic rinse preventing cross-contamination",
        "Deep epidermal anesthesia for pain-free microneedling, subcision, or laser steps",
      ],
    },
    {
      id: "dual-plane-remodeling",
      tabLabel: "3. Synergistic Dermal Revision",
      title: "Subcision, Fractional Energy & Regenerative Infusion",
      description:
        "Tethered scar floors are released mechanically via blunt-needle subcision, instantly elevating depressed tissue. Simultaneously, fractional radiofrequency microneedling or targeted ablative laser pulses create controlled micro-channels, instantly infused with sterile bio-peptides, polynucleotides (PDRN), or salicylic complexes.",
      photo: "/acnescars/6.png",
      takeaways: [
        "Surgical-grade subcision breaks down deep, pulling scar tether bands",
        "Fractional columns initiate rapid replacement of rigid scar collagen with soft Type III/I collagen",
        "Sterile bio-regenerative actives accelerate wound repair and re-epithelialization",
      ],
    },
    {
      id: "soothing-prevention",
      tabLabel: "4. Dermal Calming & Barrier Shielding",
      title: "Erythema Suppression & Homeostasis Regimen",
      description:
        "Immediately post-procedure, medical-grade cold compression and sterile hypochlorous acid or biomimetic barrier matrices soothe the epidermal surface. Patients are prescribed a home protocol balancing barrier-repair ceramides, gentle antimicrobial care, and an absolute UV defense guideline.",
      photo: "/acnescars/7.png",
      takeaways: [
        "Instant cooling and redness-calming to diminish vascular flare-ups",
        "Sterile occlusive protection mitigating trans-epidermal moisture depletion",
        "Structured post-care protocol prioritizing rapid healing and zero active-ingredient friction",
      ],
    },
  ],
  faqs: [
    {
      q: "Can active acne breakouts and older acne scars be treated in the same program?",
      a: "Yes. Our protocol stages the approach intelligently: we prioritize calming active inflammation and clearing microbial blockages first, often using antibacterial modalities and gentle peels, before progressing immediately into deeper fractional remodeling and subcision once active cystic flares stabilize.",
    },
    {
      q: "Why is subcision necessary for rolling or deep acne scars?",
      a: "Rolling and indented scars are held down by stiff fibrous bands anchoring the dermis to subcutaneous tissues. Lasers or microneedling alone cannot smooth these until the underlying anchors are mechanically released through subcision, allowing the depressed scar floor to rise level with the surrounding skin.",
    },
    {
      q: "How many sessions are typically required to see substantial scar revision?",
      a: "Textural remodeling is an incremental biological process. Most patients achieve marked improvement over 3 to 5 sessions scheduled 4 to 6 weeks apart. Cellular neocollagenesis continues to mature and lift scars for up to 6 months following your final treatment.",
    },
    {
      q: "Will this treatment trigger post-inflammatory hyperpigmentation (PIH) on darker skin?",
      a: "No. For Fitzpatrick skin types III through VI, we deploy insulated-needle RF modalities and controlled non-ablative wavelengths. This delivers corrective thermal energy beneath the skin surface without heating the pigment-rich epidermis, effectively protecting against post-treatment hyperpigmentation.",
    },
  ],
},
{
  id: "hair-rejuvenation",
  categoryTitle: "Hair Rejuvenation",
  title: "Bio-Stimulation & Scalp Architecture",
  subtitle: "Medical-grade autologous growth factors, micro-infusion, and scalp conditioning to reverse follicular miniaturization.",
  heroDesc:
    "A physician-led hair restoration and scalp therapy protocol at AG Aesthetics & Wellness Clinic engineered to combat progressive shedding, diffuse thinning, and early-stage androgenetic alopecia. Combining polarized trichoscopic diagnostics, concentrated bio-cellular growth factors, and targeted micro-perfusion, we reactivate dormant dermal papilla cells and restore robust hair shaft diameter without surgical interventions.",

  stats: [
    { label: "Procedure Duration", val: "45–60 Mins", icon: Clock },
    { label: "Clinical Downtime", val: "Zero (Wash Hair Next Day)", icon: Activity },
    { label: "Recommended Protocol", val: "4–6 Sessions (Monthly)", icon: Calendar },
    { label: "Anesthetic Protocol", val: "Localized Refrigerant / Micro-Cooled", icon: ShieldCheck },
  ],

  gallery: {
    heroMain: "/hairrejuvenation/1.png",
    heroSecondary: "/hairrejuvenation/2.png",
    microTexture: "/hairrejuvenation/3.png",
    
    
    
  },

  indications: [
    "Androgenetic alopecia in early to mid-stages across male and female pattern presentations",
    "Telogen effluvium driven by physiological stress, post-viral depletion, or systemic shock",
    "Progressive hair shaft miniaturization resulting in wispy, sparse crown and hairline density",
    "Postpartum diffuse hair loss and hormonal transition thinning",
    "Compromised scalp micro-environment exhibiting chronic micro-inflammation, sebum imbalance, or reduced micro-circulation",
    "Adjuvant follicular pre- and post-conditioning for surgical hair transplantation candidates",
  ],

  phases: [
    {
      id: "trichoscopy-mapping",
      tabLabel: "1. Trichoscopic Mapping",
      title: "Digital Follicular Diagnostics & Density Staging",
      description:
        "Using polarized videotrichoscopy at high magnification, we analyze follicle grouping units, shaft caliper thickness, anagen-to-telogen ratios, and micro-vascular scalp erythema. This objective baseline isolates active miniaturization zones and dictates concentrated treatment areas.",
      photo: "/hairrejuvenation/4.png",
      takeaways: [
        "Calibrated follicle unit count per square centimeter",
        "Differentiation between reversible miniaturization and permanent fibrosis",
        "Digital photo documentation to monitor longitudinal shaft thickening",
      ],
    },
    {
      id: "scalp-preparation",
      tabLabel: "2. Scalp Detox & Analgesia",
      title: "Follicular Unclogging, Sterilization & Scalp Comfort",
      description:
        "The scalp is prepped with a medical antimicrobial clarifying cleanse to remove dead follicular keratin plugs and residual sebum buildup. Targeted cold-air analgesic flow and localized micro-numbing ensure the patient remains relaxed and comfortable throughout the injection points.",
      photo: "/hairrejuvenation/5.png",
      takeaways: [
        "Aseptic cleansing to prevent follicular infection and crusting",
        "Removal of sebum deposits around hair infundibula for optimal delivery",
        "Non-invasive localized numbing and contact-cooling protocols",
      ],
    },
    {
      id: "growth-factor-delivery",
      tabLabel: "3. Precision Micro-Delivery",
      title: "Targeted Sub-Dermal Papilla Perfusion",
      description:
        "Using 32G ultra-fine needles or automated mesotherapy micro-delivery devices, concentrated autologous growth factors, polynucleotides (PDRN), and biomimetic peptide cocktails are deposited directly at a 2–4mm depth into the dermal papilla vascular plexus.",
      photo: "/hairrejuvenation/6.png",
      takeaways: [
        "Exact depth delivery targeting the stem cell bulge and dermal papilla",
        "High concentration of vascular endothelial growth factors (VEGF) and PDGF",
        "Stimulates blood supply and forces resting telogen hairs into active anagen growth",
      ],
    },
    {
      id: "stabilization-phototherapy",
      tabLabel: "4. Photobiomodulation & Recovery",
      title: "Low-Level Light Therapy & Follicular Stabilization",
      description:
        "Directly following micro-infusion, clinical-grade low-level light therapy (LLLT) at 650nm is administered across the scalp for 15 minutes. This accelerates cellular ATP synthesis, quenches transient surface inflammation, and ensures rapid closure of micro-puncture sites.",
      photo: "/hairrejuvenation/7.png",
      takeaways: [
        "Medical 650nm diode light boosts cellular mitochondria and cytochrome c oxidase",
        "Instant reduction of post-procedure redness or sensitivity",
        "Structured home-care topical maintenance and scalp hygiene instructions provided",
      ],
    },
  ],
  faqs: [
    {
      q: "How soon can I expect to see visible results from hair rejuvenation?",
      a: "Reduction in daily shedding is typically observed within 2 to 4 weeks after the initial sessions. Visible thickening of existing miniaturized shafts and new hair sprouting typically become measurable via trichoscopic evaluation around the 3 to 4-month mark as hairs transition into their active anagen phase.",
    },
    {
      q: "Is hair rejuvenation effective for complete baldness or shiny areas?",
      a: "No. Hair rejuvenation therapies require living, viable hair follicles to stimulate. Areas where the scalp is completely smooth, shiny, and fibrotic generally indicate follicle closure, which is better addressed with surgical hair transplantation. Our trichoscopy assessment verifies whether viable follicles are present before treatment begins.",
    },
    {
      q: "What is the post-treatment protocol and hair washing routine?",
      a: "The treatment involves minimal disruption. You should refrain from touching your scalp, washing your hair, or exercising vigorously for 12 to 24 hours to let the bio-active factors fully absorb. Normal hair washing and light styling can resume the following day.",
    },
    {
      q: "How many sessions are necessary to maintain results?",
      a: "The standard initial protocol consists of 4 to 6 sessions spaced 3 to 4 weeks apart to break the cycle of miniaturization. Once optimal hair density and scalp health are restored, a single maintenance session every 4 to 6 months keeps follicles healthy against progressive genetic thinning.",
    },
  ],
},
{
  id: "tattoo-removal",
  categoryTitle:"Tattoo Removal",
  title: "Laser Tattoo Removal",
  subtitle: "Multi-wavelength photoacoustic ink shatter with ultra-short pulses for clean clearance and total dermal integrity.",
  heroDesc:
    "A physician-calibrated laser tattoo removal protocol at AG Aesthetics & Wellness Clinic powered by advanced picosecond and Q-switched optical technology. By generating rapid acoustic shockwaves rather than excessive thermal burn, we shatter stubborn ink granules into micro-particles for natural lymphatic clearance while safeguarding the surrounding epidermal baseline.",

  stats: [
    { label: "Pulse Technology", val: "Picosecond Photoacoustic", icon: Activity },
    { label: "Session Duration", val: "15–30 Mins", icon: Clock },
    { label: "Clinical Interval", val: "6–8 Weeks Apart", icon: Calendar },
    { label: "Comfort Control", val: "Continuous Cryo-Chilling & Topical Numbing", icon: ShieldCheck },
  ],

  gallery: {
    heroMain: "/tattooremoval/1.png",
    heroSecondary: "/tattooremoval/2.png",
    microTexture: "/tattooremoval/3.png",
    
    
    
  },

  indications: [
    "Full clearance of amateur, professional, cosmetic, and traumatic tattoos",
    "Dense black, deep blue, graphite, and stubborn dark carbon pigment deposits",
    "Multi-colored tattoos containing complex red, green, purple, and yellow inks",
    "Partial lightening and tonal fading in preparation for tattoo cover-up artwork",
    "Ghosting and stubborn residual pigment shadows left behind by older Q-switched lasers",
    "Unwanted permanent makeup (PMU) adjustments across the microbladed brow or lip border",
  ],

  phases: [
    {
      id: "chromatic-mapping",
      tabLabel: "1. Diagnostic & Ink Profiling",
      title: "Kirby-Desai Scale Staging & Spectrum Assessment",
      description:
        "Every pigment shade requires a specific optical wavelength. We perform a clinical assessment using the validated Kirby-Desai Scale—grading skin phototype, tattoo location, pigment volume, ink layering depth, and scarring potential to establish a precise fluence schedule.",
      photo: "/tattooremoval/4.png",
      takeaways: [
        "Multi-wavelength calibration (1064nm for blacks, 532nm for warm tones)",
        "Accurate clinical session estimation based on ink density and age",
        "Assessment of underlying scar tissue from original needle trauma",
      ],
    },
    {
      id: "analgesia-cryo",
      tabLabel: "2. Cryo-Cooling & Analgesia",
      title: "Surface Sanitization & Dynamic Epidermal Chilling",
      description:
        "The treatment zone is disinfected with medical chlorhexidine, followed by the application of compounded clinical topical anesthetic. During the laser passes, sub-zero forced-air Zimmer cooling operates continuously across the skin to numb free nerve endings and minimize thermal sensations.",
      photo: "/tattooremoval/5.png",
      takeaways: [
        "Pharmaceutical-grade topical lidocaine/tetracaine occlusion",
        "Dynamic -30°C forced-air cooling prevents epidermal thermal buildup",
        "Significantly minimizes procedural discomfort and localized swelling",
      ],
    },
    {
      id: "photoacoustic-delivery",
      tabLabel: "3. Picosecond Ink Fragmentation",
      title: "Targeted Acoustic Shockwave Delivery",
      description:
        "Ultra-short picosecond pulses deliver peak power in trillionths of a second. This bypasses photothermal burn and triggers a purely photoacoustic shockwave, pulverizing large ink deposits into dust-like micro-particles that macrophage immune cells can readily ingest and flush.",
      photo: "/tattooremoval/6.png",
      takeaways: [
        "Immediate clinical endpoint: crisp epidermal 'frosting' indicating ink breakdown",
        "Absence of heat spread protects against scarring, hypopigmentation, and textural changes",
        "Shatters deep-seated pigment without burning surrounding skin cells",
      ],
    },
    {
      id: "dermal-soothing",
      tabLabel: "4. Soothing Occlusion & Wound Shield",
      title: "Cold Compress & Biomimetic Barrier Dressing",
      description:
        "Post-laser frosting resolves within minutes, followed by the application of an anti-inflammatory regenerative hydrogel and sterile non-stick bandage. Patients receive an aftercare regimen prioritizing barrier protection, hygiene, and strict avoidance of sun exposure between sessions.",
      photo: "/tattooremoval/7.png",
      takeaways: [
        "Immediate post-treatment cooling compress to disperse residual warmth",
        "Sterile breathable occlusion to prevent friction and blister formation",
        "Customized home-care protocol supporting rapid lymphatic ink clearance",
      ],
    },
  ],
  faqs: [
    {
      q: "How many sessions are typically required to completely remove a tattoo?",
      a: "Tattoo removal is a multi-step biological clearance process. Most professional tattoos require between 5 to 8 sessions spaced 6 to 8 weeks apart. Factors including ink density, depth, pigment colors, amateur vs. professional application, and your personal metabolic clearance rate dictate the exact timeline.",
    },
    {
      q: "Why is picosecond laser technology safer than older traditional lasers?",
      a: "Traditional nanosecond lasers rely primarily on photothermal heat to break ink, which increases the risk of blistering, textural scarring, and pigment loss. Picosecond lasers deliver energy in trillionths of a second, shattering ink mechanically through acoustic shockwaves with negligible heat transfer to surrounding tissue.",
    },
    {
      q: "Does laser tattoo removal leave a permanent scar or outline?",
      a: "When performed with calibrated picosecond technology and proper aftercare, the risk of scarring is under 2%. Often, faint textures visible after fading are scars left behind by the tattoo artist's original needle application rather than the laser removal itself.",
    },
    {
      q: "Can I lighten a tattoo just enough to get a clean cover-up piece?",
      a: "Yes. Many of our patients seek fading rather than total clearance. Typically, 2 to 4 sessions are sufficient to lift heavy blacks and dark pigments, giving your tattoo artist a clean, flexible canvas for vibrant cover-up artwork without muddy undertones.",
    },
  ],
}
]