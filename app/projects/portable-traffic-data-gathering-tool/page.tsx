"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";

export default function PortableTrafficDataGatheringToolPage() {
  const [isOpen, setIsOpen] = useState(false);

  const tech = [
    "Python",
    "Transfer Learning",
    "MobileNet V2 640",
    "Computer Vision",
    "Raspberry Pi",
    "Berkeley DeepDrive",
    "Anaconda",
    "Jupyter Notebook",
  ];

  const githubUrl = "https://github.com/HarithIzani/FYP-Portable-Traffic-Data-Gathering-Tool-Tensorflow/wiki";
  const diagramSrc = "/portable-traffic-diagram.svg";

  return (
    <main className="min-h-screen px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
          >
            ← Back to Portfolio
          </Link>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
          >
            View GitHub ↗
          </a>
        </div>

        <GlassCard variant="highlight" className="p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#D7B893]/18 blur-3xl" />
            <div className="absolute right-12 top-14 h-40 w-40 rounded-full bg-[#E7D8C7]/22 blur-3xl" />
            <div className="absolute bottom-8 left-1/3 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
              Final Year Project • Gold Medal Award
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
              Portable Traffic Data Gathering Tool Using Transfer Learning of
              MobileNet V2 640
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
              A portable computer vision prototype designed for near real-time
              traffic data gathering, including vehicle and pedestrian detection,
              weather condition monitoring, and brightness assessment using transfer
              learning and edge-oriented deployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/45 bg-white/16 px-3 py-1 text-sm text-[#4F4842]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              This project focused on building a portable traffic data gathering
              tool capable of capturing and interpreting traffic-related signals in
              near real time. The system was designed to identify cars and
              pedestrians while also recording contextual information such as
              weather conditions and brightness levels.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              The project demonstrated how transfer learning and lightweight
              computer vision models could be adapted for practical, portable
              traffic monitoring. It was recognized with a Gold Medal Award as a
              final year project.
            </p>
          </GlassCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I worked on</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>
                • Developed a prototype portable traffic data gathering tool using
                transfer learning with MobileNet V2 640.
              </li>
              <li>
                • Used the Berkeley DeepDrive dataset to support model training and
                experimentation for traffic-related detection tasks.
              </li>
              <li>
                • Built the workflow to capture near real-time signals including
                cars, pedestrians, weather condition, and brightness.
              </li>
              <li>
                • Worked with Raspberry Pi as part of the portable deployment
                concept and used Anaconda and Jupyter Notebook during development.
              </li>
              <li>
                • Framed the project as a practical computer vision application for
                traffic data collection and environmental context monitoring.
              </li>
            </ul>
          </GlassCard>

          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Project frame</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <div className="mt-6 space-y-4 text-[#6B625A]">
              <p>
                <span className="font-medium text-[#2F2A26]">Type:</span>{" "}
                Final Year Project
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Award:</span>{" "}
                Gold Medal Award
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Focus:</span>{" "}
                computer vision, transfer learning, portable traffic monitoring
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Platform:</span>{" "}
                Raspberry Pi, Jupyter Notebook, Anaconda
              </p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Diagram</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 text-sm leading-7 text-[#6B625A]">
              High-level diagram of the project workflow. Click to open a larger
              view.
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-6 block w-full text-left"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/35 bg-white/10 transition duration-300 hover:shadow-[0_24px_60px_rgba(120,88,56,0.12)]">
                <img
                  src={diagramSrc}
                  alt="Portable Traffic Data Gathering Tool diagram"
                  className="h-auto w-full object-contain transition duration-300 hover:scale-[1.01]"
                />
              </div>
            </button>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Notes</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 leading-8 text-[#6B625A]">
              This case study is presented as a portfolio-safe summary based on the
              final year project description in my resume. It highlights the
              system’s purpose, technical direction, and outcome without expanding
              beyond the documented project scope.
            </p>
          </GlassCard>
        </section>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn-primary absolute -right-3 -top-3 z-10 rounded-full px-4 py-2 text-sm font-medium"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-[24px] border border-white/30 bg-white/10 shadow-2xl">
              <img
                src={diagramSrc}
                alt="Portable Traffic Data Gathering Tool diagram full view"
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}