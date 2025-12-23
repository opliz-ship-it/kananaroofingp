import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    lang: 'en' | 'ar';
}

const SEO: React.FC<SEOProps> = ({ lang }) => {
    const isArabic = lang === 'ar';

    const metadata = {
        en: {
            title: "Kanana Roofing Sheet | UPVC & PVC Roofing Manufacturer Egypt",
            description: "Leading manufacturer of eco-friendly UPVC roofing sheets, plastic broom bristles, and roofing solutions. Exporting globally from Egypt.",
            keywords: "Roofing sheet supplier, PVC roof tiles, Plastic roofing manufacturer Egypt, Kanana Plast, Industrial roofing"
        },
        ar: {
            title: "كنانه روفنج شيت | مصنع ألواح تغطية بديل الصاج",
            description: "المصنع الرائد في مصر لإنتاج ألواح السقف البلاستيكية المعزولة وبديل الصاج والقرميد."
        }
    };

    const currentMeta = isArabic ? metadata.ar : metadata.en;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ManufacturingBusiness",
        "name": "Kanana Roofing Sheet",
        "url": "https://kananaroof.com",
        "logo": "https://kananaroof.com/logo.png",
        "description": "Manufacturer of PVC roofing materials and plastic filaments.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "EG",
            "addressLocality": "Sadat City"
        },
        "areaServed": "World",
        "sameAs": [
            "https://www.linkedin.com/company/kanana-roofing",
            "https://www.facebook.com/kananaroofing"
        ]
    };

    return (
        <Helmet>
            <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} />
            <title>{currentMeta.title}</title>
            <meta name="description" content={currentMeta.description} />
            {/* English keywords are usually sufficient for global SEO, but adding them here */}
            {!isArabic && <meta name="keywords" content={metadata.en.keywords} />}

            {/* Hreflang Tags */}
            <link rel="alternate" hrefLang="ar-EG" href="https://kananaroof.com/ar" />
            <link rel="alternate" hrefLang="en" href="https://kananaroof.com/en" />
            <link rel="alternate" hrefLang="x-default" href="https://kananaroof.com/en" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
