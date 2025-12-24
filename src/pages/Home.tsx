import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import Link from '../components/Link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import heroBg from '../assets/hero-bg.jpg';

const Home = () => {
    const { language } = useLanguage();
    const text = content[language];
    const isRTL = language === 'ar';
    const arrowIcon = isRTL ? <ChevronRight className="rotate-180" /> : <ChevronRight />;

    return (
        <div className="flex flex-col">
            <SEO lang={language} />
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center bg-industrial-light relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroBg})` }}>
                <div className="container mx-auto px-4 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                        {text.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-sm">
                        {text.hero.subtitle}
                    </p>
                    <p className="mb-10 text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-sm">{text.hero.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="bg-terracotta-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-terracotta-600 transition-colors shadow-lg shadow-terracotta-500/30">
                            {text.hero.cta}
                        </a>
                        <a href="#services" className="border-2 border-terracotta-500 text-terracotta-500 px-8 py-4 rounded-lg font-bold hover:bg-terracotta-50 transition-colors">
                            {text.hero.services_cta}
                        </a>
                    </div>
                </div>
            </section>

            {/* About Summary */}
            <section id="about" className="section-padding py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-terracotta-600 mb-6">{text.about.title}</h2>
                        <h3 className="text-xl font-semibold mb-6">{text.about.subtitle}</h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {text.about.story.substring(0, 150)}...
                        </p>
                        <Link to="/about" className="text-terracotta-500 font-bold hover:text-terracotta-700 inline-flex items-center gap-2">
                            {isRTL ? 'اقرأ المزيد' : 'Read More'} {arrowIcon}
                        </Link>

                        {/* Why Choose Us Icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
                            {text.about.values.slice(0, 3).map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                                    <CheckCircle className="text-terracotta-500 mt-1 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Summary */}
            <section id="services" className="section-padding py-20 bg-industrial-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-terracotta-600 mb-12">{text.services.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {text.services.items.slice(0, 3).map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta-500">
                                <h3 className="text-xl font-bold mb-4 text-industrial-gray">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-block border-2 border-terracotta-500 text-terracotta-500 px-8 py-3 rounded-lg font-bold hover:bg-terracotta-50 transition-colors">
                            {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Summary */}
            <section id="projects" className="section-padding py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-terracotta-600 mb-4">{text.projects.title}</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{text.projects.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-lg aspect-video">
                            <img src={project1} alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold text-lg">Industrial</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg aspect-video">
                            <img src={project2} alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold text-lg">Skylight</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg aspect-video">
                            <img src={project3} alt="Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-bold text-lg">Residential</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/projects" className="inline-block bg-terracotta-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-terracotta-700 transition-colors shadow-lg shadow-terracotta-600/20">
                            {isRTL ? 'مشاهدة المزيد من المشاريع' : 'View More Projects'}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Summary */}
            <section id="contact" className="section-padding py-20 bg-industrial-gray text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-terracotta-500">{text.contact.title}</h2>
                    <p className="mb-8 text-lg text-gray-300">{text.contact.subtitle}</p>
                    <Link to="/contact" className="inline-block bg-white text-industrial-gray px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                        {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;