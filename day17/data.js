let carts = [
  { product: "Laptop", price: 75000 },
  { product: "Mouse", price: 500 },
  { product: "Mobile", price: 25000 },
  { product: "Keyboard", price: 1500 },
  { product: "TV", price: 55000 }
];

let highValueCarts = carts.filter(cart => cart.price > 20000);
let result = highValueCarts.map(cart => cart.product);

console.log(result);