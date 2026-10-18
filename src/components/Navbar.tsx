import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Link from './Link';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { Menu, X, Globe, Calculator } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language].nav;
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        closeMenu();
        // Check if current path is root language path
        const isHome = location.pathname === `/${language}` || location.pathname === `/${language}/`;

        if (isHome) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate(`/${language}`, { state: { scrollTo: id } });
        }
    };

    // Scroll logic for hash-like navigation from other pages
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    const NavItem = ({ id, label }: { id: string; label: string }) => {
        return (
            <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors"
            >
                {label}
            </a>
        );
    };

    return (
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm h-20 flex items-center border-b border-gray-100">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="Kanana Roof" className="h-12 w-auto object-contain" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-terracotta-600 group-hover:text-terracotta-500 transition-colors leading-tight">
                            {content[language].companyName}
                        </span>
                        <span className="text-[10px] text-gray-500 tracking-wider font-medium hidden sm:block">
                            {language === 'ar' ? 'مصنع ألواح الأسقف - السادات' : 'UPVC Roofing Factory'}
                        </span>
                    </div>
                </Link>

                {/* Desktop Links & Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link to="/" className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm">
                        {text.home}
                    </Link>
                    <Link to="/about" className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm">
                        {text.about}
                    </Link>
                    <a
                        href="#specs"
                        onClick={(e) => handleNavClick(e, 'specs')}
                        className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm"
                    >
                        {language === 'ar' ? 'المواصفات الفنية' : 'Tech Specs'}
                    </a>
                    <Link to="/services" className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm">
                        {text.services}
                    </Link>
                    <Link to="/projects" className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm">
                        {text.projects}
                    </Link>
                    <a
                        href="#faq"
                        onClick={(e) => handleNavClick(e, 'faq')}
                        className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm"
                    >
                        {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                    </a>
                    <Link to="/contact" className="font-medium text-gray-700 hover:text-terracotta-600 transition-colors text-sm">
                        {text.contact}
                    </Link>

                    {/* Language Switcher */}
                    <button
                        onClick={() => {
                            const newLang = language === 'en' ? 'ar' : 'en';
                            const currentPath = location.pathname.substring(3);
                            navigate(`/${newLang}${currentPath}`);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full hover:border-terracotta-500 hover:text-terracotta-600 transition-all font-medium text-xs text-gray-600"
                    >
                        <Globe size={14} />
                        {language === 'en' ? 'العربية' : 'English'}
                    </button>

                    {/* Quote Button */}
                    <button
                        onClick={() => openQuoteModal()}
                        className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-4 py-2 rounded-full transition-all shadow-md shadow-terracotta-600/20 hover:scale-105 text-xs sm:text-sm"
                    >
                        <Calculator size={16} />
                        <span>{text.quote}</span>
                    </button>
                </div>

                {/* Mobile Menu & Quote Button */}
                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        onClick={() => openQuoteModal()}
                        className="inline-flex items-center gap-1 bg-terracotta-600 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-sm"
                    >
                        <Calculator size={14} />
                        <span>{text.quote}</span>
                    </button>

                    <button className="p-2 text-gray-600 hover:text-terracotta-600" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`absolute top-20 left-0 right-0 bg-white shadow-xl p-5 flex flex-col gap-4 lg:hidden transition-all duration-300 origin-top border-b border-gray-100 ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                    <Link to="/" onClick={closeMenu} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {text.home}
                    </Link>
                    <Link to="/about" onClick={closeMenu} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {text.about}
                    </Link>
                    <a href="#specs" onClick={(e) => handleNavClick(e, 'specs')} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {language === 'ar' ? 'المواصفات الفنية' : 'Engineering Specs'}
                    </a>
                    <Link to="/services" onClick={closeMenu} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {text.services}
                    </Link>
                    <Link to="/projects" onClick={closeMenu} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {text.projects}
                    </Link>
                    <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
                    </a>
                    <Link to="/contact" onClick={closeMenu} className="font-medium text-gray-800 hover:text-terracotta-600 py-1">
                        {text.contact}
                    </Link>

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                        <button
                            onClick={() => {
                                const newLang = language === 'en' ? 'ar' : 'en';
                                const currentPath = location.pathname.substring(3);
                                navigate(`/${newLang}${currentPath}`);
                                closeMenu();
                            }}
                            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg w-full justify-center hover:bg-gray-50 text-sm font-medium"
                        >
                            <Globe size={16} />
                            {language === 'en' ? 'العربية' : 'English'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
