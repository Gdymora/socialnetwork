const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

//
// Отримання посилань на елементи кнопки "Меню" та мобільного меню
const mobileMenuButton = document.getElementById("mobile-menu-button"); 
const mobileNav = document.querySelector('.menu');
// Функція для відкриття/закриття мобільного меню
function toggleMobileMenu() {
    mobileNav.classList.toggle('open');
}

// Додавання обробника подій для кнопки "Меню"
mobileMenuButton.addEventListener("click", toggleMobileMenu);
