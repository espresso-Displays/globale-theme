document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const idx = button.getAttribute('data-index');
      const content = document.querySelector(`[data-accordion-index='${idx}']`);

      if (button.classList.contains('collapsed')) {
        button.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 100 + 'px ';
        content.style.padding = '1rem 1rem 2rem 1rem';
      } else {
        button.classList.add('collapsed');
        content.style.maxHeight = null;
        content.style.padding = 0;
      }

      //   if (button.getAttribute('aria-expanded') == 'true') {
      //     button.setAttribute('aria-expanded', 'false');
      //     button.classList.add('collapsed');
      //     content.style.maxHeight = null;
      //     // content.style.height = '0px';
      //   } else {
      //     button.setAttribute('aria-expanded', 'true');
      //     button.classList.remove('collapsed');
      //     console.log(content.scrollHeight);
      //     //content.style.height = '100%';
      //     content.style.maxHeight = content.scrollHeight + 'px ';
      //   }

      //   if (!expanded) {
      //     // content.classList.add('expanded');
      //     button.classList.remove('collapsed');
      //     console.log(content.scrollHeight);
      //     content.style.height = '100%';
      //     content.style.maxHeight = content.scrollHeight + 'px ';
      //   } else {
      //     // content.classList.remove('expanded');
      //     button.classList.add('collapsed');
      //     content.style.maxHeight = null;
      //     content.style.height = 'auto';
      //   }
    });
  });
});
