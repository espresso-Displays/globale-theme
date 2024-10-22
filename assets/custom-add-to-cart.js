document.addEventListener('DOMContentLoaded', function () {
  function openCartDrawer() {
    document.querySelector('cart-drawer').classList.add('active');
  }

  async function updateCartDrawer() {
    const res = await fetch('/?section_id=cart-drawer');
    const text = await res.text();

    const html = document.createElement('div');
    html.innerHTML = text;

    const newBox = html.querySelector('cart-drawer').innerHTML;

    document.querySelector('cart-drawer').innerHTML = newBox;
  }

  document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector(`input[type='submit']`);

      try {
        const formData = new FormData(form);

        let id = formData.get('id');
        let title = formData.get('productTitle');
        let currency = formData.get('currency');
        let price = formData.get('price');

        let formDataJSON = {
          items: [
            {
              id: id,
              quantity: '1',
            },
          ],
        };

        form.setAttribute('disabled', true);
        submitBtn.setAttribute('disabled', true);
        submitBtn.value = 'Adding to cart...';

        // add loading state to submit button

        // submit form with ajax
        const result = await fetch('/cart/add', {
          method: 'post',
          body: JSON.stringify(formDataJSON),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        fbq('track', 'AddToCart', {
          content_ids: [id],
          content_name: title,
          currency: currency,
          value: price,
        });

        // update cart drawer
        await updateCartDrawer();
        document.querySelector('cart-drawer').classList.remove('is-empty');

        // open cart drawer
        openCartDrawer();
      } catch (error) {
        console.log(error);
      }
      form.removeAttribute('disabled');
      submitBtn.removeAttribute('disabled');
      submitBtn.value = 'Add to cart';
    });
  });

  document.querySelectorAll('a[href="/cart"]').forEach((a) => {
    a.addEventListener('click', async (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });
});
