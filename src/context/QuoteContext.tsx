import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuotePrefill {
    product?: string;
    thickness?: string;
    color?: string;
}

interface QuoteContextType {
    isOpen: boolean;
    openQuoteModal: (prefill?: QuotePrefill) => void;
    closeQuoteModal: () => void;
    prefill: QuotePrefill;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [prefill, setPrefill] = useState<QuotePrefill>({});

    const openQuoteModal = (data?: QuotePrefill) => {
        if (data) {
            setPrefill(data);
        } else {
            setPrefill({});
        }
        setIsOpen(true);
    };

    const closeQuoteModal = () => {
        setIsOpen(false);
    };

    return (
        <QuoteContext.Provider value={{ isOpen, openQuoteModal, closeQuoteModal, prefill }}>
            {children}
        </QuoteContext.Provider>
    );
};

export const useQuote = (): QuoteContextType => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
};
