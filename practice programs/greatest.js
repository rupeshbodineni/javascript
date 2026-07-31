let num=(a=10,b=20,c=5)
function greatest(num){
    if (a>b && a>c){
        console.log("a is greatest")
    }else if(b>c && b>a){
        console.log("b is greatest")
    }else{
        console.log("c is greatest")
    }
}
greatest(num)