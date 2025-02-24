function x(){
    var a =7;
    function y (){
        console.log(a);
    }
    return y; // clousre function will be returned along side its lexical scope 
}
var z = x();
console.log(z);
z();