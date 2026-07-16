(() => {
  "use strict";

  /*
   * Replace this URL after creating your Calendly event.
   * Example:
   * https://calendly.com/your-name/play-chess-with-dr-j
   */
  const CALENDLY_URL = "https://calendly.com/";

  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const scheduleButton = document.getElementById("schedule-button");
  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (scheduleButton) {
    scheduleButton.href = CALENDLY_URL;
  }

  if (navToggle && siteNav) {
    const closeNavigation = () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      document.body.classList.remove("nav-open");
    };

    const openNavigation = () => {
      siteNav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close navigation");
      document.body.classList.add("nav-open");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.contains("is-open");
      isOpen ? closeNavigation() : openNavigation();
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        closeNavigation();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }
})();
