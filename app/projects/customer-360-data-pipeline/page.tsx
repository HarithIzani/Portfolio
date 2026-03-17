import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";

export default function Customer360DataPipelinePage() {
  const tech = [
    "Python",
    "PySpark",
    "Airflow",
    "AWS",
    "Huawei Cloud",
    "Pandas",
    "NLTK",
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
          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#6B625A]">
              Case Study
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl">
              Customer 360 Data Pipeline
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6B625A] md:text-lg">
              A centralized data pipeline spanning multiple business units, built to
              support ETL, orchestration, analytics, and interactive reporting.
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
              This work focused on maintaining and improving a Customer 360 pipeline
              that consolidated data across several Sunway business units. The system
              supported ingestion, transformation, orchestration, and downstream reporting.
            </p>
          </GlassCard>

          <GlassCard variant="default" className="p-8 md:p-10">
            <h2 className="text-3xl font-semibold">What I contributed</h2>
            <div className="mt-4 h-px w-16 bg-[#C6A27A]/45" />
            <ul className="mt-6 space-y-4 text-[#6B625A]">
              <li>• Built and maintained ETL workflows.</li>
              <li>• Developed Python scripts and Airflow DAGs.</li>
              <li>• Worked with PySpark and cloud infrastructure.</li>
              <li>• Supported reporting and analytics pipelines.</li>
            </ul>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}