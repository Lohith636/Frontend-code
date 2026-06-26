function outer() {
    var a = 3;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();