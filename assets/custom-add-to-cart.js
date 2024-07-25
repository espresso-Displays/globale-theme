document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('custom-add-to-cart-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      let formDataJSON = {
        items: [
          {
            id: formData.get('id'),
            quantity: formData.get('quantity'),
          },
        ],
      };

      fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        body: JSON.stringify(formDataJSON),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Success:', data);
          // Optionally, update the cart count or display a modal
          setTimeout(function () {
            fetch(window.Shopify.routes.root + 'cart.js')
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
                document.dispatchEvent(new CustomEvent('cart:build', { bubbles: true }));
                document.dispatchEvent(
                  new CustomEvent('cart:refresh', {
                    bubbles: true,
                    detail: data.items,
                  })
                );
              });
          }, 400);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  }
});
