for(let i=1;i<=10;i++){ // i was declared a let because let has a block scope and will store a different copy of i for each lexical scope of set timeout    
    setTimeout((function (){
        console.log(i);
    }),i*1000)
}