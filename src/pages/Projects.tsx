import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { client, urlFor } from '../client';
import { MapPin, Calculator, Eye, X, Sparkles } from 'lucide-react';

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

interface SanityProject {
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

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];
    
    const [sanityProjects, setSanityProjects] = useState<SanityProject[]>([]);
    const [loading, setLoading] = useState(true);
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
                console.error("Error fetching projects from Sanity, using static fallback:", err);
                setLoading(false);
            });
    }, []);

    const rawProjects = sanityProjects.length >= 10 ? sanityProjects : staticProjects;
    const activeProjects = activeCategory === 'all' 
        ? rawProjects 
        : rawProjects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-20">
            <SEO lang={language} />
            <section className="bg-gradient-to-r from-industrial-gray via-gray-900 to-industrial-gray py-20 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-terracotta-600/10 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta-400 bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/10">
                        {language === 'ar' ? 'معرض المشاريع المنفذة' : 'Completed Projects Showcase'}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{text.projects.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">{text.projects.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <p className="text-center text-gray-600 mb-10 text-lg max-w-2xl mx-auto">{text.projects.desc}</p>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            Array.from({ length: 6 }).map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="animate-pulse bg-gray-200 rounded-2xl h-80 w-full flex flex-col justify-end p-6">
                                    <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                </div>
                            ))
                        ) : (
                            activeProjects.map((proj) => {
                                const title = language === 'ar' 
                                    ? (proj.titleAr || proj.titleEn || 'مشروع') 
                                    : (proj.titleEn || proj.titleAr || 'Project');
                                const desc = language === 'ar' 
                                    ? (proj.descriptionAr || proj.descriptionEn || '') 
                                    : (proj.descriptionEn || proj.descriptionAr || '');
                                
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
                                        className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-900 border border-gray-200 hover:border-terracotta-500/50 flex flex-col justify-between"
                                    >
                                        <div className="relative aspect-4/3 overflow-hidden bg-black">
                                            {imgSrc ? (
                                                <img
                                                    src={imgSrc}
                                                    alt={title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                                    No Image
                                                </div>
                                            )}

                                            {/* Tag badge */}
                                            {proj.tagAr && (
                                                <div className="absolute top-3 ltr:left-3 rtl:right-3 z-10 pointer-events-none">
                                                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                                                        {language === 'ar' ? proj.tagAr : proj.tagEn}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute top-3 ltr:right-3 rtl:left-3 w-9 h-9 rounded-xl bg-white/90 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md z-10">
                                                <Eye size={18} className="text-terracotta-600" />
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5">
                                                {proj.locationAr && (
                                                    <span className="text-gray-300 text-xs flex items-center gap-1 mb-1">
                                                        <MapPin size={12} className="text-terracotta-400" />
                                                        <span>{language === 'ar' ? proj.locationAr : proj.locationEn}</span>
                                                    </span>
                                                )}
                                                <h3 className="text-white text-lg font-bold group-hover:text-terracotta-300 transition-colors leading-snug">
                                                    {title}
                                                </h3>
                                            </div>
                                        </div>

                                        {desc && (
                                            <div className="p-4 bg-white border-t border-gray-100">
                                                <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                                                    {desc}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center bg-white p-8 md:p-12 rounded-3xl border border-gray-200/80 shadow-lg max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 text-terracotta-600 font-bold text-sm bg-terracotta-50 px-4 py-1.5 rounded-full">
                            <Sparkles size={16} />
                            <span>{language === 'ar' ? 'توريد وتنفيذ لكافة المحافظات' : 'Nationwide Supply & Support'}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                            {language === 'ar' ? 'هل تخطط لتغطية مصنع، مزرعة، أو هنجر قريباً؟' : 'Planning to Roof a Factory, Farm, or Warehouse Soon?'}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                            {language === 'ar' 
                                ? 'مهندسونا مستعدون لمراجعة مخططاتك الهندسية وتحديد أطوال وسماكات ألواح UPVC الأنسب لمشروعك، وتقديم عرض سعر رسمي فوري من المصنع.' 
                                : 'Our technical engineers will review your drawings, specify optimal UPVC sheet lengths and purlin spans, and provide an official factory quotation.'}
                        </p>
                        <div className="pt-2">
                            <button
                                onClick={() => openQuoteModal()}
                                className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-9 py-4 rounded-xl shadow-lg shadow-terracotta-600/30 transition-all hover:scale-105"
                            >
                                <Calculator size={18} />
                                <span>{text.nav.quote}</span>
                            </button>
                        </div>
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
        </div>
    );
};

export default Projects;
