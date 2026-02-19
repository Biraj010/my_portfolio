import React, { useState } from "react";
import { portfolioData } from "../data";

const Contact = () => {
  const { paragraph, whatsappUrl } = portfolioData.contact;
  const { personalInfo } = portfolioData.about;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center rounded-full border border-white-100/10 bg-tertiary/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.14em] text-secondary">
          Get in Touch
        </span>
        <h2 className="mt-4 text-white font-black md:text-[48px] sm:text-[40px] xs:text-[32px] text-[28px]">
          Let&apos;s Work Together
        </h2>
        <p className="text-secondary mt-4">
          {paragraph}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:grid-cols-2">
        {/* Left column: contact info + availability */}
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Get in Touch
            </h3>
            <p className="text-secondary text-sm sm:text-[15px]">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just having a chat about web development and technology.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white-100/10 bg-tertiary/70 px-4 py-4 sm:px-5 sm:py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[18px] text-[#915EFF]">
                <i className="bx bx-envelope" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-secondary">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-[15px] text-white hover:text-[#915EFF] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white-100/10 bg-tertiary/70 px-4 py-4 sm:px-5 sm:py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[18px] text-emerald-400">
                <i className="bx bx-phone" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-secondary">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="text-sm sm:text-[15px] text-white hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white-100/10 bg-tertiary/70 px-4 py-4 sm:px-5 sm:py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[18px] text-sky-400">
                <i className="bx bx-map" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-secondary">
                  Location
                </p>
                <p className="text-sm sm:text-[15px] text-white">
                  {personalInfo.address}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white-100/10 bg-primary/60 px-5 py-5 sm:px-6 sm:py-6 shadow-card">
            <h3 className="text-white font-semibold text-lg mb-3 sm:mb-4">
              Available For
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-secondary">
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>Full-time opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span>Freelance projects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                <span>Consulting & mentoring</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: form */}
        <div className="rounded-3xl border border-white-100/10 bg-tertiary/80 shadow-card px-5 py-6 sm:px-7 sm:py-8">
          <h3 className="text-white font-semibold text-lg mb-4">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-secondary mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-primary border border-white-100/10 rounded-lg py-3 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-secondary mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-primary border border-white-100/10 rounded-lg py-3 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-secondary mb-1.5">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+977 9846892218"
                value={formData.phone}
                onChange={handleChange}
                className="bg-primary border border-white-100/10 rounded-lg py-3 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-secondary mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="bg-primary border border-white-100/10 rounded-lg py-3 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#915EFF]"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className={`bx ${submitStatus.type === 'success' ? 'bx-check-circle' : 'bx-error-circle'} text-lg`} />
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 pt-4 border-t border-white-100/5 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="bx bx-loader-alt animate-spin text-[18px]" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bx bx-send text-[18px]" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
