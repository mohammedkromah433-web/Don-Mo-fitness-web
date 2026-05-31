// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const runCounter = (counter) => {
    counter.innerText = "0";

    const target = Number(counter.getAttribute("data-target"));
    const speed = 60;

    const update = () => {
      const current = Number(counter.innerText);
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 25);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  };

  counters.forEach(runCounter);
}


// ================= LIGHTBOX (IMAGE ZOOM) =================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const galleryImages = document.querySelectorAll(".gallery-img");

if (lightbox && lightboxImg && closeLightbox) {

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Gallery image";
    });
  });

  const close = () => {
    lightbox.style.display = "none";
  };

  closeLightbox.addEventListener("click", close);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}


// ================= SCROLL REVEAL (FIXED) =================

const revealSections = document.querySelectorAll("section");

if (revealSections.length > 0) {

  const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    revealSections.forEach(section => {
      const top = section.getBoundingClientRect().top;

      if (top < trigger) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
}