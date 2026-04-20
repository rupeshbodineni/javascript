function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(10, 5, (x, y) => x + y)); // 15
console.log(calculator(10, 5, (x, y) => x - y)); // 5
console.log(calculator(10, 5, (x, y) => x * y)); // 50