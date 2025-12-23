import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const text = content[language];
    const form = text.contact.form;
    const info = text.contact.info;

    return (
        <div className="pt-20">
            <SEO lang={language} />
            <section className="bg-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.contact.title}</h1>
                    <p className="text-xl opacity-90">{text.contact.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-industrial-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-2xl font-bold text-terracotta-600 mb-6 border-b pb-4">{language === 'en' ? 'Get In Touch' : 'تواصل معنا'}</h3>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-lg text-terracotta-500">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Address' : 'العنوان'}</h4>
                                            <p className="text-gray-600">{info.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-lg text-terracotta-500">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Phone' : 'الهاتف'}</h4>
                                            <p className="text-gray-600" dir="ltr">{info.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-lg text-terracotta-500">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h4>
                                            <p className="text-gray-600">{info.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white p-2 rounded-xl shadow-sm h-64 lg:h-80 overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13755.753555829637!2d30.6500843!3d30.4682705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI4JzA1LjgiTiAzMMKwMzknMDAuMyJF!5e0!3m2!1sen!2seg!4v1634567890123!5m2!1sen!2seg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Kanana Roofing Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-8 border-terracotta-500">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">{language === 'en' ? 'Send a Message' : 'أرسل رسالة'}</h3>
                            <form className="flex flex-col gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{form.name}</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{form.email}</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{form.phone}</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{form.message}</label>
                                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none transition-all"></textarea>
                                </div>
                                <button type="submit" className="bg-terracotta-600 text-white font-bold py-4 rounded-lg hover:bg-terracotta-700 transition-colors shadow-lg shadow-terracotta-600/30">
                                    {form.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
