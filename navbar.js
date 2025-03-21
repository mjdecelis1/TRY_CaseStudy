// Fetch and load the navbar dynamically
const navbarPlaceholder = document.getElementById('navbar-placeholder');

if (navbarPlaceholder) {
  fetch('../navbar/navbar.html')
    .then((response) => response.text())
    .then((data) => {
      navbarPlaceholder.innerHTML = data;

      // Select elements after navbar is loaded
      const navbar = document.querySelector('.navbar');
      const dropdown = document.querySelector('.dropdown');
      const dropdownMenu = document.querySelector('.dropdown_menu');
      const toggleBtn = document.querySelector('.toggle_btn');
      const toggleBtnIcon = document.querySelector('.toggle_btn i');
      const allDropdowns = document.querySelectorAll('.dropdown_mobile');

      // Combine scroll listeners for efficiency
      window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 400;

        if (navbar) navbar.classList.toggle('scrolled', isScrolled);
        if (dropdown) dropdown.classList.toggle('scrolled', isScrolled);
        if (dropdownMenu) dropdownMenu.classList.toggle('scrolled', isScrolled);
      });

      // Mobile toggle button logic
      if (toggleBtn && toggleBtnIcon) {
        toggleBtn.addEventListener('click', () => {
          if (dropdownMenu) {
            const isOpen = dropdownMenu.classList.toggle('open');
            toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
            toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
          }
        });
      }

      // Dropdown toggle for mobile
      const destinationToggle = document.querySelector('.destination-toggle');
      if (destinationToggle) {
        destinationToggle.addEventListener('click', (event) => {
          event.preventDefault();
          const dropdown = destinationToggle.nextElementSibling;

          if (dropdown) {
            dropdown.classList.toggle('open');

            // Close other dropdowns
            allDropdowns.forEach((otherDropdown) => {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('open');
              }
            });
          }
        });
      }

      document.querySelector('.destination').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
      });

      // Close dropdowns when clicking outside
      document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown_menu') && !event.target.closest('.destination-toggle')) {
          allDropdowns.forEach((dropdown) => {
            dropdown.classList.remove('open');
          });
        }
      });
    })
    .catch((error) => console.error('Error loading navbar:', error));
} else {
  console.error('Navbar placeholder not found.');
}