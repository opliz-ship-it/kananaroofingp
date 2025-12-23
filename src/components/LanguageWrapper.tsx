import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LanguageWrapper: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        if (lang === 'ar' || lang === 'en') {
            if (lang !== language) {
                setLanguage(lang);
            }
        } else {
            // Invalid language param, redirect to default (en)
            // Preserving the rest of the path could be complex, for now redirect to root /en
            navigate('/en', { replace: true });
        }
    }, [lang, language, setLanguage, navigate]);

    // If the language in URL doesn't match state (during transition), keep rendering
    // or return null to prevent flash. With the effect above, it should sync quickly.

    if (lang !== 'ar' && lang !== 'en') {
        return null; // Don't render outlet if invalid, waiting for redirect
    }

    return <Outlet />;
};

export default LanguageWrapper;
