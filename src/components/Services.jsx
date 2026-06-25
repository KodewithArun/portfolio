import { FiServer, FiDatabase, FiLayers, FiZap } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-18">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3">
          What I Do
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-950 mb-4">
          Services & expertise
        </h2>
        <p className="text-blue-950/70 text-sm sm:text-base max-w-xl">
          From backend architecture to AI agents — I build production-ready systems that scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<FiServer />}
          title="Backend Development"
          desc="Scalable backend systems with Django, DRF, PostgreSQL, authentication, background tasks, and clean architecture for production."
        />
        <ServiceCard
          icon={<FiDatabase />}
          title="REST API Development"
          desc="Secure, well-structured REST APIs with validation, pagination, error handling, and clear documentation."
        />
        <ServiceCard
          icon={<FiLayers />}
          title="AI Agent Development"
          desc="Autonomous AI agents for workflow automation, tool use, multi-step reasoning, and task execution."
        />
        <ServiceCard
          icon={<FiZap />}
          title="RAG & GenAI Solutions"
          desc="Retrieval-augmented generation systems with indexing, embeddings, and grounded AI responses from your data."
        />
        <ServiceCard
          icon={<FiLayers />}
          title="Machine Learning"
          desc="Model development, training pipelines, feature engineering, evaluation, and performance optimization."
        />
        <ServiceCard
          icon={<FiServer />}
          title="Data Analysis"
          desc="Actionable insights through data cleaning, exploration, visualization, and reporting."
        />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-blue-950/5 flex items-center justify-center text-blue-950 mb-5 group-hover:bg-blue-950 group-hover:text-white transition-all duration-300">
        <span className="text-lg">{icon}</span>
      </div>
      <h3 className="font-semibold text-base sm:text-lg text-blue-950 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
