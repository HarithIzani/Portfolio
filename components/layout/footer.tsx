import Container from "../ui/container";
import GlassCard from "../ui/glass-card";

export default function Footer() {
  return (
    <footer className="pb-10 pt-16">
      <Container>
        <GlassCard variant="warm" className="px-6 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium text-[#2F2A26]">Harith Izani</p>
              <p className="mt-1 text-sm text-[#6B625A]">
                AI Engineer & Data Scientist
              </p>
            </div>

            <p className="text-sm text-[#7A6B5E]">
              Built with Next.js, glassmorphism, and a refined Art Deco-inspired palette.
            </p>
          </div>
        </GlassCard>
      </Container>
    </footer>
  );
}