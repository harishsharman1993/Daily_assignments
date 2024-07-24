//Task-1
//Copying Objects and Arrays

// 1.shallow copy
let orgobj={
   name:"johny",
   age:30,
   address:{
    city:"los angeles",
    country:'USA'
   }
   
}

// console.log(orgobj)

//creating a shallow copy using object.assign()

let newobj=Object.assign({},orgobj)
console.log(newobj)
console.log(orgobj)

//creating a shallow copy using spread operator

// let newobj1={...orgobj}
// let newobj2=orgobj
// console.log(newobj1)
// console.log(newobj2)

newobj.address.city="virginia"
newobj.address.country="UK"

console.log(orgobj)
console.log(newobj)

//2.Deep copy

const orgdata={
   name:"bigbasket",
   location:'dislukh nagar',
   productlist:{
    productName:"Sandwich",
    cost:"70rs"
   }


}

const newdata=JSON.parse(JSON.stringify(orgdata))
console.log(newdata)
console.log(orgdata)

newdata.productlist.productName="pasta"
newdata.productlist.cost="100rs"
console.log(newdata)
console.log(orgdata)

//Task-2 
// using spread operator
// 1.array merging or destructuring using spread operator
let arr1=[1,2,3,4]
 let arr2=["house","villa","car","company"]

let arr3=[...arr1,...arr2]
console.log(arr3)

//2.obj merging or destructuring using spread operator

let obj1={
    a:1,
    b:3.5
}

let obj2={
    c:"hello",
    d:true
}

let obj3={...obj1,...obj2}
console.log(obj3)


// Task 3- Rest operator

// Using Rest Operator
// 1. Rest in Functions

const sum=(...nums)=>{
return nums.reduce((acc,curr)=>acc+curr,0)

}

console.log(sum(2,4,5,7))
console.log(sum(3,6,7,-9))
console.log(sum(5,0.6,2.7,-9))

// 2. Rest in Array 

let movies=["kalki","indian2","lapata ladies","Dune","crime reel"]

let [hit,flop,...average]=movies

console.log(hit)
console.log(flop)
console.log(average)

// Reflection Questions
// 1. What did you learn about shallow and deep copying through this task?
//ans:Shallow copy: is the common shared memory location for both the obj and reference
// deep copy:is the different memory locations allocated for the obj and reference
//using JSON.parse and JSON.stringify

// 2. How do the spread and rest operators simplify working with arrays and objects in
// JavaScript?

//ans:spread operator is used to destructure and merge the both arrays and objects
// and spread operator can be passed as an arguement into function to get desired o/p 
// rest operator is used to specifically destructure a Array.and rest operator can be passed into function to get desired o/p

// 3. What are the main differences between shallow and deep copies?
// ans:
//shallow-common memory location,updates are recorded in both obj and reference
//deep copy-seperate memory location,updates are recorded in only reference var,array etc


// 4. In what scenarios would you prefer using the rest operator in functions?
// Ans:rest operator specifically used for passing multiple arguements and maintain function signatures. 
// It main purpose is to give collected obj input as parametr to function to iterate and perform multiple
// operations on it
