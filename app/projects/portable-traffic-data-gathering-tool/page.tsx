"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top";

export default function PortableTrafficDataGatheringToolPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocOpen, setIsDocOpen] = useState(false);

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

  const githubUrl =
    "https://github.com/HarithIzani/FYP-Portable-Traffic-Data-Gathering-Tool-Tensorflow";
  const diagramSrc = "/portable-traffic-diagram.svg";
  const additionalImageSrc = "/traffic-data-diagram.png";
  const documentationSrc = "/Traffic_Data_Documentation.html";
  const researchPaperUrl = "/Traffic_Data_Research_Paper.pdf";

  return (
    <main className="min-h-screen px-6 py-10 text-[#1E1410]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
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
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[rgba(27,107,98,0.10)] blur-3xl" />
            <div className="absolute right-12 top-14 h-40 w-40 rounded-full bg-[rgba(201,168,76,0.12)] blur-3xl" />
            <div className="absolute bottom-8 left-1/3 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#7A4E46]">
              Final Year Project • Gold Medal Award
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
              Portable Traffic Data Gathering Tool Using Transfer Learning of
              MobileNet V2 640
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#7A4E46] md:text-lg">
              A portable computer vision system for near real-time traffic
              monitoring, detecting vehicles, pedestrians, and environmental
              conditions using transfer learning and edge-oriented deployment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/45 bg-white/16 px-3 py-1 text-sm text-[#7A4E46]"
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
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />
            <p className="mt-6 leading-8 text-[#7A4E46]">
              This project focused on building a portable traffic data gathering
              tool capable of capturing and interpreting traffic-related signals
              in near real time. The system was designed to identify cars and
              pedestrians while also recording contextual information such as
              weather conditions and brightness levels.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-3 text-[#7A4E46] leading-8">
              <li>
                • Built a portable computer vision system capable of near
                real-time traffic signal detection.
              </li>
              <li>
                • Demonstrated edge deployment feasibility using Raspberry Pi
                and lightweight deep learning models.
              </li>
              <li>
                • Enabled simultaneous detection of vehicles, pedestrians, and
                environmental context.
              </li>
              <li>
                • Recognized with a <strong>Gold Medal Award</strong> for system
                design and real-world applicability.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I worked on</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-4 text-[#7A4E46]">
              <li>
                • Developed a portable traffic data gathering system using
                transfer learning with MobileNet V2.
              </li>
              <li>
                • Trained and evaluated models using the Berkeley DeepDrive
                dataset for traffic detection tasks.
              </li>
              <li>
                • Built the full workflow for detecting vehicles, pedestrians,
                and environmental conditions.
              </li>
              <li>
                • Designed for edge deployment using Raspberry Pi and lightweight
                processing pipelines.
              </li>
              <li>
                • Structured the system as a real-world computer vision
                application for traffic monitoring.
              </li>
            </ul>
          </GlassCard>

          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Project frame</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <div className="mt-6 space-y-4 text-[#7A4E46]">
              <p>
                <span className="font-medium text-[#1E1410]">Type:</span> Final
                Year Project
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Award:</span> Gold
                Medal Award
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Focus:</span>{" "}
                computer vision, transfer learning, edge deployment
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Platform:</span>{" "}
                Raspberry Pi, Jupyter Notebook, Anaconda
              </p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">System Architecture</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 text-[#7A4E46] leading-8">
              The system was designed as a lightweight edge-deployable computer
              vision pipeline, combining real-time image capture, model
              inference, and contextual signal extraction.
            </p>

            <ul className="mt-6 space-y-4 text-[#7A4E46]">
              <li>
                <strong className="text-[#1E1410]">Input Layer:</strong> Camera
                feed capturing real-time traffic scenes.
              </li>
              <li>
                <strong className="text-[#1E1410]">Inference Layer:</strong>{" "}
                MobileNet V2 model for detecting vehicles and pedestrians.
              </li>
              <li>
                <strong className="text-[#1E1410]">Processing Layer:</strong>{" "}
                Image preprocessing and contextual signal extraction.
              </li>
              <li>
                <strong className="text-[#1E1410]">Output Layer:</strong>{" "}
                Structured traffic and environmental data.
              </li>
              <li>
                <strong className="text-[#1E1410]">Deployment:</strong> Edge-based
                execution using Raspberry Pi.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Processing Pipeline</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <div className="mt-6 space-y-6 text-[#7A4E46]">
              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  1. Image Capture
                </h3>
                <p>Capture real-time traffic frames from camera input.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  2. Preprocessing
                </h3>
                <p>Resize and normalize frames for efficient inference.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  3. Object Detection
                </h3>
                <p>
                  Detect vehicles and pedestrians using transfer learning
                  models.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  4. Context Extraction
                </h3>
                <p>
                  Extract brightness levels and weather-related environmental
                  signals.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  5. Output Generation
                </h3>
                <p>
                  Generate structured outputs for traffic monitoring and
                  analysis.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Key Findings</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-4 text-[#7A4E46] leading-8">
              <li>
                • Lightweight object detection models such as MobileNetV2 are
                viable for edge deployment without requiring heavy compute.
              </li>
              <li>
                • Detection performance varies significantly between daylight
                and low-light conditions.
              </li>
              <li>
                • Grayscale preprocessing improves object recognition in darker
                environments.
              </li>
              <li>
                • Single-stage detectors provide a strong speed-performance
                tradeoff for real-time traffic systems.
              </li>
              <li>
                • Transfer learning on Berkeley DeepDrive helps bridge model
                performance toward real-world street scenarios.
              </li>
              <li>
                • A framework can combine preprocessing and model selection to
                better handle both light and dark environments.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">System Diagram</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 text-sm leading-7 text-[#7A4E46]">
              High-level diagram of the system workflow. Click to open a larger
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
                  alt="Traffic system diagram"
                  className="w-full object-contain"
                />
              </div>
            </button>

            <div className="mt-8">
              <div className="overflow-hidden rounded-[24px] border border-white/35 bg-white/10">
                <img
                  src={additionalImageSrc}
                  alt="Traffic detection output"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Technical Documentation</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#7A4E46]">
              Full project documentation for the portable traffic data gathering
              tool, including system design, model approach, workflow structure,
              deployment context, and implementation notes.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={documentationSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
              >
                Open Full Documentation ↗
              </a>

              <a
                href={researchPaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
              >
                View Research Paper ↗
              </a>

              <button
                type="button"
                onClick={() => setIsDocOpen(true)}
                className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
              >
                Preview Inside Page
              </button>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">
              Why this project matters
            </h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 text-[#7A4E46] leading-8">
              This project demonstrates how deep learning models can be adapted
              for edge deployment, balancing performance, portability, and
              real-time constraints.
            </p>

            <p className="mt-4 text-[#7A4E46] leading-8">
              It bridges the gap between research-level models and practical
              real-world systems that can operate outside of cloud environments.
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
                alt="Full diagram"
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {isDocOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 p-6 backdrop-blur-md"
          onClick={() => setIsDocOpen(false)}
        >
          <div
            className="relative mx-auto mt-4 h-[90vh] w-full max-w-7xl overflow-hidden rounded-[20px] border border-white/20 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDocOpen(false)}
              className="btn-primary absolute right-4 top-4 z-10 rounded-full px-4 py-2 text-sm font-medium"
            >
              ✕ Close
            </button>

            <iframe
              src={documentationSrc}
              title="Portable Traffic Documentation"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      <ScrollToTopButton />
    </main>
  );
}