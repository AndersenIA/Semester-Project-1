const mobileMenu = document.getElementsByClassName("mobile_nav-menu")[0];

const openMenu = document.getElementsByClassName("icon-mobile-nav")[0];

const closeMenu = document.getElementsByClassName("mobile-menu-close-icon")[0];

openMenu.addEventListener("click", function () {
  mobileMenu.classList.add("display-block");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("display-block");
});
