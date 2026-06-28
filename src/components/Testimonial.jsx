import { useState } from "react";
import { FiStar } from "react-icons/fi";
import clientBala from "../assets/images/clientbalajoshi.png";
import inspiringlabLogo from "../assets/images/InspiringLab.png";

const testimonials = [
  {
    id: 't1',
    name: 'Bala Joshi',
    image: clientBala,
    role: 'Namuna Bakery, Rijal Chowk, Bharatpur',
    category: 'Client',
    rating: 5,
    quote: "Arun helped us by building a full stack e-commerce platform so we could sell our delicious baked goods online. The system is fast, secure, and easy to use. Highly recommended!"
  },
  {
    id: 't2',
    name: 'Inspiring Lab',
    image: inspiringlabLogo,
    role: 'AI/ML Intern',
    category: 'Company',
    rating: 5,
    quote: "During his internship, Arun successfully developed and implemented advanced AI solutions involving Agentic AI, RAG architectures, and automation workflows. His technical competence, creativity, and commitment to excellence left a lasting positive impact on our organization."
  }
];

export default function Testimonial() {
  const pageSize = 3;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(testimonials.length / pageSize));
  const visible = testimonials.slice(0, page * pageSize);

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-gray-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-950/60 block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-950 mb-4">
            Kind words from clients, mentors, and collaborators
          </h2>
          <p className="text-blue-950/70 text-sm sm:text-base max-w-xl">
            Real feedback from people I've worked with across companies, projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="flex items-start gap-4 p-6 pb-4">
                {t.image && (
                  <div className={`w-11 h-11 ${t.category === 'Company' ? 'rounded-full' : 'rounded-full'} bg-black flex items-center justify-center overflow-hidden shrink-0 ${t.category === 'Company' ? 'p-1.5 border border-gray-200' : ''}`}>
                    <img
                      src={t.image}
                      alt={t.name}
                      className={`w-full h-full ${t.category === 'Company' ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-950 bg-blue-50 px-2 py-0.5 rounded-full">
                      {t.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{t.role}</p>
                  <div className="flex items-center gap-0.5 mt-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={12}
                        className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
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
      </div>
    </section>
  );
}
