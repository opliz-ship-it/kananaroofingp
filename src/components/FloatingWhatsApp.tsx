import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingWhatsApp: React.FC = () => {
    const { direction } = useLanguage();

    return (
        <a
            href="https://wa.me/201222522624"
            target="_blank"
            rel="noreferrer"
            className={`fixed bottom-6 ${direction === 'rtl' ? 'left-6' : 'right-6'} z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default FloatingWhatsApp;
