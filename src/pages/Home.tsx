import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import Link from '../components/Link';
import { 
    CheckCircle, 
    ChevronRight, 
    ChevronDown, 
    Calculator, 
    FileDown, 
    ShieldCheck, 
    Flame, 
    VolumeX, 
    SunMedium, 
    Layers, 
    Ruler, 
    Palette, 
    Building2, 
    MapPin, 
    Phone, 
    Clock, 
    Star,
    Sparkles,
    Eye,
    X
} from 'lucide-react';
import { client, urlFor } from '../client';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';
import project9 from '../assets/project9.jpg';
import project10 from '../assets/project10.jpg';
import project11 from '../assets/project11.jpg';
import project12 from '../assets/project12.jpg';
import project13 from '../assets/project13.jpg';
import project14 from '../assets/project14.jpg';
import project15 from '../assets/project15.jpg';
import project16 from '../assets/project16.jpg';
import project17 from '../assets/project17.jpg';
import heroBg from '../assets/hero-bg.jpg';

export interface SanityProject {
    _id: string;
    titleEn?: string;
    titleAr?: string;
    descriptionEn?: string;
    descriptionAr?: string;
    category?: 'hangars' | 'farms' | 'warehouses' | 'canopies' | 'products';
    tagAr?: string;
    tagEn?: string;
    locationAr?: string;
    locationEn?: string;
    image?: any;
    img?: string;
    isStatic?: boolean;
}

const Home = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];
    const isRTL = language === 'ar';
    const arrowIcon = isRTL ? <ChevronRight className="rotate-180" /> : <ChevronRight />;

    const [sanityProjects, setSanityProjects] = useState<SanityProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [lightboxProject, setLightboxProject] = useState<SanityProject | null>(null);

    const staticProjects: SanityProject[] = [
        { 
            _id: 'static-10', 
            img: project10, 
            titleAr: "مجمع مصانع عملاق - تغطية ألواح كنانة الحمراء", 
            titleEn: "Mega Factory Complex — Terracotta UPVC Roofing", 
            category: 'hangars',
            tagAr: "ألواح UPVC سماكة 2.5 مم معالجة ASA",
            tagEn: "2.5mm Heavy-Duty ASA UPVC",
            locationAr: "المنطقة الصناعية - السادات",
            locationEn: "Sadat City Industrial Zone",
            descriptionAr: "تغطية جمالونات مصنع صناعي متكامل بمساحة تتجاوز 4,500 م² بألواح كنانة المقاومة للأحماض والعوامل الجوية.",
            descriptionEn: "Complete industrial roofing spanning over 4,500 sqm with chemical and weather resistant Kanana UPVC sheets.",
            isStatic: true 
        },
        { 
            _id: 'static-2', 
            img: project2, 
            titleAr: "مزرعة دواجن كبرى - عزل حراري وصوتي ثلاثي", 
            titleEn: "Commercial Poultry Farm — Triple Thermal Insulation", 
            category: 'farms',
            tagAr: "خفض درجات الحرارة حتى 10 درجات مئوية",
            tagEn: "Cuts Heat by 10°C — 28 dB Sound Absorption",
            locationAr: "طريق مصر إسكندرية الصحراوي",
            locationEn: "Cairo-Alexandria Desert Road",
            descriptionAr: "عزل كامل لحظائر الدواجن لحماية القطيع من الإجهاد الحراري مع عزل صوتي للأمطار والرياح لزيادة إنتاجية المزرعة.",
            descriptionEn: "Full thermal and acoustic insulation protecting poultry from heat stress and severe rain noise.",
            isStatic: true 
        },
        { 
            _id: 'static-11', 
            img: project11, 
            titleAr: "مزرعة نموذجية - هناجر إنتاج داجني وحيواني", 
            titleEn: "Modern Poultry & Livestock Agricultural Hangars", 
            category: 'farms',
            tagAr: "مقاومة 100% لأبخرة الأمونيا والرطوبة",
            tagEn: "100% Immune to Ammonia & Moisture",
            locationAr: "محافظة البحيرة - النوبارية",
            locationEn: "Nubaria, Beheira",
            descriptionAr: "تركيب ألواح كنانة المقاومة لغاز الأمونيا بدون أي صدأ أو تآكل مع إضاءة وعزل متكاملين.",
            descriptionEn: "Installation of Kanana ammonia-immune sheets providing zero rust and superior interior climate.",
            isStatic: true 
        },
        { 
            _id: 'static-1', 
            img: project1, 
            titleAr: "مصنع أسمدة وكيماويات - مقاومة التآكل والأحماض", 
            titleEn: "Chemical & Fertilizer Plant — Full Acid Resistance", 
            category: 'hangars',
            tagAr: "مقاوم للأحماض والقلويات والأملاح",
            tagEn: "Resistant to Acids, Alkalis & Salts",
            locationAr: "العين السخنة - المنطقة الاقتصادية",
            locationEn: "Ain Sokhna Economic Zone",
            descriptionAr: "البديل المثالي للصاج المعدني المتآكل في بيئات التصنيع الكيميائي والأسمدة ذات الانبعاثات الحارقة.",
            descriptionEn: "The ultimate alternative to corroded metal sheets in harsh chemical and fertilizer manufacturing plants.",
            isStatic: true 
        },
        { 
            _id: 'static-3', 
            img: project3, 
            titleAr: "مستودعات تخزين لوجستي كبرى", 
            titleEn: "Logistics Hub & Mega Storage Warehouses", 
            category: 'warehouses',
            tagAr: "أطوال مخصصة حتى 12 متراً لمنع التسريب",
            tagEn: "Custom Cut Lengths up to 12m",
            locationAr: "مدينة العاشر من رمضان",
            locationEn: "10th of Ramadan City",
            descriptionAr: "تغطية هناجر لوجستية بأطوال مخصصة حتى 12 متراً تلغي الوصلات العرضية وتضمن عدم تسريب مياه الأمطار نهائياً.",
            descriptionEn: "Continuous sheet lengths up to 12 meters preventing leaks and protecting high-value stored inventory.",
            isStatic: true 
        },
        { 
            _id: 'static-12', 
            img: project12, 
            titleAr: "مظلات شحن ومستودعات تجارية ومواقف أسطول", 
            titleEn: "Logistics Shade Canopy & Fleet Parking Structure", 
            category: 'canopies',
            tagAr: "حماية تامة من الأشعة فوق البنفسجية ASA",
            tagEn: "ASA UV Weathering Shield",
            locationAr: "مدينة 6 أكتوبر",
            locationEn: "6th of October City",
            descriptionAr: "مظلات واسعة بألواح UPVC زرقاء معالجة بطبقة ASA الخارجية المقاومة للبهتان وتغير الألوان.",
            descriptionEn: "Wide-span architectural blue UPVC canopies engineered with ASA weatherable protective skin.",
            isStatic: true 
        },
        { 
            _id: 'static-4', 
            img: project4, 
            titleAr: "منشأة صناعية - تغطية UPVC بالكامل", 
            titleEn: "Industrial Facility UPVC Complete Enclosure", 
            category: 'hangars',
            tagAr: "متانة عالية ضد الصدمات والرياح",
            tagEn: "High Impact & Wind Load Resistance",
            locationAr: "مدينة السادات - المنوفية",
            locationEn: "Sadat City Industrial Park",
            descriptionAr: "سقف UPVC رباعي الطبقات يجمع بين المتانة الميكانيكية العالية والعزل الكهربائي التام لتأمين المنشآت الصناعية.",
            descriptionEn: "4-layer UPVC roofing combining structural durability with electrical non-conductivity.",
            isStatic: true 
        },
        { 
            _id: 'static-5', 
            img: project5, 
            titleAr: "حظيرة مواشي كبيرة - عزل متكامل للبيئة الحيوانية", 
            titleEn: "Livestock Barn — Comprehensive Bio-Insulation", 
            category: 'farms',
            tagAr: "عزل صوتي يمنع هلع المواشي أثناء العواصف",
            tagEn: "Sound Dampening for Livestock Comfort",
            locationAr: "محافظة الإسماعيلية",
            locationEn: "Ismailia Governorate",
            descriptionAr: "تغطية مزارع الأبقار والمواشي بألواح كنانة لتخفيض درجات الحرارة وكتم أصوات الرعد والأمطار لبيئة إنتاجية مثالية.",
            descriptionEn: "Optimal barn climate with Kanana sheets reducing stress and maintaining livestock productivity.",
            isStatic: true 
        },
        { 
            _id: 'static-8', 
            img: project8, 
            titleAr: "أعمال تركيب ألواح كنانة على الهياكل الفولاذية", 
            titleEn: "On-Site UPVC Installation on Structural Steel Purlins", 
            category: 'hangars',
            tagAr: "سهولة وسرعة التركيب بمسامير محكمة",
            tagEn: "Fast & Secure Purlin Fastening",
            locationAr: "مشروع قيد التنفيذ - مدينة السادات",
            locationEn: "Active Jobsite, Sadat City",
            descriptionAr: "لقطة حية من موقع التركيب توضح خفة وزن الألواح وتثبيتها السهل على المسافات الهندسية للمدادات.",
            descriptionEn: "Real jobsite capture demonstrating lightweight handling and precise fastening to structural purlins.",
            isStatic: true 
        },
        { 
            _id: 'static-6', 
            img: project6, 
            titleAr: "مشروع هنجر جمالون صناعي ضخم", 
            titleEn: "Mega Industrial Steel Hangar Project", 
            category: 'hangars',
            tagAr: "تصميم مخصص للبحور الإنشائية الواسعة",
            tagEn: "Engineered for Wide-Span Steel Frames",
            locationAr: "مدينة برج العرب الجديدة",
            locationEn: "New Borg El Arab City",
            descriptionAr: "تغطية سقف جمالون بارتفاع شاهق وبحر واسع يقلل الأحمال الميتة على الأساسات الحديدية بنسبة تصل إلى 50%.",
            descriptionEn: "High-clearance hangar roof slashing dead load on structural foundations by up to 50%.",
            isStatic: true 
        },
        { 
            _id: 'static-7', 
            img: project7, 
            titleAr: "كنانة رووف - سقف يعتمد عليه (اعتماد المصنع)", 
            titleEn: "Kanana Roof — Certified Engineering Performance", 
            category: 'canopies',
            tagAr: "ضمان رسمي موثق لمدة 10 سنوات",
            tagEn: "10-Year Documented Factory Warranty",
            locationAr: "المصنع الرئيسي - مدينة السادات",
            locationEn: "Main Factory, Sadat City",
            descriptionAr: "شعار وهوية كنانة رووف المعبرة عن سقف يعتمد عليه في كبرى مشاريع مصر والشرق الأوسط.",
            descriptionEn: "The official mark of Kanana Roof durability across prominent industrial and agricultural projects.",
            isStatic: true 
        },
        { 
            _id: 'static-9', 
            img: project9, 
            titleAr: "هيكل جمالون صناعي متطور قبل استكمال التغطية", 
            titleEn: "Industrial Structural Steel Framework Prior to Cladding", 
            category: 'hangars',
            tagAr: "دعم فني لتحديد مسافات المدادات",
            tagEn: "Purlin Pitch Consultation Support",
            locationAr: "محافظة القليوبية",
            locationEn: "Qalyubia Governorate",
            descriptionAr: "تنسيق هندسي مباشر مع مهندسي الموقع لمطابقة مسافات المدادات مع سماكة ألواح UPVC المختارة.",
            descriptionEn: "Direct engineering collaboration matching purlin spacing to the selected UPVC sheet thickness.",
            isStatic: true 
        },
        { 
            _id: 'static-13', 
            img: project13, 
            titleAr: "توريد ألواح كنانة رووف المعرجة - جاهزية الشحن المباشر", 
            titleEn: "Kanana Corrugated UPVC Roofing Sheets — Dispatch Ready", 
            category: 'products',
            tagAr: "ألواح معالجة ASA - مقاومة للأشعة فوق البنفسجية",
            tagEn: "ASA Treated - Full UV & Weather Shield",
            locationAr: "مقر المصنع - المنطقة الصناعية الخامسة بالسادات",
            locationEn: "Factory Yard - 5th Industrial Zone, Sadat City",
            descriptionAr: "شحنات ألواح كنانة رووف الصفراء المعرجة مجهزة ومعبأة ومغلفة بأعلى معايير الأمان للتحميل المباشر إلى مواقع المشاريع.",
            descriptionEn: "Bundles of yellow corrugated Kanana UPVC sheets securely palletized and inspected for direct delivery to project sites.",
            isStatic: true 
        },
        { 
            _id: 'static-14', 
            img: project14, 
            titleAr: "إكسسوارات وقطع ألواح كنانة رووف للجمالونات وذروة السقف", 
            titleEn: "Kanana UPVC Ridge Caps & Flashing Accessories", 
            category: 'products',
            tagAr: "قطع تكميلية محكمة لمنع تسريب مياه الأمطار",
            tagEn: "Complementary Ridge Caps for Leak-Proof Sealing",
            locationAr: "مستودعات الإنتاج - مدينة السادات",
            locationEn: "Production Storage, Sadat City",
            descriptionAr: "تصنيع قطع الإكسسوارات والذروات وكفرات الزوايا من نفس خامة ألواح UPVC لضمان إحكام تام وعزل كامل للمياه والرياح.",
            descriptionEn: "Factory-fabricated ridge caps and flashings engineered from identical UPVC resin ensuring seamless watertight integrity.",
            isStatic: true 
        },
        { 
            _id: 'static-15', 
            img: project15, 
            titleAr: "ألواح كنانة رووف الخضراء العازلة لمزارع الدواجن والجمالونات", 
            titleEn: "Green Insulated UPVC Sheets for Poultry & Industrial Hangars", 
            category: 'farms',
            tagAr: "عزل حراري 28.5% ومقاومة تامة لغاز الأمونيا",
            tagEn: "28.5% Thermal Reduction & 100% Ammonia Immune",
            locationAr: "خطوط إنتاج المصنع - السادات",
            locationEn: "Manufacturing Lines, Sadat City",
            descriptionAr: "ألواح UPVC خضراء مميزة ومخصصة لبيئات الإنتاج الحيواني ومزارع الدواجن والهناجر لمقاومة غازات التخمر والرطوبة المرتفعة.",
            descriptionEn: "Specialized green UPVC sheets engineered for agricultural poultry farms and high-humidity environments.",
            isStatic: true 
        },
        { 
            _id: 'static-16', 
            img: project16, 
            titleAr: "قطاع موجات وسماكات ألواح كنانة UPVC متعددة الطبقات", 
            titleEn: "Multi-Layer Corrugated UPVC Wave Profile & Thickness", 
            category: 'products',
            tagAr: "بثق رباعي مشترك ASA - سماكات مصنعية حتى 3.0 مم",
            tagEn: "4-Layer ASA Co-Extrusion — Up to 3.0mm Thickness",
            locationAr: "مختبر الجودة والإنتاج - السادات",
            locationEn: "Quality & Testing Lab, Sadat City",
            descriptionAr: "مقطع دقيق يوضح تموجات الألواح وتماسك الطبقات الأربع مع طبقة ASA الخارجية التي تضمن المتانة والصلابة لعشرات السنوات.",
            descriptionEn: "Detailed profile cross-section demonstrating corrugation depth, composite density, and genuine ASA weather skin.",
            isStatic: true 
        },
        { 
            _id: 'static-17', 
            img: project17, 
            titleAr: "تجهيز وتحميل طلبيات ألواح كنانة لكبرى المشاريع الهندسية", 
            titleEn: "Heavy-Duty Bundles Prepared for Major Engineering Projects", 
            category: 'warehouses',
            tagAr: "أطوال مخصصة حتى 12 متراً وتحميل سريع",
            tagEn: "Custom Lengths up to 12m with Rapid Loading",
            locationAr: "ساحة التحميل المباشر - مدينة السادات",
            locationEn: "Dispatch Yard, Sadat City",
            descriptionAr: "رصات منتجات كنانة رووف جاهزة للتوزيع لكبرى شركات المقاولات والإنشاءات الصناعية بجميع محافظات مصر.",
            descriptionEn: "Fully prepared consignments of Kanana roofing sheets ready for nationwide delivery to construction contractors.",
            isStatic: true 
        }
    ];

    useEffect(() => {
        client.fetch<SanityProject[]>(`*[_type == "project"] | order(_createdAt desc)`)
            .then((data) => {
                if (data && data.length >= 10) {
                    setSanityProjects(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects for Home, using static fallback:", err);
                setLoading(false);
            });
    }, []);

    const rawProjects = sanityProjects.length >= 10 ? sanityProjects : staticProjects;
    const activeProjects = activeCategory === 'all' 
        ? rawProjects 
        : rawProjects.filter(p => p.category === activeCategory);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const getSpecIcon = (id: string) => {
        switch (id) {
            case 'thickness': return <Layers className="text-terracotta-500" size={24} />;
            case 'dimensions': return <Ruler className="text-terracotta-500" size={24} />;
            case 'weight': return <Building2 className="text-terracotta-500" size={24} />;
            case 'colors': return <Palette className="text-terracotta-500" size={24} />;
            case 'thermal': return <SunMedium className="text-amber-500" size={24} />;
            case 'sound': return <VolumeX className="text-blue-500" size={24} />;
            case 'corrosion': return <ShieldCheck className="text-emerald-500" size={24} />;
            case 'fire': return <Flame className="text-rose-500" size={24} />;
            case 'strength': return <ShieldCheck className="text-indigo-500" size={24} />;
            case 'warranty': return <ShieldCheck className="text-terracotta-600" size={24} />;
            default: return <CheckCircle className="text-terracotta-500" size={24} />;
        }
    };

    return (
        <div className="flex flex-col">
            <SEO lang={language} />

            {/* 1. Hero Section - Focused on UPVC Manufacturing & Supply */}
            <section 
                id="hero" 
                className="relative min-h-[90vh] flex items-center justify-center bg-industrial-light bg-cover bg-center bg-no-repeat py-20"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.88)), url(${heroBg})` 
                }}
            >
                <div className="container mx-auto px-4 text-center z-10 max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold mb-6">
                        <Sparkles size={16} className="text-terracotta-400" />
                        <span>{text.specs.tag}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
                        {text.hero.title}
                    </h1>

                    <p className="text-2xl md:text-3xl text-terracotta-400 font-bold mb-6 drop-shadow-sm">
                        {text.hero.subtitle}
                    </p>

                    <p className="mb-8 text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                        {text.hero.description}
                    </p>

                    {/* Price Indicator Callout */}
                    <div className="inline-block bg-terracotta-500/20 backdrop-blur-md border border-terracotta-400/30 text-terracotta-200 font-medium px-5 py-2 rounded-lg text-sm mb-10">
                        ⚡ {text.hero.starting_price}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button 
                            onClick={() => openQuoteModal()}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-terracotta-700 transition-all shadow-xl shadow-terracotta-600/30 hover:scale-105 text-base"
                        >
                            <Calculator size={20} />
                            <span>{text.hero.cta}</span>
                        </button>

                        <a 
                            href="#specs" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 text-base backdrop-blur-sm"
                        >
                            <Layers size={20} className="text-terracotta-400" />
                            <span>{text.hero.services_cta}</span>
                        </a>

                        <a 
                            href="/kanana-roofing-catalog.pdf" 
                            download
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white px-6 py-4 rounded-xl font-medium transition-colors text-sm underline underline-offset-4"
                        >
                            <FileDown size={18} />
                            <span>{text.hero.catalog_cta}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. UPVC Engineering & Technical Specifications Section (Core Priority) */}
            <section id="specs" className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3 py-1.5 rounded-full inline-block mb-3">
                            {text.specs.tag}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-gray mb-4">
                            {text.specs.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {text.specs.subtitle}
                        </p>
                    </div>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {text.specs.specs.map((spec) => (
                            <div 
                                key={spec.id} 
                                className="bg-gray-50/70 hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-terracotta-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 border border-gray-100 group-hover:scale-110 transition-transform">
                                        {getSpecIcon(spec.id)}
                                    </div>
                                    <h3 className="text-lg font-extrabold text-gray-900 mb-2.5 spec-card-font">{spec.title}</h3>
                                    <div 
                                        className="inline-block bg-terracotta-50/90 px-3.5 py-1.5 rounded-lg text-sm font-bold text-terracotta-700 border border-terracotta-200/70 mb-3.5 leading-normal spec-badge-font"
                                        dir="rtl"
                                    >
                                        {spec.value}
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed spec-desc-font font-normal text-right" dir="rtl">{spec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Engineering Callout Banner */}
                    <div className="bg-gradient-to-r from-industrial-gray to-gray-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <div className="inline-flex items-center gap-2 text-terracotta-400 font-bold text-sm">
                                <ShieldCheck size={20} />
                                <span>{language === 'ar' ? 'اعتماد المصنع والضمان' : 'Factory Certified Warranty'}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold">
                                {language === 'ar' 
                                    ? 'هل تخطط لسقف مصنعك أو جمالون مشروعك القادم؟' 
                                    : 'Planning the roof for your next factory or agricultural hangar?'}
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {text.specs.engineering_note}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                            <button
                                onClick={() => openQuoteModal({ product: text.specs.specs[0].title })}
                                className="inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-terracotta-600/30 transition-all hover:scale-105"
                            >
                                <Calculator size={20} />
                                <span>{text.nav.quote}</span>
                            </button>

                            <a
                                href="/kanana-roofing-catalog.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-4 rounded-xl transition-all"
                            >
                                <FileDown size={18} />
                                <span>{text.hero.catalog_cta}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Section (Secondary as requested) */}
            <section id="services" className="py-20 bg-industrial-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-industrial-gray mb-3">{text.services.title}</h2>
                        <p className="text-gray-600">{text.services.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {text.services.items.slice(0, 3).map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta-500">
                                <h3 className="text-xl font-bold mb-3 text-industrial-gray">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/services" className="inline-flex items-center gap-2 text-terracotta-600 font-bold hover:text-terracotta-700">
                            {isRTL ? 'عرض جميع الخدمات وحلول التوريد' : 'View All Manufacturing Services'} {arrowIcon}
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Projects Gallery Showcase (Rich Interactive Distribution) */}
            <section id="projects" className="py-24 bg-gradient-to-b from-white via-industrial-light/40 to-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-terracotta-100">
                            {language === 'ar' ? 'معرض الأعمال والمشاريع المنفذة' : 'Executed Projects Gallery'}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-gray mb-4">
                            {text.projects.title}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            {text.projects.desc}
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
                        {[
                            { id: 'all', labelAr: `جميع المشاريع والمنتجات (${rawProjects.length})`, labelEn: `All (${rawProjects.length})` },
                            { id: 'hangars', labelAr: 'مصانع وهناجر جمالون', labelEn: 'Factories & Hangars' },
                            { id: 'farms', labelAr: 'مزارع دواجن وإنتاج حيواني', labelEn: 'Poultry & Livestock Farms' },
                            { id: 'warehouses', labelAr: 'مستودعات ولوجستيات', labelEn: 'Logistics Warehouses' },
                            { id: 'canopies', labelAr: 'مظلات وتطبيقات معمارية', labelEn: 'Canopies & Pergolas' },
                            { id: 'products', labelAr: 'ألواح وقطاعات المصنع', labelEn: 'Factory Sheets & Profiles' },
                        ].map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                                        isActive
                                            ? 'bg-terracotta-600 text-white shadow-md shadow-terracotta-600/30 scale-105'
                                            : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200/80 shadow-xs'
                                    }`}
                                >
                                    <span>{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Featured Top Project (Hero Showcase when in All view) */}
                    {activeCategory === 'all' && activeProjects.length > 0 && (
                        <div className="mb-10 bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 group transition-all duration-300 hover:border-terracotta-500/50">
                            <div className="lg:col-span-7 relative overflow-hidden aspect-video lg:aspect-auto min-h-[320px] bg-black">
                                <img 
                                    src={activeProjects[0].img || (activeProjects[0].image && urlFor(activeProjects[0].image).url())} 
                                    alt={language === 'ar' ? activeProjects[0].titleAr : activeProjects[0].titleEn}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-terracotta-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                                    <Sparkles size={14} />
                                    <span>{language === 'ar' ? 'مشروع رئيسي مميز' : 'Featured Flagship Project'}</span>
                                </div>
                                <button
                                    onClick={() => setLightboxProject(activeProjects[0])}
                                    className="absolute bottom-4 ltr:right-4 rtl:left-4 p-3 bg-white/90 hover:bg-white text-gray-900 rounded-xl shadow-lg transition-transform hover:scale-110 flex items-center gap-2 text-xs font-bold backdrop-blur-xs"
                                    title={language === 'ar' ? 'معاينة بالحجم الكامل' : 'Zoom Image'}
                                >
                                    <Eye size={16} className="text-terracotta-600" />
                                    <span>{language === 'ar' ? 'تكبير الصورة' : 'View Full Image'}</span>
                                </button>
                            </div>
                            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/50">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        {activeProjects[0].tagAr && (
                                            <span className="text-xs font-bold text-terracotta-700 bg-terracotta-50 border border-terracotta-100 px-3 py-1 rounded-md">
                                                {language === 'ar' ? activeProjects[0].tagAr : activeProjects[0].tagEn}
                                            </span>
                                        )}
                                        {activeProjects[0].locationAr && (
                                            <span className="text-xs text-gray-500 flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md">
                                                <MapPin size={12} className="text-gray-400" />
                                                <span>{language === 'ar' ? activeProjects[0].locationAr : activeProjects[0].locationEn}</span>
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                                        {language === 'ar' ? activeProjects[0].titleAr : activeProjects[0].titleEn}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {language === 'ar' ? activeProjects[0].descriptionAr : activeProjects[0].descriptionEn}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => openQuoteModal({ product: activeProjects[0].titleAr || activeProjects[0].titleEn })}
                                        className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm hover:scale-105"
                                    >
                                        <Calculator size={16} />
                                        <span>{language === 'ar' ? 'طلب عرض سعر لمشروع مماثل' : 'Request Quote for Similar Project'}</span>
                                    </button>
                                    <button
                                        onClick={() => setLightboxProject(activeProjects[0])}
                                        className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                                    >
                                        <Eye size={16} />
                                        <span>{language === 'ar' ? 'معاينة المشروع' : 'Inspect'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Responsive Dynamic Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            Array.from({ length: 6 }).map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="animate-pulse bg-gray-200 rounded-2xl aspect-video w-full flex items-center justify-center">
                                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                </div>
                            ))
                        ) : (
                            (activeCategory === 'all' ? activeProjects.slice(1) : activeProjects).map((proj) => {
                                const title = language === 'ar'
                                    ? (proj.titleAr || proj.titleEn || 'مشروع منفذ')
                                    : (proj.titleEn || proj.titleAr || 'Completed Project');
                                
                                let imgSrc = '';
                                if (proj.isStatic && proj.img) {
                                    imgSrc = proj.img;
                                } else if (proj.image) {
                                    try {
                                        imgSrc = urlFor(proj.image).url();
                                    } catch (e) {
                                        console.error("Error building image URL:", e);
                                    }
                                }

                                return (
                                    <div 
                                        key={proj._id} 
                                        onClick={() => setLightboxProject(proj)}
                                        className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-terracotta-500/50"
                                    >
                                        {imgSrc ? (
                                            <img 
                                                src={imgSrc} 
                                                alt={title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                                No Image
                                            </div>
                                        )}
                                        
                                        {/* Subtle Top Tags */}
                                        <div className="absolute top-3 ltr:left-3 rtl:right-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                                            {proj.tagAr && (
                                                <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                                                    {language === 'ar' ? proj.tagAr : proj.tagEn}
                                                </span>
                                            )}
                                        </div>

                                        {/* Zoom Button Icon on Hover */}
                                        <div className="absolute top-3 ltr:right-3 rtl:left-3 w-9 h-9 rounded-xl bg-white/90 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md z-10">
                                            <Eye size={18} className="text-terracotta-600" />
                                        </div>

                                        {/* Gradient Info Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                                            {proj.locationAr && (
                                                <span className="text-gray-300 text-xs flex items-center gap-1 mb-1">
                                                    <MapPin size={12} className="text-terracotta-400" />
                                                    <span>{language === 'ar' ? proj.locationAr : proj.locationEn}</span>
                                                </span>
                                            )}
                                            <h4 className="text-white font-extrabold text-base leading-snug group-hover:text-terracotta-300 transition-colors">
                                                {title}
                                            </h4>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/projects" className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-terracotta-600/30 transition-all hover:scale-105">
                            <span>{isRTL ? `تصفح كل المشاريع والصور (${rawProjects.length} مشروع وصورة)` : `Browse Full Gallery (${rawProjects.length} Photos)`}</span>
                            {arrowIcon}
                        </Link>
                        <button
                            onClick={() => openQuoteModal()}
                            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold px-7 py-4 rounded-xl border border-gray-200 transition-all shadow-sm"
                        >
                            <Calculator size={18} className="text-terracotta-600" />
                            <span>{language === 'ar' ? 'طلب معاينة أو عرض سعر لمشروعك' : 'Request Project Quote'}</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Lightbox Preview Modal */}
            {lightboxProject && (
                <div 
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setLightboxProject(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setLightboxProject(null)}
                            className="absolute top-4 ltr:right-4 rtl:left-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative aspect-video bg-black max-h-[60vh] overflow-hidden">
                            <img 
                                src={lightboxProject.img || (lightboxProject.image && urlFor(lightboxProject.image).url())} 
                                alt={language === 'ar' ? lightboxProject.titleAr : lightboxProject.titleEn}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                {lightboxProject.tagAr && (
                                    <span className="text-xs font-bold text-terracotta-700 bg-terracotta-50 border border-terracotta-100 px-3 py-1 rounded-md">
                                        {language === 'ar' ? lightboxProject.tagAr : lightboxProject.tagEn}
                                    </span>
                                )}
                                {lightboxProject.locationAr && (
                                    <span className="text-xs text-gray-500 flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md">
                                        <MapPin size={12} className="text-gray-400" />
                                        <span>{language === 'ar' ? lightboxProject.locationAr : lightboxProject.locationEn}</span>
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                                {language === 'ar' ? lightboxProject.titleAr : lightboxProject.titleEn}
                            </h3>

                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                {language === 'ar' ? lightboxProject.descriptionAr : lightboxProject.descriptionEn}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        const projTitle = lightboxProject.titleAr || lightboxProject.titleEn;
                                        setLightboxProject(null);
                                        openQuoteModal({ product: projTitle });
                                    }}
                                    className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-7 py-3 rounded-xl transition-all shadow-md text-sm hover:scale-105"
                                >
                                    <Calculator size={18} />
                                    <span>{language === 'ar' ? 'طلب عرض سعر لمشروع مماثل' : 'Request Quote for Similar Project'}</span>
                                </button>
                                <button
                                    onClick={() => setLightboxProject(null)}
                                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                                >
                                    <span>{language === 'ar' ? 'إغلاق المعاينة' : 'Close Preview'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 5. FAQ Section (Requested on Notebook Page 4) */}
            <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full inline-block mb-2">
                            FAQ
                        </span>
                        <h2 className="text-3xl font-extrabold text-industrial-gray mb-3">{text.faq.title}</h2>
                        <p className="text-gray-600">{text.faq.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                        {text.faq.items.map((item, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-terracotta-600 transition-colors"
                                    >
                                        <span className="text-base md:text-lg">{item.question}</span>
                                        <ChevronDown 
                                            size={20} 
                                            className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-terracotta-500' : ''}`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-3">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. Google Maps & Verified Factory Credentials Section (Requested in Prompt) */}
            <section id="contact" className="py-20 bg-industrial-gray text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-terracotta-400 text-xs font-bold uppercase tracking-wider mb-3">
                                <Star size={16} />
                                <span>{language === 'ar' ? 'المقر الموثق والموقع على الخريطة' : 'Verified Google Maps Location'}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                                {content[language].companyOfficialName}
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed mb-8">
                                {language === 'ar'
                                    ? 'نرحب بزيارة السادة المهندسين، المقاولين، وأصحاب الأعمال لمعاينة خطوط الإنتاج وجودة خامات ألواح UPVC مباشرة بمصنعنا في مدينة السادات.'
                                    : 'We warmly welcome engineers, contractors, and industrial developers to visit our Sadat City factory and inspect our automated production lines firsthand.'}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-terracotta-400 shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{language === 'ar' ? 'العنوان الموثق على Google' : 'Registered Address'}</h4>
                                        <p className="text-gray-300 text-sm">{text.contact.info.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-terracotta-400 shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{language === 'ar' ? 'التليفون الرسمي' : 'Official Phone'}</h4>
                                        <a href={`tel:${text.contact.info.phone}`} className="text-gray-300 hover:text-white font-mono text-sm" dir="ltr">
                                            {text.contact.info.displayPhone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl text-terracotta-400 shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{language === 'ar' ? 'مواعيد العمل الرسمية' : 'Operating Hours'}</h4>
                                        <p className="text-gray-300 text-sm">{text.contact.info.workingHours}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={text.contact.info.googleMapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-industrial-gray font-bold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all text-sm shadow-md"
                                >
                                    <MapPin size={18} className="text-terracotta-600" />
                                    <span>{language === 'ar' ? 'فتح موقع كنانة روف على خرائط Google' : 'Open Kanana Roof on Google Maps'}</span>
                                </a>

                                <button
                                    onClick={() => openQuoteModal()}
                                    className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-md"
                                >
                                    <Calculator size={18} />
                                    <span>{text.nav.quote}</span>
                                </button>
                            </div>
                        </div>

                        {/* Google Maps iFrame */}
                        <div className="h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 relative bg-gray-900 group">
                            <iframe
                                src="https://maps.google.com/maps?q=Kanana+Roof+Sadat+City&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Kanana Roof Factory Location in Sadat City"
                                className="w-full h-full"
                            ></iframe>
                            <div className="absolute top-3 ltr:left-3 rtl:right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-md text-xs font-bold text-gray-800 flex items-center gap-1.5 pointer-events-none border border-gray-100">
                                <MapPin size={14} className="text-terracotta-600" />
                                <span>{language === 'ar' ? 'مصنع كنانة روف - المنطقة الصناعية الخامسة، قطعة 115' : 'Kanana Roof Factory - 5th Industrial Zone, Plot 115'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;