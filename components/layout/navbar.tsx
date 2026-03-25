"use client";

import { useState } from "react";
import Container from "../ui/container";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/projects")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="relative rounded-[28px] border border-white/45 bg-white/16 px-5 py-3 shadow-[0_18px_40px_rgba(90,40,30,0.08)] backdrop-blur-[24px]">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/50" />

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-[0.08em] text-[#1B6B62]"
            >
              Harith Izani
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#7A4E46] transition hover:text-[#1E1410]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              >
                {/* Document icon */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Resume
              </a>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-full border border-white/40 bg-white/14 px-4 py-2 text-sm text-[#1E1410] md:hidden"
              >
                Menu
              </button>
            </div>
          </div>

          {open ? (
            <div className="mt-4 flex flex-col gap-3 border-t border-white/30 pt-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#7A4E46] transition hover:text-[#1E1410]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A84C]/65 bg-[#C9A84C]/18 px-4 py-2 text-sm font-medium text-[#6B4A10]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Resume
              </a>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
