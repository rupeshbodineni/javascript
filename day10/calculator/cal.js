function insert(value){
    document.getElementById("result").value += value;
}
function clearResult(){
    document.getElementById("result").value = "";
}
function calculate(){
    let exp = document.getElementById("result").value;
    let result = eval(exp);
    document.getElementById("result").value = result;
}