// async function always returns a promise 
// async function getdata() {
//     return "will wrap this value inside a promise";
// }
// const data = getdata();
// console.log(data);
// data.then(res => console.log(res));

//
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value");

    },2000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value");

    },4000)
})
async function handlepromise() {
    const val = await p;  //await can only be used inside a async function
    console.log("this line will be exectued after promise is resolved");
    console.log(val);
    const val2 = await p2;  //await can only be used inside a async function
    console.log("this ");
    console.log(val2);
}
handlepromise();//function exectution suspesnds when it sees await function until promise is reolved 

    