import { navLinks } from "@/app/constants/navLinks";
import { heroCopy } from "@/app/constants/heroCopy";
import { aboutData, heroStats, dossierTabs } from "@/app/constants/aboutData";
import { projects } from "@/app/constants/projectsData";

describe("Project Integrity Checks", () => {
  it("validates navLinks count and anchors", () => {
    expect(navLinks.length).toBeGreaterThanOrEqual(4);
    navLinks.forEach((link) => {
      expect(link.href).toMatch(/^#[a-z]+$/);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it("validates hero copy integrity", () => {
    expect(heroCopy.captionOpen).toBeDefined();
    expect(heroCopy.captionClose).toBeDefined();
    expect(heroCopy.bio).toBeDefined();
  });

  it("validates about dossier and stats", () => {
    expect(aboutData.subject).toBe("RAPHAEL MULLER");
    expect(heroStats.length).toBe(2);
    expect(dossierTabs.length).toBe(3);
  });

  it("validates projects list", () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((proj) => {
      expect(proj.title).toBeDefined();
      expect(proj.image).toBeDefined();
    });
  });
});
