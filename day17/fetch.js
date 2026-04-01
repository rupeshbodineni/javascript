fetch("https://dummyjson.com/carts")
  .then(response => response.json())
  .then(data => {

    let carts = data.carts;

    let highValueCarts = carts.filter(cart => cart.total > 500);

    let result = highValueCarts.map(cart => ({
      cartId: cart.id,
      userId: cart.userId,
      totalAmount: cart.total,
      totalProducts: cart.totalProducts
    }));

    console.log(result);
  })
  .catch(error => console.log(error));