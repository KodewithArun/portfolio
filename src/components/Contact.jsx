import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 py-28 border-t border-gray-100">
            {/* Section Header */}
            <div className="mb-20 max-w-3xl">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-3 animate-fadeIn">
                    Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                    Let's Build Something{' '}
                    <span className="text-gray-600">Amazing Together</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                    Whether you have a project in mind, need technical consultation, or just want to chat about the latest in AI and web development, I'm always open to discussing new opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                {/* Contact Information */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-10 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm flex-shrink-0">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:contactwitharunlaudari@gmail.com" className="text-base font-semibold text-black hover:text-gray-600 transition-colors">
                                            contactwitharunlaudari@gmail.com
                                        </a>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm flex-shrink-0">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-base font-semibold text-black">
                                            Kathmandu, Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        <div>
                            <h3 className="text-xl font-semibold text-black mb-6">Social Profiles</h3>
                            <div className="flex gap-6">
                                <a href="https://github.com/KodewithArun" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/arun-pandey-laudari-214a9832a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href="https://www.facebook.com/p/Arun-Pandey-Laudari-100035424161345/?locale=cx_PH" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-colors">
                                    <FaFacebook className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                    <form className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label htmlFor="subject" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="How can I help you?"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            <FiSend className="text-base" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
