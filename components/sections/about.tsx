import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

export default function AboutSection() {
  return (
    <section id="about" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="About"
            title="Building AI systems that move from raw data to usable outcomes."
            description="I work at the intersection of machine learning, data engineering, and deployment."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassCard variant="warm" className="p-8 md:p-10">
            <p className="max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
              I’m an AI Engineer and Data Scientist with a strong research foundation
              and hands-on experience building production-ready AI and data systems.
              My work includes large-scale data pipelines, computer vision, natural
              language processing, metadata generation, ETL workflows, and machine
              learning solutions for real operational use cases.
            </p>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}