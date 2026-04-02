let gotomovie=(success,failure)=>{
let acc_balance=1000;
if (acc_balance>=5000){
    success("Enjoy the movie!");
}else{
    failure("Insufficient balance. Cannot go to the movie.");
}
}
new promise()
gotomovie((resp=>console.log(resp)),(err)=>console.log(err));