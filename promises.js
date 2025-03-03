//callback hell
const cart =["shoes","pants"];
api.createorder(cart,function(){
    api.createpayment()
});