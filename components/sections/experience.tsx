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

/* Small reusable arch accent for experience cards */
function ArchAccent() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-8 -top-6 opacity-[0.07]"
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 10 200 L 10 80 Q 10 10 80 10 Q 150 10 150 80 L 150 200"
        stroke="#1B6B62"
        strokeWidth="2"
      />
      <path
        d="M 30 200 L 30 90 Q 30 30 80 30 Q 130 30 130 90 L 130 200"
        stroke="#C9A84C"
        strokeWidth="1.5"
      />
      <path
        d="M 50 200 L 50 100 Q 50 50 80 50 Q 110 50 110 100 L 110 200"
        stroke="#1B6B62"
        strokeWidth="1"
      />
    </svg>
  );
}

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
                variant={index % 3 === 0 ? "highlight" : index % 3 === 1 ? "warm" : "default"}
                className="p-8 md:p-10"
              >
                {/* Arch accent on every card */}
                <ArchAccent />

                <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1E1410]">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-medium text-[#1B6B62]">{item.company}</p>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full border border-[#C9A84C]/55 bg-[#C9A84C]/14 px-4 py-1.5 text-xs font-medium text-[#6B4A10]">
                    {item.period}
                  </span>
                </div>

                <div className="relative z-10 mt-4 h-px w-16 bg-[#C9A84C]/60" />

                <ul className="relative z-10 mt-6 space-y-3 text-[#7A4E46]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-8">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]/80" />
                      {point}
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
