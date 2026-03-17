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
              <div className="absolute left-12 top-10 h-40 w-40 rounded-full bg-[#D7B893]/18 blur-3xl" />
              <div className="absolute right-16 top-12 h-48 w-48 rounded-full bg-[#E7D8C7]/24 blur-3xl" />
              <div className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-8 right-20 h-28 w-28 rounded-full bg-[#DCC7B0]/18 blur-2xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/55" />
            </div>

            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#6B625A]">
                Harith Izani
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#2F2A26] md:text-7xl">
                AI Engineer & Data Scientist building production-ready intelligent systems.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
                I build end-to-end AI and data systems across computer vision, NLP,
                automation, and large-scale pipelines with a focus on practical deployment,
                operational reliability, and measurable impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full border border-[#D7B893]/70 bg-[#D7B893]/28 px-6 py-3 text-sm font-medium text-[#2F2A26] transition hover:-translate-y-0.5 hover:bg-[#D7B893]/40"
                >
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  className="rounded-full border border-white/45 bg-white/16 px-6 py-3 text-sm font-medium text-[#2F2A26] transition hover:bg-white/24"
                >
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