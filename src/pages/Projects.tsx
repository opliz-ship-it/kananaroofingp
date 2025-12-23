import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects: React.FC = () => {
    const { language } = useLanguage();
    const text = content[language];
    const images = [project1, project2, project3, project1, project2, project3]; // Duplicated for grid demo

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
                        {images.map((img, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl shadow-md bg-black">
                                <img
                                    src={img}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-75"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white text-xl font-bold">Project #{index + 1}</h3>
                                    <p className="text-gray-300">Detailed project description place here.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
