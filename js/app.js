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

  Alpine.data("cardsSlider", () => ({
    cardsTitles: ["Pourquoi ?", "Les impacts", "Ensemble", "Conseils"],
    cardsInformation: [
      {
        title:
          "<span class='text-pink'>Pourquoi</span> est-il si difficile de lutter contre la désinformation ?",
        content:
          "<p class='mb-2.5'>En France, la désinformation représente <strong>un défi</strong> croissant pour nos relations familiales et amicales. Théories du complot, intox médiatique et dérives sectaires fragmentent les liens, entraînant tristesse et conflits.</p> <h4 class='mb-2.5'><strong>Le Dialogue</strong> : Votre Meilleur Bouclier Contre la Division</h4> <p class='mb-2.5'>Pour préserver l’harmonie et apaiser les tensions, le dialogue respectueux reste notre meilleur outil. Apprendre à écouter et échanger de manière constructive peut reconstruire la confiance et protéger vos relations face à ces menaces.</p> <p class='mb-2.5'>Adoptons ensemble une <strong>communication bienveillante</strong> pour contrer la désinformation et ses effets dévastateurs.</p>",
        image: "./public/img/cartes/Illustration.svg",
      },
      {
        title:
          "<span class='text-pink'>Pourquoi</span> est-il si difficile de lutter contre la désinformation ?",
        content:
          "<p class='mb-2.5'>En France, la désinformation représente <strong>un défi</strong> croissant pour nos relations familiales et amicales. Théories du complot, intox médiatique et dérives sectaires fragmentent les liens, entraînant tristesse et conflits.</p> <h4 class='mb-2.5'><strong>Le Dialogue</strong> : Votre Meilleur Bouclier Contre la Division</h4> <p class='mb-2.5'>Pour préserver l’harmonie et apaiser les tensions, le dialogue respectueux reste notre meilleur outil. Apprendre à écouter et échanger de manière constructive peut reconstruire la confiance et protéger vos relations face à ces menaces.</p> <p class='mb-2.5'>Adoptons ensemble une <strong>communication bienveillante</strong> pour contrer la désinformation et ses effets dévastateurs.</p>",
        image: "./public/img/cartes/Illustration.svg",
      },
      {
        title:
          "<span class='text-pink'>Pourquoi</span> est-il si difficile de lutter contre la désinformation ?",
        content:
          "<p class='mb-2.5'>En France, la désinformation représente <strong>un défi</strong> croissant pour nos relations familiales et amicales. Théories du complot, intox médiatique et dérives sectaires fragmentent les liens, entraînant tristesse et conflits.</p> <h4 class='mb-2.5'><strong>Le Dialogue</strong> : Votre Meilleur Bouclier Contre la Division</h4> <p class='mb-2.5'>Pour préserver l’harmonie et apaiser les tensions, le dialogue respectueux reste notre meilleur outil. Apprendre à écouter et échanger de manière constructive peut reconstruire la confiance et protéger vos relations face à ces menaces.</p> <p class='mb-2.5'>Adoptons ensemble une <strong>communication bienveillante</strong> pour contrer la désinformation et ses effets dévastateurs.</p>",
        image: "./public/img/cartes/Illustration.svg",
      },
      {
        title:
          "<span class='text-pink'>Pourquoi</span> est-il si difficile de lutter contre la désinformation ?",
        content:
          "<p class='mb-2.5'>En France, la désinformation représente <strong>un défi</strong> croissant pour nos relations familiales et amicales. Théories du complot, intox médiatique et dérives sectaires fragmentent les liens, entraînant tristesse et conflits.</p> <h4 class='mb-2.5'><strong>Le Dialogue</strong> : Votre Meilleur Bouclier Contre la Division</h4> <p class='mb-2.5'>Pour préserver l’harmonie et apaiser les tensions, le dialogue respectueux reste notre meilleur outil. Apprendre à écouter et échanger de manière constructive peut reconstruire la confiance et protéger vos relations face à ces menaces.</p> <p class='mb-2.5'>Adoptons ensemble une <strong>communication bienveillante</strong> pour contrer la désinformation et ses effets dévastateurs.</p>",
        image: "./public/img/cartes/Illustration.svg",
      },
    ],
    activeIndex: 0,

    detectActiveCard() {
      const cards = this.$el.querySelectorAll("[data-element='card']");
      const container = this.$el;

      let closestCardIndex = 0;
      let closestCardDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const distanceToCenter = Math.abs(
          (cardRect.left + cardRect.right) / 2 -
            (containerRect.left + containerRect.right) / 2
        );

        if (distanceToCenter < closestCardDistance) {
          closestCardDistance = distanceToCenter;
          closestCardIndex = index;
        }
      });

      this.activeIndex = closestCardIndex;
    },
    scrollToCard(index) {
      carouselSection = document.getElementById("carousel-section");
      const cardsContainer = document.getElementById("cards-container");
      const cards = carouselSection.querySelectorAll("[data-element='card']");
      const cardWidth = cards[index].offsetWidth;
      const scrollToPosition = (cardWidth + 68) * index; // 68 = le gap entre les cartes

      cardsContainer.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      this.activeIndex = index;
    },

    init() {
      this.$el.addEventListener("scroll", this.detectActiveCard);
    },
  }));
});