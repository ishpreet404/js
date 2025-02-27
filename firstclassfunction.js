// a();
// b();//error
//funtion statement or function declaration 
function a(){
    console.log("fn called")
}
//function expression 
var b = function (param1){//paramter //hoisting is not done until interpretor reaches the line 
    console.log("b called")
}
a();
b(1); //arg
//anonymous function
// function (){
// }
// named function expression
var c = function xyz (){
    console.log("c called");
}
c();
// xyz(); //error

//firstclassfunction or first class citizens
const h = function (param1){
    return function zzz(){

    }
}
console.log(h());