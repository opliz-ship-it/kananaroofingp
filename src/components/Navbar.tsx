import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Link from './Link';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const { language } = useLanguage();
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
                // Clear state to avoid scrolling on refresh? optional.
            }, 100);
        }
    }, [location]);


    const NavItem = ({ id, label }: { id: string; label: string }) => {
        return (
            <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-medium hover:text-terracotta-500 transition-colors"
            >
                {label}
            </a>
        );
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm h-20 flex items-center">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="Kanana Roofing" className="h-12 w-auto object-contain" />
                    <span className="text-xl font-bold text-terracotta-600 group-hover:text-terracotta-500 transition-colors hidden sm:block">
                        {language === 'ar' ? 'كنانه روفنج شيت' : 'Kanana Roofing Sheet'}
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItem id="hero" label={text.home} />
                    <NavItem id="about" label={text.about} />
                    <NavItem id="services" label={text.services} />
                    <NavItem id="projects" label={text.projects} />
                    <NavItem id="contact" label={text.contact} />

                    <button
                        onClick={() => {
                            const newLang = language === 'en' ? 'ar' : 'en';
                            const currentPath = location.pathname.substring(3);
                            navigate(`/${newLang}${currentPath}`);
                        }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-terracotta-500 hover:text-terracotta-500 transition-all font-medium text-sm"
                    >
                        <Globe size={16} />
                        {language === 'en' ? 'العربية' : 'English'}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`absolute top-20 left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4 md:hidden transition-all duration-300 origin-top transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                    <NavItem id="hero" label={text.home} />
                    <NavItem id="about" label={text.about} />
                    <NavItem id="services" label={text.services} />
                    <NavItem id="projects" label={text.projects} />
                    <NavItem id="contact" label={text.contact} />
                    <button
                        onClick={() => {
                            const newLang = language === 'en' ? 'ar' : 'en';
                            // Redirect to current path but with new language
                            const currentPath = location.pathname.substring(3); // remove /en or /ar
                            navigate(`/${newLang}${currentPath}`);
                            closeMenu();
                        }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full w-full justify-center hover:bg-gray-50"
                    >
                        <Globe size={16} />
                        {language === 'en' ? 'العربية' : 'English'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
