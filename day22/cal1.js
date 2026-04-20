
let createCounter=function() {
    let count=0;
    return()=>{
        count++;
        console.log(count);
    }
}

let counter1=createCounter();
counter1();