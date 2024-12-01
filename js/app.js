document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    scrolled: false,
    init() {
      window.addEventListener("scroll", () => {
        this.scrolled = window.scrollY > 0;
      });
    },
  }));

  Alpine.data("scrollHandler", () => ({
    scrollToSection(event) {
      const targetId = event.target
        .closest("button")
        .getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 90;
        const targetPosition =
          targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    },
  }));
});
