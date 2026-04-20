let smallest=(arr)=>{
    let smallest=arr[0]
    for(let num of arr){
        if(num<smallest){
            smallest=num
        }
    }
    return smallest
}
console.log(smallest([5,2,9,10,7]))