document.addEventListener("alpine:init", () => {
  // Composant de barre circulaire
  Alpine.data("circularBar", () => ({
    progress: 0,
    paragr: "Des français sont parfaitement bien informés de l’actualité.",
    progressOffset: 226.2, // Full circle dash offset (2 * pi * r)

    animateProgress() {
      const target = 10; // Pourcentage cible (10%)
      const interval = setInterval(() => {
        if (this.progress >= target) {
          clearInterval(interval);
        } else {
          this.progress++;
          this.progressOffset = 226.2 - (this.progress / 100) * 226.2;
        }
      }, 30); // Vitesse de l'animation
    },
  }));
});
