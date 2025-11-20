let name =("IVAN");
console.log(name);

let firstName= "Hirwa" , secondName="Christian" , thirdName="Yvan";
console.log(`My first name is ${firstName} and my second name is ${secondName} while my last name is ${thirdName}`);

let IVAN={
  name:"Hirwa",
  age:30,
  location:{ 
    Home:"Musanze",
    sector:"Ruhengeli",
    Province:"Northern"

  }


}
console.log(IVAN);
IVAN.age=20;
console.log(IVAN)
console.log(IVAN.age);

let Christian=['red' , 'green', 'black' , 'yellow'];
console.log(Christian);
Christian.push('orange');
console.log(Christian);
Christian.unshift("blue");
console.log(Christian);
Christian.splice(1,2,"tomato","dodger");
console.log(Christian);
let a=Christian.slice(1,3);
console.log(a);
console.log(Christian);

function multiply(a,b){
  
  return a*b;

}
let result= multiply(9,10);
console.log( `the product of the two numbers is ${result}`);

console.log("Hirwa " +"" + " IVAN")

let h=10;
h=30;
console.log(h);


function add(d,c){
 return d+c;

}

let result = add (4,5);
console.log(`the answer is ${result}`);
