import { useState } from "react";
import { FiCalendar, FiExternalLink } from "react-icons/fi";
import blogImg1 from "../assets/images/blog1.png";
import blogImg2 from "../assets/images/blog2.png";
import blogImg3 from "../assets/images/blog3.png";
import blogImg4 from "../assets/images/blog4.png";

const posts = [
  {
    id: "b1",
    priority: 1,
    image: blogImg1,
    title: "Hackathon Winner — Led Team ByteForce to 1st Place",
    excerpt: "Led team ByteForce from Lumbini ICT College to victory at the 36-hour Hackathon Beta hosted by United Technical College, Bharatpur. Competing against 10 teams from Chitwan, Rupandehi, and Kaski, we secured 1st place and NPR 30,000. The hackathon focused on social, economic, and technological innovation, with participants provided accommodation and meals throughout.",
    date: "Dec 8, 2024",
    category: "Achievement",
    source: "Chitwan Post News Article",
    link: "https://www.chitwanpost.com.np/20241208-12739",
  },
  {
    id: "b4",
    priority: 2,
    image: blogImg4,
    title: "MCP: The USB-C for AI — Why Models Needed a Standard Bridge to Real-World Context",
    excerpt: "LLMs solved intelligence. MCP solves access. A deep dive into why Model Context Protocol exists — from the copy-paste hell era to Anthropic's open standard that gives AI models standardized, secure access to real-world tools and data.",
    date: "Jun 28, 2026",
    category: "AI / MCP",
    source: "Medium",
    link: "https://medium.com/@contactwitharunlaudari/mcp-the-usb-c-for-ai-why-models-needed-a-standard-bridge-to-real-world-context-831638a5d877",
  },
  {
    id: "b2",
    priority: 3,
    image: blogImg2,
    title: "Beginner's Guide to Data Analysis: The Foundation of AI and ML",
    excerpt: "A comprehensive beginner's guide covering data types, the data analysis process, key concepts, and a roadmap to start learning — based on my hands-on experience with Pandas, NumPy, and real Kaggle datasets.",
    date: "Jan 3, 2026",
    category: "Data Science",
    source: "Medium",
    link: "https://medium.com/@contactwitharunlaudari/beginners-guide-to-data-analysis-the-foundation-of-ai-and-machine-learning-c49c440b4565",
  },
  {
    id: "b3",
    priority: 4,
    image: blogImg3,
    title: "The Ultimate Beginner's Guide to Machine Learning: From Pipeline to Advanced Concepts",
    excerpt: "A comprehensive theoretical guide covering the ML pipeline, types of learning, regression vs classification, popular models, overfitting/underfitting, cross-validation, and evaluation metrics — all explained with real-world use cases.",
    date: "Jan 3, 2026",
    category: "Machine Learning",
    source: "Medium",
    link: "https://medium.com/@contactwitharunlaudari/the-ultimate-beginners-guide-to-machine-learning-from-pipeline-to-advanced-concepts-52bfb0ce175b",
  }
].sort((a, b) => a.priority - b.priority);

export default function Blog() {
  const pageSize = 2;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const visiblePosts = posts.slice(0, page * pageSize);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 border-t border-gray-100">
      <div className="mb-14 max-w-2xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3">
          Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-950 mb-4">
          Insights & articles
        </h2>
        <p className="text-blue-950/70 text-sm sm:text-base">
          Technical articles, hackathon wins, and key milestones from my journey in AI engineering and backend development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {visiblePosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="group flex flex-col rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="w-full h-44 sm:h-52 overflow-hidden bg-gray-50">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-1 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-950 bg-blue-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-blue-950/60 leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-1.5 text-xs text-blue-950/40">
                  <FiCalendar size={12} />
                  {post.date}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-950/50 group-hover:text-blue-950 transition-colors">
                  <FiExternalLink size={12} />
                  {post.source}
                </span>
              </div>
            </div>
          </a>
        ))}
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
