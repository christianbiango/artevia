document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    scrolled: false,
    init() {
      window.addEventListener("scroll", () => {
        this.scrolled = window.scrollY > 0;
      });
    },
  }));

  Alpine.data("scrollToTop", () => ({
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  Alpine.data("keyNumbers", () => ({
    numbers: [
      {
        num: "10%",
        text: "Des français sont parfaitement bien informés de l’actualité.",
        animation: "animate-progressCircle1",
      },
      {
        num: "65%",
        text: " Des français font confiances aux informations provenant du journalisme.",
        animation: "animate-progressCircle2",
      },
      {
        num: "60%",
        text: "Des français adhèrent au moins à une idée complotiste.",
        animation: "animate-progressCircle3",
      },
    ],
    animateOnView(animation) {
      const el = this.$el;
      el.classList.add(animation);
    },
  }));

  Alpine.data("postsSlider", () => ({
    posts: [
      {
        title: "Manipulation des informations",
        excerpt:
          "Déclarations des opérateurs de plateformes en ligne et questionnaires de l'Arcom.",
        buttonText: "Article 1",
        buttonImg: "./public/img/pictogrammes/Vector.svg",
        imageLink: "./public/img/articles/image.png",
        alt: "Un homme manipulant des informations sur un ordinateur.",
        link: "https://www.arcom.fr/internet-et-reseaux-sociaux/lutte-contre-la-manipulation-de-linformation-declarations-des-operateurs-de-plateformes-en-ligne-et-questionnaires-de-larcom",
      },
      {
        title: "Manipulation des informations en période électorale",
        excerpt: "Les mesures prises par les plateformes en ligne",
        buttonText: "Article 2",
        buttonImg: "./public/img/pictogrammes/Vector.svg",
        imageLink: "./public/img/articles/post-2.png",
        link: "https://www.arcom.fr/internet-et-reseaux-sociaux/lutte-contre-la-manipulation-de-linformation-en-periode-electorale-les-mesures-prises-par-les-plateformes-en-ligne",
        alt: "Une femme d'affaires de dos, debout, analysant des informations diffusées sur plusieurs écrans.",
      },
    ],
  }));

  Alpine.data("cardsSlider", () => ({
    cardsTitles: ["Pourquoi ?", "Les impacts", "Ensemble", "Conseils"],
    cardsInformation: [
      {
        title:
          "<strong class='text-lightPink'>Pourquoi</strong> est-il si difficile de lutter contre la désinformation ?",
        content:
          "<p class='mb-2.5'>En France, la désinformation représente <strong>un défi</strong> croissant pour nos relations familiales et amicales. Théories du complot, intox médiatique et dérives sectaires fragmentent les liens, entraînant tristesse et conflits.</p> <h4 class='mb-2.5'><strong>Le Dialogue</strong> : Votre Meilleur Bouclier Contre la Division</h4> <p class='mb-2.5'>Pour préserver l’harmonie et apaiser les tensions, le dialogue respectueux reste notre meilleur outil. Apprendre à écouter et échanger de manière constructive peut reconstruire la confiance et protéger vos relations face à ces menaces.</p> <p class='mb-2.5'>Adoptons ensemble une <strong>communication bienveillante</strong> pour contrer la désinformation et ses effets dévastateurs.</p>",
        image: "./public/img/cartes/Illustration.svg",
        alt: "Illustration de trois personnes échangeant des idées et des informations.",
      },
      {
        title:
          "<strong class='text-pink'>Les impacts graves</strong> de la désinformation et des croyances radicales",
        content:
          "<p class='mb-2.5'>La désinformation et les croyances extrêmes entraînent des conséquences personnelles et sociales alarmantes :</p><ul class='mb-2.5'><li><h4 class='inline'>Isolement social</h4><p class='inline'> : un éloignement progressif des proches et la rupture avec des cercles sociaux équilibrés.</p></li><li><h4 class='inline'>Dérives sectaires</h4><p class='inline'> : une adhésion à des groupes extrêmes, parfois aux idéologies dangereuses.</p></li><li><h4 class='inline'>Enfermement idéologique</h4><p class='inline'> : un glissement vers des croyances de plus en plus radicales, enfermant dans un pipeline de pensées uniformes.</p></li></ul><p>Ces impacts nuisent au bien-être individuel et à la cohésion sociale. <strong>Comprendre</strong> ces mécanismes est essentiel pour y faire face et préserver un équilibre sain.</p>",
        image: "./public/img/cartes/group-2.svg",
        alt: "Illustration d'une personne partageant des idées bienveillantes envers une foule de trois personnes à l'écoute.",
      },
      {
        title:
          "<strong class='text-pink'>Préserver</strong> l'harmonie familiale : lutter contre la désinformation et les dérives sectaires",
        content:
          "<p class='mb-2.5'><strong>Les croyances complotistes et dérives sectaires</strong> divisent les familles, s’enracinant chez les plus sensibles aux critiques. Sans outils adaptés, ces tensions s’aggravent.</p><p><strong>La solution</strong> : un dialogue respectueux. Nous promouvons une culture <strong>d’écoute</strong> et <strong>d’échange apaisé</strong> pour renforcer les liens familiaux et lutter contre la désinformation. <strong>Ensemble</strong>, agissons pour préserver l’harmonie familiale.</p>",
        image: "./public/img/cartes/group-3.svg",
        alt: "Illustration d'un père et une mère de famille tenait leur enfant dans airs.",
      },
      {
        title:
          "<strong class='text-pink'>Conseils essentiels</strong>  pour un dialogue apaisé et constructif",
        content:
          "<p class='mb-2.5'>Adopter une approche bienveillante est crucial pour maintenir des échanges sereins face à des croyances divergentes. Voici les principes clés à suivre :</p><ul class='mb-2.5'><li><h4 class='inline'>Écoutez activement</h4><p class='inline'> : faites preuve d’empathie et évitez de juger, même si vous êtes en désaccord.</p></li><li><h4 class='inline'>Posez des questions ouvertes</h4><p class='inline'> : encouragez une réflexion personnelle plutôt que d’imposer votre point de vue.</p></li><li><h4 class='inline'>Appuyez-vous sur des sources fiables</h4><p class='inline'> : partagez des faits vérifiés et crédibles, sans chercher à convaincre à tout prix.</p></li><li><h4 class='inline'>Évitez la confrontation directe</h4><p class='inline'> : restez calme, adoptez une posture respectueuse et favorisez un dialogue apaisé.</p></li></ul><p>En appliquant ces conseils, vous renforcerez la <strong>confiance</strong> et préserverez des relations harmonieuses, même dans des discussions difficiles.</p>",
        image: "./public/img/cartes/group-4.svg",
        alt: "Illustration de deux personnes réfléchissant conjointement à une solution.",
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
