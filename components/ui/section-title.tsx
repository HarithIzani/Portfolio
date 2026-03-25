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
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#1B6B62]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1E1410] md:text-5xl">
        {title}
      </h2>

      <div className="mt-4 h-px w-20 bg-[#C9A84C]/60" />

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#7A4E46]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
