"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { basePath } from "@/lib/basePath";
import { MenuIcon, CloseIcon } from "./icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animate-fade-in-down sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href={`${basePath}/`} className="font-display text-lg font-semibold tracking-tight text-clay">
          {site.orgName}
        </a>
        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden gap-6 text-sm text-foreground-muted sm:flex">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a href={`${basePath}${link.href}`} className="transition-colors hover:text-clay">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? site.nav.closeMenu : site.nav.openMenu}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-terracotta hover:text-clay sm:hidden"
          >
            {menuOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="animate-fade-in-down flex flex-col gap-1 border-t border-border/80 px-6 py-4 text-sm text-foreground-muted sm:hidden">
          {site.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={`${basePath}${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-2 transition-colors hover:bg-surface hover:text-clay"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
