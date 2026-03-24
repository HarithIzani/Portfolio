"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";

export default function ArchivalAIPipelinePage() {
  const [isOpen, setIsOpen] = useState(false);
  const tech = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Hugging Face",
    "AWS",
    "Docker",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/"
            className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <GlassCard variant="highlight" className="p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#D7B893]/18 blur-3xl" />
            <div className="absolute right-12 top-14 h-40 w-40 rounded-full bg-[#E7D8C7]/22 blur-3xl" />
            <div className="absolute bottom-8 left-1/3 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
              Case Study
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight md:text-6xl">
              Archival AI Pipeline
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
              End-to-end AI-powered workflows for computer vision, text extraction,
              NLP, data enrichment, and metadata generation across archival and
              enterprise-scale datasets.
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
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              This project focused on building production-ready AI workflows for
              large-scale archival and data processing use cases. The work combined
              computer vision, text extraction, NLP, metadata enrichment, and
              automation into a unified system that could support high-volume,
              operational delivery.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              One of the strongest outcomes from this work was processing
              100,000 high-fidelity images in 5 hours through automated pipelines,
              helping demonstrate both scalability and practical deployment value.
            </p>
          </GlassCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold">What I worked on</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>• Built end-to-end AI pipelines for image and document workflows.</li>
              <li>• Combined CV, OCR-adjacent extraction, NLP, and metadata generation.</li>
              <li>• Developed Python-based automation and model-serving workflows.</li>
              <li>• Worked across cloud tooling, Dockerized environments, and API-based integrations.</li>
              <li>• Supported enterprise and archival use cases with production-focused delivery.</li>
            </ul>
          </GlassCard>

          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Project frame</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <div className="mt-6 space-y-4 text-[#6B625A]">
              <p>
                <span className="font-medium text-[#2F2A26]">Focus:</span>{" "}
                computer vision, extraction, enrichment, metadata
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Scale:</span>{" "}
                high-volume enterprise and archival workflows
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Environment:</span>{" "}
                production-oriented automation and deployment
              </p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Notes</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 leading-8 text-[#6B625A]">
              Some implementation details, datasets, and client-specific deliverables
              are confidential, so this page presents the project at a portfolio-safe,
              case-study level rather than exposing private source material.
            </p>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Pipeline Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 text-sm text-[#6B625A]">
              High-level view of input, processing stages, and output structure.
            </p>

            <div className="mt-6">
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer overflow-hidden rounded-[20px] border border-white/40"
              >
                <img
                  src="/archival-pipeline.jpg"
                  alt="Archival AI Pipeline Diagram"
                  className="w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </GlassCard>
        </section>

      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src="/archival-pipeline.jpg"
              alt="Full Pipeline"
              className="max-h-[90vh] max-w-[90vw] rounded-[16px] shadow-2xl"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute -right-4 -top-4 rounded-full bg-white px-3 py-1 text-sm shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </main>
  );
}