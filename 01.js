// // // getname();
// // console.log(getname);
// // console.log(x); //hoisting 
// // var x =7;
// // function getname(){
// //     console.log("Heloo")
// //     //functions gets printed without declaring it 
// // }
// var x = 1;
// a();//seperate execution context will beb created , mem will be allocated to all var in the function 
// b();
// console.log(x);
// function a(){
//     var x =99;
//     console.log(x);
// }
// function b(){
//     console.log("bhalu");
// }

// console.log(a);//a will be stored in temporal dead zone 
// let a =20; //let is stored in a different execution space than global,out of dead zone
// let b =1; // cannot access with window or this
// const a =1;
// a=2 // type error 
// const f ; // syntax error
// let a =122 ; // syntax error 
console.log(x); // refference error