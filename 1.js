// var is the oldest and not common

let name ="Ivan";
console.log(name);
console.log(name.length);

/*//variable names cannot be a reserved keyword:if else, var, 
//should be meaningful 
//can not start with a number(1name)
//can not contain space or hyphen 
 they are written in camel case
 they are case sensitive 

 to declare multiple values*/
  let firstName = "Hirwa" , lastName="Ivan";
  console.log(`my first name is ${firstName} and my lastname is ${lastName}`);
// modern way of declaration of variable
/*let secondName ="Hirwa";
let thirdName ="Ivan";*/

const nameHirwa = 0.3;
//nameHirwa=4;  variables declared using constant can not be reassigned
console.log(nameHirwa);


/*Primitive data types ae those types that are not objects and may contain only a single value
 they include .string .Number  . Boolean . Undefined . null */

 let namee ="IVAN";// string literal
 let age =30;// Number literal
 let isAdmin = false;//Boolean literal
 let fistName = "undefined";
 let lastNamee= null;// used when u wamt to clear a value of a variable since it can be changed again from time to time.

    //Java scripts is a dynamic language meanng teh type of variable can be changed in the future
    //In java scripts there are no floating point and integers all of them are same  numbers 
    
   /* //Reference types include ,objects ,array and functions 
   objects are used when dealing with multiple values of the same type*/

   let IVAN = {
    name :"Hirwa",
    age: 30
   };
    console.log(IVAN)
   IVAN.age= 20;// use of dot notation to change the value of an object 
   // use of bracket notation
    IVAN['name'] ='Christian'
console.log(IVAN);//when calling object name we don't add strings
//arrays

let color=['red','green', 'yellow','black','blue']
console.log(color[3]);

color.push("white");//to increase the size of array at the end
console.log(color);
color.unshift("Brown");// to imcrease the size of the array at the beginning 
console.log(color);

color.pop()// to remove the last thing from the array
color.shift()// to remove the first element of an array

function pickname(name){
 console.log('Hello ' + name);// this is a function
}

pickname("IVAN");//this is function calling
//parameter differs from argument because the parameter is what we have at teh fucntion at the time of declaration while
//arguement is the actual value of supply to the parameter

function add(a,b){
return a+b;

}
let result= add(8,2);
console.log(result);
console.log(color.splice(1,3,'black','yellow','green'));
console.log(color);
let a=color.slice(1,4);
console.log(a);


function paloma(age){
switch(age){
case 'age is 17':
  console.log("you are a kid");

break;
case 'age is 18':
  console.log('you are growing');
  break;

  case 'age is 70':
    console.log('You are too old');
    break;
    default:
      console.log('you are a baby ');
}
}

paloma('age is ');

  
let Agape="IVAN"
console.log(Agape.length);
console.log(Agape.charAt(1));

const balance = (eth) =>{
  
}