/*const studentList =[
    {name:"Kalisa" , age:12 , marks:5 , isActive:false},
    {name:"Ashrafu" , age: 12, marks:5,isActive:true},
    {name:"Nelson" , age:12 , marks: 20, isActive:false},
    {name:"David" ,age:12 , marks: 14, isActive:true},

]

const student= studentList.map((student) => {
    return ({name:student.name, age:student.age})
})
console.log(student);

//filter

const studentWithAge20= studentList.filter((stud) => stud.age ===12);

console.log(studentWithAge20);

// find 

const findFunction = studentList.find((student) => student.marks === 5 );
console.log(findFunction);

//reduce
 

const sumOfMarks =studentList.reduce((acc,curr) => {
    return  acc+curr.marks
},0)/studentList.length

console.log(sumOfMarks)

//some

const activeStudents=studentList.some((student) =>{
    return student.isActive === true
})
console.log(activeStudents)
*/
 const array =[1,2,3,4,5];

 const arrayMap=array.map((num) => {
    return num*2
 })
 console.log(arrayMap);

 const color=[
    {color:"blue" , length:4 , duration: 5 , isNaN:false},
    {color:"black" , length:5, duration: 5 , isNaN:false},
    {color:"white" , length: 3, duration: 4 , isNana:false},
 ]


 const colorMap= color.map((pro) =>{
   return ({color:pro.color , length:pro.length})

 })

 console.log(colorMap)

 const colorFind=color.find((ivan) => {
   return  ivan.duration === 5})
 console.log(colorFind)

 const colorFilter = color.filter((ivan) => ivan.duration === 5)
 console.log(colorFilter)


 const colorReduce = color.reduce((acc,curr) =>{
    return acc + curr.duration
 },0)/color.length

 console.log(colorReduce)

 const colorSome =color.some((ivan) => ivan.isNaN=== false)
 console.log(colorSome)

 //callback hell 

 /*doTask1(function(result1){
    doTask2(function(result2){
        doTask3(function(result3){
            console.log("Final result:" , result3)
        })
    })
 })
    */

 function task1Done(result1){
    task2(result1,task2Done)
 }

 function task2Done(result2){
    task3(result2,task3Done)
 }

 function task3Done(result3){
    console.log("Final result: ", result3)
 }

 task1Done(task1Done)


 /*async function loadData() {
   try{
      const user=
   }
 }
   */