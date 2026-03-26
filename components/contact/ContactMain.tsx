"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

/* ─── GitHub SVG (brand icon) ─── */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

/* ─── LinkedIn SVG (brand icon) ─── */
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "alishojaa88@gmail.com",
    href: "mailto:alishojaa88@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alias-shoja",
    href: "https://www.linkedin.com/in/alias-shoja/",
  },
  {
    label: "GitHub",
    value: "github.com/alishoja88",
    href: "https://github.com/alishoja88",
  },
];

/* ─── Input field ─── */

const inputClass =
  "w-full bg-surface border border-border rounded-xl px-4 py-3 text-[0.9375rem] text-text placeholder:text-text/35 outline-none focus:border-olive/60 focus:ring-2 focus:ring-olive/12 transition-all duration-200 shadow-soft";

/* ─── Contact form ─── */

type FormState = "idle" | "submitting" | "success";

type FieldErrors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (fields.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(fields.email.trim())) errors.email = "Please enter a valid email address.";
  if (fields.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    /* Clear error for this field on change */
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");

    const fieldErrors = validate(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("success");
      setTimeout(() => {
        setState("idle");
        setFields({ name: "", email: "", message: "" });
        setErrors({});
      }, 4000);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setState("idle");
    }
  }

  return (
    /* Card wrapper with hover shadow */
    <motion.div
      whileHover={{ boxShadow: "0 18px 48px rgba(46,40,31,0.10)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#f5f3ee] rounded-2xl border border-border/70 shadow-soft p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-4 py-12 text-center"
          >
          <CheckCircle size={36} strokeWidth={1.5} className="text-olive" />
          <h3 className="font-display text-2xl font-medium tracking-tight">
            Message sent!
          </h3>
          <p className="text-sm text-text/55 max-w-xs leading-relaxed">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
          <p className="text-xs text-text/35">
            Form resets in a moment…
          </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-text/50">
                Name
              </label>
              <input
                id="name" name="name" type="text"
                placeholder="Your Name"
                value={fields.name}
                onChange={handleChange}
                className={`${inputClass} ${errors.name ? "border-red-400/60 focus:border-red-400/80 focus:ring-red-400/10" : ""}`}
              />
              {errors.name && <p className="text-[0.75rem] text-red-500/80">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-text/50">
                Email
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="your@email.com"
                value={fields.email}
                onChange={handleChange}
                className={`${inputClass} ${errors.email ? "border-red-400/60 focus:border-red-400/80 focus:ring-red-400/10" : ""}`}
              />
              {errors.email && <p className="text-[0.75rem] text-red-500/80">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-text/50">
                Message
              </label>
              <textarea
                id="message" name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={fields.message}
                onChange={handleChange}
                className={`${inputClass} resize-none ${errors.message ? "border-red-400/60 focus:border-red-400/80 focus:ring-red-400/10" : ""}`}
              />
              {errors.message && <p className="text-[0.75rem] text-red-500/80">{errors.message}</p>}
            </div>

            {/* Server error */}
            {serverError && (
              <p className="text-[0.8125rem] text-red-500/80 bg-red-50/60 border border-red-200/60 rounded-xl px-4 py-2.5">
                {serverError}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "submitting"}
              className="self-start inline-flex items-center gap-2 bg-olive text-surface px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-olive-hover shadow-soft hover:shadow-medium btn-lift disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {state === "submitting" ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-surface/40 border-t-surface animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight size={14} strokeWidth={2} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main section ─── */

export function ContactMain() {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container-base">
        <div className="h-px bg-border/50 mb-14 lg:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* ── Left: info ── */}
          <FadeIn>
            <div className="flex flex-col gap-5 bg-olive-light/60 rounded-2xl border border-olive/15 shadow-soft p-6 sm:p-8 h-full">

              <p className="text-[0.9375rem] text-text/60 leading-[1.8] max-w-sm">
                If you have a project in mind or just want to say hi,
                I&apos;m always happy to connect.
              </p>

              {/* Email */}
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-text/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:alishojaa88@gmail.com"
                  className="text-[0.9375rem] font-semibold text-text/80 hover:text-olive transition-colors duration-200"
                >
                  alishojaa88@gmail.com
                </a>
              </div>

              {/* LinkedIn + GitHub */}
              <div className="flex gap-2.5">
                <a
                  href="https://www.linkedin.com/in/alias-shoja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border/70 rounded-xl text-text/60 hover:text-olive hover:border-olive/35 hover:shadow-soft transition-all duration-200"
                >
                  <LinkedInIcon size={16} />
                  <span className="text-[0.8rem] font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/alishoja88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border/70 rounded-xl text-text/60 hover:text-olive hover:border-olive/35 hover:shadow-soft transition-all duration-200"
                >
                  <GithubIcon size={16} />
                  <span className="text-[0.8rem] font-semibold">GitHub</span>
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/40" />

              {/* Location & timezone */}
              <div className="flex gap-8">
                <div className="flex items-start gap-2">
                  <MapPin size={13} strokeWidth={1.8} className="text-olive/60 shrink-0 mt-[3px]" />
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-text/40 mb-0.5">Location</p>
                    <p className="text-[0.875rem] font-semibold text-text/75">Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={13} strokeWidth={1.8} className="text-olive/60 shrink-0 mt-[3px]" />
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-text/40 mb-0.5">Timezone</p>
                    <p className="text-[0.875rem] font-semibold text-text/75">EST (UTC−5)</p>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 self-start bg-surface/70 border border-olive/20 rounded-2xl px-4 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse shrink-0" />
                <span className="text-[0.8rem] font-semibold text-text/70">
                  Open to freelance, contract, and full-time opportunities.
                </span>
              </div>

            </div>
          </FadeIn>

          {/* ── Right: form card ── */}
          <FadeIn delay={0.1} direction="left">
            <ContactForm />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
