type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#7A6B5E]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#2F2A26] md:text-5xl">
        {title}
      </h2>

      <div className="mt-4 h-px w-20 bg-[#C6A27A]/45" />

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B625A]">
          {description}
        </p>
      ) : null}
    </div>
  );
}