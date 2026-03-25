import Navbar from "@/components/layout/navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-8 text-slate-800">
      <Navbar />
      {children}
    </div>
  );
}
