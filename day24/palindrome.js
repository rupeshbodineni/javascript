function palindrome(str){
    let output=""
    for(let i=str.length-1;i>=0;i--){
        output = output + str[i]        // Fix 1: removed 'let'
    }
    if (str===output){
        console.log("palindrome")       // Fix 2: added quotes
    }else{
        console.log("not a palindrome") // Fix 2: added quotes
    }
}
palindrome("madam")  // "palindrome"
palindrome("hello")  // "not a palindrome"