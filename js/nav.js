const navOpen = document.getElementById("open-nav");
const navClose = document.getElementById("close-nav");
const nav = document.getElementById("custom_nav");
const backdrop = document.getElementById("custom_backdrop");

nav.style.transform = "translateX(-100%)";
nav.style.opacity = "0";
setTimeout(() => {
  backdrop.style.display = "none";
}, 1000);

document.addEventListener("click", ({ target }) => {
  if (backdrop.contains(target) && !nav.contains(target)) {
    nav.style.transform = "translateX(-100%)";
    nav.style.opacity = "0";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      backdrop.style.display = "none";
    }, 300);
  }
});

navOpen.addEventListener("click", () => {
  backdrop.style.display = "block";
  setTimeout(() => {
    nav.style.transform = "translateX(0%)";
    nav.style.opacity = "1";
    backdrop.style.opacity = "1";
  }, 300);
});

navClose.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
  nav.style.opacity = "0";
  backdrop.style.opacity = "0";
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 300);
});
