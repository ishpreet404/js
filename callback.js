// setTimeout(function (){
//     console.log("timer");
    
// },5000)
// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y(){ //y is  passed into x 
//     console.log("y");
// });
function attatch(){
let count =0;
document.getElementById("hello").addEventListener("click",function xyz(){
    console.log("button daba diya",++count,"baar");
});
}
attatch();

