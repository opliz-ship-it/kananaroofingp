import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { client, urlFor } from '../client';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';
import project9 from '../assets/project9.jpg';

interface SanityProject {
    _id: string;
    titleEn?: string;
    titleAr?: string;
    descriptionEn?: string;
    descriptionAr?: string;
    image?: any;
    isStatic?: boolean;
}

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const { openQuoteModal } = useQuote();
    const text = content[language];
    
    const [sanityProjects, setSanityProjects] = useState<SanityProject[]>([]);
    const [loading, setLoading] = useState(true);

    const staticImages = [project1, project2, project3, project4, project5, project6, project7, project8, project9];
    const staticProjects = staticImages.map((img, index) => ({
        _id: `static-${index}`,
        titleEn: `Project #${index + 1}`,
        titleAr: `مشروع #${index + 1}`,
        descriptionEn: "Detailed project description place here.",
        descriptionAr: "تفاصيل المشروع ووصفه سيتم عرضها هنا.",
        image: img,
        isStatic: true
    }));

    useEffect(() => {
        client.fetch<SanityProject[]>(`*[_type == "project"] | order(_createdAt desc)`)
            .then((data) => {
                if (data && data.length > 0) {
                    setSanityProjects(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching projects from Sanity, using static fallback:", err);
                setLoading(false);
            });
    }, []);

    const activeProjects = sanityProjects.length > 0 ? sanityProjects : staticProjects;

    return (
        <div className="pt-20">
            <SEO lang={language} />
            <section className="bg-terracotta-500 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.projects.title}</h1>
                    <p className="text-xl opacity-90">{text.projects.subtitle}</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">{text.projects.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            // Premium Skeleton Loader
                            Array.from({ length: 6 }).map((_, idx) => (
                                <div key={`skeleton-${idx}`} className="animate-pulse bg-gray-200 rounded-xl h-72 w-full flex flex-col justify-end p-6">
                                    <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                </div>
                            ))
                        ) : (
                            activeProjects.map((proj) => {
                                const title = language === 'ar' 
                                    ? (proj.titleAr || proj.titleEn || 'مشروع') 
                                    : (proj.titleEn || proj.titleAr || 'Project');
                                const desc = language === 'ar' 
                                    ? (proj.descriptionAr || proj.descriptionEn || '') 
                                    : (proj.descriptionEn || proj.descriptionAr || '');
                                
                                // Handle static vs sanity image URLs
                                let imgSrc = '';
                                if ('isStatic' in proj && proj.isStatic) {
                                    imgSrc = proj.image;
                                } else if (proj.image) {
                                    try {
                                        imgSrc = urlFor(proj.image).url();
                                    } catch (e) {
                                        console.error("Error building image URL:", e);
                                    }
                                }

                                return (
                                    <div key={proj._id} className="group relative overflow-hidden rounded-xl shadow-md bg-black">
                                        {imgSrc ? (
                                            <img
                                                src={imgSrc}
                                                alt={title}
                                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-75"
                                            />
                                        ) : (
                                            <div className="w-full h-72 bg-gray-800 flex items-center justify-center text-gray-500">
                                                No Image
                                            </div>
                                        )}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                            <h3 className="text-white text-xl font-bold">{title}</h3>
                                            {desc && <p className="text-gray-300 text-sm mt-1">{desc}</p>}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center bg-gray-50 p-8 rounded-2xl border border-gray-100 max-w-2xl mx-auto space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {language === 'ar' ? 'هل تريد تنفيذ مشروع مماثل؟' : 'Looking for a similar roofing solution?'}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {language === 'ar' ? 'تواصل مع فريقنا الفني للحصول على مقايسة تفصيلية وعرض أسعار فوري لمشروعك.' : 'Get in touch with our engineering team for an instant calculation and official factory quote.'}
                        </p>
                        <button
                            onClick={() => openQuoteModal()}
                            className="inline-flex items-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
                        >
                            <span>{text.nav.quote}</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;

