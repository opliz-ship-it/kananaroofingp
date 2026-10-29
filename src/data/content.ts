export interface NavItems {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
  quote: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  services_cta: string;
  catalog_cta: string;
  starting_price: string;
}

export interface ValueItem {
  title: string;
  desc: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  story: string;
  our_values_title: string;
  our_values_text: string;
  mission_title: string;
  mission: { title: string; desc: string; }[];
  vision_title: string;
  vision: string;
  values_title: string;
  values: ValueItem[];
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ServicesSection {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface ProjectsSection {
  title: string;
  subtitle: string;
  desc: string;
}

export interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  submit: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  workingHours: string;
  website?: string;
  googleMapsUrl: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  form: ContactForm;
  info: ContactInfo;
}

export interface TechnicalSpec {
  id: string;
  title: string;
  value: string;
  desc: string;
}

export interface ProductSpecsSection {
  title: string;
  subtitle: string;
  tag: string;
  engineering_note: string;
  starting_price_note: string;
  specs: TechnicalSpec[];
  advantages: { title: string; desc: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface QuoteFormLabels {
  modalTitle: string;
  modalSubtitle: string;
  name: string;
  namePlaceholder: string;
  company: string;
  companyPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  whatsapp: string;
  whatsappPlaceholder: string;
  projectType: string;
  projectTypes: string[];
  governorate: string;
  governorates: string[];
  product: string;
  products: string[];
  quantity: string;
  quantityPlaceholder: string;
  dimensions: string;
  dimensionsPlaceholder: string;
  thickness: string;
  thicknesses: string[];
  color: string;
  colors: string[];
  notes: string;
  notesPlaceholder: string;
  submitWhatsApp: string;
  submitEmail: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
  close: string;
}

export interface FooterSection {
  rights: string;
  quick_links: string;
  catalog: string;
  factory_location: string;
}

export interface Content {
  companyName: string;
  companyOfficialName: string;
  nav: NavItems;
  hero: HeroSection;
  about: AboutSection;
  services: ServicesSection;
  projects: ProjectsSection;
  specs: ProductSpecsSection;
  faq: FAQSection;
  quote: QuoteFormLabels;
  contact: ContactSection;
  footer: FooterSection;
}

export const content: Record<'en' | 'ar', Content> = {
  en: {
    companyName: "Kanana Roof",
    companyOfficialName: "Kanana Roof",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
      quote: "Request a Quote",
    },
    hero: {
      title: "Kanana Roof",
      subtitle: "UPVC Sheets Manufacturing & Supply",
      description: "Direct manufacturer of heavy-duty, 4-layer UPVC & Polycarbonate roofing sheets engineered with ASA anti-weathering technology for industrial hangars, commercial facilities, and residential roofs.",
      cta: "Request a Quote",
      services_cta: "Technical Specs",
      catalog_cta: "Download Technical Catalog (PDF)",
      starting_price: "Starting from competitive factory prices / m²",
    },
    specs: {
      tag: "Engineers & Factory Owners Section",
      title: "UPVC Roofing Sheets Engineering Specifications",
      subtitle: "Heavy-duty 4-layer co-extrusion technology designed to replace traditional metal and corrugated sheets with zero corrosion.",
      engineering_note: "Rigid engineering tests conducted for fire safety, thermal reduction, high mechanical strength, and 100% chemical corrosion resistance.",
      starting_price_note: "Direct Factory Pricing: Starting from competitive factory rates per m² (Custom cut lengths up to 12 meters).",
      specs: [
        {
          id: "thickness",
          title: "Thickness Options",
          value: "2.0mm — 2.5mm — 3.0mm",
          desc: "Three factory-certified UPVC thicknesses engineered for different structural loads: 2.0 mm (Standard) — ideal for purlin spacing ≤75 cm; 2.5 mm (Heavy-Duty) — supports spacing ≤130 cm; 3.0 mm (Industrial Grade) — designed for wide-span structures with spacing ≤140 cm. All thicknesses produced via 4-layer ASA co-extrusion technology. Custom industrial thicknesses available on request for large-scale projects."
        },
        {
          id: "dimensions",
          title: "Dimensions & Width",
          value: "Total: 1130 mm | Effective: 1050 mm",
          desc: "Total sheet width 1130mm with a net effective roofing coverage of 1050mm after overlap. Custom cut lengths up to 12 meters to eliminate joints."
        },
        {
          id: "weight",
          title: "Unit Weight",
          value: "3.2 – 5.5 kg/m²",
          desc: "Lightweight profile drastically lowers dead structural load on steel frames while providing superior impact resistance compared to metal sheets."
        },
        {
          id: "colors",
          title: "8 Factory Colors (ASA Co-Extrusion)",
          value: "White · Cafe · Dark Grey · Light Grey · Terracotta · Orange · Navy Blue · Light Blue",
          desc: "8 premium factory colors infused into the ASA co-extrusion outer layer, guaranteeing zero fading, zero chalking, and full UV resistance for decades."
        },
        {
          id: "thermal",
          title: "Thermal Insulation (ASTM C1363)",
          value: "Conductivity 0.14 W/m.K — Reduces heat by 28.54%",
          desc: "Certified by ASTM C1363 lab test. Cuts indoor temperature by 8–10°C vs. galvanized steel sheets, drastically reducing cooling electricity bills."
        },
        {
          id: "sound",
          title: "Sound Insulation (ASTM E90)",
          value: "21.86 dB certified (up to 30 dB reduction)",
          desc: "Certified ASTM E90 test result of 21.86 dB. Eliminates torrential rain and hail noise — ideal for factories, poultry farms, and livestock facilities."
        },
        {
          id: "corrosion",
          title: "Chemical & Corrosion Resistance",
          value: "100% Immune: Acids · Alkalis · Salt · Ammonia",
          desc: "Will NEVER rust or corrode. Ideal for chemical plants, fertilizer factories, coastal warehouses, poultry farms, and high-humidity industrial zones."
        },
        {
          id: "fire",
          title: "Fire Safety Rating (UL 94)",
          value: "Class B1 — Self-Extinguishing",
          desc: "Certified UL 94 Class B1 flame retardant. Self-extinguishing — stops burning immediately once flame source is removed, producing zero flaming droplets."
        },
        {
          id: "flexural",
          title: "Flexural Strength (ASTM D790)",
          value: "27.19 N/mm² Bending Resistance",
          desc: "Lab-certified ASTM D790 flexural strength of 27.19 N/mm². Multi-layer elasticity withstands hail impacts, walking loads, and heavy snow without cracking."
        },
        {
          id: "warranty",
          title: "Manufacturer Warranty",
          value: "Official 10-Year Written Warranty",
          desc: "Comprehensive 10-year factory warranty against manufacturing defects, material degradation, structural integrity failure, and abnormal color fading."
        }
      ],
      advantages: [
        { title: "Zero Corrosion", desc: "Immune to moisture, acid rain, industrial fumes, and seaside salt humidity." },
        { title: "High Impact Strength", desc: "Withstands heavy hail, mechanical impacts, and heavy loads without cracking." },
        { title: "Energy Efficient", desc: "Reflects solar UV rays and traps interior climate, lowering HVAC power consumption." },
        { title: "Quick Installation", desc: "Easy to handle, cut, and fasten with self-drilling waterproof screws and caps." }
      ]
    },
    about: {
      title: "About Us",
      subtitle: "Kanana Roof - Sadat City Industrial Zone",
      story: "Kanana Roof is a premier Egyptian manufacturer specialized in co-extruded UPVC and Polycarbonate roofing systems. From our modern industrial plant in Sadat City, Menoufia, we provide industrial complexes, agricultural hangars, and commercial projects with state-of-the-art roofing alternatives to outdated metal sheets.",
      our_values_title: "Our Quality Commitment",
      our_values_text: "We make no compromises in raw material purity. Our products are formulated with European-grade stabilizers and top-tier ASA weatherable resin, backed by an official 10-year manufacturer guarantee.",
      mission_title: "Our Mission",
      mission: [
        {
          title: "Advanced Manufacturing",
          desc: "Harnessing multi-layer co-extrusion and ASA technology to ensure decades of color stability and physical integrity."
        },
        {
          title: "Eco-Friendly Engineering",
          desc: "Supplying 100% recyclable, asbestos-free, and energy-saving roofing alternatives to toxic or corrosive traditional sheets."
        },
        {
          title: "Certified Reliability",
          desc: "Enforcing rigorous testing protocols for flame retardancy, acoustic attenuation, and extreme temperature tolerance."
        },
        {
          title: "Nationwide & Regional Reach",
          desc: "Prompt logistics and specialized technical support delivered directly from our Sadat City factory across all Egyptian governorates."
        }
      ],
      vision_title: "Our Vision",
      vision: "To be the leading and most trusted manufacturer of high-performance architectural and industrial roofing sheets in Egypt, the Middle East, and Africa.",
      values_title: "Why Choose Kanana Roof UPVC Sheets?",
      values: [
        { title: "Advanced ASA UV Shield", desc: "Our surface layer uses co-extruded ASA resin ensuring vibrant, fade-proof colors despite scorching Egyptian summer sunlight." },
        { title: "Triple Action Insulation", desc: "Simultaneous thermal reduction, acoustic silence during rainstorms, and superior electrical non-conductivity." },
        { title: "Maximum Safety & Fire Retardancy", desc: "Meets international Class B1 self-extinguishing safety codes for industrial plants and hazardous warehouses." },
        { title: "Official 10-Year Warranty", desc: "Genuine documentation guaranteeing chemical stability, zero leakage, and structural durability." },
        { title: "Green & Energy Saving", desc: "Reduces thermal heat transfer into buildings, slashing cooling loads and electrical consumption." },
        { title: "Dedicated Engineering Support", desc: "Our technical team offers purlin spacing guidelines, bill-of-quantities calculations, and installation guidance." }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Manufacturing & Engineering Support",
      items: [
        {
          title: "UPVC Sheets Manufacturing & Supply",
          desc: "Continuous automated manufacturing with tailored custom lengths up to 12 meters per sheet for large-scale hangars."
        },
        {
          title: "Polycarbonate Roofing Sheets",
          desc: "High-transparency and tinted polycarbonate sheets engineered for daylight skylights, swimming pools, and architectural canopy covers."
        },
        {
          title: "Nationwide Supply & Logistics",
          desc: "Secure packaging and prompt heavy transport dispatch directly from our Sadat City plant to any jobsite across Egypt."
        },
        {
          title: "Engineering Technical Support",
          desc: "Structural guidance on steel purlin pitch, fixing accessories, thermal expansion allowances, and slope specifications."
        },
        {
          title: "Custom Quantity & Color Consultation",
          desc: "Personalized design consultations and BOQ optimization to prevent material waste and reduce client costs."
        }
      ]
    },
    projects: {
      title: "Our Projects",
      subtitle: "Proven Real-World Performance",
      desc: "Explore our track record of completed industrial hangars, poultry farms, storage warehouses, and residential structures."
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle: "Clear answers to the most common questions from engineers, contractors, and project owners.",
      items: [
        {
          question: "Why should I choose UPVC roofing sheets over traditional corrugated steel / galvanized sheets (الصاج)?",
          answer: "Traditional corrugated sheets rust, transfer extreme summer heat indoors, amplify deafening rain noise, and need replacement every few years. Kanana Roof UPVC sheets NEVER rust, cut indoor temperature by up to 10°C, dampen rain sound by up to 30 dB, and come with a 10-year documented warranty."
        },
        {
          question: "Are Kanana Roof UPVC sheets fire resistant?",
          answer: "Yes, our sheets are rated Class B1 flame retardant. They are self-extinguishing—meaning if exposed to flame, they will not fuel or propagate the fire and will stop burning immediately once the heat source is removed."
        },
        {
          question: "What is the warranty period and what does it cover?",
          answer: "We provide an official 10-year manufacturer warranty covering manufacturing defects, material degradation, structural integrity, and abnormal color fading under direct sunlight (due to our genuine ASA protective layer)."
        },
        {
          question: "Do you supply and deliver to all Egyptian governorates?",
          answer: "Yes, we dispatch directly from our factory in Sadat City (5th Industrial Zone) to all Egyptian governorates—including Cairo, Giza, Alexandria, Delta, Suez Canal, and Upper Egypt—with secure loading and fast turnaround."
        },
        {
          question: "Can I order custom sheet lengths to match my steel frame design?",
          answer: "Absolutely! We manufacture custom lengths tailored to your project requirements up to 12 meters per sheet, eliminating transverse overlaps and preventing water leaks."
        }
      ]
    },
    quote: {
      modalTitle: "Request an Official Price Quote",
      modalSubtitle: "Direct from the Factory - Fill out your project details for an immediate quote and technical consultation.",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      company: "Company / Factory Name",
      companyPlaceholder: "Enter company or enterprise name (optional)",
      phone: "Phone Number",
      phonePlaceholder: "e.g. 01027000979",
      whatsapp: "WhatsApp Number",
      whatsappPlaceholder: "e.g. 01027000979",
      projectType: "Project Type",
      projectTypes: [
        "Industrial Factory / Hangar",
        "Agricultural / Poultry Farm",
        "Storage Warehouse",
        "Residential Villa / Roof Pergola",
        "Commercial Shed / Canopy",
        "Sports Facility / Skylight",
        "Other"
      ],
      governorate: "Governorate / Project Location",
      governorates: [
        "Cairo",
        "Giza",
        "Menoufia / Sadat City",
        "Alexandria",
        "Sharqia / 10th of Ramadan",
        "Qalyubia",
        "Beheira",
        "Gharbia",
        "Dakahlia",
        "Suez / Ismailia / Port Said",
        "Beni Suef / Fayoum",
        "Upper Egypt Governorates",
        "Red Sea / South Sinai",
        "Outside Egypt (Export)"
      ],
      product: "Requested Product",
      products: [
        "UPVC Trapezoidal Roofing Sheets (Solid)",
        "UPVC Corrugated Sheets (Corgit)",
        "UPVC Tile Wave Sheets (Qarmid Profile)",
        "Polycarbonate Roofing Sheets",
        "UPVC Rain Gutters (30×25×10 cm)",
        "Accessories (Ridge Caps, Screws & PVC Caps)",
        "Complete Roofing System (Sheets + Technical Advice)"
      ],
      quantity: "Estimated Quantity (m² or sheet count)",
      quantityPlaceholder: "e.g. 500 m² or 120 sheets",
      dimensions: "Required Sheet Lengths & Dimensions",
      dimensionsPlaceholder: "e.g. 6-meter sheets, 8-meter sheets, or custom up to 12m",
      thickness: "Required Thickness",
      thicknesses: ["2.0 mm (Standard — Purlins ≤75 cm)", "2.5 mm (Heavy Duty — Purlins ≤130 cm)", "3.0 mm (Industrial — Purlins ≤140 cm)"],
      color: "Preferred Factory Color",
      colors: ["White (أبيض)", "Cafe (كافيه)", "Dark Grey (رمادي غامق)", "Light Grey (رمادي فاتح)", "Terracotta (طوبي / قرميدي)", "Orange (برتقالي)", "Navy Blue (كحلي)", "Light Blue (أزرق فاتح)"],
      notes: "Project Blueprint / Additional Notes",
      notesPlaceholder: "Mention specific details, steel purlin distances, delivery timeline, or questions...",
      submitWhatsApp: "Send via WhatsApp (Fastest)",
      submitEmail: "Send via Email",
      submitting: "Preparing request...",
      successTitle: "Quote Request Sent Successfully!",
      successDesc: "Thank you for reaching out to Kanana Roof. Our sales engineering team in Sadat City will review your specifications and contact you shortly.",
      close: "Close"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Direct Factory Inquiries & Visits",
      form: {
        name: "Name",
        company: "Company Name",
        email: "Email",
        phone: "Phone Number",
        projectType: "Project Type",
        message: "Message",
        submit: "Send Message"
      },
      info: {
        address: "Egypt, Menoufia, Sadat City, 5th Industrial Zone, Plot 115",
        email: "kananaroof@gmail.com",
        phone: "+201222522624",
        displayPhone: "01222522624",
        whatsapp: "+201222522624",
        workingHours: "Saturday - Thursday: 8:00 AM - 5:00 PM (Friday Closed)",
        website: "www.kananaroof.com",
        googleMapsUrl: "https://maps.google.com/?q=30.387001,30.562778"
      }
    },
    footer: {
      rights: "© 2025 Kanana Roof. All Rights Reserved.",
      quick_links: "Quick Links",
      catalog: "Technical Catalog PDF",
      factory_location: "Sadat City Industrial Zone"
    }
  },
  ar: {
    companyName: "كنانة رووف",
    companyOfficialName: "كنانة رووف (Kanana Roof)",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
      quote: "اطلب عرض سعر",
    },
    hero: {
      title: "كنانة رووف",
      subtitle: "تصنيع وتوريد ألواح UPVC للأسقف",
      description: "المصنع المتخصص في إنتاج وتوريد ألواح الـ UPVC والبولي كربونايت رباعية الطبقات المعزولة حرارياً والمحمية بتقنية ASA ضد العوامل الجوية، البديل الهندسي الأقوى للصاج المعرج للمصانع، الهناجر، المستودعات، والمزارع.",
      cta: "اطلب عرض سعر",
      services_cta: "المواصفات الهندسية",
      catalog_cta: "تحميل الكتالوج الفني (PDF)",
      starting_price: "تبدأ من أسعار المصنع التنافسية / م²",
    },
    specs: {
      tag: "قسم خاص بالمهندسين والمصانع والمقاولين",
      title: "المواصفات الفنية والهندسية لألواح UPVC",
      subtitle: "تقنية البثق المتعدد الرباعية المعالجة بمادة ASA لمقاومة التآكل والصدمات وتوفير عزل ثلاثي المفعول.",
      engineering_note: "خضعت الألواح لأعلى اختبارات الجودة الميكانيكية، مقاومة الحريق، العزل الصوتي والحراري، ومقاومة الأحماض والأملاح بنسبة 100%.",
      starting_price_note: "أسعار مباشرة من المصنع: تبدأ من أسعار تنافسية للمتر المربع (مع إمكانية قص أطوال خاصة حتى 12 متراً).",
      specs: [
        {
          id: "thickness",
          title: "السُمك المتاح (Thickness)",
          value: "2.0 مم — 2.5 مم — 3.0 مم",
          desc: "ثلاث سماكات مصنعية معتمدة مُصنَّعة بتقنية البثق الرباعي المشترك ASA، مُختارة وفق الحمل الإنشائي والمسافات بين المدادات: 2.0 مم (قياسي) — للمدادات بمسافة ≤75 سم؛ 2.5 مم (أحمال شاقة) — يستوعب مسافات ≤130 سم؛ 3.0 مم (صناعي) — مُصمَّم للجمالونات ذات الفتحات الواسعة ومسافات ≤140 سم. سماكات صناعية خاصة متاحة حسب الطلب للمشاريع الكبرى."
        },
        {
          id: "dimensions",
          title: "الأبعاد والعرض (Dimensions)",
          value: "الإجمالي: 1130 مم | الصافي الفعال: 1050 مم",
          desc: "العرض الكلي للوح 1130مم والتغطية الصافية الفعلية 1050مم بعد الركوب، مع إمكانية تصنيع أي طول مطلوب حتى 12 متراً لتفادي الوصلات."
        },
        {
          id: "weight",
          title: "الوزن الهندسي (Weight)",
          value: "3.2 إلى 5.5 كجم / م²",
          desc: "خفيف الوزن يقلل الحمل الميت على الهياكل والجمالونات المعدنية مع متانة فائقة ضد الكسر والصدمات في الظروف الجوية القاسية."
        },
        {
          id: "colors",
          title: "8 ألوان مصنعية (ASA Co-Extrusion)",
          value: "أبيض · كافيه · رمادي غامق · رمادي فاتح · طوبي · برتقالي · كحلي · أزرق فاتح",
          desc: "8 ألوان مصنعية رئيسية مدموجة في طبقة البثق المشترك ASA الخارجية بضمان كامل ضد الأشعة فوق البنفسجية والبهتان والتطاير لعقود."
        },
        {
          id: "thermal",
          title: "العزل الحراري (ASTM C1363)",
          value: "معامل توصيل 0.14 W/m.K — خفض 28.54%",
          desc: "معتمد بكود ASTM C1363 المعملي. يخفض درجات حرارة الداخل بمقدار 8-10 درجات مئوية مقارنة بالصاج مما يوفر فاتورة التكييف والكهرباء."
        },
        {
          id: "sound",
          title: "العزل الصوتي (ASTM E90)",
          value: "21.86 ديسيبل معتمدة (حتى 30 ديسيبل خفض)",
          desc: "نتيجة اختبار ASTM E90 المعتمدة: 21.86 ديسيبل. يمنع تماماً ضجيج الأمطار الشديدة والبرد — مثالي للمصانع، حظائر الدواجن، والمنشآت الحيوانية."
        },
        {
          id: "corrosion",
          title: "مقاومة التآكل والكيماويات",
          value: "مقاومة 100%: أحماض · قلويات · أملاح · أمونيا",
          desc: "لا يصدأ ولا يتآكل نهائياً. مثالي لمصانع الكيماويات، الأسمدة، المناطق الساحلية، مزارع الدواجن، وأي بيئة ذات رطوبة أو أبخرة كيميائية."
        },
        {
          id: "fire",
          title: "مقاومة الحريق (UL 94)",
          value: "فئة B1 — ذاتي الإطفاء",
          desc: "معتمد بكود UL 94 فئة B1. مادة ذاتية الإطفاء تتوقف عن الاشتعال فور إبعاد مصدر اللهب ولا تنتج قطرات مشتعلة ولا تساهم في انتشار الحريق."
        },
        {
          id: "flexural",
          title: "مقاومة الانحناء (ASTM D790)",
          value: "27.19 نيوتن/مم² مقاومة انحناء",
          desc: "نتيجة اختبار ASTM D790 المعتمدة: 27.19 نيوتن/مم². المرونة متعددة الطبقات تتحمل تساقط البرد الكبير وأحمال الصيانة والثلوج دون تشقق أو انكسار."
        },
        {
          id: "warranty",
          title: "الضمان المعتمد (Warranty)",
          value: "ضمان رسمي موثق لمدة 10 سنوات",
          desc: "ضمان مصنعي رسمي موثق بمدينة السادات ضد عيوب التصنيع، تدهور المواد، وتغير اللون غير الطبيعي في ظروف التعرض لأشعة الشمس المباشرة."
        }
      ],
      advantages: [
        { title: "وداعاً للصدأ والتآكل", desc: "حصانة كاملة ضد الرطوبة والأبخرة الكيميائية ورذاذ البحر المالح." },
        { title: "قوة تحمل وصدمات عالية", desc: "مرونة هندسية تمنع التشقق أو الانكسار تحت الأحمال والظروف الجوية القاسية." },
        { title: "توفير فائق في الطاقة", desc: "يعكس أشعة الشمس الحارقة ويحفظ البرودة الداخلية مما يخفض استهلاك المكيفات." },
        { title: "سهولة وسرعة التركيب", desc: "سهل القص والتشكيل والتثبيت بمسامير مخصصة ومحكمة الغلق ضد تسريب المياه." }
      ]
    },
    about: {
      title: "من نحن",
      subtitle: "كنانة رووف - المنطقة الصناعية الخامسة بمدينة السادات",
      story: "شركة كنانة رووف هي أحد الصروح الصناعية المتخصصة في إنتاج وتصنيع أنظمة الأسقف الحديثة من ألواح UPVC والبولي كربونايت. انطلاقاً من مصنعنا المتطور في المنطقة الصناعية الخامسة بمدينة السادات بمحافظة المنوفية، نقدم حلولاً هندسية متكاملة تعالج كافة عيوب الصاج التقليدي والمعادن المعرضة للتآكل.",
      our_values_title: "التزامنا بالجودة",
      our_values_text: "نحن لا نقبل المساومة في خاماتنا؛ نعتمد على أنقى المواد الخام مع إضافات الحماية الأوروبية وطبقة الـ ASA لضمان منتج يعيش لعقود، مدعوماً بضمان معتمد لمدة 10 سنوات.",
      mission_title: "مهمتنا",
      mission: [
        {
          title: "الابتكار الصناعي",
          desc: "استخدام أحدث خطوط الإنتاج والتقنيات متعددة الطبقات لتوفير أسقف ذات عمر افتراضي طويل وألوان ثابتة."
        },
        {
          title: "حلول مستدامة وخضراء",
          desc: "توفير منتج صديق للبيئة، خالٍ من الأسبستوس، موفر للطاقة، وبديل متفوق للألواح المعدنية."
        },
        {
          title: "أعلى معايير الأمان",
          desc: "تطبيق معايير السلامة المهنية ومقاومة الحريق والعزل الحراري والصوتي المعتمد دولياً."
        },
        {
          title: "تغطية كافة محافظات مصر والتصدير",
          desc: "التوريد السريع بأسطول نقل متخصص من مدينة السادات إلى جميع المشروعات في أنحاء الجمهورية والأسواق الإقليمية."
        }
      ],
      vision_title: "رؤيتنا",
      vision: "أن تصبح ألواح كنانة الخيار الهندسي الأول والموثوق لكل مصنع، هنجر، مزرعة، ومنشأة تبحث عن الأمان الكامل، العزل الفائق، والاستدامة الاقتصادية في مصر والشرق الأوسط.",
      values_title: "لماذا يفضل المهندسون والمصانع ألواح كنانة؟",
      values: [
        { title: "تقنية ASA المتطورة", desc: "تضمن ثباتاً استثنائياً للألوان ومقاومة قصوى للأشعة فوق البنفسجية UV في شمس الصيف الحارقة." },
        { title: "عزل ثلاثي المفعول", desc: "عزل حراري لخفض الحرارة، عزل صوتي يمتص ضجيج الأمطار، وعزل كامل للكهرباء لأقصى أمان." },
        { title: "أمان تام ومقاوم للحريق", desc: "ألواح ذاتية الإطفاء مصنعة وفق تصنيف B1 الصارم لسلامة المنشآت والمستودعات والمصانع." },
        { title: "ضمان حقيقي موثق 10 سنوات", desc: "لأننا نصنع بأعلى المعايير في مدينة السادات، نمنح عملاءنا ضماناً رسمياً موثقاً لمدة 10 سنوات." },
        { title: "اقتصادية وصديقة للبيئة", desc: "تخفض استهلاك الكهرباء، ولا تحتاج لصيانة دورية أو دهانات ضد الصدأ، وتدوم أضعاف عمر الصاج." },
        { title: "دعم فني واستشارات هندسية", desc: "فريقنا الهندسي يقدم لكم المشورة حول توزيع التيوبات، طريقة التثبيت، وحساب المقاسات بدقة." }
      ]
    },
    services: {
      title: "خدماتنا",
      subtitle: "تصنيع، توريد، ودعم فني متكامل للمشاريع",
      items: [
        {
          title: "تصنيع وتوريد ألواح UPVC",
          desc: "خطوط إنتاج آلية حديثة بطاقات استيعابية عالية مع قص أطوال خاصة حتى 12 متراً لتلبية احتياجات الهناجر والمصانع."
        },
        {
          title: "ألواح بولي كربونايت عالية الجودة",
          desc: "ألواح مصمتة ومفرغة لنفاذية الضوء الطبيعي وتغطيات القباب السماوية، والمظلات، والصوبات الزراعية."
        },
        {
          title: "التوريد والشحن لكافة المحافظات",
          desc: "شحن آمن وتوصيل مباشر من مصنعنا بمدينة السادات إلى موقع مشروعك في أي مكان داخل مصر."
        },
        {
          title: "الدعم الفني والاستشارات الهندسية",
          desc: "توجيهات فنية للمهندسين والمقاولين لتحديد المسافات المثالية للهياكل الحديدية وطرق التثبيت المعتمدة."
        },
        {
          title: "حساب الكميات وتفصيل المقاسات",
          desc: "مراجعة المخططات الهندسية لحساب عدد الأمتار والألواح والملحقات لمنع الهدر وتقليل التكلفة الإجمالية."
        }
      ]
    },
    projects: {
      title: "مشاريعنا",
      subtitle: "نماذج حية لأعمالنا المنفذة",
      desc: "تصفح معرض مشاريعنا المنفذة في كبرى المصانع، الهناجر، مزارع الدواجن، والمنشآت التجارية والسكنية."
    },
    faq: {
      title: "الأسئلة الشائعة (FAQ)",
      subtitle: "إجابات واضحة على أهم استفسارات المهندسين، المقاولين، وأصحاب المصانع والمزارع.",
      items: [
        {
          question: "لماذا أختار ألواح UPVC كبديل للصاج المعرج والزنك؟",
          answer: "الصاج التقليدي يتعرض للصدأ السريع والتآكل بفعل الرطوبة والكيماويات، ويسرب حرارة شديدة داخل المكان، ويصدر صوتاً مزعجاً للغاية عند هطول الأمطار. في المقابل، ألواح كنانة UPVC لا تصدأ نهائياً، وتوفر عزلاً حرارياً يخفض الحرارة حتى 10 درجات، وتكتم صوت الأمطار حتى 30 ديسيبل، وتتحمل الكيماويات مع ضمان 10 سنوات."
        },
        {
          question: "هل ألواح UPVC مقاومة للحريق والاشتعال؟",
          answer: "نعم، ألواح كنانة مصنفة Class B1 لمقاومة الحريق، وهي مادة ذاتية الإطفاء (Self-extinguishing)؛ أي أنها تتوقف عن الاشتعال ذاتياً بمجرد إبعاد مصدر اللهب، ولا تساهم في انتشار الحريق ولا تسقط قطرات مشتعلة."
        },
        {
          question: "ما هي مدة الضمان وما هي البنود التي يغطيها؟",
          answer: "نقدم ضماناً مصنعياً موثقاً لمدة 10 سنوات يشمل عيوب الصناعة، ثبات اللون (بفضل طبقة الـ ASA المقاومة للأشعة فوق البنفسجية)، ومقاومة التقوس والتآكل وتسريب المياه في الظروف الجوية الطبيعية."
        },
        {
          question: "هل يتم التوريد والشحن إلى جميع محافظات مصر؟",
          answer: "نعم، يتم التوريد والشحن المباشر من مصنعنا في مدينة السادات (المنطقة الصناعية الخامسة، قطعة 115) إلى كافة محافظات الجمهورية (القاهرة، الجيزة، الإسكندرية، الدلتا، القناة، والصعيد) بأسطول نقل آمن وبأسرع وقت."
        },
        {
          question: "هل يمكن تفصيل وقص أطوال محددة وفقاً لمخطط الجمالون أو المصنع؟",
          answer: "بالتأكيد، نوفر إمكانية قص وتصنيع أطوال مخصصة حسب طلب العميل ومخطط المشروع حتى طول 12 متراً للوح الواحد، لتجنب الوصلات العرضية وضمان العزل التام ضد المياه."
        }
      ]
    },
    quote: {
      modalTitle: "طلب عرض سعر رسمي مباشر من المصنع",
      modalSubtitle: "املأ بيانات مشروعك وسيقوم فريق المبيعات والدعم الفني بمصنع السادات بالتواصل معك وتقديم أفضل سعر.",
      name: "الاسم بالكامل",
      namePlaceholder: "أدخل اسمك أو اسم المسؤول",
      company: "اسم الشركة / المصنع",
      companyPlaceholder: "اسم المنشأة أو المصنع أو المزرعة (اختياري)",
      phone: "رقم الهاتف للتواصل",
      phonePlaceholder: "مثال: 01027000979",
      whatsapp: "رقم الواتساب",
      whatsappPlaceholder: "مثال: 01027000979",
      projectType: "نوع المشروع",
      projectTypes: [
        "مصنع / هنجر صناعي",
        "مزرعة دواجن أو إنتاج حيواني",
        "مستودع / مخزن تخزين",
        "فيلا / برجولة سكنية",
        "مظلات ومواقف سيارات",
        "صالة ألعاب / قبة سماوية (سكاي لايت)",
        "أخرى"
      ],
      governorate: "المحافظة وموقع المشروع",
      governorates: [
        "القاهرة",
        "الجيزة",
        "المنوفية / مدينة السادات",
        "الإسكندرية",
        "الشرقية / العاشر من رمضان",
        "القليوبية",
        "البحيرة",
        "الغربية",
        "الدقهلية",
        "السويس / الإسماعيلية / بورسعيد",
        "بني سويف / الفيوم",
        "محافظات الصعيد",
        "البحر الأحمر / جنوب سيناء",
        "خارج مصر (تصدير)"
      ],
      product: "المنتج المطلوب",
      products: [
        "ألواح UPVC مصمتة ترابيزية (بديل الصاج)",
        "ألواح UPVC كورجيت (Corrugated — معرجة)",
        "ألواح UPVC شكل القرميد (Tile Wave)",
        "ألواح بولي كربونايت للإضاءة الطبيعية",
        "مجرى مطر UPVC (30×25×10 سم)",
        "ملحقات (طلمبوشة، مسامير 7 سم، كابات PVC ملونة)",
        "نظام سقف متكامل (ألواح + استشارة تركيب)"
      ],
      quantity: "الكمية التقريبية (م² أو عدد الألواح)",
      quantityPlaceholder: "مثال: 450 م² أو 100 لوح",
      dimensions: "الأبعاد والأطوال المطلوبة",
      dimensionsPlaceholder: "مثال: أطوال 6 متر، 8 متر، أو أطوال مفصلة حتى 12 متر",
      thickness: "السُمك المطلوب",
      thicknesses: ["2.0 مم (قياسي — مدادات ≤75 سم)", "2.5 مم (أحمال شاقة — مدادات ≤130 سم)", "3.0 مم (صناعي — مدادات ≤140 سم)"],
      color: "اللون المفضل من ألوان المصنع",
      colors: ["أبيض (White)", "كافيه (Cafe)", "رمادي غامق (Dark Grey)", "رمادي فاتح (Light Grey)", "طوبي / قرميدي (Terracotta)", "برتقالي (Orange)", "كحلي (Navy Blue)", "أزرق فاتح (Light Blue)"],
      notes: "المخطط الهندسي أو ملاحظات إضافية",
      notesPlaceholder: "اذكر أي تفاصيل إضافية عن المسافة بين التيوبات، موعد التوريد، أو أي متطلبات خاصة...",
      submitWhatsApp: "إرسال عبر واتساب (أسرع)",
      submitEmail: "إرسال عبر البريد الإلكتروني",
      submitting: "جاري تجهيز الطلب...",
      successTitle: "تم استلام طلب عرض السعر بنجاح!",
      successDesc: "شكراً لتواصلك مع كنانة رووف. سيقوم مهندس المبيعات بمراجعة مواصفات مشروعك والتواصل معك فوراً.",
      close: "إغلاق"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "المصنع الرئيسي - زيارات واستفسارات التوريد",
      form: {
        name: "الاسم",
        company: "اسم الشركة / المنشأة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        projectType: "نوع المشروع",
        message: "الرسالة أو تفاصيل الطلب",
        submit: "إرسال الرسالة"
      },
      info: {
        address: "مصر، محافظة المنوفية، مدينة السادات، المنطقة الصناعية الخامسة، قطعة 115",
        email: "kananaroof@gmail.com",
        phone: "+201222522624",
        displayPhone: "01222522624",
        whatsapp: "+201222522624",
        workingHours: "السبت - الخميس: 8:00 ص - 5:00 م (الجمعة عطلة أسبوعية)",
        website: "www.kananaroof.com",
        googleMapsUrl: "https://maps.google.com/?q=30.387001,30.562778"
      }
    },
    footer: {
      rights: "© 2025 كنانة رووف (Kanana Roof). جميع الحقوق محفوظة.",
      quick_links: "روابط سريعة",
      catalog: "تحميل الكتالوج الفني PDF",
      factory_location: "المنطقة الصناعية بمدينة السادات"
    }
  }
};
