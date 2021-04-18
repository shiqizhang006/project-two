var toggleButton = document.querySelector(".toggle");
var link = document.querySelector(".nav-link");

function toggle() {
  link.classList.toggle("active");
}

toggleButton.addEventListener("click", toggle);
