"use client";

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
      "Led development of end-to-end AI-powered data pipelines across computer vision, text extraction, NLP, data enrichment, and metadata generation.",
      "Built automated workflows that processed 100,000 high-fidelity images in under 5 hours, significantly improving operational throughput.",
      "Delivered production-ready AI solutions across multiple modalities for clients including Apple, South African Department of Defence, iSoftStone, and FamilySearch.",
      "Developed and deployed models using Python, TensorFlow, PyTorch, OpenCV, Hugging Face, and AWS, with RESTful APIs for automation, integration, and fine-tuning.",
      "Built proprietary tooling for metadata generation, correction, audit, annotation, and rework, including ad-hoc systems for large-scale U.S. data operations.",
    ],
  },
  {
    role: "Associate Data Engineer",
    company: "Sunway Digital Technology Solutions",
    period: "Apr 2024 — Dec 2024",
    points: [
      "Maintained and enhanced the Customer 360 Profile data pipeline, centralizing customer data across multiple Sunway business units.",
      "Improved data reliability and processing efficiency through ETL pipeline optimization and workflow enhancements.",
      "Worked with distributed data systems using Python, PySpark, AWS, and Huawei Cloud to support large-scale data processing.",
      "Supported downstream analytics and reporting workflows by ensuring clean, structured, and accessible data across teams.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Setel Ventures",
    period: "Aug 2023 — Jan 2024",
    points: [
      "Maintained and monitored data and machine learning pipelines to ensure reliable model deployment and performance in production environments.",
      "Researched, trained, and fine-tuned machine learning models including Random Forest, Linear Regression, and statistical models.",
      "Developed a deep learning solution for churn prediction and fuelling pattern analysis across Petronas stations nationwide.",
      "Conducted customer behavior analysis and A/B testing to evaluate campaign performance and optimize business decisions.",
      "Led a mock customer profile consolidation project using ETL pipelines, machine learning techniques, and Power BI for visualization.",
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