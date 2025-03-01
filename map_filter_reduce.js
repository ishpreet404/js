const arr =[4,12,31,321,32];
// function double(x){
//     return x*2 ;
// }
// const output=arr.map(double);
// console.log(output);

// //filter
const output =arr.filter((x) => x>40)
console.log(output);

//reduce
// const rout =arr.reduce((acc,curr)=> {
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(rout);
const rout =arr.reduce((acc,curr)=> {
    if(acc<curr){
        acc=curr;
    }
    return acc;
},0)
console.log(rout);



