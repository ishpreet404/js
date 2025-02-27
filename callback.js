setTimeout(function (){
    console.log("timer");
    
},5000)
function x(y) {
    console.log("x");
    y();
}
x(function y(){ //y is  passed into x 
    console.log("y");
});
