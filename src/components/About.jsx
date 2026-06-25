import React, { useMemo, useRef, useState, useEffect } from "react";
import {
    FiUser,
    FiCpu,
    FiAward,
    FiArrowRight,
} from "react-icons/fi";

const sections = [
    {
        id: "about",
        title: "About me",
        icon: <FiUser />,   
        content: {
            heading: "AI Engineer & Backend Developer",
            description: `I design and build intelligent AI systems and high-performance backend infrastructures that turn complex requirements into secure, scalable, and production-ready applications.

My core expertise spans Generative AI (GenAI) solutions, advanced Retrieval-Augmented Generation (RAG) pipelines, Multi-Agent ecosystems, and MCP (Model Context Protocol) servers. On the systems layer, I architect secure Restful APIs using Django Rest Framework (DRF) and optimize high-throughput database schemas designed for efficiency and horizontal scalability.

Driven by data analysis and machine learning best practices, I focus on delivering low-latency, resilient, and enterprise-grade software built for real-world impact.`,
        },
    },
    {
        id: "education",
        title: "Education",
        icon: <FiCpu />,
        content: {
            heading: "My Academic Journey",
            description: `A chronological overview of my educational milestones, laying the mathematical and scientific groundwork for engineering robust backend systems and smart AI solutions.`,
            items: [
                {
                    degree: "Bachelor of Computer Application (BCA)",
                    institution: "Tribhuvan University Affiliate College",
                    duration: "2022 - Present",
                    description: "Specializing in Machine Learning, Data Analysis, Software Engineering, Database Management, and Artificial Intelligence. Maintaining an outstanding academic record with a cumulative GPA of 3.6."
                },
                {
                    degree: "Higher Secondary Education (+2 Science)",
                    institution: "Aroma College",
                    duration: "2019 - 2021",
                    description: "Majored in Physics, Chemistry, Mathematics, and Computer Science. Graduated with a high distinction score of 3.43 GPA."
                },
                {
                    degree: "Secondary Education Exam (SEE)",
                    institution: "Usha English Boarding School",
                    duration: "Graduated 2019",
                    description: "Completed secondary education exam with distinction, securing a strong 3.45 GPA, with honors in Mathematics and Computer Studies."
                }
            ],
        },
    },
    {
        id: "awards",
        title: "Achievements",
        icon: <FiAward />,
        content: {
            heading: "Achievements & Certifications",
            description: "A showcase of my professional certifications, key hackathon triumphs, and academic mentorship experiences in the field of AI, Machine Learning, and Software Engineering.",
            awards: [
                {
                    title: "Hackathon Winner – United Technical College",
                    year: "2025",
                    description: "Recognized for excellence in innovation, technical problem-solving, and teamwork among top participants."
                },
                {
                    title: "Mentor – Chitwan Utsav 2.0 Hackathon",
                    year: "2025",
                    description: "Guided participants in designing AI-driven solutions and integrating ML models into functional prototypes."
                },
                {
                    title: "Machine Learning, Deep Learning, and RAG Frameworks Course",
                    year: "2025",
                    description: "Focused on building intelligent agents with LangGraph, Agno, and Retrieval-Augmented Generation (RAG) architectures."
                },
                {
                    title: "Complete Data Science, Machine Learning, Deep Learning, and NLP Bootcamp",
                    year: "2025",
                    description: "Udemy Bootcamp by Krish Naik; covered end-to-end data science pipelines, model deployment, and NLP techniques."
                }
            ],
        },
    },
];

export default function AboutMeSection() {
    const [active, setActive] = useState(sections[0]);

    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [active]);

    const renderContent = useMemo(() => {
        switch (active.id) {
            case "about":
                return (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-2xl text-blue-950">
                            {active.icon}
                            <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Profile</span>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mb-6">
                                {active.content.heading}
                            </h2>

                            <p className="leading-[1.8] text-gray-655 text-base sm:text-lg whitespace-pre-line">
                                {active.content.description}
                            </p>

                            {/* Core Pillars */}
                            <div className="mt-8 border-t border-gray-100 pt-6 animate-slideUp">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">Core Focus Areas</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700 hover:border-blue-950 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:scale-[1.02]">
                                        Machine Learning & Data Analysis
                                    </span>
                                    <span className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700 hover:border-blue-950 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:scale-[1.02]">
                                        GenAI & RAG Systems
                                    </span>
                                    <span className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700 hover:border-blue-950 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:scale-[1.02]">
                                        Multi-Agent Ecosystems
                                    </span>
                                    <span className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-700 hover:border-blue-950 hover:bg-white transition-all duration-300 cursor-default shadow-sm hover:scale-[1.02]">
                                        Restful APIs & DRF
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "education":
                return (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-2xl text-blue-950">
                            {active.icon}
                            <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Academic History</span>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mb-4">
                                {active.content.heading}
                            </h2>

                            <p className="leading-[1.8] text-gray-655 text-base sm:text-lg mb-10 whitespace-pre-line">
                                {active.content.description}
                            </p>

                            <div className="relative pl-5 sm:pl-6 border-l border-gray-250 space-y-8 sm:space-y-10 py-2">
                                {active.content.items.map((item, index) => (
                                    <div key={index} className="relative group">
                                        {/* Circle Timeline indicator */}
                                        <div className="absolute -left-[22px] sm:-left-[32px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-950 transition duration-300 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-blue-950 transition duration-300" />
                                        </div>

                                        {/* Timeline content card */}
                                        <div className="transition duration-300">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.duration}</span>
                                            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mt-1 group-hover:text-blue-950 transition-colors duration-300">{item.degree}</h3>
                                            <p className="text-sm font-semibold text-gray-500 mt-1">{item.institution}</p>
                                            <p className="text-gray-650 text-sm sm:text-base mt-3 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case "awards":
                return (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-2xl text-blue-950">
                            {active.icon}
                            <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">Achievements</span>
                        </div>

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mb-4">
                                {active.content.heading}
                            </h2>

                            <p className="leading-[1.8] text-gray-655 text-base sm:text-lg mb-8 whitespace-pre-line">
                                {active.content.description}
                            </p>

                            <div className="space-y-6">
                                {active.content.awards.map((award, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 pb-6 hover:border-blue-950 transition-colors duration-300 group cursor-default"
                                    >
                                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <FiArrowRight className="mt-1 text-gray-400 group-hover:text-blue-950 group-hover:translate-x-1 transition-all duration-300 text-sm sm:text-base flex-shrink-0" />
                                            <div>
                                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-950 transition-colors duration-300">
                                                        {award.title}
                                                    </h3>
                                                    {award.description && (
                                                        <p className="text-gray-500 text-sm sm:text-base mt-1.5 leading-relaxed">
                                                            {award.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <span className="text-gray-400 text-xs sm:text-sm font-semibold group-hover:text-blue-950 transition-colors duration-300 whitespace-nowrap">
                                                {award.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    }, [active]);

    return (
        <section id="about" className="w-full py-16 sm:py-24 bg-white border-t border-b border-gray-100 overflow-hidden animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* TABBED CONTENT */}
                <div className="flex flex-col min-h-[500px]">
                    {/* Navigation Tab Bar */}
                    <div className="flex border-b border-gray-100 mb-8 pb-1 gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
                        {sections.map((item) => {
                            const isActive = active.id === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActive(item)}
                                    className={`relative pb-4 text-left transition-all duration-300 focus:outline-none whitespace-nowrap px-2 font-semibold cursor-pointer ${isActive
                                        ? "text-blue-950 text-base sm:text-lg font-bold"
                                        : "text-gray-400 hover:text-gray-600 text-sm sm:text-base"
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{item.icon}</span>
                                        <span>{item.title}</span>
                                    </div>

                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-950 rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div
                        ref={contentRef}
                        className="flex-1 px-2 py-4 scroll-smooth"
                    >
                        <div
                            key={active.id}
                            className="animate-slideUp duration-500"
                        >
                            {renderContent}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Embedded CSS */}
            <style>{`
                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}