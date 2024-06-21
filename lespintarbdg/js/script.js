const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 1000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

document.addEventListener('DOMContentLoaded', () => {
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
      showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentTestimonial);
  }

  document.getElementById('btn-next').addEventListener('click', nextTestimonial);
  document.getElementById('btn-prev').addEventListener('click', prevTestimonial);

  showTestimonial(currentTestimonial);
});
