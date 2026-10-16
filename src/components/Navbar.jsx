import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({theme, toggleTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Selected Work", href: "#work" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          Macrine<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div
          id="nav-links"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:macrinejangu@gmail.com"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <span aria-hidden="true">↗</span>
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </nav>
    </header>
  );
}