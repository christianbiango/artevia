document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    scrolled: false,
    init() {
      window.addEventListener("scroll", () => {
        this.scrolled = window.scrollY > 0;
      });
    },
  }));
});
