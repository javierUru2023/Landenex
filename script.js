document.body.classList.add("js-ready");

const revealElements = document.querySelectorAll(".reveal");
const productShots = document.querySelectorAll(".product-shot");
const productShotImages = Array.from(productShots, (shot) => shot.querySelector("img")).filter(Boolean);
const productGalleryStage = document.querySelector(".product-gallery-stage");
const projectsTrack = document.getElementById("projects-track");
const workGrid = document.getElementById("work-grid");
const workFilters = document.querySelectorAll(".work-filter");
const brandsTrack = document.getElementById("brands-track");
const contactToggle = document.querySelector(".contact-toggle");
const contactFormPanel = document.getElementById("contact-form-panel");
const contactForm = document.querySelector(".contact-form");
const contactNextInput = document.getElementById("contact-next");
const contactFeedback = document.getElementById("contact-feedback");
const fallbackProjects = [
  {
    title: "Valla Publicitaria",
    image: "img/proyectos/valla-publicitaria.jpg",
    alt: "Valla publicitaria instalada en ruta",
  },
  {
    title: "Cartel de Fachada",
    image: "img/proyectos/cartel-fachada.jpg",
    alt: "Cartel de fachada para local comercial",
  },
  {
    title: "Cartel de Obra",
    image: "img/proyectos/cartel-obra.jpg",
    alt: "Cartel de obra en estructura metalica",
  },
  {
    title: "Pantalla LED",
    image: "img/proyectos/pantalla-led.jpg",
    alt: "Pantalla led para publicidad exterior",
  },
  {
    title: "Totem Publicitario",
    image: "img/proyectos/totem-publicitario.jpg",
    alt: "Totem publicitario de alto impacto",
  },
  {
    title: "Cartel de Ruta",
    image: "img/proyectos/cartel-ruta.jpg",
    alt: "Cartel de ruta con grafica institucional",
  },
];
const fallbackWorkItems = [
  {
    title: "Ayax 01",
    category: "carteleria",
    image: "img/carteleria/ayax1.jpg",
    alt: "Trabajo de carteleria Ayax 01",
  },
  {
    title: "Ayax 02",
    category: "carteleria",
    image: "img/carteleria/ayax2.jpg",
    alt: "Trabajo de carteleria Ayax 02",
  },
  {
    title: "Ayax 04",
    category: "carteleria",
    image: "img/carteleria/ayax4.jpg",
    alt: "Trabajo de carteleria Ayax 04",
  },
  {
    title: "Ayax 05",
    category: "carteleria",
    image: "img/carteleria/ayax5.jpg",
    alt: "Trabajo de carteleria Ayax 05",
  },
  {
    title: "Ayax 06",
    category: "carteleria",
    image: "img/carteleria/ayax6.jpg",
    alt: "Trabajo de carteleria Ayax 06",
  },
  {
    title: "Ayax 07",
    category: "carteleria",
    image: "img/carteleria/ayax7.jpg",
    alt: "Trabajo de carteleria Ayax 07",
  },
  {
    title: "Divino 01",
    category: "carteleria",
    image: "img/carteleria/divino1.jpg",
    alt: "Trabajo de carteleria Divino 01",
  },
  {
    title: "Divino 02",
    category: "carteleria",
    image: "img/carteleria/divino2.jpg",
    alt: "Trabajo de carteleria Divino 02",
  },
  {
    title: "Divino 03",
    category: "carteleria",
    image: "img/carteleria/divino3.jpg",
    alt: "Trabajo de carteleria Divino 03",
  },
  {
    title: "Divino 04",
    category: "carteleria",
    image: "img/carteleria/divino4.jpg",
    alt: "Trabajo de carteleria Divino 04",
  },
  {
    title: "Divino 05",
    category: "carteleria",
    image: "img/carteleria/divino5.jpg",
    alt: "Trabajo de carteleria Divino 05",
  },
  {
    title: "Divino 06",
    category: "carteleria",
    image: "img/carteleria/divino6.jpg",
    alt: "Trabajo de carteleria Divino 06",
  },
  {
    title: "Divino 07",
    category: "carteleria",
    image: "img/carteleria/divino7.jpg",
    alt: "Trabajo de carteleria Divino 07",
  },
  {
    title: "Divino 08",
    category: "carteleria",
    image: "img/carteleria/divino8.jpg",
    alt: "Trabajo de carteleria Divino 08",
  },
  {
    title: "Dollar 01",
    category: "carteleria",
    image: "img/carteleria/dollar1.jpg",
    alt: "Trabajo de carteleria Dollar 01",
  },
  {
    title: "DS Perfumeria 01",
    category: "carteleria",
    image: "img/carteleria/dsperfumeria1.jpg",
    alt: "Trabajo de carteleria DS Perfumeria 01",
  },
  {
    title: "DS Perfumeria 02",
    category: "carteleria",
    image: "img/carteleria/dsperfumeria2.jpg",
    alt: "Trabajo de carteleria DS Perfumeria 02",
  },
  {
    title: "IMM 01",
    category: "impresion-digital",
    image: "img/impresion-digital/imm1.jpg",
    alt: "Trabajo de impresion digital IMM 01",
  },
  {
    title: "IMM 02",
    category: "impresion-digital",
    image: "img/impresion-digital/imm2.jpg",
    alt: "Trabajo de impresion digital IMM 02",
  },
  {
    title: "IMM 03",
    category: "impresion-digital",
    image: "img/impresion-digital/imm3.jpg",
    alt: "Trabajo de impresion digital IMM 03",
  },
  {
    title: "ML 01",
    category: "impresion-digital",
    image: "img/impresion-digital/ml1.jpg",
    alt: "Trabajo de impresion digital ML 01",
  },
  {
    title: "ML 02",
    category: "impresion-digital",
    image: "img/impresion-digital/ml2.jpg",
    alt: "Trabajo de impresion digital ML 02",
  },
  {
    title: "Sodre 01",
    category: "impresion-digital",
    image: "img/impresion-digital/sodre1.jpg",
    alt: "Trabajo de impresion digital Sodre 01",
  },
  {
    title: "Sodre 02",
    category: "impresion-digital",
    image: "img/impresion-digital/sodre2.jpg",
    alt: "Trabajo de impresion digital Sodre 02",
  },
];
const menuToggle = document.querySelector(".menu-toggle");
const menuBackdrop = document.querySelector(".menu-backdrop");
const navLinks = document.querySelectorAll(".nav-links a");
const topNav = document.querySelector(".top-nav");
const header = document.querySelector(".site-header");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let brandsCarouselState = null;
let allWorkItems = [];
let currentWorkFilter = "all";
let lastScrollY = window.scrollY;
let workCardsObserver = null;
let workRevealResizeRaf = 0;
const workRowRevealTimers = new Map();
const fallbackBrands = [
  { name: "Divino", image: "img/marcas/divinoLogo.png", alt: "Logo de Divino" },
  { name: "Ayax", image: "img/marcas/ayaxLogo.png", alt: "Logo de Ayax" },
  {
    name: "Intendencia de Montevideo",
    image: "img/marcas/immLogo.png",
    alt: "Logo de la Intendencia de Montevideo",
  },
  { name: "Lubrax", image: "img/marcas/lubraxLogo.png", alt: "Logo de Lubrax" },
  { name: "Sodre", image: "img/marcas/sodreLogo.png", alt: "Logo de Sodre" },
  { name: "Tornometal", image: "img/marcas/tornometalLogo.png", alt: "Logo de Tornometal" },
  { name: "Canal 10", image: "img/marcas/canal10Logo.png", alt: "Logo de Canal 10" },
  { name: "Canal 5", image: "img/marcas/canal5Logo.png", alt: "Logo de Canal 5" },
  {
    name: "Dollar rent a car",
    image: "img/marcas/dollarLogo.png",
    alt: "Logo de Dollar rent a car",
  },
  { name: "Automax", image: "img/marcas/automaxLogo.png", alt: "Logo de Automax" },
];

const fitIntroStageToViewport = () => {
  if (!productGalleryStage) return;

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const stageTop = productGalleryStage.getBoundingClientRect().top;
  const reserveSpace = viewportHeight <= 760 ? 8 : viewportHeight <= 900 ? 12 : 16;
  const minHeight = viewportWidth <= 600 ? 220 : viewportHeight <= 760 ? 250 : 280;
  const maxHeight = viewportHeight <= 760 ? 420 : viewportHeight <= 900 ? 500 : viewportHeight <= 1080 ? 590 : 660;
  const availableHeight = viewportHeight - stageTop - reserveSpace;
  const clampedHeight = Math.max(minHeight, Math.min(maxHeight, Math.round(availableHeight)));
  document.documentElement.style.setProperty("--product-stage-fit-height", `${clampedHeight}px`);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }
};

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const willOpen = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menu" : "Abrir menu");
  });
}

if (menuBackdrop) {
  menuBackdrop.addEventListener("click", closeMenu);
}

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

if (contactToggle && contactFormPanel) {
  contactToggle.addEventListener("click", () => {
    const willOpen = contactToggle.getAttribute("aria-expanded") !== "true";
    contactToggle.setAttribute("aria-expanded", String(willOpen));
    contactFormPanel.classList.toggle("is-open", willOpen);
  });
}

if (contactForm && contactNextInput) {
  const nextUrl = new URL(window.location.href);
  nextUrl.search = "";
  nextUrl.hash = "";
  nextUrl.searchParams.set("cotizacion", "enviada");
  nextUrl.hash = "contacto";
  contactNextInput.value = nextUrl.toString();
}

if (contactFeedback) {
  const params = new URLSearchParams(window.location.search);
  const isSent = params.get("cotizacion") === "enviada";

  if (isSent) {
    contactFeedback.textContent = "Tu solicitud fue enviada con exito. Te vamos a responder a la brevedad.";
    contactFeedback.classList.add("is-visible");

    if (contactToggle && contactFormPanel) {
      contactToggle.setAttribute("aria-expanded", "true");
      contactFormPanel.classList.add("is-open");
    }

    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete("cotizacion");
    if (!cleanUrl.searchParams.toString()) {
      cleanUrl.search = "";
    }
    window.history.replaceState({}, "", cleanUrl.toString());
  }
}

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("menu-open")) return;
  if (!topNav) return;
  if (!topNav.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    if (href === "#inicio") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(fitIntroStageToViewport, 380);
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const toggleHeaderState = () => {
  if (!header) return;

  const currentScrollY = Math.max(0, window.scrollY);
  const isMenuOpen = document.body.classList.contains("menu-open");
  const revealThreshold = 110;

  header.classList.toggle("is-scrolled", currentScrollY > 12);

  if (isMenuOpen || currentScrollY <= 8) {
    header.classList.remove("is-hidden", "is-scroll-up");
    lastScrollY = currentScrollY;
    return;
  }

  const scrollingDown = currentScrollY > lastScrollY + 2;
  const scrollingUp = currentScrollY < lastScrollY - 2;

  if (scrollingDown && currentScrollY > revealThreshold) {
    header.classList.add("is-hidden");
    header.classList.remove("is-scroll-up");
  } else if (scrollingUp) {
    header.classList.remove("is-hidden");
    header.classList.add("is-scroll-up");
  }

  if (currentScrollY <= revealThreshold) {
    header.classList.remove("is-scroll-up");
  }

  lastScrollY = currentScrollY;
};

toggleHeaderState();
let isHeaderScrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (isHeaderScrollTicking) return;
    isHeaderScrollTicking = true;

    window.requestAnimationFrame(() => {
      toggleHeaderState();
      isHeaderScrollTicking = false;
    });
  },
  { passive: true }
);

fitIntroStageToViewport();
window.addEventListener("resize", fitIntroStageToViewport);
window.addEventListener("resize", () => {
  if (!workGrid || !workGrid.children.length) {
    return;
  }

  window.cancelAnimationFrame(workRevealResizeRaf);
  workRevealResizeRaf = window.requestAnimationFrame(() => {
    applyWorkCardsRevealDelays();
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

const renderProjects = (projects) => {
  if (!projectsTrack || !Array.isArray(projects) || !projects.length) {
    return;
  }

  const buildCard = (project, isClone = false) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (isClone) {
      card.setAttribute("aria-hidden", "true");
    }

    const art = document.createElement("div");
    art.className = "project-art";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt || project.title || "Proyecto reciente";
    image.loading = isClone ? "lazy" : "eager";
    image.decoding = "async";
    art.appendChild(image);

    const title = document.createElement("h4");
    title.textContent = project.title || "Proyecto";

    card.appendChild(art);
    card.appendChild(title);
    return card;
  };

  const fragment = document.createDocumentFragment();
  projects.forEach((project) => fragment.appendChild(buildCard(project)));
  projects.forEach((project) => fragment.appendChild(buildCard(project, true)));

  projectsTrack.innerHTML = "";
  projectsTrack.appendChild(fragment);
};

const normalizeWorkItems = (items) => {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const imagePath = typeof item.image === "string" ? item.image.trim() : "";
      if (!imagePath) {
        return null;
      }

      const rawCategory = String(item.category || "").toLowerCase().trim();
      let category = "carteleria";

      if (rawCategory === "carteleria" || rawCategory === "impresion-digital") {
        category = rawCategory;
      } else if (/\/impresion-digital\//i.test(imagePath)) {
        category = "impresion-digital";
      } else if (/\/carteleria\//i.test(imagePath)) {
        category = "carteleria";
      }

      return {
        title: item.title || "Trabajo",
        category,
        image: imagePath,
        alt: item.alt || item.title || "Trabajo Landenex",
      };
    })
    .filter(Boolean);
};

const sortWorkItemsByCategory = (items) => {
  const categoryPriority = {
    carteleria: 0,
    "impresion-digital": 1,
  };

  return [...items].sort((a, b) => {
    const aPriority = categoryPriority[a.category] ?? 99;
    const bPriority = categoryPriority[b.category] ?? 99;
    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }

    return String(a.title || "").localeCompare(String(b.title || ""), "es", { sensitivity: "base" });
  });
};

const updateWorkFiltersAvailability = () => {
  if (!workFilters.length) {
    return;
  }

  const categoryCount = allWorkItems.reduce(
    (acc, item) => {
      if (item.category === "carteleria") acc.carteleria += 1;
      if (item.category === "impresion-digital") acc["impresion-digital"] += 1;
      return acc;
    },
    { carteleria: 0, "impresion-digital": 0 }
  );

  let hasVisibleActiveFilter = false;

  workFilters.forEach((button) => {
    const filter = button.dataset.filter || "all";
    if (filter === "all") {
      button.hidden = false;
      hasVisibleActiveFilter = hasVisibleActiveFilter || button.classList.contains("is-active");
      return;
    }

    const shouldShow = categoryCount[filter] > 0;
    button.hidden = !shouldShow;
    button.disabled = !shouldShow;

    if (!shouldShow && button.classList.contains("is-active")) {
      button.classList.remove("is-active");
    }

    hasVisibleActiveFilter = hasVisibleActiveFilter || (shouldShow && button.classList.contains("is-active"));
  });

  if (!hasVisibleActiveFilter) {
    const allButton = Array.from(workFilters).find((button) => (button.dataset.filter || "all") === "all");
    if (allButton) {
      workFilters.forEach((button) => button.classList.remove("is-active"));
      allButton.classList.add("is-active");
      currentWorkFilter = "all";
    }
  }
};

const applyWorkCardsRevealDelays = () => {
  if (!workGrid) {
    return;
  }

  const cards = Array.from(workGrid.querySelectorAll(".work-card"));
  if (!cards.length) {
    return;
  }

  let rowIndex = -1;
  let rowTop = null;
  let columnIndex = 0;

  cards.forEach((card) => {
    card.classList.remove("is-row-reveal");

    const currentTop = Math.round(card.offsetTop);
    if (rowTop === null || Math.abs(currentTop - rowTop) > 2) {
      rowIndex += 1;
      rowTop = currentTop;
      columnIndex = 0;
    }

    const delay = Math.min(620, rowIndex * 120 + columnIndex * 60);
    card.style.setProperty("--work-reveal-delay", `${delay}ms`);
    card.dataset.workRow = String(rowIndex);
    columnIndex += 1;
  });
};

const setupWorkCardsReveal = () => {
  if (!workGrid) {
    return;
  }

  const cards = Array.from(workGrid.querySelectorAll(".work-card"));
  if (!cards.length) {
    if (workCardsObserver) {
      workCardsObserver.disconnect();
      workCardsObserver = null;
    }
    return;
  }

  applyWorkCardsRevealDelays();

  if (prefersReducedMotion) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  if (workCardsObserver) {
    workCardsObserver.disconnect();
  }

  workRowRevealTimers.forEach((timerId) => {
    window.clearTimeout(timerId);
  });
  workRowRevealTimers.clear();

  const revealedRows = new Set();

  workCardsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        if (card.classList.contains("is-visible")) {
          workCardsObserver?.unobserve(card);
          return;
        }

        card.classList.add("is-visible");

        const rowKey = card.dataset.workRow || "";
        if (rowKey && !revealedRows.has(rowKey)) {
          revealedRows.add(rowKey);
          const rowCards = cards.filter((item) => item.dataset.workRow === rowKey);

          rowCards.forEach((item) => item.classList.add("is-row-reveal"));

          const timerId = window.setTimeout(() => {
            rowCards.forEach((item) => item.classList.remove("is-row-reveal"));
            workRowRevealTimers.delete(rowKey);
          }, 1450);

          workRowRevealTimers.set(rowKey, timerId);
        }

        workCardsObserver?.unobserve(card);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  cards.forEach((card) => {
    card.classList.remove("is-visible");
    card.classList.remove("is-row-reveal");
    workCardsObserver?.observe(card);
  });
};

const renderWorkItems = (items) => {
  if (!workGrid) {
    return;
  }

  workGrid.innerHTML = "";
  if (!items.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "work-empty";
    emptyState.textContent = "No hay trabajos para este filtro por ahora.";
    workGrid.appendChild(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "work-card";

    const media = document.createElement("div");
    media.className = "work-card-media";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";

    media.appendChild(image);
    card.appendChild(media);
    fragment.appendChild(card);
  });

  workGrid.appendChild(fragment);

  window.requestAnimationFrame(() => {
    setupWorkCardsReveal();
  });
};

const applyWorkFilter = (filter) => {
  currentWorkFilter = filter;
  const filtered = filter === "all"
    ? sortWorkItemsByCategory(allWorkItems)
    : allWorkItems.filter((item) => item.category === filter);
  renderWorkItems(filtered);
};

const setupWorkFilters = () => {
  if (!workFilters.length) {
    return;
  }

  workFilters.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) {
        return;
      }

      const filter = button.dataset.filter || "all";

      workFilters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      applyWorkFilter(filter);
    });
  });
};

const getBrandMark = (name) => {
  const words = String(name).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "LX";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] || "L"}${words[1][0] || "X"}`.toUpperCase();
};

const stopBrandsCarousel = () => {
  if (!brandsCarouselState) {
    return;
  }

  window.clearInterval(brandsCarouselState.timerId);
  brandsCarouselState.track.removeEventListener("mouseenter", brandsCarouselState.onMouseEnter);
  brandsCarouselState.track.removeEventListener("mouseleave", brandsCarouselState.onMouseLeave);
  window.removeEventListener("resize", brandsCarouselState.onResize);
  brandsCarouselState.track.style.transition = "none";
  brandsCarouselState.track.style.transform = "translate3d(0, 0, 0)";
  brandsCarouselState = null;
};

const setupBrandsCarousel = () => {
  if (!brandsTrack) {
    return;
  }

  stopBrandsCarousel();

  const originals = brandsTrack.querySelectorAll(".brand-pill:not([aria-hidden='true'])").length;
  if (originals < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const getStepSize = () => {
    const firstCard = brandsTrack.querySelector(".brand-pill");
    if (!firstCard) {
      return 0;
    }

    const gapValue = window.getComputedStyle(brandsTrack).gap;
    const gap = Number.parseFloat(gapValue) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  let currentIndex = 0;
  let stepSize = getStepSize();
  const allCards = Array.from(brandsTrack.querySelectorAll(".brand-pill"));

  const getMotionProfile = () => {
    const isDesktop = window.innerWidth > 900;
    if (isDesktop) {
      return {
        transition: "transform 1350ms cubic-bezier(0.18, 0.92, 0.16, 1)",
        intervalMs: 4200,
        resetDelayMs: 1390,
      };
    }

    return {
      transition: "transform 620ms cubic-bezier(0.25, 0.9, 0.3, 1)",
      intervalMs: 2700,
      resetDelayMs: 660,
    };
  };

  let motionProfile = getMotionProfile();

  const updateActiveCards = (activeIndex) => {
    allCards.forEach((card) => {
      const cardIndex = Number.parseInt(card.dataset.brandIndex || "-1", 10);
      card.classList.toggle("is-active", cardIndex === activeIndex);
    });
  };

  const moveToIndex = (nextIndex, animated = true) => {
    if (!stepSize) {
      return;
    }

    brandsTrack.style.transition = animated ? motionProfile.transition : "none";
    brandsTrack.style.transform = `translate3d(${-nextIndex * stepSize}px, 0, 0)`;
    updateActiveCards(nextIndex % originals);
  };

  const tick = () => {
    if (!stepSize) {
      stepSize = getStepSize();
      if (!stepSize) return;
    }

    currentIndex += 1;
    moveToIndex(currentIndex, true);

    if (currentIndex >= originals * 2) {
      window.setTimeout(() => {
        // Shift one full sequence back while keeping the exact same visual crop.
        currentIndex -= originals;
        moveToIndex(currentIndex, false);
      }, motionProfile.resetDelayMs);
    }
  };

  updateActiveCards(0);
  moveToIndex(0, false);

  const startTimer = () => window.setInterval(tick, motionProfile.intervalMs);
  let timerId = startTimer();

  const onMouseEnter = () => {
    window.clearInterval(timerId);
  };

  const onMouseLeave = () => {
    window.clearInterval(timerId);
    timerId = startTimer();
  };

  const onResize = () => {
    stepSize = getStepSize();
    motionProfile = getMotionProfile();
    window.clearInterval(timerId);
    timerId = startTimer();
    moveToIndex(currentIndex, false);
  };

  brandsTrack.addEventListener("mouseenter", onMouseEnter);
  brandsTrack.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", onResize);

  brandsCarouselState = {
    timerId,
    track: brandsTrack,
    onMouseEnter,
    onMouseLeave,
    onResize,
  };
};

const renderBrands = (brands) => {
  if (!brandsTrack || !Array.isArray(brands) || !brands.length) {
    return;
  }

  const buildBrand = (brand, index, isClone = false) => {
    const normalized = typeof brand === "string" ? { name: brand } : brand;
    const brandName = normalized?.name || "Marca";
    const brandImage = typeof normalized?.image === "string" ? normalized.image : "";
    const brandAlt = normalized?.alt || `Logo de ${brandName}`;

    const card = document.createElement("article");
    card.className = "brand-pill";
    card.dataset.brandIndex = String(index);
    if (isClone) {
      card.setAttribute("aria-hidden", "true");
    }

    if (brandImage) {
      card.classList.add("has-logo");

      const logoWrap = document.createElement("span");
      logoWrap.className = "brand-logo-wrap";

      const logo = document.createElement("img");
      logo.className = "brand-logo";
      logo.src = brandImage;
      logo.alt = brandAlt;
      logo.loading = isClone ? "lazy" : "eager";
      logo.decoding = "async";

      const label = document.createElement("span");
      label.className = "brand-name visually-hidden";
      label.textContent = brandName;

      logoWrap.appendChild(logo);
      card.appendChild(logoWrap);
      card.appendChild(label);
      return card;
    }

    const mark = document.createElement("span");
    mark.className = "brand-mark";
    mark.textContent = getBrandMark(brandName);

    const label = document.createElement("span");
    label.className = "brand-name";
    label.textContent = brandName;

    card.appendChild(mark);
    card.appendChild(label);
    return card;
  };

  const fragment = document.createDocumentFragment();
  brands.forEach((brand, index) => fragment.appendChild(buildBrand(brand, index)));
  brands.forEach((brand, index) => fragment.appendChild(buildBrand(brand, index, true)));
  brands.forEach((brand, index) => fragment.appendChild(buildBrand(brand, index, true)));

  brandsTrack.innerHTML = "";
  brandsTrack.appendChild(fragment);
  setupBrandsCarousel();
};

const loadProjects = async () => {
  if (!projectsTrack) {
    return;
  }

  if (window.location.protocol === "file:") {
    renderProjects(fallbackProjects);
    return;
  }

  try {
    const response = await fetch("proyectos.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const projects = await response.json();
    renderProjects(Array.isArray(projects) && projects.length ? projects : fallbackProjects);
  } catch (error) {
    renderProjects(fallbackProjects);
  }
};

const loadWorkItems = async () => {
  if (!workGrid) {
    return;
  }

  try {
    const response = await fetch("galeria.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const items = await response.json();
    const normalized = normalizeWorkItems(items);
    allWorkItems = normalized.length ? normalized : normalizeWorkItems(fallbackWorkItems);
  } catch (error) {
    allWorkItems = normalizeWorkItems(fallbackWorkItems);
  }

  updateWorkFiltersAvailability();
  applyWorkFilter(currentWorkFilter);
};

const loadBrands = async () => {
  if (!brandsTrack) {
    return;
  }

  if (window.location.protocol === "file:") {
    renderBrands(fallbackBrands);
    return;
  }

  try {
    const response = await fetch("marcas.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const brands = await response.json();
    renderBrands(Array.isArray(brands) && brands.length ? brands : fallbackBrands);
  } catch (error) {
    renderBrands(fallbackBrands);
  }
};

void loadProjects();
setupWorkFilters();
void loadWorkItems();
void loadBrands();

if (productShots.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const waitForGalleryImages = () => {
    if (!productShotImages.length) {
      return Promise.resolve();
    }

    const imagePromises = productShotImages.map((image) => {
      if (image.complete && image.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const done = () => {
          image.removeEventListener("load", done);
          image.removeEventListener("error", done);
          resolve();
        };

        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
      });
    });

    return Promise.all(imagePromises);
  };

  let currentShot = 0;
  let isTransitioning = false;
  const transitionDuration = 1300;

  const runSlideTransition = () => {
    if (!productGalleryStage || isTransitioning) {
      return;
    }

    const current = productShots[currentShot];
    const nextIndex = (currentShot + 1) % productShots.length;
    const next = productShots[nextIndex];

    isTransitioning = true;
    productGalleryStage.classList.remove("is-transitioning");
    void productGalleryStage.offsetWidth;
    productGalleryStage.classList.add("is-transitioning");

    next.classList.remove("is-leaving", "is-entering", "is-active");
    next.classList.add("is-enter-prepare");
    void next.offsetWidth;
    next.classList.remove("is-enter-prepare");
    next.classList.add("is-entering", "is-active");
    current.classList.add("is-leaving");
    currentShot = nextIndex;

    window.setTimeout(() => {
      current.classList.remove("is-active", "is-leaving");
      next.classList.remove("is-entering");
      productGalleryStage.classList.remove("is-transitioning");
      isTransitioning = false;
    }, transitionDuration);
  };

  const startTransitionLoop = () => {
    runSlideTransition();
    setInterval(runSlideTransition, 5200);
  };

  Promise.race([
    waitForGalleryImages(),
    new Promise((resolve) => window.setTimeout(resolve, 2500)),
  ]).then(startTransitionLoop);
}

document.getElementById("year").textContent = new Date().getFullYear();
