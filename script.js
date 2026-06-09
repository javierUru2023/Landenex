document.body.classList.add("js-ready");

const revealElements = document.querySelectorAll(".reveal");
const productShots = document.querySelectorAll(".product-shot");
const productShotImages = Array.from(productShots, (shot) => shot.querySelector("img")).filter(Boolean);
const productGalleryStage = document.querySelector(".product-gallery-stage");
const projectsTrack = document.getElementById("projects-track");
const menuToggle = document.querySelector(".menu-toggle");
const menuBackdrop = document.querySelector(".menu-backdrop");
const navLinks = document.querySelectorAll(".nav-links a");
const topNav = document.querySelector(".top-nav");

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

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const header = document.querySelector(".site-header");
const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

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

const loadProjects = async () => {
  if (!projectsTrack) {
    return;
  }

  try {
    const response = await fetch("proyectos.json", { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    // Keep layout stable and show a minimal fallback if JSON is unavailable.
    renderProjects([
      {
        title: "Actualiza proyectos.json",
        image: "img/backgroundDesktop.png",
        alt: "Actualiza el archivo proyectos.json para cargar tus imagenes",
      },
    ]);
  }
};

void loadProjects();

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

    next.classList.add("is-active");
    current.classList.remove("is-active");
    currentShot = nextIndex;

    window.setTimeout(() => {
      productGalleryStage.classList.remove("is-transitioning");
      isTransitioning = false;
    }, 980);
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
