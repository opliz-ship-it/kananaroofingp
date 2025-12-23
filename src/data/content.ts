export interface NavItems {
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  services_cta: string;
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
  email: string;
  phone: string;
  message: string;
  submit: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  form: ContactForm;
  info: ContactInfo;
}

export interface FooterSection {
  rights: string;
}

export interface Content {
  nav: NavItems;
  hero: HeroSection;
  about: AboutSection;
  services: ServicesSection;
  projects: ProjectsSection;
  contact: ContactSection;
  footer: FooterSection;
}

export const content: Record<'en' | 'ar', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us",
    },
    hero: {
      title: "Kanana Roofing Sheet",
      subtitle: "Your Secure Investment for a Lasting Roof",
      description: "Specialized in manufacturing high-quality PVC and Polycarbonate roofing sheets for residential, commercial, and industrial sectors.",
      cta: "Get a Quote",
      services_cta: "Our Services"
    },
    about: {
      title: "About Us",
      subtitle: "   ",
      story: "We provide more than just roofing sheets; we deliver a comprehensive engineering solution that addresses the shortcomings of traditional materials. Here are 6 reasons why we are your ideal choice:",
      our_values_title: "Our Values",
      our_values_text: "We accept no compromises; our products are engineered to endure and last, backed by a genuine 10-year warranty and an ASA layer that preserves color vibrancy.",
      mission_title: "Our Mission",
      mission: [
        {
          title: "Industrial Innovation",
          desc: "Utilizing advanced ASA technology to guarantee exceptional color stability and resistance to fading."
        },
        {
          title: "Environmental Sustainability",
          desc: "Providing an eco-friendly product that serves as a superior alternative to traditional metal roofing sheets."
        },
        {
          title: "Reliable Quality",
          desc: "Offering a 10-year warranty, along with fire resistance, and superior sound and thermal insulation."
        },
        {
          title: "Global Expansion",
          desc: "Launching from Sadat City to meet the demands of international markets and expand our global footprint."
        }
      ],
      vision_title: "Our Vision",
      vision: "To have Kanana Roofing Sheets cover every project seeking safety and sustainability, becoming the trusted partner for businesses and homes in Egypt and across the globe.",
      values_title: "Why Choose Kanana Roofing Sheets?",
      values: [
        { title: "Advanced ASA Technology", desc: "Our products guarantee exceptional color stability and superior resistance to Ultra-Violet (UV) rays, keeping your facility looking brand new for years without fading." },
        { title: "Triple-Action Insulation", desc: "Say goodbye to scorching summer heat and the noise of rain. Our sheets provide thermal insulation to lower indoor temperatures, acoustic insulation to ensure quietness, and light insulation for total comfort." },
        { title: "Total Safety & Fire Resistance", desc: "Safety is our top priority. Kenana sheets are manufactured from self-extinguishing and flame-retardant materials, providing maximum protection for factories, warehouses, and homes." },
        { title: "A Real 10-Year Warranty", desc: "Because we trust our manufacturing quality and raw materials at our Sadat City factory, we offer a documented 10-year warranty against manufacturing defects and specification changes." },
        { title: "Sustainability & Eco-Friendliness", desc: "We are proud to offer a \"Green\" alternative to traditional metal sheets. Our products are free from harmful substances, fully recyclable, and contribute to reducing energy consumption thanks to their insulation properties." },
        { title: "A Team Dedicated to Excellence", desc: "Behind our products stands a team of highly skilled technical experts trained to the highest global standards, ensuring precision in production and professionalism in supply and service." }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Roofing Solutions",
      items: [
        {
          title: "PVC Roofing Sheets Manufacturing",
          desc: "High-quality PVC sheets known for durability, weather resistance, and thermal insulation."
        },
        {
          title: "Polycarbonate Roofing Sheets",
          desc: "Versatile and strong polycarbonate sheets suitable for skylights and greenhouses."
        },
        {
          title: "Delivery & Installation",
          desc: "Professional installation teams and secure delivery to your site."
        },
        {
          title: "Technical Support",
          desc: "Expert advice and support for all your roofing technical needs."
        },
        {
          title: "Design Consultation",
          desc: "Customized design solutions to match your architectural vision."
        }
      ]
    },
    projects: {
      title: "Our Projects",
      subtitle: "A Glimpse of Our Excellence",
      desc: "Browse through our gallery of completed residential, commercial, and industrial projects."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get In Touch",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send Message"
      },
      info: {
        address: "Egypt, Menoufia, Sadat City, 5th Industrial Zone, Plot 115",
        email: "kananaroof@gmail.com",
        phone: "+201222522624"
      }
    },
    footer: {
      rights: "© 2025 Kanana Roofing Sheet. All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
    },
    hero: {
      title: "كنانه روفنج شيت",
      subtitle: "استثمارك الآمن لسقف يدوم",
      description: "متخصصون في تصنيع وإنتاج ألواح الاسقف (PVC) والبولي كربونايت للقطاعات السكنية والتجارية والصناعية.",
      cta: "اطلب عرض سعر",
      services_cta: "خدماتنا"
    },
    about: {
      title: "من نحن",
      subtitle: "   ",
      story: "نحن نقدم أكثر من مجرد ألواح أسقف؛ نحن نقدم حلاً هندسياً شاملاً يعالج عيوب المواد التقليدية. إليك 6 أسباب تجعلنا خيارك الأمثل:",
      our_values_title: "قيمنا",
      our_values_text: "نحن لا نقبل المساومة؛ منتجاتنا مصممة لتدوم وتتحمل، مدعومة بضمان حقيقي لمدة 10 سنوات وطبقة ASA التي تحافظ على حيوية الألوان.",
      mission_title: "مهمتنا",
      mission: [
        {
          title: "الابتكار الصناعي",
          desc: "استخدام تقنية ASA المتقدمة لضمان ثبات استثنائي للألوان ومقاومة للبهتان."
        },
        {
          title: "الاستدامة البيئية",
          desc: "تقديم منتج صديق للبيئة يعتبر بديلاً متفوقاً لألواح الأسقف المعدنية التقليدية."
        },
        {
          title: "جودة موثوقة",
          desc: "تقديم ضمان لمدة 10 سنوات، إلى جانب مقاومة الحريق، وعزل صوتي وحراري فائق."
        },
        {
          title: "التوسع العالمي",
          desc: "الانطلاق من مدينة السادات لتلبية طلبات الأسواق الدولية وتوسيع بصمتنا العالمية."
        }
      ],
      vision_title: "رؤيتنا",
      vision: "أن تغطي ألواح كنانة سقف كل مشروع يبحث عن الأمان والاستدامة، لنصبح الشريك الموثوق للأعمال والمنازل في مصر وحول العالم.",
      values_title: "لماذا تختار ألواح كنانه؟",
      values: [
        { title: "تقنية ASA المتطورة", desc: "تضمن منتجاتنا ثباتاً استثنائياً للألوان ومقاومة فائقة للأشعة فوق البنفسجية (UV)، مما يحافظ على مظهر منشأتك جديداً لسنوات دون بهتان." },
        { title: "عزل ثلاثي المفعول", desc: "وداعاً لحرارة الصيف الحارقة وضجيج المطر. توفر ألواحنا عزلاً حرارياً لخفض درجات الحرارة الداخلية، وعزلاً صوتياً لضمان الهدوء، وعزلاً ضوئياً لراحة تامة." },
        { title: "أمان تام ومقاومة للحريق", desc: "الأمان هو أولويتنا القصوى. تُصنع ألواح كنانة من مواد ذاتية الإطفاء ومقاومة للاشتعال، مما يوفر أقصى درجات الحماية للمصانع والمستودعات والمنازل." },
        { title: "ضمان حقيقي لمدة 10 سنوات", desc: "لأننا نثق في جودة تصنيعنا وموادنا الخام في مصنعنا بمدينة السادات، نقدم ضماناً موثقاً لمدة 10 سنوات ضد عيوب الصناعة وتغير المواصفات." },
        { title: "استدامة وصداقة للبيئة", desc: "نفخر بتقديم بديل \"أخضر\" للألواح المعدنية التقليدية. منتجاتنا خالية من المواد الضارة، وقابلة لإعادة التدوير بالكامل، وتساهم في تقليل استهلاك الطاقة بفضل خصائص العزل." },
        { title: "فريق مكرس للتميز", desc: "يقف خلف منتجاتنا فريق من الخبراء الفنيين المهرة المدربين على أعلى المعايير العالمية، لضمان الدقة في الإنتاج والاحترافية في التوريد والخدمة." }
      ]
    },
    services: {
      title: "خاتنا",
      subtitle: "حلول أسقف شاملة",
      items: [
        {
          title: "تصنيع ألواح  PVC",
          desc: "ألواح PVC عالية الجودة تتميز بالمتانة ومقاومة العوامل الجوية والعزل الحراري."
        },
        {
          title: "ألواح بولي كربونايت",
          desc: "ألواح قوية ومتعددة الاستخدامات مناسبة للقباب السماوية والصوبات الزراعية."
        },
        {
          title: "التوريد والتركيب",
          desc: "فرق تركيب محترفة وتوصيل آمن إلى موقعك."
        },
        {
          title: "الدعم الفني",
          desc: "مشورة الخبراء ودعم لجميع احتياجاتك الفنية المتعلقة بالأسقف."
        },
        {
          title: "استشارات التصميم",
          desc: "حلول تصميم مخصصة تتناسب مع رؤيتك المعمارية."
        }
      ]
    },
    projects: {
      title: "مشاريعنا",
      subtitle: "لمحة من تميزنا",
      desc: "تصفح معرض مشاريعنا المكتملة في القطاعات السكنية والتجارية والصناعية."
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "ابقى على تواصل",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "الرسالة",
        submit: "إرسال الرسالة"
      },
      info: {
        address: "مصر، المنوفية، مدينة السادات، المنطقة الصناعية الخامسة، قطعة 115",
        email: "kananaroof@gmail.com",
        phone: "+201222522624"
      }
    },
    footer: {
      rights: "© 2025 كنانه روفنج شيت. جميع الحقوق محفوظة."
    }
  }
};
