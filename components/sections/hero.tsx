import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";

export default function HeroSection() {
  return (
    <section className="relative pt-10 md:pt-16">
      <Container>
        <FadeUp>
          <GlassCard variant="highlight" className="relative p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-12 top-10 h-40 w-40 rounded-full bg-[rgba(27,107,98,0.10)] blur-3xl" />
              <div className="absolute right-16 top-12 h-48 w-48 rounded-full bg-[rgba(201,168,76,0.12)] blur-3xl" />
              <div className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-8 right-20 h-28 w-28 rounded-full bg-[rgba(27,107,98,0.08)] blur-2xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/55" />
            </div>

            {/* Arch motif decoration */}
            <div className="pointer-events-none absolute right-8 top-0 h-full w-56 opacity-[0.07]">
              <svg viewBox="0 0 220 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M 20 480 L 20 180 Q 20 20 110 20 Q 200 20 200 180 L 200 480" stroke="#1B6B62" strokeWidth="2"/>
                <path d="M 44 480 L 44 196 Q 44 56 110 56 Q 176 56 176 196 L 176 480" stroke="#C9A84C" strokeWidth="1.5"/>
                <path d="M 68 480 L 68 212 Q 68 92 110 92 Q 152 92 152 212 L 152 480" stroke="#1B6B62" strokeWidth="1"/>
              </svg>
            </div>

            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#1B6B62]">
                Harith Izani
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#1E1410] md:text-5xl">
                AI Engineer building production computer vision, NLP, and large-scale data systems.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#7A4E46] md:text-lg">
                I am an AI Engineer and Data Scientist with strong research foundation and experience building production-ready AI and data systems.
                Developed end-to-end pipelines transforming large-scale raw data into actionable insights, including processing 100k images for archival applications and building machine learning models for churn analysis in the Petronas ecosystem.
                Gold Medallist Computer Science graduate with expertise in computer vision, NLP, and large-scale data pipelines.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium"
                >
                  {/* Grid / layout icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  className="btn-primary inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium"
                >
                  {/* Download icon */}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
