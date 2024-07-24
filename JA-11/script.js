console.log("working")

//Task1 :1. localStorage: Setting and Getting Data
let key="name"

let  value="hari"
const storage=localStorage.setItem(key,value)
console.log(storage)

const storage1=localStorage.getItem(key)
console.log(storage1)

//Task 2 sessionStorage: Setting and Getting Data

const key1="age"

const   value1="16"
const storage2=sessionStorage.setItem(key1,value1)
console.log(storage2)

const storage3=sessionStorage.getItem(key1)
console.log(storage3)

//Task3  Removing Items from Storage

let localStorageName="userName"

let localStoragevalue="John"

const storage4= localStorage.setItem(localStorageName,localStoragevalue)

console.log(storage4)

const storage5= localStorage.removeItem(localStorageName,localStoragevalue)

console.log(storage5)

let sessionStorageName="vehicle"

let sessionStoragevalue="bicycle"

const storage6= sessionStorage.setItem(sessionStorageName,sessionStoragevalue)

console.log(storage6)

const storage7= sessionStorage.removeItem(sessionStorageName,sessionStoragevalue)

console.log(storage7)

// 4. JSON Storage

const employeeRecord={
    id:1,
    name:"johny",
    email:"johny123@example.com",
    sal:400000,


}

const storage8= sessionStorage.setItem("emp1",JSON.stringify(employeeRecord))


const storage9=JSON.parse(sessionStorage.getItem("emp1"))
console.log(storage9)

const storage10= localStorage.setItem("emp1",JSON.stringify(employeeRecord))


const storage11=JSON.parse(sessionStorage.getItem("emp1"))
console.log(storage11)

//Task5 5. Clearing Storage



let  storage12=localStorage.setItem("name","walker")

localStorage.clear()

let storage13= localStorage.length===0

console.log(storage13)

const storage14=sessionStorage.setItem("hobby","musician")
sessionStorage.clear()

const storage15= sessionStorage.length===0

console.log(storage15)

//What did you learn about using localStorage and sessionStorage in JavaScript?
//Ans: local storage  will store the user related data fragment info on web browser .Until user manually delete that info
//it will not be deleted
//session storage will store the user related activity info on web browser.this info will remain lasting until
//the tab and window of the browser is closed.

//How does storing data in localStorage differ from sessionStorage?
//Ans:1.data stored in loacl storsgae is broad scoped whereas in session storage is session scoped
//2.data of the local storage can be manipulated and stored for a long time  wheras session storage has manipulated and stored for a particular period and session on web browser

// 3.What are the use cases for localStorage and sessionStorage?
//Ans:local storage and session storage is used for
//1. user persistence info like theme display settings,login info
//2.it supports offline applications for immediate usage
//3.it supports shopping cart websites by faciltating web API data fetching
//4.It is useed for page refresh handling and providing session tokens for security.
//5.It is used to reduce serverload by storing user relavant data on web browser.






