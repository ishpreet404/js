// // //callback hell
// const cart =["shoes","pants","chapal"];
// api.createorder(cart,function(){
//     api.createpayment()
// // });
// const promise = createorder(cart); // as soon as this gets the value .then function is called
// promise.then(function(orderid){ //will be called once regardless of number of times api calls the create order function
//     proceedtopayemnt(orderid);
// });
const github_api="https://api.github.com/users/ishpreet404"
const user =fetch(github_api);
console.log(user);
//three states pending fullfilles rejected
api.createorder(cart).then(function(){
    return createpayment()})
.then(function (payemntinfo){
    return updatewallet(payemntinfo); //return to get data
});
//promise chaining
// to avoid callback hells