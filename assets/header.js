function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-react');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  hamburgerMenu.addEventListener('click', function () {
    if (mobileOverlay.classList.contains('active')) {
      document.body.style.position = '';
      document.body.style.top = '';
    } else {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
    mobileOverlay.classList.toggle('active');
  });

  mobileOverlay.addEventListener('click', function (event) {
    if (event.target === mobileOverlay) {
      mobileOverlay.classList.remove('active');
      document.body.style.position = '';
      document.body.style.top = '';
    }
  });

  const windowWidth = getWindowWidth();

  const banner = document.querySelector('.banner');
  let navbar = document.querySelector('.header-mobile');
  if (windowWidth > 1024) {
    navbar = document.querySelector('.header-desktop');
  }

  document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      banner.style.position = 'fixed';
      navbar.style.position = 'fixed';
      //document.querySelector('.hero').style.marginTop = '95px';
    } else {
      banner.style.position = 'sticky';
      navbar.style.position = 'sticky';
      //document.querySelector('.hero').style.marginTop = '0px';
    }
  });

  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);

      const content = this.nextElementSibling;

      if (!expanded) {
        content.classList.remove('invisible');
        content.style.height = 'auto';
        content.style.maxHeight = '500px';
        content.style.opacity = 1;
      } else {
        content.style.maxHeight = '0px';
        content.style.height = 0 + 'px';
        content.style.opacity = 0;
        content.classList.add('invisible');
      }
    });
  });

  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.nav-dropdown');

      dropdown.style.display = 'block';
      setTimeout(() => {
        dropdown.style.opacity = '1';
        //dropdown.style.transform = 'translateY(0)';
        // dropdown.style.maxHeight = '100%';
      }, 0);
    });

    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.nav-dropdown');
      dropdown.style.opacity = '0';
      dropdown.style.transform = 'translateY(-10px)';
      // dropdown.style.maxHeight = '0px';
      setTimeout(() => {
        dropdown.style.display = 'none';
      }, 300);
    });
  });
});
