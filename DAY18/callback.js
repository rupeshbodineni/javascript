let sum=(a,b)=>{
    return a+b
}
let multiply=(a,b)=>{
    return a*b
}
let calculate=(a,b,callback)=>{
    return callback(a,b)
}
let r1=calculate(10,20,sum)
let r2=calculate(10,20,multiply)
console.log(r1)
console.log(r2)