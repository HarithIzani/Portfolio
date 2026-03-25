"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top";

export default function AttentionSpanAnalysisPage() {
  const [isDocOpen, setIsDocOpen] = useState(false);

  const tech = [
    "Neural Network",
    "EEG Signals",
    "MATLAB",
    "Signal Processing",
    "MFCC",
    "MLP",
    "Human-Machine Interface",
  ];

  const githubUrl = "https://github.com/HarithIzani/Attention-Span-MATLAB-EEG";
  const documentationSrc = "/Attention_Span_Documentation.html";
  const researchPaperUrl = "/Attention_Span_Research_Paper.pdf";

  return (
    <main className="min-h-screen px-6 py-10 text-[#1E1410]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
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
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#7A4E46]">
            University Research
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] md:text-6xl">
            EEG-Based Attention Span Analysis Under Short-Form Content Exposure
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#7A4E46]">
            Built an end-to-end EEG signal processing and neural network system
            to quantify how prolonged exposure to short-form content impacts
            attention, emotional state, and cognitive engagement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/45 bg-white/16 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />
            <p className="mt-6 leading-8 text-[#7A4E46]">
              This research analyzes how continuous exposure to short-form
              digital content affects human attention span using EEG signals
              collected under controlled experimental conditions.
            </p>
            <p className="mt-4 leading-8 text-[#7A4E46]">
              Subjects were categorized into control and experimental groups and
              evaluated across baseline, emotional, and video-based stimuli to
              identify measurable shifts in brain activity and engagement.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-3 text-[#7A4E46] leading-8">
              <li>• Built a full EEG → ML pipeline for attention-state modeling</li>
              <li>
                • Identified measurable differences between high-consumption and
                control subjects
              </li>
              <li>
                • Demonstrated reduced baseline engagement in heavy short-form
                users
              </li>
              <li>
                • Showed attention spikes under high-stimulation content
              </li>
              <li>
                • Provided experimental basis for studying attention degradation
                in digital environments
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I worked on</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-4 text-[#7A4E46]">
              <li>• Designed full EEG data acquisition and experimental protocol</li>
              <li>
                • Implemented preprocessing and noise filtering using elliptic
                filters
              </li>
              <li>
                • Applied MFCC feature extraction adapted from speech processing
              </li>
              <li>
                • Built and trained MLP neural networks for emotional
                classification
              </li>
              <li>
                • Structured dataset across 10 experimental conditions
              </li>
              <li>• Conducted comparative analysis between subject groups</li>
            </ul>
          </GlassCard>

          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Project frame</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <div className="mt-6 space-y-4 text-[#7A4E46]">
              <p>
                <span className="font-medium text-[#1E1410]">Type:</span>{" "}
                Research Project
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Domain:</span> EEG
                + Behavioral Analysis
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Focus:</span>{" "}
                Attention & Digital Consumption
              </p>
              <p>
                <span className="font-medium text-[#1E1410]">Tools:</span>{" "}
                MATLAB, Signal Processing Toolbox
              </p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">System Architecture</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-4 text-[#7A4E46]">
              <li>
                <strong className="text-[#1E1410]">Input:</strong> 19-channel EEG
                signals at 250Hz
              </li>
              <li>
                <strong className="text-[#1E1410]">Preprocessing:</strong>{" "}
                Elliptic filtering and noise removal
              </li>
              <li>
                <strong className="text-[#1E1410]">Feature Extraction:</strong>{" "}
                MFCC across EEG bands
              </li>
              <li>
                <strong className="text-[#1E1410]">Model:</strong> MLP neural
                network (valence-arousal output)
              </li>
              <li>
                <strong className="text-[#1E1410]">Output:</strong> Emotional
                state + attention trend analysis
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
                  1. Data Collection
                </h3>
                <p>
                  EEG signals recorded across 10 experimental conditions
                  including baseline, emotional stimuli, and video exposure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  2. Preprocessing
                </h3>
                <p>Noise removal and signal cleaning using elliptic filters.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  3. Band Decomposition
                </h3>
                <p>Signals split into Delta, Theta, Alpha, and Beta bands.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  4. Feature Extraction
                </h3>
                <p>MFCC features extracted per band and channel.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  5. Label Encoding
                </h3>
                <p>Mapped to valence-arousal emotional space.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  6. Model Training
                </h3>
                <p>MLP trained on emotional datasets and applied to all conditions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E1410]">
                  7. Analysis
                </h3>
                <p>
                  Compared pre/post stimulus brain activity to evaluate attention
                  trends.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Research Findings</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <ul className="mt-6 space-y-4 text-[#7A4E46] leading-8">
              <li>
                • The control subject’s default state stays within alpha-to-beta
                range, indicating relaxed but engaged baseline activity.
              </li>
              <li>
                • The experimental subject shows theta-range baseline activity,
                suggesting lower default engagement before stimulation.
              </li>
              <li>
                • Short-form, attention-grabbing video produces a stronger spike
                toward beta-band activity in the experimental subject.
              </li>
              <li>
                • The control subject loses engagement mainly when exposed to a
                low-interest long-form stimulus.
              </li>
              <li>
                • The results suggest that high short-form consumption may be
                associated with lower baseline focus and stronger dependence on
                hyperstimulating content.
              </li>
              <li>
                • Emotional classification is modeled through valence-arousal
                output, allowing attention shifts and affective response to be
                studied together.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Technical Documentation</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#7A4E46]">
              Full system documentation including EEG pipeline, dataset
              structure, model architecture, and experimental findings.
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
            <h2 className="text-3xl font-semibold">Why this project matters</h2>
            <div className="mt-4 h-px w-16 bg-[#C9A84C]/60" />

            <p className="mt-6 text-[#7A4E46] leading-8">
              This project explores a modern behavioral question through a
              rigorous EEG + ML pipeline, connecting digital media consumption
              patterns to measurable changes in engagement and emotional state.
            </p>

            <p className="mt-4 text-[#7A4E46] leading-8">
              It shows how experimental neuroscience, signal processing, and
              machine learning can be combined to study emerging human-computer
              interaction problems.
            </p>
          </GlassCard>
        </section>
      </div>

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
              onClick={() => setIsDocOpen(false)}
              className="btn-primary absolute right-4 top-4 z-10 rounded-full px-4 py-2 text-sm font-medium"
            >
              ✕ Close
            </button>

            <iframe
              src={documentationSrc}
              title="Attention Span Documentation"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      <ScrollToTopButton />
    </main>
  );
}