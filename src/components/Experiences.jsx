import { FiCalendar, FiMapPin, FiExternalLink, FiBriefcase, FiArrowRight } from "react-icons/fi";
import technestLogo from "../assets/images/Technestlogo.png";
import inspiringlabLogo from "../assets/images/InspiringLab.png";

const experiences = [
    {
        id: "technest",
        role: "AI Backend Engineer",
        company: "Technest Innovation",
        logo: technestLogo,
        logoClassName: "scale-[1.6]",
        logoBg: "bg-white border-gray-200/80",
        duration: "Mar 2026 – Present",
        location: "Chitwan, Nepal",
        website: "https://technestinnovations.com.np/",
        tags: ["RAG Systems", "Multi-Agent Networks", "Django", "DRF REST APIs", "LLM APIs", "PostgreSQL"],
        description: "Architecting and implementing enterprise-grade AI backends, complex Retrieval-Augmented Generation (RAG) systems, and multi-agent coordination pipelines using Django and Django REST Framework (DRF).",
        bullets: [
            "Designing and optimizing high-performance RAG (Retrieval-Augmented Generation) pipelines for smart search and document intelligence.",
            "Engineering scalable multi-agent systems and task scheduling backends utilizing Django & Celery.",
            "Developing secure, low-latency RESTful APIs with Django REST Framework (DRF) handling intensive data flows.",
            "Integrating advanced language models and LLM APIs with real-time response streaming and robust error handling.",
            "Implementing PostgreSQL database schemas, custom indexes, and query optimizations for high-throughput AI workloads."
        ]
    },
    {
        id: "inspiringlab",
        role: "AI/ML Intern",
        company: "Inspiring Lab Pvt. Ltd.",
        logo: inspiringlabLogo,
        logoBg: "bg-black border-neutral-900",
        duration: "Nov 2025 – Feb 2026",
        location: "Kathmandu, Nepal",
        website: "https://inspiringlab.com.np",
        tags: ["Agentic AI", "LangGraph", "Google ADK", "FastAPI", "Elasticsearch & Kibana", "Redis & Celery", "E-commerce APIs"],
        description: "Developed scalable AI/ML systems with a focus on Agentic AI and Retrieval-Augmented Generation (RAG) for intelligent applications.",
        bullets: [
            "Worked extensively with agent orchestration frameworks such as LangGraph and Google ADK, building multi-agent workflows for adaptive reasoning and task execution.",
            "Engineered backend services using FastAPI and managed structured data with PostgreSQL for high-performance applications.",
            "Implemented vector search and retrieval pipelines using Elasticsearch, along with Kibana for monitoring and analytics.",
            "Designed and deployed an end-to-end AI-driven social media content generation pipeline leveraging real-time search, trend analysis, and content optimization.",
            "Built systems capable of generating platform-specific viral content by analyzing engagement patterns and writing styles across social media platforms.",
            "Integrated Shopify and WooCommerce APIs with webhooks to automate e-commerce workflows and business processes.",
            "Utilized Redis for conversational memory and Celery for asynchronous background task processing.",
            "Developed an agent-based conversational system for sales support, enabling intelligent, context-aware customer interactions."
        ]
    }
];

export default function Experiences() {
    return (
        <section id="experiences" className="max-w-7xl mx-auto px-6 py-14 sm:py-20 border-t border-gray-100">
            {/* Section Header */}
            <div className="mb-20 max-w-3xl">
                <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3 animate-fadeIn">
                    Professional Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 animate-fadeIn animate-delay-100 text-blue-950">
                    Experience &{' '}
                    <span className="text-blue-950/50">Engineering Impact</span>{' '}
                    across AI & Backend products.
                </h2>
                <p className="text-blue-950/70 text-sm sm:text-base max-w-xl">
                    A proven track record of engineering intelligent AI products, orchestrating multi-agent systems, and building robust REST API backends.
                </p>
            </div>

            {/* Experiences Flow */}
            <div className="space-y-10">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-gray-100 last:border-b-0 last:pb-0"
                    >
                        {/* LEFT COLUMN: Timeframe & Metadata */}
                        <div className="lg:col-span-4 space-y-4">
                            {exp.logo && (
                                <div className={`h-12 w-36 flex items-center justify-center rounded-xl p-2.5 shadow-sm border overflow-hidden ${exp.logoBg || "bg-black border-neutral-800"}`}>
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} Logo`}
                                        className={`h-full w-auto object-contain ${exp.logoClassName || ""}`}
                                    />
                                </div>
                            )}

                            <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-blue-950 rounded-full">
                                {exp.duration}
                            </span>

                            <h3 className="text-2xl font-semibold text-blue-950 tracking-tight leading-tight pt-1">
                                {exp.company}
                            </h3>

                            <div className="flex flex-col gap-2 pt-2 text-sm text-blue-950/60">
                                <div className="flex items-center gap-2">
                                    <FiBriefcase className="text-blue-950/40 flex-shrink-0" />
                                    <span className="font-semibold text-blue-950/70">{exp.role}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiMapPin className="text-blue-950/40 flex-shrink-0" />
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-blue-950 bg-white border border-gray-200 rounded-lg hover:border-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-200 cursor-pointer"
                                >
                                    Visit Website <FiExternalLink className="text-[10px]" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Role Overview, Tags, and Bullet Point Details */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Role Overview */}
                            <p className="text-gray-655 text-base sm:text-lg leading-relaxed font-normal">
                                {exp.description}
                            </p>

                            {/* Skills Tag Cloud */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white border border-gray-200 text-xs text-blue-950/70 rounded-md font-medium group-hover:border-gray-300 transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Vertical Dot Line Bullet List */}
                            <div className="space-y-4">
                                {exp.bullets.map((bullet, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200 mt-2 shrink-0" />
                                            {i < exp.bullets.length - 1 && (
                                                <div className="w-px flex-1 bg-gray-200 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-sm sm:text-base text-blue-950/70 leading-relaxed">
                                            {bullet}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
