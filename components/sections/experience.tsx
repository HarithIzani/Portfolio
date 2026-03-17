import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

const experienceItems = [
  {
    role: "AI Engineer",
    company: "Lifewood Data Technology",
    period: "Feb 2025 — Present",
    points: [
      "Led development of end-to-end automated AI-powered data pipelines across computer vision, text extraction, NLP, data enrichment, and metadata generation.",
      "Built workflows that processed 100k high-fidelity images in 5 hours.",
      "Delivered AI solutions for clients including Apple, South African Department of Defence, iSoftStone, and FamilySearch.",
      "Developed Python-based models and automation pipelines using TensorFlow, PyTorch, OpenCV, Hugging Face, AWS, Docker, and RESTful APIs.",
    ],
  },
  {
    role: "Associate Data Engineer",
    company: "Sunway Digital Technology Solutions",
    period: "Apr 2024 — Dec 2024",
    points: [
      "Maintained and improved the Customer 360 Profile project pipeline spanning multiple Sunway business units.",
      "Worked on ETL and processing using Python, PySpark, Huawei Cloud, and AWS.",
      "Developed scripts and Airflow DAGs for data ingestion, transformation, and workflow automation.",
      "Supported interactive reporting workflows with Pandas, NLTK, NumPy, Seaborn, and PySpark.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Setel Ventures",
    period: "Aug 2023 — Jan 2024",
    points: [
      "Maintained and monitored data and machine learning pipelines for reliable production performance.",
      "Researched, trained, and fine-tuned machine learning models including Random Forest and Linear Regression.",
      "Developed a deep learning solution for churn prevention and fuelling pattern analysis in the Petronas ecosystem.",
      "Contributed to AB testing, customer behavior analysis, and a customer profile consolidation mock-up using ETL and Power BI.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Experience"
            title="Professional experience"
            description="Roles across AI engineering, data pipelines, and applied machine learning."
          />
        </FadeUp>

        <div className="grid gap-6">
          {experienceItems.map((item, index) => (
            <FadeUp key={`${item.role}-${item.company}`} delay={index * 0.08}>
              <GlassCard
                variant={index % 2 === 0 ? "warm" : "default"}
                className="p-8 md:p-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2F2A26]">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-[#6B625A]">{item.company}</p>
                  </div>

                  <p className="text-sm text-[#7A6B5E]">{item.period}</p>
                </div>

                <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

                <ul className="mt-6 space-y-3 text-[#6B625A]">
                  {item.points.map((point) => (
                    <li key={point} className="leading-8">
                      • {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}