import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-base py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <span className="font-display text-lg font-medium tracking-tight">
              {SITE_CONFIG.name}
            </span>
            <p className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mt-1">
              Front-End Developer
            </p>
          </div>

          <div>
            <h4 className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.625rem] uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
