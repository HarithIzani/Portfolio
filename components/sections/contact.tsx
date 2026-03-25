"use client";

import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

const contactLinks = [
  {
    label: "Email",
    display: "harithizani@gmail.com",
    url: "mailto:harithizani@gmail.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/harithizani/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    display: "GitHub",
    url: "https://github.com/harithizani",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "Phone",
    display: "+60 13-321 3912",
    url: "tel:+60133213912",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.63h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Contact"
            title="Let's work together"
            description="If you're building something impactful or need help with AI, data systems, or production pipelines, feel free to reach out."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassCard variant="highlight" className="mt-8 p-8 md:p-10">

            {/* Arch accent */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-0 opacity-[0.08]"
              width="200"
              height="260"
              viewBox="0 0 200 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 20 260 L 20 95 Q 20 15 100 15 Q 180 15 180 95 L 180 260" stroke="#1B6B62" strokeWidth="2" />
              <path d="M 44 260 L 44 108 Q 44 40 100 40 Q 156 40 156 108 L 156 260" stroke="#C9A84C" strokeWidth="1.5" />
              <path d="M 68 260 L 68 121 Q 68 65 100 65 Q 132 65 132 121 L 132 260" stroke="#1B6B62" strokeWidth="1" />
            </svg>

            <div className="relative z-10 flex flex-wrap gap-4">
              {contactLinks.map((link) => {
                const isExternal =
                  link.url.startsWith("http") ||
                  link.url.startsWith("mailto");

                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="btn-primary inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium"
                  >
                    {link.icon}
                    {link.display}
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
