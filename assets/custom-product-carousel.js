document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.product-carousel .carousel');

  carousels.forEach((carousel) => {
    const prevButton = carousel.parentElement.querySelector('.carousel-button.prev');
    const nextButton = carousel.parentElement.querySelector('.carousel-button.next');
    const thumbnails = document.querySelectorAll('.thumbnail-item img');
    let index = 0;

    function showSlide(i) {
      const items = carousel.querySelectorAll('.carousel-item');
      if (i >= items.length) {
        index = 0;
      } else if (i < 0) {
        index = items.length - 1;
      }
      carousel.style.transform = `translateX(${-index * 100}%)`;

      thumbnails.forEach((thumb) => {
        thumb.style.borderWidth = '0px';
      });
      thumbnails[index].style.borderWidth = '2px';
      thumbnails[index].classList.add('border-lm-primary');
    }

    prevButton.addEventListener('click', function () {
      index--;
      showSlide(index);
    });

    nextButton.addEventListener('click', function () {
      index++;
      showSlide(index);
    });

    thumbnails.forEach((thumbnail, i) => {
      thumbnail.addEventListener('click', function () {
        index = i;
        showSlide(index);
      });
    });

    // Initialize the first thumbnail as active
    thumbnails[index].style.borderWidth = '2px';
    thumbnails[0].classList.add('border-lm-primary');
  });
});
