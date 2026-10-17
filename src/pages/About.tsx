import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { CheckCircle, Calculator, FileDown } from 'lucide-react';

const About: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];

    return (
        <div className="pt-20">
            <SEO lang={language} />
            {/* Header */}
            <section className="bg-gradient-to-r from-terracotta-600 to-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{text.about.title}</h1>
                    <p className="text-xl opacity-90">{text.about.subtitle}</p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-terracotta-600 mb-6 border-b pb-4">{language === 'en' ? 'Our Industrial Story' : 'قصتنا الصناعية'}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {text.about.story}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {language === 'en'
                                ? "From our advanced manufacturing facility in Sadat City, Menoufia, Kanana Roof is dedicated to providing industrial developers, commercial contractors, and farmers with guaranteed roofing excellence."
                                : "من مجمعنا الصناعي المتطور في مدينة السادات بمحافظة المنوفية، نكرس طاقتنا الإنتاجية لتقديم ألواح أسقف فائقة الجودة تضمن الأمان التام وتدوم طويلاً مع ضمان 10 سنوات."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-industrial-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold text-terracotta-500 mb-4">{text.about.mission_title}</h3>
                            <div className="space-y-6">
                                {text.about.mission.map((item, index) => (
                                    <div key={index} className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-terracotta-500 pl-4 rtl:pl-0 rtl:pr-4 py-1">
                                        <h4 className="font-bold text-lg text-terracotta-600 mb-1">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold text-terracotta-500 mb-4">{text.about.vision_title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{text.about.vision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-terracotta-600 mb-6">{text.about.our_values_title}</h2>
                    <div className="bg-industrial-gray/5 p-8 rounded-2xl border border-industrial-gray/10">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            {text.about.our_values_text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-terracotta-600 mb-12">{text.about.values_title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {text.about.values.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                                <CheckCircle size={48} className="text-terracotta-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                            <button
                                onClick={() => openQuoteModal()}
                                className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-terracotta-600/20 transition-all hover:scale-105"
                            >
                                <Calculator size={20} />
                                <span>{text.nav.quote}</span>
                            </button>
                            <a
                                href="/kanana-roofing-catalog.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-bold px-8 py-4 rounded-xl shadow-sm transition-all"
                            >
                                <FileDown size={20} className="text-terracotta-600" />
                                <span>{text.hero.catalog_cta}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
