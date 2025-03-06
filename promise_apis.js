//promise.all() if one promise fails then result will give error
// promise.allsetteled() if one of the promises get rejected it will wait for all promises to settle it will give all the results 
// promise.race() the first promise resolved will be returned if the first promise fails error will be thrown
//promise,any() whenever the first promise gets reolved (success) it returns the promise if all failes then it will return a aggregated error (array of errors)
const p1 =new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 success"),3000);
})
const p2 =new Promise((resolve,reject)=>{
    // setTimeout(()=> resolve("p1 success"),1000);
    setTimeout(()=> reject("p1 fail"),1000);
})
const p3 =new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 success"),4000);
})

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err) => console.error(err));
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err) => console.error(err));
