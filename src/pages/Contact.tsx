import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calculator, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];
    const formLabels = text.contact.form;
    const info = text.contact.info;

    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: text.quote.projectTypes[0],
        message: ''
    });

    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = 
            `*رسالة جديدة عبر نموذج اتصل بنا بالموقع*\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `👤 *الاسم:* ${formState.name}\n` +
            `🏢 *الشركة:* ${formState.company || '-'}\n` +
            `📞 *الهاتف:* ${formState.phone}\n` +
            `✉️ *البريد:* ${formState.email || '-'}\n` +
            `🏗️ *نوع المشروع:* ${formState.projectType}\n` +
            `📝 *الرسالة:* ${formState.message}\n` +
            `━━━━━━━━━━━━━━━━━━━━`;
        
        const url = `https://wa.me/201027000979?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        setSent(true);
    };

    return (
        <div className="pt-20">
            <SEO lang={language} />

            {/* Header */}
            <section className="bg-gradient-to-r from-terracotta-600 to-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block mb-3">
                        {content[language].companyOfficialName}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{text.contact.title}</h1>
                    <p className="text-lg md:text-xl opacity-90">{text.contact.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-industrial-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info & Working Hours */}
                        <div className="flex flex-col gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-terracotta-600 mb-6 border-b pb-4">
                                    {language === 'en' ? 'Factory & Office Details' : 'بيانات المصنع والتواصل المباشر'}
                                </h3>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-xl text-terracotta-600 shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Factory Address' : 'عنوان المصنع'}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{info.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-xl text-terracotta-600 shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Official Phone' : 'الهاتف الرسمي'}</h4>
                                            <a href={`tel:${info.phone}`} className="text-terracotta-600 font-mono font-bold hover:underline" dir="ltr">
                                                {info.displayPhone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-xl text-terracotta-600 shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Working Hours' : 'مواعيد العمل الرسمية'}</h4>
                                            <p className="text-gray-600 text-sm">{info.workingHours}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-terracotta-50 p-3 rounded-xl text-terracotta-600 shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{language === 'en' ? 'Email Address' : 'البريد الإلكتروني'}</h4>
                                            <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-terracotta-600 text-sm">
                                                {info.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={`https://wa.me/${info.phone.replace('+', '')}?text=${encodeURIComponent(language === 'ar' ? 'السلام عليكم، أود التواصل مع إدارة مبيعات كنانة رووف' : 'Hello, inquiring about Kanana Roof UPVC Sheets')}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                                    >
                                        <MessageCircle size={18} />
                                        <span>{language === 'ar' ? 'واتساب مباشر' : 'WhatsApp Chat'}</span>
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => openQuoteModal()}
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                                    >
                                        <Calculator size={18} />
                                        <span>{text.nav.quote}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Google Map Box */}
                            <div className="bg-white p-2 rounded-2xl shadow-sm h-72 overflow-hidden border border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.73693259858!2d30.5050843!3d30.4082705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14588e79e763bcf3%3A0x6b107e3240e53a0!2sSadat%20City%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1634567890123!5m2!1sen!2seg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Kanana Roof Location in Sadat City"
                                ></iframe>
                            </div>
                        </div>

                        {/* Interactive Message Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-8 border-terracotta-500">
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                {language === 'en' ? 'Send an Inquiry' : 'أرسل استفسارك مباشرة'}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                {language === 'en' ? 'Our technical sales team will reply swiftly.' : 'فريق المبيعات الفنية سيتواصل معك للإجابة عن كافة التفاصيل.'}
                            </p>

                            {sent ? (
                                <div className="p-8 text-center space-y-4 bg-green-50 rounded-xl border border-green-200">
                                    <CheckCircle2 size={48} className="text-green-600 mx-auto" />
                                    <h4 className="text-xl font-bold text-gray-900">
                                        {language === 'ar' ? 'تم تجهيز وإرسال الرسالة!' : 'Message Prepared & Sent!'}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {language === 'ar' ? 'شكراً لتواصلك معنا، تم فتح المحادثة المباشرة وسنرد عليك فوراً.' : 'Thank you for reaching out. We will get back to you shortly.'}
                                    </p>
                                    <button
                                        onClick={() => setSent(false)}
                                        className="text-terracotta-600 font-bold text-sm underline pt-2"
                                    >
                                        {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send another message'}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.name} *</label>
                                            <input 
                                                type="text" 
                                                required
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none" 
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.company}</label>
                                            <input 
                                                type="text" 
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none" 
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.phone} *</label>
                                            <input 
                                                type="tel" 
                                                required
                                                dir="ltr"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                placeholder="01027000979"
                                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none text-left" 
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.email}</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none" 
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.projectType}</label>
                                        <select
                                            name="projectType"
                                            value={formState.projectType}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                        >
                                            {text.quote.projectTypes.map((pt, i) => (
                                                <option key={i} value={pt}>{pt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">{formLabels.message} *</label>
                                        <textarea 
                                            required
                                            rows={4} 
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="bg-terracotta-600 text-white font-bold py-3.5 rounded-xl hover:bg-terracotta-700 transition-colors shadow-lg shadow-terracotta-600/30 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle size={20} />
                                        <span>{formLabels.submit}</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
