import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-8 text-slate-800">

      {/* ── Fixed arch background decoration ───────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-0 top-0 z-0 h-screen w-[480px] overflow-hidden opacity-[0.12]"
      >
        <svg viewBox="0 0 480 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Nested arch cluster 1 — teal */}
          <g stroke="#1B6B62" strokeWidth="1.5">
            <path d="M 60 900 L 60 320 Q 60 180 200 180 Q 340 180 340 320 L 340 900" />
            <path d="M 90 900 L 90 330 Q 90 210 200 210 Q 310 210 310 330 L 310 900" />
            <path d="M 120 900 L 120 345 Q 120 240 200 240 Q 280 240 280 345 L 280 900" />
          </g>
          {/* Nested arch cluster 2 — gold */}
          <g stroke="#C9A84C" strokeWidth="1">
            <path d="M 280 900 L 280 500 Q 280 400 380 400 Q 480 400 480 500 L 480 900" />
            <path d="M 305 900 L 305 510 Q 305 425 380 425 Q 455 425 455 510 L 455 900" />
          </g>
          {/* Small top arch — teal */}
          <g stroke="#1B6B62" strokeWidth="1">
            <path d="M 160 0 L 160 150 Q 160 0 240 0 Q 320 0 320 150 L 320 0" />
          </g>
        </svg>
      </div>

      {/* ── Page content ──────────────────────────────────────────── */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>

    </main>
  );
}
