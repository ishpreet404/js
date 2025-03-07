// //async function always returns a promise 
// async function getdata() {
//     return "will wrap this value inside a promise";
// }
// const data = getdata();
// console.log(data);
// data.then(res => console.log(res));

// //
const p = new Promise((resolve,reject)=>{
    resolve("promise resolved value");
})
async function handlepromise() {
    const val = await p;
    console.log(val);
}
handlepromise();