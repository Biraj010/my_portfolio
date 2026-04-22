"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";

const Contact = () => {
  const { paragraph } = portfolioData.contact;
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell py-24">
      <div className="mb-12 text-center">
        <span className="section-kicker">Get in Touch</span>
        <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
          Let&apos;s Build{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Something Great
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-8 text-slate-300">
          {paragraph}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {/* LEFT — Info column */}
        <div className="space-y-5">
          {/* Quick Contact Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="panel-surface group flex items-start gap-3 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-sky-400/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                <i className="bx bx-envelope text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Email
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-white group-hover:text-sky-300">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="panel-surface group flex items-start gap-3 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-emerald-400/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                <i className="bx bx-phone text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Phone
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-white group-hover:text-emerald-300">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            <div className="panel-surface flex items-start gap-3 rounded-2xl px-5 py-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <i className="bx bx-map text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Location
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {personalInfo.address}
                </p>
              </div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-surface group flex items-start gap-3 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-sky-400/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                <i className="bx bxl-linkedin-square text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  LinkedIn
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-white group-hover:text-sky-300">
                  biraj-regmi-007679183
                </p>
              </div>
            </a>
          </div>

          {/* Available For */}
          <div className="panel-surface rounded-2xl p-5">
            <h3 className="mb-4 text-lg font-bold text-white">Available For</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15">
                  <i className="bx bx-check text-emerald-300" />
                </span>
                Full-time opportunities
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15">
                  <i className="bx bx-check text-sky-300" />
                </span>
                Freelance projects
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15">
                  <i className="bx bx-check text-violet-300" />
                </span>
                Product collaborations
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15">
                  <i className="bx bx-check text-amber-300" />
                </span>
                Consulting &amp; mentoring
              </li>
            </ul>
          </div>

          {/* Social quick */}
          <div className="panel-surface rounded-2xl p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Connect With Me
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                aria-label="GitHub"
              >
                <i className="bx bxl-github text-xl" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-300"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin-square text-xl" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp text-xl" />
              </a>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-300"
                aria-label="Portfolio"
              >
                <i className="bx bx-globe text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="panel-surface rounded-[28px] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10">
              <i className="bx bx-message-rounded-dots text-xl text-sky-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-xs text-slate-400">
                I&apos;ll get back to you within 24 hours
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                Phone <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+977 9846892218"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                disabled={isSubmitting}
                suppressHydrationWarning
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-300">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus && (
              <div
                className={`rounded-xl border p-3.5 text-sm ${
                  submitStatus.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`bx ${
                      submitStatus.type === "success"
                        ? "bx-check-circle"
                        : "bx-error-circle"
                    } text-lg`}
                  />
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_45px_-8px_rgba(37,99,235,0.9)] ${
                isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
              suppressHydrationWarning
            >
              {isSubmitting ? (
                <>
                  <i className="bx bx-loader-alt animate-spin text-lg" />
                  Sending...
                </>
              ) : (
                <>
                  <i className="bx bx-send text-lg" />
                  Send Message
                  <i className="bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
