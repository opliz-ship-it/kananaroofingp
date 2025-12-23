import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const text = content[language];
    const contact = text.contact.info;

    return (
        <footer className="bg-industrial-gray text-white pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div
                            className="h-52 w-52 bg-terracotta-500"
                            style={{
                                maskImage: `url(${logo})`,
                                WebkitMaskImage: `url(${logo})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                        <h3 className="text-2xl font-bold text-terracotta-500">
                            {language === 'ar' ? 'كنانه روفنج شيت' : 'Kanana Roofing Sheet'}
                        </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-sm">{text.hero.subtitle}</p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=61585448343390" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-terracotta-500 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="https://x.com/KananaRoof" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-terracotta-500 transition-colors">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/kananaroof/" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-terracotta-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <button className="bg-white/10 p-2 rounded-full hover:bg-terracotta-500 transition-colors">
                            <Linkedin size={20} />
                        </button>
                    </div>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">{text.contact.title}</h3>
                    <ul className="flex flex-col gap-4 text-gray-300">
                        <li className="flex gap-3 items-start">
                            <MapPin size={20} className="text-terracotta-500 mt-1 shrink-0" />
                            <span>{contact.address}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone size={20} className="text-terracotta-500 shrink-0" />
                            <span dir="ltr">{contact.phone}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail size={20} className="text-terracotta-500 shrink-0" />
                            <span>{contact.email}</span>
                        </li>
                    </ul>
                </div>

                {/* WhatsApp CTA */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">WhatsApp</h3>
                    <a
                        href={`https://wa.me/${contact.phone.replace('+', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1FD261] hover:scale-105 transition-all w-fit"
                    >
                        <MessageCircle size={24} />
                        {language === 'en' ? 'Chat on WhatsApp' : 'تواصل عبر واتساب'}
                    </a>
                </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
                {text.footer.rights}
            </div>
        </footer>
    );
};

export default Footer;
