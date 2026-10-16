import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PerformanceMetrics from "./components/PerformanceMetrics";
import CaseStudies from "./components/CaseStudies";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import CaseStudyPage from "./components/CaseStudyPage";
import SEOCaseStudyPage from "./components/SEOCaseStudyPage";
import MarketingOpsCaseStudyPage from "./components/MarketingOpsCaseStudyPage";
import PaidMediaCaseStudyPage from "./components/PaidMediaCaseStudyPage";
import WebsiteGrowthCaseStudyPage from "./components/WebsiteGrowthCaseStudyPage";

import "./App.css";

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // Current URL hash
  const [currentHash, setCurrentHash] = useState(
    window.location.hash
  );

  // Save and apply theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Watch for URL changes
  useEffect(() => {
  const handleHashChange = () => {
    setCurrentHash(window.location.hash);
  };

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);

useEffect(() => {
  if (currentHash.startsWith("#/case-studies/")) {
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }

  const sectionId = currentHash.replace("#", "");

  if (!sectionId) return;

  const frame = requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  return () => cancelAnimationFrame(frame);
}, [currentHash]);

  // Determine which page to display
  const isEcommerceCaseStudy =
    currentHash === "#/case-studies/ecommerce-growth";
  const isSEOCaseStudy =
  currentHash === "#/case-studies/seo-growth";
  const isMarketingOpsCaseStudy =
  currentHash === "#/case-studies/marketing-operations";
  const isPaidMediaCaseStudy =
  currentHash === "#/case-studies/paid-media-optimization";
  const isWebsiteGrowthCaseStudy =
  currentHash === "#/case-studies/website-growth";

  // Toggle dark/light mode
  const toggleTheme = () => {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

{isEcommerceCaseStudy ? (
  <CaseStudyPage />
) : isSEOCaseStudy ? (
  <SEOCaseStudyPage />
) : isMarketingOpsCaseStudy ? (
  <MarketingOpsCaseStudyPage />
) : isPaidMediaCaseStudy ? (
  <PaidMediaCaseStudyPage />
) : isWebsiteGrowthCaseStudy ? (
  <WebsiteGrowthCaseStudyPage />
) : (
        <>
          <main id="top">
            <Hero />

            <ScrollReveal>
              <PerformanceMetrics />
            </ScrollReveal>

            <ScrollReveal>
              <CaseStudies />
            </ScrollReveal>

            <ScrollReveal>
              <Expertise />
            </ScrollReveal>

            <ScrollReveal>
              <About />
            </ScrollReveal>
          </main>

          <ScrollReveal>
            <Footer />
          </ScrollReveal>
        </>
      )}
    </>
  );
}