const cart = ["shoes","pants","pajamas"];
const promise = createOrder(cart);
promise.then(function(orderid){
    
 console.log(orderid);}).catch(function (err){
    console.log(err.message);
 });
///  produce promise

function createOrder(cart){
    const pr =new Promise(function(resolve,reject){
        if(!validatecart(cart)){
            const err = new Error("cart is not valid")
            reject(err);
        }
        //creating  order
        const orderid = "1234";
        if(orderid){
            resolve(orderid);
        }
    })
    return pr;
}
function validatecart(cart){
    return false    ;
}