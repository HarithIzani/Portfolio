import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

export default function ContactSection() {
  return (
    <section id="contact" className="pb-10 pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something meaningful."
            description="I’m open to AI, data, and engineering opportunities, collaborations, and project discussions."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <div className="space-y-4 text-[#6B625A]">
              <p>
                <span className="font-medium text-[#2F2A26]">Email:</span>{" "}
                harithizani@gmail.com
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">LinkedIn:</span>{" "}
                linkedin.com/in/harithizani/
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Location:</span>{" "}
                Subang Jaya, Selangor
              </p>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}