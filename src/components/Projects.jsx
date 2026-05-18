import { useState } from "react";
import { FiGithub, FiCode, FiImage } from "react-icons/fi";

const projects = [
    {
        id: "rural-health-ai",
        title: "Rural Health AI - Smart Healthcare Solutions",
        image: "", // Add your image path here
        github: "https://github.com/arun/rural-health-ai", // Add your GitHub link here
        technologies: ["Django", "LangGraph", "ChromaDB", "Gemini", "SerpAPI", "Celery", "Redis", "PostgreSQL"],
        bullets: [
            "Engineered a robust Agentic RAG platform utilizing LangGraph state machines, directing user queries through a custom 3-tier intent classification algorithm (Heuristic, LLM, Hybrid) for efficient clinical routing.",
            "Architected LangGraph agents for multi-step clinical reasoning and adaptive retrieval, combining ChromaDB semantic search with an automated SerpAPI web-fallback algorithm to combat low-confidence outputs.",
            "Designed a smart medical scheduling service integrated with LLM for AI-driven urgency triage, utilizing a Min-Heap Priority Queue data structure to achieve O(log n) sorting of critical appointments.",
            "Developed role-based portals (patients, health workers, admins) for secure document management and awareness campaigns, deploying Celery and Redis to handle asynchronous background tasks like automated no-show cancellations."
        ]
    },
    {
        id: "agentic-rag",
        title: "Agentic RAG Using LangGraph",
        image: "", // Add your image path here
        github: "https://github.com/arun/agentic-rag", // Add your GitHub link here
        technologies: ["Python", "LangChain", "HuggingFace", "LangGraph", "Gemini", "RAG", "SerpAPI", "FastAPI", "React"],
        bullets: [
            "Engineered an end-to-end Agentic RAG pipeline integrating LangGraph agents for adaptive document retrieval and fallback web search via SerpAPI.",
            "Implemented semantic retrieval using Gemini vector store to enhance contextual awareness and response precision.",
            "Developed a full-stack system with FastAPI backend and React frontend for real-time query interaction and intelligent answer delivery."
        ]
    },
    {
        id: "sql-sage",
        title: "SQL Sage Intelligent DB Agent",
        image: "", // Add your image path here
        github: "https://github.com/arun/sql-sage", // Add your GitHub link here
        technologies: ["Python", "LangChain", "HuggingFace", "LangGraph", "GROQ", "RAG", "SQLite", "Streamlit"],
        bullets: [
            "Developed an intelligent database assistant that converts natural language queries into optimized SQL statements with automatic schema validation.",
            "Implemented dynamic schema exploration and intelligent query correction to ensure accuracy and reduce SQL errors.",
            "Built a multi-agent fault-tolerant architecture using LangChain, LangGraph, and RAG for reliable conversational SELECT querying.",
            "Created both Streamlit and CLI interfaces for real-time database querying and analytics visualization."
        ]
    },
    {
        id: "multi-doc-chatbot",
        title: "Multi-Document Chatbot",
        image: "", // Add your image path here
        github: "https://github.com/arun/multi-doc-chatbot", // Add your GitHub link here
        technologies: ["Python", "LangChain", "LlamaParse", "HuggingFace", "Chroma", "Groq LLM", "RAG"],
        bullets: [
            "Built a multi-format document chatbot supporting PDF, DOCX, PPTX, XLSX, Markdown, and TXT files using robust fallback loaders.",
            "Used HuggingFace embeddings with persistent Chroma vector store for fast semantic retrieval and contextual responses.",
            "Integrated SelfQueryRetriever with metadata filtering and Groq LLM for accurate and grounded query responses.",
            "Enabled multi-turn conversational memory with custom prompting to reduce hallucination and improve consistency."
        ]
    },
    {
        id: "churn-prediction",
        title: "Customer Churn Prediction System Using ANN",
        image: "", // Add your image path here
        github: "https://github.com/arun/churn-prediction", // Add your GitHub link here
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Streamlit"],
        bullets: [
            "Developed an end-to-end customer churn prediction pipeline using Artificial Neural Networks (ANN) with TensorFlow and Keras.",
            "Implemented data preprocessing with feature scaling, one-hot encoding, and model persistence for reproducibility.",
            "Built an interactive Streamlit dashboard for real-time churn prediction and customer segmentation visualization.",
            "Optimized model performance through hyperparameter tuning, early stopping, and TensorBoard-based monitoring."
        ]
    },
    {
        id: "movie-rec",
        title: "Movie Recommendation System",
        image: "", // Add your image path here
        github: "https://github.com/arun/movie-rec", // Add your GitHub link here
        technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "TMDB API", "Docker"],
        bullets: [
            "Developed a content-based movie recommender using TF-IDF vectorization and cosine similarity.",
            "Processed TMDB metadata to extract key features (genres, keywords, overview) for accurate recommendation matching.",
            "Integrated TMDB API for dynamic poster retrieval and implemented autocomplete for enhanced UX.",
            "Containerized and deployed using Docker and Gunicorn for scalable production serving."
        ]
    },
    {
        id: "customer-seg",
        title: "Customer Segmentation Using K-Means Clustering",
        image: "", // Add your image path here
        github: "https://github.com/arun/customer-seg", // Add your GitHub link here
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
        bullets: [
            "Built an end-to-end customer segmentation system using K-Means clustering to identify actionable behavioral groups.",
            "Performed data cleaning, feature scaling, and selection for robust clustering outcomes.",
            "Used Elbow and Silhouette methods for optimal cluster validation and model interpretability.",
            "Created an interactive Streamlit interface to visualize clusters and generate data-driven marketing insights."
        ]
    },
    {
        id: "diabetes-pred",
        title: "Predicting Diabetes with Logistic Regression",
        image: "", // Add your image path here
        github: "https://github.com/arun/diabetes-pred", // Add your GitHub link here
        technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Flask"],
        bullets: [
            "Developed a logistic regression-based predictive model for assessing diabetes risk from patient health data.",
            "Performed data preprocessing, outlier handling, and feature engineering to improve accuracy and stability.",
            "Trained and validated models with feature scaling and class balancing to enhance prediction reliability.",
            "Integrated model inference into a Flask-based web app for real-time health risk assessment and interpretability."
        ]
    }
];

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(3);

    const visibleProjects = projects.slice(0, visibleCount);

    const handleViewMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };

    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-28 border-t border-gray-100">
            {/* Section Header */}
            <div className="mb-20 max-w-3xl">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-3 animate-fadeIn">
                    Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                    Featured Projects &{' '}
                    <span className="text-gray-600">Technical Implementations</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                    A selection of complex systems I've built, ranging from multi-agent RAG pipelines and predictive machine learning models, to scalable backends using Django and DRF.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {visibleProjects.map((project) => (
                    <a
                        key={project.id}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer block"
                    >
                        {/* Project Image Placeholder */}
                        <div className="w-full h-56 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="text-gray-300 flex flex-col items-center gap-3">
                                    <FiImage className="text-4xl" />
                                    <span className="text-xs font-medium tracking-wide">Image Placeholder</span>
                                </div>
                            )}

                            {/* Hover Overlay */}
                            {project.github && (
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <span
                                        className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                                    >
                                        View in detail about project
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Project Content */}
                        <div className="p-8 flex flex-col flex-1 pt-6">
                            <h3 className="text-lg font-semibold text-black tracking-tight leading-tight mb-4">
                                {project.title}
                            </h3>

                            {/* Technologies Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex-grow text-center px-2.5 py-1 bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-700 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                        </div>
                    </a>
                ))}
            </div>

            {/* View More Button */}
            {visibleCount < projects.length && (
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={handleViewMore}
                        className="px-8 py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                    >
                        View More Projects
                    </button>
                </div>
            )}
        </section>
    );
}
