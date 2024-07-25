document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  const navbar = document.querySelector('.section-nav-desktop');
  let top = navbar.offsetTop;

  function stickynavbar() {
    if (window.scrollY >= top - navbar.clientHeight) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }
  window.addEventListener('scroll', stickynavbar);
});
