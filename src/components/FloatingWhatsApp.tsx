import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingWhatsApp: React.FC = () => {
    const { direction, language } = useLanguage();
    const defaultMsg = encodeURIComponent(
        language === 'ar' 
            ? 'السلام عليكم، أود الاستفسار عن أسعار ومواصفات ألواح UPVC من مصنع كنانة رووف بالسادات.' 
            : 'Hello, I would like to inquire about UPVC roofing sheets specifications and prices from Kanana Roof.'
    );

    return (
        <a
            href={`https://wa.me/201027000979?text=${defaultMsg}`}
            target="_blank"
            rel="noreferrer"
            className={`fixed bottom-6 ${direction === 'rtl' ? 'left-6' : 'right-6'} z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group`}
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="sr-only">WhatsApp</span>
        </a>
    );
};

export default FloatingWhatsApp;
