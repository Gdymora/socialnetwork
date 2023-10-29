const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
if(themeToggle ){

}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

document.addEventListener("DOMContentLoaded", function () {
  const expandButton = document.getElementById("expand-menu");

  expandButton.addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    console.log(sidebar.style.width);
     if (!sidebar.style.width || sidebar.style.width === "20%") {
      sidebar.style.width = "20px";  
      content.style.width = "calc(100% - 20px)";  
    } else {
      sidebar.style.width = "20%";  
      content.style.width = "80%";
    }
  });
});
