import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import arunprofile from "../assets/images/arunprofile.png";
import Testimonial from "./Testimonial";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for sticky navbar

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-6 text-base">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition-colors duration-200 ${activeSection === item.id
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Hire Me!
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-x-0 top-0 bg-white/90 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-6 py-5 shadow-lg animate-fadeIn">
            <ul className="flex flex-col gap-4 text-base mb-6">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition-colors duration-200 ${activeSection === item.id
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:text-black"
                    }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium w-full text-center hover:bg-gray-800 transition-colors"
              >
                Hire Me!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-18 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Left content */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <span className="inline-block mb-4 px-4 py-2 bg-black text-sm text-white rounded-full font-medium">
          Hi, Arun Here 👋
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Turning complex ideas into <span className="text-gray-500">scalable backend architectures & intelligent AI solutions.</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 text-sm sm:text-base">
          Expert in REST APIs, microservices, authentication, databases, GenAI, RAG systems, and autonomous AI agents building fast, reliable, and production-ready applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg bg-white text-black font-medium w-full sm:w-auto cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Hire Me!
          </button>
          <a
            href="/Arun_Pandey_Laudari.pdf"
            download
            className="px-6 py-3 rounded-lg bg-black text-white font-medium w-full sm:w-auto hover:bg-gray-800 transition-colors text-center flex items-center justify-center border border-black"
            style={{ textDecoration: "none" }}
          >
            See My Portfolio
          </a>
        </div>
      </div>

      {/* Right image placeholder */}
      <div className="relative order-1 lg:order-2">
        {/* available to work */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full shadow text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Available for work
        </div>
        <div className="w-full h-[360px] sm:h-[480px] lg:h-[640px] bg-transparent rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden">
          <img src={arunprofile} alt="Hero Image" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div id="home">
      <Hero />
      <Testimonial />
    </div>
  );
}
