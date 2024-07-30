document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const idx = button.getAttribute('data-index');
      const content = document.querySelector(`[data-accordion-index='${idx}']`);

      if (button.classList.contains('collapsed')) {
        button.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + 100 + 'px ';
        // content.style.padding = '0rem 1rem 2rem 1rem !important';
      } else {
        button.classList.add('collapsed');
        content.style.maxHeight = null;
        //content.style.padding = 0;
      }
    });
  });
});
