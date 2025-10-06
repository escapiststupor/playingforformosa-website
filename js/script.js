// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", (!expanded).toString());
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }),
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.05,
  rootMargin: "0px 0px -20px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      // Unobserve after animation to prevent re-triggering
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  // Add initial styles for animation
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    // Skip hero section from animation
    if (!section.classList.contains("hero")) {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    }
  });

  // Hero section should be visible immediately
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.style.opacity = "1";
    heroSection.style.transform = "translateY(0)";
  }
});
