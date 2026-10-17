import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { Calculator, FileDown } from 'lucide-react';

const Services: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];

    return (
        <div className="pt-20">
            <SEO lang={language} />
            <section className="bg-gradient-to-r from-terracotta-600 to-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{text.services.title}</h1>
                    <p className="text-xl opacity-90">{text.services.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-industrial-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {text.services.items.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-terracotta-500 flex flex-col h-full group">
                                <div className="bg-terracotta-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-terracotta-600 font-bold text-xl group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 flex-grow leading-relaxed text-sm mb-6">{item.desc}</p>
                                <button
                                    onClick={() => openQuoteModal({ product: item.title })}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta-600 hover:text-terracotta-700 mt-auto pt-4 border-t border-gray-100"
                                >
                                    <Calculator size={14} />
                                    <span>{language === 'ar' ? 'طلب عرض سعر لهذه الخدمة' : 'Request a Quote for this service'}</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Box */}
                    <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 text-center max-w-4xl mx-auto space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {language === 'ar' ? 'جاهز لبدء مشروعك معنا؟' : 'Ready to start your roofing project?'}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            {language === 'ar' 
                                ? 'فريقنا الهندسي في مصنع مدينة السادات جاهز لحساب الكميات، تقديم المشورة الفنية، وإرسال عرض سعر مفصل.' 
                                : 'Our engineering team at our Sadat City plant is ready to calculate material quantities, provide technical advice, and dispatch custom orders.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                            <button
                                onClick={() => openQuoteModal()}
                                className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-terracotta-600/20 transition-all hover:scale-105"
                            >
                                <Calculator size={18} />
                                <span>{text.nav.quote}</span>
                            </button>
                            <a
                                href="/kanana-roofing-catalog.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3.5 rounded-xl transition-all"
                            >
                                <FileDown size={18} className="text-terracotta-600" />
                                <span>{text.hero.catalog_cta}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
