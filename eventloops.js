//all comebacks from promises and mutation observer comes into microtask queue
console.log("start");
setTimeout(function cb(){
    console.log("callback");
},0);
console.log("end");
let startdate = new Date().getTime();
let enddate = startdate;
while(enddate < startdate + 5000){
    enddate=new Date().getTime();
}
console.log("while ended");
//settimout ensures the minimum delay not the total dealy 
