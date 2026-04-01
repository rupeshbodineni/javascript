async function getHighValueCarts() {
    try{
        const response = await fetch("https://dummyjson.com/carts");
        const data = await response.json();
        const{ carts } = data;

        const highValueCarts = carts.filter(cart => cart.total > 500);
        const result = highValueCarts.map(({ id, userId, total, totalProducts }) => ({
            cartId: id,
            userId: userId,
            totalAmount: total,
            totalProducts: totalProducts
        }));
        console.log(result);
    } catch (error) {
        console.error("Error fetching carts:", error);

    }
}