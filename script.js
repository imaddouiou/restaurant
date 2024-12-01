const menu = document.querySelector('.menu-icon'); // Sélectionne l'icône du menu
const navlinks = document.querySelector('.nav-links'); // Sélectionne la liste des liens

menu.addEventListener('click', () => {
  navlinks.classList.toggle('mobile-menu'); // Ajoute/retire la classe mobile-menu
});