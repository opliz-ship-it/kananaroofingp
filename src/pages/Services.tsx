import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Services: React.FC = () => {
    const { language } = useLanguage();
    const text = content[language];

    return (
        <div className="pt-20">
            <SEO lang={language} />
            <section className="bg-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.services.title}</h1>
                    <p className="text-xl opacity-90">{text.services.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-industrial-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {text.services.items.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-terracotta-500 flex flex-col h-full">
                                <div className="bg-terracotta-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-terracotta-600 font-bold text-xl">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 flex-grow leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
