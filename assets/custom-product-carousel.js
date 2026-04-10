document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.product-carousel .carousel');

  carousels.forEach((carousel) => {
    const prevButton = carousel.parentElement.querySelector('.carousel-button.prev');
    const nextButton = carousel.parentElement.querySelector('.carousel-button.next');
    const thumbnailContainer = carousel.closest('.product-carousel').parentElement.parentElement.querySelector('.thumbnails');
    let index = 0;

    function showSlide(i) {
      const items = carousel.querySelectorAll('.carousel-item');
      if (i >= items.length) {
        index = 0;
      } else if (i < 0) {
        index = items.length - 1;
      }
      carousel.style.transform = `translateX(${-index * 100}%)`;

      const thumbImgs = thumbnailContainer ? thumbnailContainer.querySelectorAll('img') : [];
      thumbImgs.forEach((thumb) => {
        thumb.style.borderWidth = '0px';
      });
      if (thumbImgs[index]) {
        thumbImgs[index].style.borderWidth = '2px';
        thumbImgs[index].classList.add('border-lm-primary');
      }
    }

    function attachThumbnailListeners() {
      const thumbImgs = thumbnailContainer ? thumbnailContainer.querySelectorAll('img') : [];
      thumbImgs.forEach((thumbnail, i) => {
        thumbnail.addEventListener('click', function () {
          index = i;
          showSlide(index);
        });
      });
    }

    function buildCarousel(imageUrls, altText) {
      // Rebuild carousel items
      carousel.innerHTML = '';
      imageUrls.forEach((url) => {
        const item = document.createElement('div');
        item.className = 'carousel-item relative flex flex-col items-center justify-center snap-center shrink-0 w-full h-full cursor-auto bg-neutral-100';
        const img = document.createElement('img');
        img.src = url;
        img.alt = altText || '';
        img.className = 'w-full h-full object-contain overflow-clip origin-top-left pointer-events-none';
        img.draggable = false;
        img.height = 'auto';
        img.width = 'auto';
        item.appendChild(img);
        carousel.appendChild(item);
      });

      // Rebuild thumbnails
      if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        imageUrls.forEach((url) => {
          const thumbWrapper = document.createElement('div');
          thumbWrapper.className = 'thumbnail-item cursor-pointer h-full max-h-full aspect-square flex-shrink-0 border-none relative border-lm-primary';
          const thumbImg = document.createElement('img');
          thumbImg.src = url;
          thumbImg.alt = altText || '';
          thumbImg.className = 'w-full h-full max-w-full max-h-full aspect-square object-contain overflow-clip origin-top-left';
          thumbImg.draggable = false;
          thumbWrapper.appendChild(thumbImg);
          thumbnailContainer.appendChild(thumbWrapper);
        });
        attachThumbnailListeners();
      }

      index = 0;
      showSlide(0);
    }

    prevButton.addEventListener('click', function () {
      index--;
      showSlide(index);
    });

    nextButton.addEventListener('click', function () {
      index++;
      showSlide(index);
    });

    attachThumbnailListeners();

    // Initialize the first thumbnail as active
    const initialThumbs = thumbnailContainer ? thumbnailContainer.querySelectorAll('img') : [];
    if (initialThumbs[0]) {
      initialThumbs[0].style.borderWidth = '2px';
      initialThumbs[0].classList.add('border-lm-primary');
    }

    // Variant gallery switching (only active when .variant-gallery-data is present)
    const dataScript = document.querySelector('.variant-gallery-data');
    if (!dataScript) return;

    const variantImages = JSON.parse(dataScript.textContent);
    const altText = carousel.querySelector('img') ? carousel.querySelector('img').alt : '';

    // Show the initially selected variant's images on page load
    const selectedBtn = document.querySelector('.collection-variant-button.bg-lm-inverse-primary-click');
    if (selectedBtn) {
      const initialVariantId = selectedBtn.getAttribute('data-variant-id');
      const initialUrls = variantImages[initialVariantId];
      if (initialUrls && initialUrls.length > 0) {
        buildCarousel(initialUrls, altText);
      }
    }

    // Swap images when a variant button is clicked
    document.querySelectorAll('.collection-variant-button').forEach((btn) => {
      btn.addEventListener('click', function () {
        const variantId = this.getAttribute('data-variant-id');
        const urls = variantImages[variantId];
        if (urls && urls.length > 0) {
          buildCarousel(urls, altText);
        }
      });
    });
  });
});
