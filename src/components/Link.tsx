import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface LinkProps extends RouterLinkProps {
    to: string; // Ensure 'to' is a string for simplicity in string manipulation
}

const Link: React.FC<LinkProps> = ({ to, children, ...props }) => {
    const { language } = useLanguage();

    // If it's an external link or anchor link, return standard link/a tag logic could be handled here 
    // but for now we assume this is for internal routing.

    // Check if 'to' is absolute or hash
    const isAbsolute = to.startsWith('http');
    const isHash = to.startsWith('#');

    if (isAbsolute || isHash) {
        return <RouterLink to={to} {...props}>{children}</RouterLink>;
    }

    // Ensure 'to' starts with /
    const path = to.startsWith('/') ? to : `/${to}`;

    // Construct new path: /en/about or /ar/about
    const newPath = `/${language}${path === '/' ? '' : path}`;

    return (
        <RouterLink to={newPath} {...props}>
            {children}
        </RouterLink>
    );
};

export default Link;
