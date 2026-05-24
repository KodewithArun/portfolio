import { FiCheckCircle } from "react-icons/fi";

const testimonials = [
  {
    id: 't1',
    name: 'Bala Joshi',
    role: 'Namuna Bakery, Rijal Chowk, Bharatpur',
    rating: 5,
    quote: "Arun helped us by building   a full stack e-commerce platform so we could sell our delicious baked goods online. The system is fast, secure, and easy to use. Highly recommended!"
  },
  {
    id: 't2',
    name: 'Samuel Green',
    role: 'Product Manager, BrightApp',
    rating: 5,
    quote: "Delivered a production-ready microservice architecture on time; very impressed.",
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    role: 'Founder, MedAssist',
    rating: 5,
    quote: "Built a thoughtful AI assistant that significantly improved our workflow.",
  }
];

function InitialsAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-700">
      {initials}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-3">
          What Clients Say
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <InitialsAvatar name={t.name} />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-black">
                  <span>{t.name}</span>
                  <FiCheckCircle className="text-green-500 text-sm" aria-label="Verified Client" />
                </div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>

            <p className="text-gray-700 text-sm">“{t.quote}”</p>

            <div className="mt-auto flex items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={index < t.rating ? 'text-amber-400' : 'text-gray-200'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-400">{t.rating}.0 / 5.0</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
