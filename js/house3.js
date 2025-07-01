const lightbox = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-image");
const galleryImages = Array.from(document.querySelectorAll(".gallery-card img"));
let currentIndex = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.style.display = "flex";
  updateLightboxImage();
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  } else if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }
  updateLightboxImage();
}

function updateLightboxImage() {
  const selectedImg = galleryImages[currentIndex];
  lightboxImg.src = selectedImg.src;
  lightboxImg.alt = selectedImg.alt;
}

// Close lightbox when clicking outside image
window.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Optional: arrow key navigation
document.addEventListener("keydown", function (e) {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeLightbox();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".header-right span");
  const homeItem = menuItems[0];
  homeItem.classList.add("default-active");

  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      menuItems.forEach(i => i.classList.remove("active", "default-active"));
      this.classList.add("active");
    });
  });

  // Disable image dragging
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });
});

// Block dev tools and view-source shortcuts
document.addEventListener('keydown', function (e) {
  if (
    e.ctrlKey && (e.key === 'u' || e.key === 'U') || // Ctrl+U
    e.key === 'F12' ||                               // F12
    (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase()))
  ) {
    e.preventDefault();
  }
});