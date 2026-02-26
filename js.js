/*function add(a,b){
    return a+b
}

let result=add(8,2)
console.log(result)


greet("IVAN");
/function greet(name){
    console.log("Hello " + name)
}

let IVAN = function sayHI(name){
    console.log("Hello "+ name)
} 
console.log(IVAN("Hirwa"));

const meet = (name) => {
    return `Hello ${name}`
}
console.log(meet("IVAN"))

*/
/*function greet(name,sayGoodbye){
    console.log("Hello " +name)
    sayGoodbye()

}
    function sayGoodbye(){
        console.log("Goodbye" )
    }

greet("Ivan",sayGoodbye)*/

/*console.log("start")

function IVAN(){}
setTimeout(() => {
    console.log("This runs after 2 seconds")
},2000)

console.log("End")*/

/*function processUser(name,callback){
    console.log("Hello " + name)
    callback(name)
}
processUser("Ivan", function(username){
    console.log(`Welcome , ${username}`)
})*/


/*function greet(name,callback){
    console.log("Hello " + name);
    callback();

}
function sayGoodbye(){
    console.log("Goodbye!")
}

greet("IVAN" ,sayGoodbye);

function processUser(name,callback){
    console.log("Hello " + name)
    callback(name)
}

processUser("Ivan" , function(username){
    console.log(`Welcome ${username}`)
});

function timer(){
    setTimeout(() =>{
    console.log("This message is in five seconds to come")
    },5000)
}

//timer();

function doTask(callback) {
    console.log("Task started");
     callback();
     console.log("Task finished");

}

function syncCallback(){

    for(let i= 0; i<100000; i++) {}
    console.log("Callback done")
}

doTask(syncCallback);
//console.log("Next line of code")

function greetAsync(name,callback){
    setTimeout(() => {
        console.log("Hello " + name);
        callback();

    },20000);
}

greetAsync("Ivan",sayGoodbye);

*/







function greet(name,callback){
    console.log("Hello " + name)
    callback(name)
}

greet("Ivan" , function(username){
    console.log(`Goodbye ${username}`)

})