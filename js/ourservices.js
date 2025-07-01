// NEW: Preloader fade out and show content after everything loads
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".main-content");

  // Fade out preloader
  preloader.classList.add("fade-out");

  // After fade out, hide preloader and show main content
  setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.visibility = "visible";
  }, 500);
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

// // Block dev tools and view-source shortcuts
// document.addEventListener('keydown', function (e) {
//   if (
//       e.ctrlKey && (e.key === 'u' || e.key === 'U') || // Ctrl+U
//       e.key === 'F12' ||                               // F12
//       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase()))
//   ) {
//       e.preventDefault();
//   }
// });