document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle functionality
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
  });

  navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.className = "ri-menu-line";
  });

  // Tutors data and pagination functionality
  const tutors = [
      { name: 'Aida', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Gina', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Karimah', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Nurul', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Novi', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Rina', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Rona', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Salma Khairunnisa', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Salma Nur', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Santi Deva', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Shafira', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Realisa', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Winda', subject: '', description: '', img: 'assets/akhwat-icon.png' },
      { name: 'Sarah', subject: '', description: '', img: 'assets/akhwat-icon.png' }
  ];

  const tutorsPerPage = 2; // Display two tutors per page
  let currentPage = 1;
  let filteredTutors = tutors;

  const tutorsContainer = document.getElementById('tutors');
  const filterInput = document.getElementById('filter');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const pageInfo = document.getElementById('page-info');

  function renderTutors() {
      tutorsContainer.innerHTML = '';
      const start = (currentPage - 1) * tutorsPerPage;
      const end = start + tutorsPerPage;
      const pageTutors = filteredTutors.slice(start, end);

      pageTutors.forEach(tutor => {
          const tutorDiv = document.createElement('div');
          tutorDiv.classList.add('tutor');
          tutorDiv.innerHTML = `
              <img src="${tutor.img}" alt="${tutor.name}" class="tutor-img">
              <h3 class="tutor-name">${tutor.name}</h3>
              <p class="tutor-subject">${tutor.subject}</p>
              <p class="tutor-description">${tutor.description}</p>
          `;
          tutorsContainer.appendChild(tutorDiv);
      });

      updatePagination();
  }

  function updatePagination() {
      const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage);
      pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
  }

  function filterTutors() {
      const filterValue = filterInput.value.trim().toLowerCase();
      filteredTutors = tutors.filter(tutor => tutor.name.toLowerCase().includes(filterValue));
      currentPage = 1;
      renderTutors();
  }

  filterInput.addEventListener('keyup', filterTutors);

  prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          renderTutors();
      }
  });

  nextButton.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
      } else {
          currentPage = 1; // Reset to the first page if at the last page
      }
      renderTutors();
  });

  renderTutors();

  // Testimonials functionality
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

  // ScrollReveal initialization
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
  ScrollReveal().reveal(".container__right h2, .container__right h3, .container__right p", {
      ...scrollRevealOption,
      delay: 1000,
  });

  ScrollReveal().reveal(".container__right .tent-1, .container__right .tent-2", {
      duration: 1000,
      delay: 1000,
  });

  ScrollReveal().reveal(".location", {
      ...scrollRevealOption,
      origin: "left",
      delay: 1000,
  });
});
