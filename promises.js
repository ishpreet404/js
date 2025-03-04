// //callback hell
const cart =["shoes","pants","chapal"];
// api.createorder(cart,function(){
//     api.createpayment()
// });
const promise = createorder(cart); // as soon as this gets the value .then function is called
promise.then(function(orderid){ //will be called once regardless of number of times api calls the create order function
    proceedtopayemnt(orderid);
});