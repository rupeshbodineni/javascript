async function getHighValueCarts() {
  try {
    // Fetch data from API
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();

    // Extract carts array
    const { carts } = data;

    // Filter carts where total > 500
    const highValueCarts = carts.filter(cart => cart.total > 500);

    // Map required fields using destructuring
    const result = highValueCarts.map(({ id, userId, total, totalProducts }) => ({
      cartId: id,
      userId: userId,
      totalAmount: total,
      totalProducts: totalProducts
    }));

    // Display in console
    console.log(result);

  } catch (error) {
    console.error("Error fetching carts:", error);
  }
}

getHighValueCarts();