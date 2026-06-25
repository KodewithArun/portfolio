import { useState, useRef } from "react";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    formRef.current.reset();
                    
                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        setSubmitStatus(null);
                    }, 5000);
                },
                (error) => {
                    console.error('EmailJS Error:', error.text);
                    setSubmitStatus('error');
                    setIsSubmitting(false);
                    
                    // Clear error message after 5 seconds
                    setTimeout(() => {
                        setSubmitStatus(null);
                    }, 5000);
                }
            );
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-28 border-t border-gray-100">
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
                    <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-5 sm:p-6 lg:p-10 space-y-8 shadow-sm">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-950 mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-950 shadow-sm flex-shrink-0">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:contactwitharunlaudari@gmail.com" className="block text-sm sm:text-base font-semibold text-blue-950 hover:text-gray-600 transition-colors break-all leading-relaxed">
                                            contactwitharunlaudari@gmail.com
                                        </a>
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-950 shadow-sm flex-shrink-0">
                                        <FiMapPin className="text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-sm sm:text-base font-semibold text-blue-950 leading-relaxed">
                                            Kathmandu, Nepal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200" />

                        <div>
                            <h3 className="text-xl font-semibold text-blue-950 mb-6">Social Profiles</h3>
                            <div className="flex flex-wrap gap-4 sm:gap-6">
                                <a href="https://github.com/KodewithArun" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-950 transition-colors">
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
                    <form ref={formRef} className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-5 sm:p-6 lg:p-10 shadow-sm" onSubmit={sendEmail}>
                        
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-700 flex items-center gap-3 border border-green-100">
                                <FiCheckCircle className="text-xl flex-shrink-0" />
                                <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 flex items-center gap-3 border border-red-100">
                                <FiXCircle className="text-xl flex-shrink-0" />
                                <p className="text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-all"
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
                                    name="user_email"
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-all"
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
                                name="subject"
                                placeholder="How can I help you?"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-colors shadow-sm ${
                                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-950 hover:bg-blue-900"
                            }`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <FiSend className="text-base" />
                            )}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

