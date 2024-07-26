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

      form.setAttribute('disabled', true);

      const formData = new FormData(form);

      let formDataJSON = {
        items: [
          {
            id: formData.get('id'),
            quantity: '1',
          },
        ],
      };

      // add loading state to submit button

      // submit form with ajax
      await fetch('/cart/add', {
        method: 'post',
        body: JSON.stringify(formDataJSON),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // update cart drawer
      await updateCartDrawer();
      document.querySelector('cart-drawer').classList.remove('is-empty');

      form.setAttribute('disabled', false);

      // open cart drawer
      openCartDrawer();
    });
  });

  document.querySelectorAll('a[href="/cart"]').forEach((a) => {
    a.addEventListener('click', async (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // const form = document.getElementById('custom-add-to-cart-form');

  // if (form) {
  //   form.addEventListener('submit', function (event) {
  //     event.preventDefault();

  //     const formData = new FormData(form);

  //     let formDataJSON = {
  //       items: [
  //         {
  //           id: formData.get('id'),
  //           quantity: formData.get('quantity'),
  //         },
  //       ],
  //     };

  //     fetch(window.Shopify.routes.root + 'cart/add.js', {
  //       method: 'POST',
  //       body: JSON.stringify(formDataJSON),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log('Success:', data);
  //         // Optionally, update the cart count or display a modal
  //         setTimeout(function () {
  //           fetch('/cart.js')
  //             .then((response) => {
  //               if (!response.ok) {
  //                 throw new Error('Network response was not ok');
  //               }
  //               return response.json();
  //             })
  //             .then((data) => {
  //               console.log(data);
  //               document.dispatchEvent(new CustomEvent('cart:build', { bubbles: true }));
  //               document.dispatchEvent(
  //                 new CustomEvent('cart:refresh', {
  //                   bubbles: true,
  //                   detail: data.items,
  //                 })
  //               );

  //               //let updatedQuantity = data.item_count || 0;

  //               // $('cart-drawer').load(window.location.href + ' #CartDrawer');
  //               // $('cart-drawer').removeClass('is-empty');
  //               // $('cart-drawer').addClass('active');
  //             });
  //         }, 400);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   });
  // }
});
