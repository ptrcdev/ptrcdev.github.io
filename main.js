document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.classList.remove('active');
      });
      this.classList.add('active');

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });