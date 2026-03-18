"use client";

import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

const contactLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/harithizani/",
  },
  {
    label: "GitHub",
    url: "https://github.com/harithizani",
  },
  {
    label: "Email",
    url: "mailto:harithizani@gmail.com",
  },
  {
    label: "Phone",
    url: "tel:+60133213912",
    display: "+60 13-321 3912",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Contact"
            title="Let’s work together"
            description="If you're building something impactful or need help with AI, data systems, or production pipelines, feel free to reach out."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassCard variant="highlight" className="mt-8 p-8 md:p-10">
            <div className="flex flex-wrap gap-4">
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
                    className="btn-primary rounded-full px-5 py-3 text-sm font-medium"
                  >
                    {link.label === "Phone" && link.display
                      ? link.display
                      : link.label}
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