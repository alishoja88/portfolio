"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/90 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      )}
    >
      <nav className="container-base flex items-center justify-between h-16 lg:h-20">
        <a href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-medium tracking-tight text-text">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold">
            Front-End Dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-text-muted hover:text-text transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-olive text-surface text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-olive-hover btn-lift"
          >
            Contact
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-md border-t border-border"
          >
            <div className="container-base py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2.5 text-text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-olive text-surface text-sm font-semibold px-5 py-2.5 rounded-full mt-3 w-full"
              >
                Contact
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
