import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Java", "C++"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "OpenCV", "NLTK", "Hugging Face"],
  },
  {
    title: "Data & Pipelines",
    items: ["Apache Spark", "Airflow", "RESTful APIs", "ETL", "Data Processing"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS", "GCP", "Huawei Cloud", "Docker", "WSL"],
  },
  {
    title: "Domains",
    items: ["Computer Vision", "NLP", "Reporting", "Data Cleaning", "QC"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Skills"
            title="Tools and technologies"
            description="Core technologies I use across AI engineering, machine learning, and data workflows."
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.08}>
              <GlassCard
                variant={index % 3 === 0 ? "highlight" : index % 3 === 1 ? "warm" : "default"}
                className="h-full p-8"
              >
                <h3 className="text-xl font-semibold text-[#1E1410]">{group.title}</h3>
                <div className="mt-4 h-px w-14 bg-[#C9A84C]/60" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/35 bg-white/16 px-3 py-1 text-sm text-[#7A4E46]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeUp>
          ))}

          {/* 6th slot — decorative arch card to complete the 3-column grid */}
          <FadeUp delay={skillGroups.length * 0.08}>
            <GlassCard variant="teal" className="flex h-full min-h-[160px] items-center justify-center p-8">
              <svg
                width="120"
                height="130"
                viewBox="0 0 120 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="opacity-50"
              >
                <path
                  d="M 10 130 L 10 48 Q 10 8 60 8 Q 110 8 110 48 L 110 130"
                  stroke="#1B6B62"
                  strokeWidth="2"
                />
                <path
                  d="M 26 130 L 26 56 Q 26 24 60 24 Q 94 24 94 56 L 94 130"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                />
                <path
                  d="M 42 130 L 42 64 Q 42 40 60 40 Q 78 40 78 64 L 78 130"
                  stroke="#1B6B62"
                  strokeWidth="1"
                />
              </svg>
            </GlassCard>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
