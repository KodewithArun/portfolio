import { useState } from "react";
import { FiGithub, FiCode } from "react-icons/fi";
import ruralHealthAIImg from "../assets/images/ruralhealthai.png";
import agenticRagImg from "../assets/images/agenticragusinglanggraph.png";
import sqlsAgentImg from "../assets/images/sqlsagent.png";
import multidocImg from "../assets/images/multidoc.png";
import movierecImg from "../assets/images/movierecommand.png";
import churnImg from "../assets/images/customerchurnusingann.jpeg";
import segKnnImg from "../assets/images/customersegmanation singknn.png";
import diabetesImg from "../assets/images/dibatiesuisnglogistic.png";

const projects = [
    {
        id: "rural-health-ai",
        order: 1,
        title: "Rural Health AI — Smart Healthcare Solutions",
        summary: "AI-driven platform improving rural healthcare access, triage, and scheduling.",
        image: ruralHealthAIImg,
        github: "https://github.com/arun/rural-health-ai",
        technologies: ["Django", "LangGraph", "ChromaDB", "Gemini", "SerpAPI", "Celery", "Redis", "PostgreSQL"],
    },
    {
        id: "agentic-rag",
        order: 2,
        title: "Agentic RAG Using LangGraph",
        summary: "Adaptive RAG pipeline using LangGraph agents for context-aware retrieval.",
        image: agenticRagImg,
        github: "https://github.com/arun/agentic-rag",
        technologies: ["Python", "LangChain", "HuggingFace", "LangGraph", "Gemini", "RAG", "SerpAPI", "FastAPI", "React"],
    },
    {
        id: "sql-sage",
        order: 6,
        title: "SQL Sage — Intelligent DB Agent",
        summary: "Natural-language to SQL assistant that generates optimized, validated queries.",
        image: sqlsAgentImg,
        github: "https://github.com/arun/sql-sage",
        technologies: ["Python", "LangChain", "HuggingFace", "LangGraph", "GROQ", "RAG", "SQLite", "Streamlit"],
    },
    {
        id: "multi-doc-chatbot",
        order: 7,
        title: "Multi-Document Chatbot",
        summary: "Chatbot that answers queries across PDFs, DOCX, PPTX, XLSX, Markdown and more.",
        image: multidocImg,
        github: "https://github.com/arun/multi-doc-chatbot",
        technologies: ["Python", "LangChain", "LlamaParse", "HuggingFace", "Chroma", "Groq LLM", "RAG"],
    },
    {
        id: "churn-prediction",
        order: 5,
        title: "Customer Churn Prediction",
        summary: "ANN-based churn prediction with preprocessing and a Streamlit dashboard.",
        image: churnImg,
        github: "https://github.com/arun/churn-prediction",
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Streamlit"],
    },
    {
        id: "movie-rec",
        order: 4,
        title: "Movie Recommendation System",
        summary: "Content-based recommender using TF-IDF and TMDB metadata for posters.",
        image: movierecImg,
        github: "https://github.com/arun/movie-rec",
        technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "TMDB API", "Docker"],
    },
    {
        id: "customer-seg",
        order: 3,
        title: "Customer Segmentation",
        summary: "K-Means clustering pipeline for customer segmentation and visualization.",
        image: segKnnImg,
        github: "https://github.com/arun/customer-seg",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    },
    {
        id: "diabetes-pred",
        order: 8,
        title: "Diabetes Risk Prediction",
        summary: "Logistic regression model for diabetes risk prediction, served via Flask.",
        image: diabetesImg,
        github: "https://github.com/arun/diabetes-pred",
        technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Flask"],
    }
];

export default function Projects() {
    const pageSize = 4;
    const [page, setPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));

    const sorted = [...projects].sort((a, b) => a.order - b.order);
    const startIndex = (page - 1) * pageSize;
    const visibleProjects = sorted.slice(startIndex, startIndex + pageSize);

    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
            <div className="mb-14 max-w-2xl">
                <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3">
                    Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-950 mb-4">
                    Featured projects
                </h2>
                <p className="text-blue-950/70 text-sm sm:text-base">
                    A selection of systems I've built — from AI agents and RAG pipelines to ML models and backend services.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {visibleProjects.map((project) => {
                    const maxTech = 7;
                    const displayedTech = project.technologies.slice(0, maxTech);
                    const hasMoreTech = project.technologies.length > maxTech;

                    return (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-300"
                        >
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full h-44 sm:h-52 bg-gray-50 overflow-hidden block"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <span className="flex items-center gap-2 bg-white text-blue-950 px-4 py-2 rounded-full text-sm font-semibold">
                                        <FiCode size={14} /> View on GitHub
                                    </span>
                                </div>
                            </a>

                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-blue-950 mb-2">
                                    {project.title}
                                </h3>

                                {project.summary && (
                                    <p className="text-sm text-blue-950/60 mb-4 leading-relaxed">{project.summary}</p>
                                )}

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {displayedTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 bg-blue-950/5 text-blue-950/70 text-[11px] font-medium rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {hasMoreTech && (
                                        <span className="px-2 py-0.5 bg-blue-950/5 text-blue-950/40 text-[11px] font-medium rounded-md">
                                            +{project.technologies.length - maxTech}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-3">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 text-sm font-medium text-blue-950 bg-white border border-gray-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-950 transition-colors"
                    >
                        Previous
                    </button>

                    <div className="flex items-center gap-1.5">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`w-8 h-8 text-sm font-medium rounded-lg transition-colors ${
                                    page === i + 1
                                        ? "bg-blue-950 text-white"
                                        : "bg-white text-blue-950/60 border border-gray-200 hover:border-blue-950/30"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 text-sm font-medium text-blue-950 bg-white border border-gray-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-950 transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}
