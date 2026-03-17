"use client";

import { useState } from "react";
import Container from "../ui/container";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="relative rounded-[28px] border border-white/45 bg-white/16 px-5 py-3 shadow-[0_18px_40px_rgba(84,62,42,0.08)] backdrop-blur-[24px]">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/50" />

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-[0.08em] text-[#4A413A]"
            >
              Harith Izani
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#6B625A] transition hover:text-[#2F2A26]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                className="hidden rounded-full border border-[#D7B893]/70 bg-[#D7B893]/28 px-4 py-2 text-sm font-medium text-[#2F2A26] transition hover:-translate-y-0.5 hover:bg-[#D7B893]/38 md:inline-flex"
              >
                Resume
              </a>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded-full border border-white/40 bg-white/14 px-4 py-2 text-sm text-[#2F2A26] md:hidden"
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
                  className="text-sm text-[#6B625A] transition hover:text-[#2F2A26]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="inline-flex w-fit rounded-full border border-[#D7B893]/70 bg-[#D7B893]/28 px-4 py-2 text-sm font-medium text-[#2F2A26]"
              >
                Resume
              </a>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}