/**
 * PORTFOLIO BOUTAYNA LOUZI - APPLICATION LOGIC
 * Développeuse Digital | UI/UX & Full-Stack
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. GESTION DU THÈME (SOMBRE / CLAIR)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  const htmlRoot = document.documentElement;

  // Récupérer le thème sauvegardé ou par défaut dark
  const savedTheme = localStorage.getItem('boutayna_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('boutayna_portfolio_theme', newTheme);
    showToast(`Mode ${newTheme === 'dark' ? 'Sombre' : 'Clair'} activé 🌓`);
  });

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    if (theme === 'light') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  }

  /* ==========================================================================
     2. MENU MOBILE RESPONSIVE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Fermer le menu lors d'un clic sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  /* ==========================================================================
     3. TYPEWRITER EFFECT (HERO SECTION)
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    "Développeuse Digital",
    "Passionnée d'UI/UX & Maquettes",
    "Full-Stack React, Laravel & Python",
    "compétente en manipulation des bases de données",
    "Créative avec un fort esprit d'équipe"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause avant d'effacer
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }

  /* ==========================================================================
     4. FILTRES DES COMPÉTENCES (SKILLS TABS)
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activer l'onglet
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     5. DÉMO DU QUIZ INTERACTIF FLOWER.MATCH
     ========================================================================== */
  const quizQuestions = [
    {
      category: "Humeur & Énergie",
      title: "Quelle est votre humeur ou votre énergie aujourd'hui ?",
      options: [
        {
          emoji: "🌸",
          title: "Douceur & Sérénité",
          desc: "Besoin de calme, de délicatesse et d'apaisement intérieur.",
          flowerType: "pastel"
        },
        {
          emoji: "✨",
          title: "Pétillance & Vitalité",
          desc: "Pleine d'énergie solaire, enthousiaste et prête à célébrer.",
          flowerType: "bright"
        },
        {
          emoji: "🌙",
          title: "Élégance & Mystère",
          desc: "Attirée par la discrétion raffinée et la poésie contemporaine.",
          flowerType: "minimal"
        },
        {
          emoji: "🔥",
          title: "Audace & Passion",
          desc: "Intensité vive, sentiments affirmés et caractère audacieux.",
          flowerType: "bold"
        }
      ]
    },
    {
      category: "Occasion & Ambiance",
      title: "Pour quelle occasion imaginez-vous ce bouquet floral ?",
      options: [
        {
          emoji: "🏡",
          title: "Cocooning à la maison",
          desc: "Sublimer un salon ou une table de travail au quotidien.",
          flowerType: "pastel"
        },
        {
          emoji: "🎉",
          title: "Célébration festive",
          desc: "Partager de la joie pour un anniversaire ou une réussite.",
          flowerType: "bright"
        },
        {
          emoji: "💌",
          title: "Déclaration & Amour",
          desc: "Exprimer un attachement profond et des sentiments tendres.",
          flowerType: "bold"
        },
        {
          emoji: "🎁",
          title: "Cadeau d'exception",
          desc: "Créer la surprise avec une composition haute couture raffinée.",
          flowerType: "minimal"
        }
      ]
    },
    {
      category: "Sensibilité Esthétique",
      title: "Quel style de design floral résonne le plus avec vous ?",
      options: [
        {
          emoji: "🌷",
          title: "Romantique & Poudré",
          desc: "Pivoines luxuriantes, roses d'antan et nuances blush.",
          flowerType: "pastel"
        },
        {
          emoji: "🌿",
          title: "Sauvage & Botanique",
          desc: "Branches d'eucalyptus frais, graminées et esprit champêtre.",
          flowerType: "botanical"
        },
        {
          emoji: "🤍",
          title: "Minimaliste & Épuré",
          desc: "Lignes graphiques, fleurs sculpturales et vase monochrome.",
          flowerType: "minimal"
        },
        {
          emoji: "🌻",
          title: "Contrasté & Coloré",
          desc: "Mélange chaleureux de teintes orangées, pourpres et dorées.",
          flowerType: "bright"
        }
      ]
    }
  ];

  // Profils de résultats
  const bouquetProfiles = {
    pastel: {
      title: "Le Rêve de Pivoines & Roses Blush",
      icon: "🌸",
      affinity: "98%",
      price: "59 €",
      desc: "Une composition vaporeuse et romantique, harmonie de pivoines délicates, de roses poudrées et de doux brins d'eucalyptus. Idéal pour infuser sérénité, tendresse et élégance dans votre quotidien."
    },
    bright: {
      title: "L'Aura Solaire & Dahlias Royaux",
      icon: "🌻",
      affinity: "99%",
      price: "64 €",
      desc: "Un bouquet éclatant de lumière et d'optimisme ! Dahlias chaleureux, tournesols miniatures et touches d'œillets corail pour illuminer votre humeur et diffuser une joie contagieuse."
    },
    minimal: {
      title: "L'Élégance Blanche & Lys Sculpturaux",
      icon: "🤍",
      affinity: "96%",
      price: "72 €",
      desc: "Une création graphique épurée et contemporaine. L'alliance de lys immaculés, d'anthuriums et de tiges architecturales pour les esprits raffinés en quête de pureté visuelle."
    },
    bold: {
      title: "La Symphonie Passion & Velours Pourpre",
      icon: "🌹",
      affinity: "97%",
      price: "69 €",
      desc: "Une composition envoûtante aux teintes profondes de bordeaux, rose rouge et feuillages sombres. Une déclaration de caractère qui résonne avec intensité et force d'expression."
    },
    botanical: {
      title: "L'Échappée Botanique & Eucalyptus Sauvage",
      icon: "🌿",
      affinity: "95%",
      price: "52 €",
      desc: "Un hommage à la nature brute et poétique : eucalyptus cinerea, chardons bleus, gypsophile aérienne et graminées champêtres pour une fraîcheur vivifiante et durable."
    }
  };

  let currentStep = 0;
  const userAnswers = [];

  const questionsView = document.getElementById('quiz-questions-view');
  const resultView = document.getElementById('quiz-result-view');
  const progressBar = document.getElementById('quiz-progress-bar');
  const stepText = document.getElementById('quiz-step-text');
  const stepCategory = document.getElementById('quiz-step-category');
  const questionTitle = document.getElementById('quiz-question-title');
  const optionsContainer = document.getElementById('quiz-options-container');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const nextBtn = document.getElementById('quiz-next-btn');
  const restartBtn = document.getElementById('quiz-restart-btn');

  function renderQuizStep(step) {
    const qData = quizQuestions[step];
    stepText.textContent = `Étape ${step + 1} sur ${quizQuestions.length}`;
    stepCategory.textContent = qData.category;
    questionTitle.textContent = qData.title;

    // Progression
    const progressPercent = ((step + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Visibilité précédent
    prevBtn.style.visibility = step > 0 ? 'visible' : 'hidden';

    // Rendu des options
    optionsContainer.innerHTML = '';
    qData.options.forEach((opt, idx) => {
      const isSelected = userAnswers[step] === opt.flowerType;
      const optEl = document.createElement('div');
      optEl.className = `quiz-option-card ${isSelected ? 'selected' : ''}`;
      optEl.innerHTML = `
        <span class="option-emoji">${opt.emoji}</span>
        <div class="option-text">
          <h5>${opt.title}</h5>
          <p>${opt.desc}</p>
        </div>
      `;

      optEl.addEventListener('click', () => {
        document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
        optEl.classList.add('selected');
        userAnswers[step] = opt.flowerType;
        nextBtn.removeAttribute('disabled');
      });

      optionsContainer.appendChild(optEl);
    });

    if (userAnswers[step]) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
    }

    if (step === quizQuestions.length - 1) {
      nextBtn.innerHTML = `<span>Découvrir mon bouquet</span> 🌸`;
    } else {
      nextBtn.innerHTML = `<span>Suivant</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < quizQuestions.length - 1) {
        currentStep++;
        renderQuizStep(currentStep);
      } else {
        // Afficher le résultat
        showQuizResult();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        renderQuizStep(currentStep);
      }
    });
  }

  function showQuizResult() {
    // Calcul du profil le plus représenté
    const counts = {};
    userAnswers.forEach(type => {
      counts[type] = (counts[type] || 0) + 1;
    });

    let topType = 'pastel';
    let maxCount = 0;
    for (const [type, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        topType = type;
      }
    }

    const matchedBouquet = bouquetProfiles[topType] || bouquetProfiles.pastel;

    // Injection dans le DOM
    document.getElementById('result-title').textContent = matchedBouquet.title;
    document.getElementById('result-icon').textContent = matchedBouquet.icon;
    document.getElementById('result-description').textContent = matchedBouquet.desc;
    document.getElementById('result-affinity').textContent = matchedBouquet.affinity;
    document.getElementById('result-price').textContent = matchedBouquet.price;

    questionsView.style.display = 'none';
    resultView.style.display = 'block';

    showToast(`🌸 Match trouvé : ${matchedBouquet.title} (${matchedBouquet.affinity})`);
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentStep = 0;
      userAnswers.length = 0;
      resultView.style.display = 'none';
      questionsView.style.display = 'block';
      renderQuizStep(0);
    });
  }

  // Initialisation du quiz
  if (optionsContainer) {
    renderQuizStep(0);
  }

  /* ==========================================================================
     6. MODAL D'ÉTUDE DE CAS DES PROJETS
     ========================================================================== */
  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const caseStudies = {
    flower: {
      title: "flower.match — E-commerce Floral & Quiz Intuitif",
      category: "React • CSS Glassmorphism • Algorithme de Personnalité",
      content: `
        <div style="margin-bottom:1.5rem;">
          <img src="assets/flower_match_ui_1791196677443.jpg" alt="flower.match" style="width:100%; border-radius:12px; margin-bottom:1.2rem; border:1px solid var(--border-color);">
          <h3 style="font-size:1.6rem; margin-bottom:0.8rem;" class="gradient-text">Genèse et Vision du Projet</h3>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.2rem;">
            Le projet <strong>flower.match</strong> est né d'une idée novatrice : transformer l'achat souvent anonyme de fleurs en une <strong>expérience personnalisée et émotionnelle</strong>. Plutôt que de proposer un simple catalogue figé, la plateforme intègre un quiz interactif de personnalité qui adapte l'assortiment de fleurs à l'humeur, à l'énergie et à l'événement de l'acheteur.
          </p>

          <h4 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">🎨 Conception de la Maquette & UI/UX</h4>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.2rem;">
            En amont du code, j'ai réalisé un travail rigoureux de maquettage : création d'une palette pastelle et apaisante (tons blush, sauge et lavande), composants en <em>glassmorphism</em> pour une impression de légèreté aérienne, et tests d'ergonomie pour minimiser le nombre de clics jusqu'à la recommandation.
          </p>

          <h4 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">💻 Pile Technique & Réalisation</h4>
          <ul style="color:var(--text-secondary); line-height:1.8; margin-left:1.2rem; margin-bottom:1.5rem;">
            <li><strong>Frontend :</strong> React avec Hooks (useState, useEffect, useMemo) pour gérer la dynamique des questions et les transitions d'écrans sans rechargement.</li>
            <li><strong>Moteur de Quiz :</strong> Algorithme pondéré d'affinité florale associant des traits psychologiques aux symboliques botaniques traditionnelles.</li>
            <li><strong>Panier & Tunnel :</strong> Gestion réactive du panier d'achat avec mise à jour en direct des quantités et calcul des frais.</li>
          </ul>

          <div style="background:var(--bg-glass); border:1px solid var(--border-color); padding:1rem; border-radius:10px;">
            <strong style="color:var(--accent-purple);">Point fort :</strong> L'expérience du quiz augmente l'engagement utilisateur de façon spectaculaire par rapport à un e-commerce conventionnel.
          </div>
        </div>
      `
    },

    perfume: {
      title: "L'Élixir — E-commerce de Parfumerie de Luxe",
      category: "Laravel • PHP • MySQL • Architecture Olfactive",
      content: `
        <div style="margin-bottom:1.5rem;">
          <img src="assets/perfume_ecommerce_ui_1791196700857.jpg" alt="L'Élixir Parfumerie" style="width:100%; border-radius:12px; margin-bottom:1.2rem; border:1px solid var(--border-color);">
          <h3 style="font-size:1.6rem; margin-bottom:0.8rem;" class="gradient-text">Concept & Architecture Backend</h3>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.2rem;">
            <strong>L'Élixir Parfumerie</strong> est une boutique en ligne haut de gamme dédiée aux parfums de créateurs et aux essences rares. La particularité majeure réside dans la modélisation de la <strong>pyramide olfactive</strong> : chaque flacon est décomposé en <em>Notes de tête</em> (fraîcheur éphémère), <em>Notes de cœur</em> (personnalité centrale) et <em>Notes de fond</em> (sillage durable).
          </p>

          <h4 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">⚙️ Développement Laravel & Sécurité</h4>
          <ul style="color:var(--text-secondary); line-height:1.8; margin-left:1.2rem; margin-bottom:1.5rem;">
            <li><strong>Architecture MVC :</strong> Séparation stricte entre les contrôleurs métiers, les modèles Eloquent et les vues Blade dynamiques.</li>
            <li><strong>Filtrage olfactif complexe :</strong> Requêtes optimisées avec jointures multiples pour permettre aux utilisateurs de rechercher un parfum par ingrédient spécifique (ex: Bergamote, Ambre, Fleur d'oranger).</li>
            <li><strong>Gestion des rôles :</strong> Espace d'administration sécurisé pour la gestion des stocks, des références flacons et des commandes clients.</li>
          </ul>

          <h4 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">✨ Direction Artistique</h4>
          <p style="color:var(--text-secondary); line-height:1.7;">
            Un univers sombre (noir obsidienne) réhaussé de touches d'or champagne et d'ambre, conçu pour refléter l'exclusivité du produit et valoriser les visuels en haute définition des flacons.
          </p>
        </div>
      `
    },

    "perfume-db": {
      title: "Architecture & Modélisation de Données SQL (L'Élixir)",
      category: "Bases de Données Relationnelles • MySQL • Schéma MCD/MLD",
      content: `
        <div style="margin-bottom:1.5rem;">
          <h3 style="font-size:1.6rem; margin-bottom:0.8rem;" class="gradient-text">Modélisation Relationnelle Avancée</h3>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.2rem;">
            Pour un e-commerce olfactif, une base de données plate est impossible. Un parfum possède plusieurs notes dans des strates différentes, et une note appartient à de multiples parfums (relation <em>Many-to-Many</em> avec table pivot).
          </p>

          <div style="background:#0d0e17; border:1px solid rgba(168,85,247,0.3); border-radius:10px; padding:1.2rem; font-family:monospace; font-size:0.88rem; color:#e2e8f0; margin-bottom:1.4rem; overflow-x:auto;">
-- Structure Relationnelle Principale (MySQL)
CREATE TABLE perfumes (
    id BIGINT AUTO-INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT UNSIGNED DEFAULT 0,
    concentration ENUM('Eau de Toilette', 'Eau de Parfum', 'Extrait') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE olfactory_notes (
    id BIGINT AUTO-INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    family ENUM('Florale', 'Boisée', 'Orientale', 'Hespéridée', 'Gourmande') NOT NULL
);

-- Table Pivot avec niveau dans la pyramide
CREATE TABLE perfume_note (
    perfume_id BIGINT,
    note_id BIGINT,
    tier ENUM('head', 'heart', 'base') NOT NULL,
    PRIMARY KEY (perfume_id, note_id, tier),
    FOREIGN KEY (perfume_id) REFERENCES perfumes(id) ON DELETE CASCADE,
    FOREIGN KEY (note_id) REFERENCES olfactory_notes(id) ON DELETE CASCADE
);
          </div>

          <h4 style="font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-primary);">Optimisation & Intégrité</h4>
          <p style="color:var(--text-secondary); line-height:1.7;">
            Indexation sur <code>(perfume_id, tier)</code> pour un chargement instantané de la fiche produit en moins de 15ms. Gestion rigoureuse des contraintes d'intégrité référentielle et transactions ACID pour les commandes.
          </p>
        </div>
      `
    },

    uiux: {
      title: "Studio Maquettes & Méthodologie UI/UX",
      category: "Wireframing • Design System • Ergonomie Centrée Utilisateur",
      content: `
        <div style="margin-bottom:1.5rem;">
          <img src="assets/uiux_maquettes_showcase_1791196728723.jpg" alt="Studio UI/UX" style="width:100%; border-radius:12px; margin-bottom:1.2rem; border:1px solid var(--border-color);">
          <h3 style="font-size:1.6rem; margin-bottom:0.8rem;" class="gradient-text">L'importance capitale du Maquettage</h3>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.2rem;">
            Pour moi, un bon développement commence toujours par une <strong>conception visuelle et ergonomique soignée</strong>. Coder directement sans maquette préalable entraîne des refactorisations coûteuses et une expérience utilisateur décousue.
          </p>

          <h4 style="font-size:1.2rem; margin-bottom:0.6rem; color:var(--text-primary);">Ma démarche en 4 piliers :</h4>
          <ol style="color:var(--text-secondary); line-height:1.8; margin-left:1.2rem; margin-bottom:1.5rem;">
            <li><strong>Wireframes Low-Fi :</strong> Cadrer l'agencement spatial et hiérarchiser l'information sans se laisser distraire par les couleurs.</li>
            <li><strong>Design Tokens & Charte :</strong> Établir des variables universelles (palette HSL, échelles typographiques, rayons de bordure, ombres portées).</li>
            <li><strong>Prototypes Interactifs :</strong> Simuler les micro-interactions (survols, états de sélection, modales) pour éprouver la fluidité.</li>
            <li><strong>Transmission fluide vers le Code :</strong> Mes maquettes sont pensées dès le départ en composables HTML/CSS réalistes, rendant l'intégration en React ou Blade ultra fluide.</li>
          </ol>
        </div>
      `
    }
  };

  // Ouverture de la modal
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const study = caseStudies[projKey];
      if (study) {
        modalBody.innerHTML = `
          <div class="project-category" style="margin-bottom:0.3rem;">${study.category}</div>
          <h2 style="font-size:1.85rem; margin-bottom:1.2rem;">${study.title}</h2>
          ${study.content}
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Fermeture de la modal
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     7. COPIE DE L'E-MAIL DANS LE PRESSE-PAPIER
     ========================================================================== */
  const emailAddress = "louziib0utaina@icloud.com";
  const copyEmailBtns = [
    document.getElementById('copy-email-btn'),
    document.getElementById('quick-copy-email-hero')
  ];

  copyEmailBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipboard(emailAddress);
      });
    }
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("Adresse e-mail copiée : " + text + " ✉️");
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast("Adresse e-mail copiée : " + text + " ✉️");
  }

  /* ==========================================================================
     8. GESTION DU FORMULAIRE DE CONTACT
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast("Veuillez renseigner tous les champs obligatoires ⚠️");
        return;
      }

      // Préparation du mailto
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(`[Contact Portfolio] ${subject || 'Nouveau message'}`)}&body=${encodeURIComponent(`De : ${name} (${email})\n\nMessage :\n${message}`)}`;

      showToast(`Merci ${name} ! Préparation de votre e-mail en cours... 🚀`);

      setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
      }, 1000);
    });
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

  /* ==========================================================================
     10. NAVIGATION FLUIDE & SCROLLSPY
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = sectionId;
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

});
