var a =6;
// console.log(a);
let b =100;
{
    var a =4;
    let b =6;
    const ab=1;
    // console.log(a);//shadowing
    console.log(b);//let is stored in block scope 
}
// console.log(a);//modified the orignal value of global scope a 
console.log(b);// b is not changes as it was stored seperately from global scope in script scope