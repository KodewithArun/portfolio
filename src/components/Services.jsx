import { FiServer, FiDatabase, FiLayers, FiZap } from "react-icons/fi";

/**
 * ToolsPerformance
 * Design-accurate segmented radial visualization
 * SVG-only (professional / portfolio-grade)
 */
export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* LEFT – RADIAL PERFORMANCE */}
        <div className="flex items-center justify-center">
          <div className="relative w-[420px] h-[420px]">
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <span className="text-gray-500 text-base">Professional</span>
              <span className="text-gray-500 text-xl font-medium">Services</span>
            </div>

            {/* SVG ring */}
            <svg
              viewBox="0 0 420 420"
              className="w-full h-full -rotate-90"
            >
              {/* Track */}
              <circle
                cx="210"
                cy="210"
                r="160"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="20"
              />

              {/* Lime segment */}
              <circle
                cx="210"
                cy="210"
                r="160"
                fill="none"
                stroke="#111111"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray="260 740"
              />

              {/* Yellow segment */}
              <circle
                cx="210"
                cy="210"
                r="160"
                fill="none"
                stroke="#4b5563"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray="190 810"
                strokeDashoffset="-300"
              />

              {/* Orange segment */}
              <circle
                cx="210"
                cy="210"
                r="160"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray="140 860"
                strokeDashoffset="-560"
              />
            </svg>

            {/* Floating nodes */}
            <RadialNode className="top-[18px] left-1/2 -translate-x-1/2" color="bg-black">
              <FiServer />
            </RadialNode>

            <RadialNode className="right-[12px] top-1/2 -translate-y-1/2" color="bg-gray-500">
              <FiLayers />
            </RadialNode>

            <RadialNode className="left-[12px] top-1/2 -translate-y-1/2" color="bg-gray-700">
              <FiDatabase />
            </RadialNode>

            <RadialNode className="bottom-[18px] left-1/2 -translate-x-1/2" color="bg-gray-300">
              <FiZap />
            </RadialNode>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Building intelligent products with{' '}
            <span className="text-gray-600">Backend, REST APIs, and AI</span>{' '}
            for scalable real-world impact.
          </h2>

          <p className="text-gray-600 mb-5 max-w-xl">
            I develop robust backend systems and production-ready REST APIs that power reliable, secure, and high-performance applications.
          </p>

          <p className="text-gray-600 mb-10 max-w-xl">
            My AI expertise spans AI Agents, RAG pipelines, Machine Learning, and Data Analysis to deliver context-aware and data-driven solutions.
          </p>

          <button className="px-7 py-3.5 rounded-xl bg-black text-white font-medium shadow-md hover:bg-gray-800 hover:shadow-lg transition">
            Explore Services
          </button>
        </div>
      </div>

      {/* BOTTOM – TOOL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-28">
        <ToolCard icon={<FiServer />} title="Backend" percent="90%" desc="Scalable backend architecture with Django and DRF, business logic, authentication, background tasks, and database integration for production applications." />
        <ToolCard icon={<FiDatabase />} title="REST API" percent="88%" desc="Secure, well-structured REST APIs with clean endpoints, validation, pagination, error handling, and clear documentation." />
        <ToolCard icon={<FiLayers />} title="AI Agent" percent="85%" desc="Autonomous AI agents for workflow automation, tool use, multi-step reasoning, and task execution." />
        <ToolCard icon={<FiZap />} title="RAG" percent="84%" desc="Retrieval-augmented systems with indexing, chunking, embeddings, and grounded AI responses from your data." />
        <ToolCard icon={<FiLayers />} title="Machine Learning" percent="82%" desc="Model development, training pipelines, feature engineering, evaluation, and performance optimization." />
        <ToolCard icon={<FiServer />} title="Data Analysis" percent="86%" desc="Actionable insights through data cleaning, exploration, visualization, reporting, and decision support." />
      </div>
    </section>
  );
}

/* ---------------- components ---------------- */

function RadialNode({ className, color, children }) {
  return (
    <div
      className={`absolute ${className} w-14 h-14 rounded-full ${color} flex items-center justify-center shadow-lg backdrop-blur-sm`}
    >
      <span className="text-lg text-white">{children}</span>
    </div>
  );
}

function ToolCard({ icon, title, percent, desc }) {
  return (
    <div className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xl text-black">{icon}</span>
        <span className="text-sm font-semibold text-gray-700">{percent}</span>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-black">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
