let sum=(a,b)=>{
    return a+b;
}
let multiply=(a,b)=>{
    return a*b;
}
let calculate=(a,b,callback)=>{
    return callback(a,b);
}

let r1= calculate(5,3,sum);
console.log("Sum: "+r1);
let r2= calculate(5,3,multiply);
console.log("Product: "+r2);
