import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import QuoteModal from './QuoteModal';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-industrial-light">
            <Navbar />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <QuoteModal />
        </div>
    );
};

export default Layout;
