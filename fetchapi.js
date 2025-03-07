async function handle() {
    const data = await fetch("https://api.github.com/users/ishpreet404");
    const jsonvalue = await data.json() ;   
    console.log(jsonvalue);
    
    //fetch is a promise which returns a response 
}
handle();
