"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Container from "../ui/container";
import FadeUp from "../ui/fade-up";
import GlassCard from "../ui/glass-card";
import SectionTitle from "../ui/section-title";

type Project = {
  title: string;
  summary: string;
  type: "Live App" | "GitHub" | "Demo" | "Case Study";
  action: string;
  link: string;
  tech: string[];
  status?: "Production" | "Internal" | "Prototype" | "Research";
  secondaryLinks?: {
    label: string;
    url: string;
  }[];
};

const projects: Project[] = [
  {
    title: "Archival AI Pipeline",
    summary:
      "End-to-end AI-powered pipeline for computer vision, text extraction, NLP, data enrichment, and metadata generation. Built for large-scale archival and enterprise data workflows, including processing 100k high-fidelity images in 5 hours.",
    type: "Live App",
    action: "View Details",
    link: "/projects/archival-ai-pipeline",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "AWS",
      "Docker",
      "Triton Inference Server",
      "Data Enrichment",
      "Metadata Generation",
    ],
    status: "Production",
    /*secondaryLinks: [{ label: "Resume", url: "/resume.pdf" }],*/
  },
  {
    title: "Portable Traffic Data Gathering Tool",
    summary:
      "Gold Medal Award final year project using transfer learning with MobileNet V2 640 for near real-time traffic data gathering, including cars, pedestrians, weather condition, and brightness monitoring.",
    type: "Case Study",
    action: "View Details",
    link: "/projects/portable-traffic-data-gathering-tool",
    tech: [
      "Python",
      "MobileNet V2 640",
      "Transfer Learning",
      "Computer Vision",
      "Raspberry Pi",
      "Berkeley DeepDrive",
    ],
    status: "Research",
  },
  {
    title: "Churn Prevention & Fuelling Analysis",
    summary:
      "Deep learning and machine learning work for churn prevention and fuelling pattern analysis in the Petronas ecosystem, alongside production monitoring, AB testing, and customer behavior analysis.",
    type: "Case Study",
    action: "View Details",
    link: "/projects/churn-prevention-fuelling-analysis",
    tech: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Random Forest",
      "Linear Regression",
      "Power BI",
    ],
    status: "Research",
    secondaryLinks: [{ label: "Resume", url: "/resume.pdf" }],
  },
  {
    title: "Metadata Audit & Annotation Tools",
    summary:
      "Proprietary internal tooling for metadata generation, fixing, audit, annotation, and rework. Included ad-hoc software supporting large-scale data collection and cleaning workflows.",
    type: "Case Study",
    action: "View Details",
    link: "/projects/metadata-audit-annotation-tools",
    tech: [
      "Python",
      "SQL",
      "Data Cleaning",
      "Automation",
      "REST APIs",
      "Docker",
    ],
    status: "Internal",
    secondaryLinks: [{ label: "Resume", url: "/resume.pdf" }],
  },
];

function getTypeStyles(type: Project["type"]) {
  switch (type) {
    case "Live App":
      return "border-white/40 bg-[#aed1d6]/32 text-[#2F2A26]";

    case "GitHub":
      return "border-white/40 bg-[#aed1d6]/32 text-[#2F2A26]";

    case "Demo":
      return "border-white/40 bg-[#aed1d6]/32 text-[#2F2A26]";

    case "Case Study":
    default:
      return "border-white/40 bg-[#aed1d6]/32 text-[#2F2A26]";
  }
}

function getStatusStyles(status?: Project["status"]) {
  switch (status) {
    case "Production":
      return "border-white/35 bg-[#cfb0cd]/25 text-slate-700";
    case "Internal":
      return "border-white/35 bg-[#cfb0cd]/25 text-slate-700";
    case "Prototype":
      return "border-white/35 bg-[#cfb0cd]/25 text-slate-700";
    case "Research":
    default:
      return "border-white/35 bg-[#cfb0cd]/25 text-slate-700";
  }
}

export default function ProjectsSection() {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    if (!link || link === "#") return;

    const isExternal =
      link.startsWith("http://") ||
      link.startsWith("https://") ||
      link.startsWith("mailto:");

    if (isExternal) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(link);
  };

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    link: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(link);
    }
  };

  return (
    <section id="projects" className="pt-24">
      <Container>
        <FadeUp>
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
            description="A unified showcase of production AI systems, data platforms, internal tooling, and applied machine learning work."
          />
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-[#6B625A]">Explore selected projects →</p>
          </div>
        </FadeUp>

        <div className="relative -mx-6 px-6 pt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#E2CFBA]/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#E2CFBA]/90 to-transparent" />

          <div className="no-scrollbar overflow-x-auto overflow-y-hidden px-2 pt-6 pb-10">
            <div className="flex w-max gap-8 snap-x snap-mandatory touch-pan-x items-stretch">
              {projects.map((project, index) => (
                <FadeUp key={project.title} delay={index * 0.06}>
                  <motion.article
                    whileHover={{ y: -12, scale: 1.015 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    onClick={() => handleCardClick(project.link)}
                    onKeyDown={(event) => handleCardKeyDown(event, project.link)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${project.action}: ${project.title}`}
                    className="w-[340px] shrink-0 snap-start cursor-pointer outline-none sm:w-[360px] lg:w-[380px]"
                  >
                    <GlassCard
                      variant={
                        index % 3 === 0
                          ? "highlight"
                          : index % 3 === 1
                          ? "warm"
                          : "default"
                      }
                      className="group relative h-full overflow-hidden border border-white/32 p-8 transition duration-300 hover:!bg-[#D2EOD3] hover:!backdrop-blur-none hover:!bg-opacity-100 hover:border-[#BFDDBF] hover:shadow-[0_34px_90px_rgba(120,88,56,0.18),0_0_0_1px_rgba(210,224,211,0.9),0_0_100px_rgba(210,224,211,0.8)] focus-within:border-[#D2EOD3]"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-white/40 transition duration-300 group-hover:bg-white/70" />

                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#D2EOD3]/30 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#D2EOD3]/22 blur-3xl" />
                        <div className="absolute right-1/3 top-1/2 h-24 w-24 rounded-full bg-[#D2EOD3]/18 blur-2xl" />
                      </div>

                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${getTypeStyles(
                            project.type
                          )}`}
                        >
                          {project.type}
                        </span>

                        <span className="text-sm text-[#6B625A]">
                          {project.action}
                        </span>
                      </div>

                      <div className="relative z-10 mt-5 flex items-center gap-3">
                        {project.status ? (
                          <span
                            className={`rounded-full border px-3 py-1 text-xs ${getStatusStyles(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="relative z-10 mt-6 text-2xl font-semibold tracking-tight text-[#2F2A26]">
                        {project.title}
                      </h3>

                      <p className="relative z-10 mt-4 text-sm leading-8 text-[#6B625A]">
                        {project.summary}
                      </p>

                      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/30 bg-white/18 px-3 py-1 text-xs text-[#4F4842]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {project.secondaryLinks?.length ? (
                        <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                          {project.secondaryLinks.map((secondary) => (
                            <a
                              key={secondary.label}
                              href={secondary.url}
                              onClick={(e) => e.stopPropagation()}
                              className="rounded-full border border-white/35 bg-white/14 px-3 py-2 text-xs text-[#4F4842] transition hover:bg-white/24"
                            >
                              {secondary.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </GlassCard>
                  </motion.article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}