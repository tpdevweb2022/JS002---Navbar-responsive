const openMenu = document.getElementById("site_title__burger_open");
const closeMenu = document.getElementById("site_title__burger_close");

const navLinks = document.getElementById("nav_links");

openMenu.onclick = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  navLinks.classList.toggle("mobile_hidden");
};
closeMenu.onclick = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  navLinks.classList.toggle("mobile_hidden");
};
