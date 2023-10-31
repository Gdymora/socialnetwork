const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
if (themeToggle) {
}
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

//
// Отримання посилань на елементи кнопки "Меню" та мобільного меню
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileNav = document.querySelector(".menu");
// Функція для відкриття/закриття мобільного меню
function toggleMobileMenu() {
    mobileNav.classList.toggle("open");
}

// Додавання обробника подій для кнопки "Меню"
mobileMenuButton.addEventListener("click", toggleMobileMenu);

/*  */
/* document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.fixed-bottom-right');
  const circles = container.querySelectorAll('.note-count .circle');
  const maxCircles = Math.floor(container.clientWidth / (30 + 5));
  if (circles.length > maxCircles) {
      for (let i = maxCircles; i < circles.length; i++) {
          circles[i].style.display = 'none';
      }
  }
}); */
const noteCount = document.querySelector(".fixed-bottom-right");
const circles = noteCount.querySelectorAll(".circle");

// Отримати загальну ширину контейнера та кількість кругів
const containerWidth = noteCount.offsetWidth;
const circleCount = circles.length;

// Обчислити загальний розмір маржі, щоб розташувати круги у рядок
const totalMargin = containerWidth - circleCount * circles[0].offsetWidth;
if (circleCount > 3 && circleCount <= 12) {
    // Визначити відступ для кожного круга
    const margin = 5 - circleCount * 6;
    // Встановити відступ для всіх кругів, за винятком останнього
    for (let i = 0; i < circleCount - 1; i++) {
        circles[i].style.marginRight = `${margin}px`;
    }
} else if (circleCount > 12) {
    const margin = -46;
    for (let i = 0; i < circleCount - 1; i++) {
        circles[i].style.marginRight = `${margin}px`;
    }
}

/* Comment Block or none */
const commentButtons = document.querySelectorAll(".comment-button");

commentButtons.forEach(function (commentButton, index) {
    commentButton.addEventListener("click", function () {
        const commentsBlock = document.querySelectorAll(".comments")[index];

        if (commentsBlock) {
            if (commentsBlock.style.display === "none" || commentsBlock.style.display === "") {
                commentsBlock.style.display = "block";
            } else {
                commentsBlock.style.display = "none";
            }
        }
    });
});