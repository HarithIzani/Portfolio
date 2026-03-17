import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";

export default function ChurnPreventionFuellingAnalysisPage() {
  const tech = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Random Forest",
    "Linear Regression",
    "Power BI",
  ];

  return (
    <main className="min-h-screen px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/45 bg-white/18 px-4 py-2 text-sm text-[#4F4842] backdrop-blur-[20px] transition hover:bg-white/26"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <GlassCard variant="highlight" className="p-8 md:p-12">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
            Case Study
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl">
            Churn Prevention & Fuelling Analysis
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
            Applied machine learning and deep learning work focused on churn prevention,
            fuelling behavior analysis, experimentation, and customer insight generation.
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
        </GlassCard>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard variant="warm" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">Overview</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <p className="mt-6 leading-8 text-[#6B625A]">
              This project explored customer retention and fuelling behavior patterns
              using both classical machine learning and deep learning approaches.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I contributed</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>• Maintained and monitored ML pipelines.</li>
              <li>• Trained and fine-tuned predictive models.</li>
              <li>• Supported AB testing and behavior analysis.</li>
              <li>• Contributed to reporting and insight generation.</li>
            </ul>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}