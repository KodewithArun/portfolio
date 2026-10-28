import {
  FiServer,
  FiCode,
  FiLayers,
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiBarChart2,
  FiShoppingBag,
  FiEdit3,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiServer />,
    title: "Backend Development",
    desc: "Scalable backend systems with Django, DRF, PostgreSQL, authentication, background tasks, and clean architecture built for production.",
    tags: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
  },
  {
    icon: <FiCode />,
    title: "REST API Development",
    desc: "Secure, well-structured REST APIs with validation, pagination, versioning, error handling, and clear documentation.",
    tags: ["DRF", "FastAPI", "Django Ninja", "JWT", "OpenAPI"],
  },
  {
    icon: <FiLayers />,
    title: "Full-Stack Development",
    desc: "End-to-end web applications with React, Django, Laravel, and PostgreSQL — from UI and authentication to deployment.",
    tags: ["React", "Django", "Laravel", "PostgreSQL", "Tailwind"],
  },
  {
    icon: <FiCpu />,
    title: "AI Agent Development",
    desc: "Autonomous agents with tool use, multi-step reasoning, memory, and workflow automation for real business tasks.",
    tags: ["LangGraph", "LangChain", "MCP", "Tool Calling", "Memory"],
  },
  {
    icon: <FiZap />,
    title: "RAG & GenAI Solutions",
    desc: "Retrieval-augmented generation with chunking, embeddings, vector search, and grounded answers from your own data.",
    tags: ["RAG", "ChromaDB", "Embeddings", "Gemini", "Groq"],
  },
  {
    icon: <FiTrendingUp />,
    title: "Machine Learning",
    desc: "Model development, feature engineering, training pipelines, evaluation, and performance optimization for real datasets.",
    tags: ["Scikit-learn", "TensorFlow", "Keras", "Pandas"],
  },
  {
    icon: <FiBarChart2 />,
    title: "Data Analysis",
    desc: "Actionable insights through data cleaning, exploration, visualization, dashboards, and clear reporting.",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    icon: <FiShoppingBag />,
    title: "E-Commerce Development",
    desc: "Storefronts with product catalogs, search, cart, checkout, payments, order management, and admin dashboards.",
    tags: ["Laravel", "Django", "Payments", "Orders", "Admin"],
  },
  {
    icon: <FiEdit3 />,
    title: "Content Management System Development",
    desc: "Content platforms with publishing workflows, role-based access, media handling, and SEO-ready pages.",
    tags: ["Laravel", "Django", "RBAC", "Media", "SEO"],
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-950 mb-4">
            Services & expertise
          </h2>
          <p className="text-blue-950/70 text-sm sm:text-base">
            From backend architecture and full-stack products to AI agents and RAG — I build production-ready systems that scale.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-950 hover:gap-3 transition-all duration-300 lg:self-auto"
        >
          Start a project <FiArrowRight />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, tags, index }) {
  return (
    <div className="group flex flex-col p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-950/5 flex items-center justify-center text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-all duration-300">
          <span className="text-lg">{icon}</span>
        </div>
        <span className="text-[10px] font-semibold tracking-widest text-blue-950/20 group-hover:text-blue-950/40 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-semibold text-base sm:text-lg text-blue-950 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-blue-950/5 text-blue-950/70 text-[11px] font-medium rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
