"use client";

import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top";

export default function HumanStressAnalysisPage() {
  const tech = [
    "Neural Network",
    "EEG Signals",
    "MATLAB",
    "Signal Processing",
    "Medical Brain Imaging",
    "Human-Machine Interface",
  ];

  const githubUrl = "https://github.com/HarithIzani/Normal-ADHD-Matlab-EEG";

  return (
    <main className="min-h-screen px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="btn-primary rounded-full px-6 py-3 text-sm font-medium">
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
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
            University Research
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold md:text-6xl">
            Human Stress Analysis Between Normal and ADHD Patient Using Neural Networks on EEG Signals
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A]">
            Research project analyzing stress and control response in brain activity between normal and ADHD patients using EEG signals and neural network modeling.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((tag) => (
              <span key={tag} className="rounded-full border border-white/45 bg-white/16 px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard variant="warm" className="p-8">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 text-[#6B625A] leading-8">
              Studied stress and control response using EEG signals under controlled stimuli, comparing patterns between normal and ADHD patients.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8">
            <h2 className="text-2xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 text-[#6B625A] leading-8">
              Demonstrates application of neural networks in EEG-based patient profiling and contributes to medical brain imaging research.
            </p>
          </GlassCard>
        </section>
      </div>
      
      <ScrollToTopButton />

    </main>
  );
}