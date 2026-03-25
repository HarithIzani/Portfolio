"use client";

import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top";

export default function AttentionSpanAnalysisPage() {
  const tech = [
    "Neural Network",
    "EEG Signals",
    "MATLAB",
    "Signal Processing",
    "Machine Learning Toolkit",
    "Human-Machine Interface",
  ];

  const githubUrl = "https://github.com/HarithIzani/Attention-Span-MATLAB-EEG";

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
            Analysis of Attention-Span on Prolonged Short-Form Online Content Using Neural Networks on EEG Signals
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A]">
            Research exploring how prolonged short-form content affects attention span using EEG signals and neural-network-based modeling.
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
              Investigated attention-span behavior under prolonged short-form content exposure using controlled stimuli and EEG signal processing.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8">
            <h2 className="text-2xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 text-[#6B625A] leading-8">
              Highlights how neural networks and EEG analysis can be applied to behavioral and attention-span research in modern digital consumption patterns.
            </p>
          </GlassCard>
        </section>
      </div>

      <ScrollToTopButton />
      
    </main>
  );
}