let open = false;
const toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");
toggler.addEventListener("click", function () {
  if (!open) {
    nav.classList.add("toggler-open");
  } else {
    nav.classList.remove("toggler-open");
  }
  console.log(nav, toggler);
});

let formOpen = false;
const form = document.querySelector(".app-form");
const button = document.querySelectorAll(".btn");
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "none";
  formOpen = false;
});
button.forEach((but) => {
  but.addEventListener("click", function (e) {
    if (!formOpen) {
      form.style.display = "block";
      formOpen = true;
    } else {
      // form.classList.remove("form-open");
      form.style.display = "none";
      formOpen = !formOpen;
    }
  });
});

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
