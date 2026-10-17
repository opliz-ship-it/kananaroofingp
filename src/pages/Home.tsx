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
    Sparkles
} from 'lucide-react';
import { client, urlFor } from '../client';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import heroBg from '../assets/hero-bg.jpg';

interface SanityProject {
    _id: string;
    titleEn?: string;
    titleAr?: string;
    descriptionEn?: string;
    descriptionAr?: string;
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

    const staticProjects: SanityProject[] = [
        { _id: 'static-1', img: project1, titleAr: "مصنع أسمدة - تغطية جمالون كاملة", titleEn: "Chemical Plant Hangar", isStatic: true },
        { _id: 'static-2', img: project2, titleAr: "مزرعة دواجن - عزل حراري وصوتي", titleEn: "Poultry Farm Thermal Roofing", isStatic: true },
        { _id: 'static-3', img: project3, titleAr: "مستودعات تخزين لوجستي", titleEn: "Logistics Warehouse Roof", isStatic: true },
    ];

    useEffect(() => {
        client.fetch<SanityProject[]>(`*[_type == "project"] | order(_createdAt desc)[0...3]`)
            .then((data) => {
                if (data && data.length > 0) {
                    setSanityProjects(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects for Home, using static fallback:", err);
                setLoading(false);
            });
    }, []);

    const activeProjects = sanityProjects.length > 0 ? sanityProjects : staticProjects;

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
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                                    <div className="inline-block bg-white px-3 py-1 rounded-md text-sm font-semibold text-terracotta-600 border border-gray-100 mb-3 font-mono">
                                        {spec.value}
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{spec.desc}</p>
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

            {/* 4. Projects Gallery Showcase */}
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-industrial-gray mb-3">{text.projects.title}</h2>
                        <p className="text-gray-600">{text.projects.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="animate-pulse bg-gray-200 rounded-xl aspect-video w-full flex items-center justify-center">
                                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                </div>
                            ))
                        ) : (
                            activeProjects.map((proj) => {
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
                                    <div key={proj._id} className="group relative overflow-hidden rounded-2xl aspect-video bg-black shadow-md">
                                        {imgSrc ? (
                                            <img 
                                                src={imgSrc} 
                                                alt={title} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 group-hover:opacity-75" 
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white font-bold text-base">{title}</span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/projects" className="inline-block bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors">
                            {isRTL ? 'تصفح كل المشاريع والصور' : 'Browse All Projects Gallery'}
                        </Link>
                    </div>
                </div>
            </section>

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
                                    <span>{language === 'ar' ? 'فتح الاتجاهات على خرائط Google' : 'Get Directions on Google Maps'}</span>
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
                        <div className="h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.73693259858!2d30.5050843!3d30.4082705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14588e79e763bcf3%3A0x6b107e3240e53a0!2sSadat%20City%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1634567890123!5m2!1sen!2seg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Kanana Roof Factory Location in Sadat City"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;