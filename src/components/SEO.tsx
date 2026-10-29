import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    lang: 'en' | 'ar';
}

const SEO: React.FC<SEOProps> = ({ lang }) => {
    const isArabic = lang === 'ar';

    const metadata = {
        en: {
            title: "Kanana Roof | UPVC Roofing Sheets Manufacturer & Supplier Egypt",
            description: "Official manufacturer of heavy-duty 4-layer UPVC & Polycarbonate roofing sheets engineered with ASA anti-weathering layer. Factory in 7th Industrial Zone, Sadat City, Egypt. 10-Year Warranty.",
            keywords: "Kanana Roof, UPVC Roofing Sheets Egypt, Kanana Roofing, Corrugated plastic roof sheets, UPVC manufacturer Sadat City, Factory roofing alternatives, ASA roofing tiles Egypt"
        },
        ar: {
            title: "كنانة رووف | مصنع ألواح UPVC للأسقف وبديل الصاج المعرج - مدينة السادات",
            description: "المصنع الرسمي لإنتاج وتوريد ألواح UPVC والبولي كربونايت رباعية الطبقات المعزولة حرارياً والبديل الهندسي للصاج والزنك بضمان 10 سنوات. المنطقة الصناعية السابعة، مدينة السادات."
        }
    };

    const currentMeta = isArabic ? metadata.ar : metadata.en;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "additionalType": "https://schema.org/ManufacturingBusiness",
        "name": isArabic ? "كنانة رووف" : "Kanana Roof",
        "alternateName": ["كنانة رووف", "Kanana Roof", "ألواح كنانة رووف", "Kanana Roofing"],
        "url": "https://kananaroof.com",
        "logo": "https://kananaroof.com/logo.png",
        "image": "https://kananaroof.com/logo.png",
        "telephone": "+201027000979",
        "email": "kananaroof@gmail.com",
        "description": "Manufacturer and supplier of heavy-duty 4-layer UPVC and Polycarbonate roofing sheets with 10-year warranty for industrial hangars, factories, warehouses, and farms.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "7th Industrial Zone",
            "addressLocality": "Sadat City",
            "addressRegion": "Menoufia",
            "addressCountry": "EG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.387001",
            "longitude": "30.562778"
        },
        "hasMap": "https://maps.google.com/?q=30.387001,30.562778",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "Country",
                "name": "Egypt"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Middle East & Africa"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61585448343390",
            "https://x.com/KananaRoof",
            "https://www.instagram.com/kananaroof/"
        ]
    };

    return (
        <Helmet>
            <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} />
            <title>{currentMeta.title}</title>
            <meta name="description" content={currentMeta.description} />
            {!isArabic && <meta name="keywords" content={metadata.en.keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={currentMeta.title} />
            <meta property="og:description" content={currentMeta.description} />
            <meta property="og:url" content={`https://kananaroof.com/${lang}`} />
            <meta property="og:site_name" content={isArabic ? "كنانة رووف" : "Kanana Roof"} />

            {/* Hreflang Tags */}
            <link rel="alternate" hrefLang="ar-EG" href="https://kananaroof.com/ar" />
            <link rel="alternate" hrefLang="en" href="https://kananaroof.com/en" />
            <link rel="alternate" hrefLang="x-default" href="https://kananaroof.com/ar" />

            {/* Structured Data (Google Maps & Search Sync) */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
