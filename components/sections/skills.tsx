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
                <h3 className="text-xl font-semibold text-[#2F2A26]">{group.title}</h3>
                <div className="mt-4 h-px w-14 bg-[#C6A27A]/45" />

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/35 bg-white/16 px-3 py-1 text-sm text-[#4F4842]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}