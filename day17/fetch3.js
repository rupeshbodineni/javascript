async function getUserCartProducts() {
  try {
    
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();

    
    const { carts } = data;

 
    const userCart = carts.find(cart => cart.userId === 33);


    const products = userCart?.products || [];

    const result = products.map(({ title, price, quantity, total }) => {
      return `
      Product Title : ${title}
      Price         : ${price}
      Quantity      : ${quantity}
      Total Price   : ${total}
      `;
    });

    console.log(result.join("\n"));

  } catch (error) {
    console.error("Error:", error);
  }
}

getUserCartProducts();