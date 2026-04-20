function outer() {

    function inner1() {
        console.log("This is Inner Function 1");
    }

    function inner2() {
        console.log("This is Inner Function 2");
    }

    inner2();
}

outer();