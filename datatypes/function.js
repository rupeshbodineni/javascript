function login(){
    console.log("login success")
}
login();

function add(a,b){
    console.log(a+b)
}
add(10,20)
add(10,"rahul")
add(10,"20")
add(10)

function add(a,b,c=1){
    console.log(a+b+c)
}
add(10,20,30)
add(1,2,3)
add("rahul","gandhi")
add(10,20)
add(10)

function add(a,b){
    let c=1
    return a+b+c
}
let r1=add(10,20)
console.log(r1)
let r2=add(100,200)
console.log(r2)
console.log(add(1,2))


function calc(a,b){
    return a*b
    console.log(goodmorning)
}
let r=calc(10,20)
console.log(r1)