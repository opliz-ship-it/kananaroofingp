import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle, Clock, FileDown, Calculator } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];
    const contact = text.contact.info;

    return (
        <footer className="bg-industrial-gray text-white pt-16 pb-8 mt-auto border-t-4 border-terracotta-600">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* 1. Company Info & Brand */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Kanana Roof Logo" className="h-16 w-auto object-contain bg-white/5 p-2 rounded-xl" />
                        <div>
                            <h3 className="text-xl font-bold text-terracotta-500">
                                {content[language].companyOfficialName}
                            </h3>
                            <span className="text-xs text-gray-400">
                                {language === 'ar' ? 'مصنع ألواح UPVC والبولي كربونايت' : 'UPVC & Polycarbonate Roofing Plant'}
                            </span>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{text.hero.subtitle}</p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=61585448343390" target="_blank" rel="noreferrer" className="bg-white/10 p-2.5 rounded-lg hover:bg-terracotta-500 transition-colors" aria-label="Facebook">
                            <Facebook size={18} />
                        </a>
                        <a href="https://x.com/KananaRoof" target="_blank" rel="noreferrer" className="bg-white/10 p-2.5 rounded-lg hover:bg-terracotta-500 transition-colors" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/kananaroof/" target="_blank" rel="noreferrer" className="bg-white/10 p-2.5 rounded-lg hover:bg-terracotta-500 transition-colors" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* 2. Factory Location & Hours (Google Maps Sync) */}
                <div>
                    <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider border-b border-white/10 pb-2">
                        {language === 'ar' ? 'بيانات المصنع ومواعيد العمل' : 'Factory & Working Hours'}
                    </h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-300">
                        <li className="flex gap-3 items-start">
                            <MapPin size={18} className="text-terracotta-500 mt-1 shrink-0" />
                            <span>{contact.address}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Clock size={18} className="text-terracotta-500 shrink-0" />
                            <span>{contact.workingHours}</span>
                        </li>
                        <li className="pt-1">
                            <a 
                                href={contact.googleMapsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-terracotta-400 hover:text-terracotta-300 underline font-medium"
                            >
                                <MapPin size={14} />
                                {language === 'ar' ? 'عرض موقع المصنع على خرائط Google' : 'View on Google Maps'}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 3. Direct Contact Channels */}
                <div>
                    <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider border-b border-white/10 pb-2">
                        {language === 'ar' ? 'أرقام التواصل الرسمية' : 'Official Contacts'}
                    </h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-300">
                        <li className="flex gap-3 items-center">
                            <Phone size={18} className="text-terracotta-500 shrink-0" />
                            <a href={`tel:${contact.phone}`} className="hover:text-terracotta-400 font-mono" dir="ltr">
                                {contact.displayPhone}
                            </a>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail size={18} className="text-terracotta-500 shrink-0" />
                            <a href={`mailto:${contact.email}`} className="hover:text-terracotta-400">
                                {contact.email}
                            </a>
                        </li>
                        <li className="pt-2">
                            <a
                                href={`https://wa.me/${contact.phone.replace('+', '')}?text=${encodeURIComponent(language === 'ar' ? 'السلام عليكم، استفسار بخصوص ألواح كنانة رووف' : 'Hello, inquiring about Kanana Roof UPVC Sheets')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md transition-all hover:scale-105"
                            >
                                <MessageCircle size={18} />
                                {language === 'ar' ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 4. Quick Actions (Quote & Catalog PDF) */}
                <div>
                    <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider border-b border-white/10 pb-2">
                        {language === 'ar' ? 'روابط هندسية مباشرة' : 'Direct Engineering Actions'}
                    </h3>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => openQuoteModal()}
                            className="inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm shadow-md transition-all hover:scale-[1.02]"
                        >
                            <Calculator size={18} />
                            {text.nav.quote}
                        </button>

                        <a
                            href="/kanana-roofing-catalog.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2.5 rounded-lg text-sm border border-white/10 transition-all hover:scale-[1.02]"
                        >
                            <FileDown size={18} className="text-terracotta-400" />
                            {text.hero.catalog_cta}
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-xs flex flex-col sm:flex-row justify-between items-center container mx-auto px-4 gap-2">
                <span>{text.footer.rights}</span>
                <span className="text-gray-500">
                    {language === 'ar' ? 'مدينة السادات - محافظة المنوفية - جمهورية مصر العربية' : 'Sadat City, Menoufia Governorate, Egypt'}
                </span>
            </div>
        </footer>
    );
};

export default Footer;
