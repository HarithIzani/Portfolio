"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import ScrollToTopButton from "@/components/ui/scroll-to-top";

export default function HumanStressAnalysisPage() {
  const [isDocOpen, setIsDocOpen] = useState(false);

  const tech = [
    "Neural Network",
    "EEG Signals",
    "MATLAB",
    "Signal Processing",
    "MLP",
    "MFCC",
    "Medical Brain Imaging",
  ];

  const githubUrl = "https://github.com/HarithIzani/Normal-ADHD-Matlab-EEG";
  const documentationSrc = "/Stress_Analysis_Documentation.html";
  const researchPaperUrl = "/Stress_Analysis_Research_Paper.pdf";

  return (
    <main className="min-h-screen px-6 py-10 text-[#2F2A26]">
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
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
            University Research
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] md:text-6xl">
            Human Stress Analysis Between Normal and ADHD Patients Using Neural
            Networks on EEG Signals
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A]">
            Built an end-to-end EEG signal processing and neural network system
            to model emotional and cognitive responses under stress,
            distinguishing behavioral patterns between ADHD and control
            subjects.
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
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              This research investigates how brain activity differs between
              ADHD and normal subjects under controlled emotional and cognitive
              stress conditions using EEG signals.
            </p>
            <p className="mt-4 leading-8 text-[#6B625A]">
              EEG signals were collected across multiple stimuli including
              resting state, emotional triggers, and arithmetic stress tests,
              then processed through a full signal processing and neural network
              pipeline.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Impact</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-3 text-[#6B625A] leading-8">
              <li>
                • Built a full EEG → ML pipeline from raw signal acquisition to
                emotion classification.
              </li>
              <li>
                • Achieved ~99% classification accuracy across multiple EEG band
                models.
              </li>
              <li>
                • Demonstrated measurable differences in emotional stability
                between ADHD and control subjects.
              </li>
              <li>
                • Applied valence-arousal modeling to translate brain signals
                into interpretable emotional states.
              </li>
              <li>
                • Contributed to research direction in EEG-based
                neurodevelopmental disorder detection.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I worked on</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>
                • Designed full EEG signal processing pipeline including
                preprocessing and filtering.
              </li>
              <li>
                • Implemented band decomposition (Delta, Theta, Alpha, Beta,
                Gamma).
              </li>
              <li>
                • Applied MFCC feature extraction adapted from speech processing
                to EEG signals.
              </li>
              <li>
                • Built and trained MLP neural networks for emotion
                classification.
              </li>
              <li>
                • Structured experimental protocol across multiple stimulus
                conditions.
              </li>
              <li>
                • Analyzed brain signal differences across cognitive and
                emotional states.
              </li>
            </ul>
          </GlassCard>

          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Project frame</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <div className="mt-6 space-y-4 text-[#6B625A]">
              <p>
                <span className="font-medium text-[#2F2A26]">Type:</span>{" "}
                Research Project
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Domain:</span> EEG
                + Machine Learning
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Focus:</span> ADHD
                vs Normal Brain Activity
              </p>
              <p>
                <span className="font-medium text-[#2F2A26]">Tools:</span>{" "}
                MATLAB, Signal Processing Toolbox
              </p>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">System Architecture</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>
                <strong className="text-[#2F2A26]">Input:</strong> Raw EEG
                signals (19 channels, 250Hz sampling)
              </li>
              <li>
                <strong className="text-[#2F2A26]">Preprocessing:</strong> Noise
                filtering using elliptic filters
              </li>
              <li>
                <strong className="text-[#2F2A26]">Feature Extraction:</strong>{" "}
                MFCC applied across frequency bands
              </li>
              <li>
                <strong className="text-[#2F2A26]">Model:</strong> MLP neural
                network (valence-arousal output)
              </li>
              <li>
                <strong className="text-[#2F2A26]">Output:</strong> Emotion
                classification and patient profiling
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Processing Pipeline</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <div className="mt-6 space-y-6 text-[#6B625A]">
              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  1. Data Collection
                </h3>
                <p>
                  EEG signals recorded across emotional, resting, and cognitive
                  states.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  2. Preprocessing
                </h3>
                <p>Signal cleaning and noise removal using elliptic filters.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  3. Band Decomposition
                </h3>
                <p>
                  Split signals into Delta, Theta, Alpha, Beta, and Gamma
                  bands.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  4. Feature Extraction
                </h3>
                <p>Extract MFCC features from each band and channel.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  5. Label Encoding
                </h3>
                <p>Map signals to valence-arousal emotional model.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  6. Model Training
                </h3>
                <p>Train MLP neural network for classification.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F2A26]">
                  7. Evaluation
                </h3>
                <p>
                  Analyze emotional stability and classification results across
                  subjects.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Research Findings</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <ul className="mt-6 space-y-4 text-[#6B625A] leading-8">
              <li>
                • ADHD subjects exhibit higher baseline brain activity than
                control subjects, particularly in resting-state comparisons.
              </li>
              <li>
                • Arithmetic stress produces stronger frontal-lobe engagement,
                with the ADHD subject showing higher beta activity in problem
                solving conditions.
              </li>
              <li>
                • Emotional state predictions for the control subject remain more
                stable, while the ADHD subject shows greater variability within
                the same activity window.
              </li>
              <li>
                • The model achieved at least ~99% accuracy across trained band
                wave classifiers.
              </li>
              <li>
                • Valence-arousal mapping provides an interpretable way to study
                emotional fluctuation from EEG signals.
              </li>
              <li>
                • The results suggest potential for EEG-based patient profiling,
                though the paper also notes the limited sample size.
              </li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-8">
          <GlassCard variant="highlight" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Technical Documentation</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#6B625A]">
              Full research documentation including experimental protocol,
              signal processing methodology, neural network architecture, and
              results analysis.
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
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />

            <p className="mt-6 text-[#6B625A] leading-8">
              This project demonstrates how EEG signals can be transformed into
              structured emotional and cognitive indicators through a full ML
              pipeline, making brain-state analysis more interpretable and
              actionable.
            </p>

            <p className="mt-4 text-[#6B625A] leading-8">
              It also shows how experimental design, signal processing, and
              machine learning can work together in neurodevelopmental research.
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
              title="Human Stress Analysis Documentation"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      <ScrollToTopButton />
    </main>
  );
}