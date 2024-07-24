// console.log('working')

// Task1- creating an  car object

let car={
    make:"toyota",
    mode1:"camry",
    year:2020,
    owner:{
        FirstName:'jane',
        LastName:"smith",
        age:28,
        email:"jane.smith@example.com"
    }
}
//object is created


//Task2:Accessing a  car object

console.log(car.make)
console.log(car.mode1)
console.log(car['year'])
console.log(car.owner.FirstName)
console.log(car.owner['LastName'])
console.log(car.owner.age)
console.log(car.owner['email'])


//Task3 :modifying car object Properties

// changing the year property of car object
// car['year']=2021
car.year=2021
console.log(car)


//changing the email property of car object
car.owner.email="jane2021.smith@example.com"
console.log(car)

// Task4: Adding a new  insurance property  to an car object

car.insurance={
    provider:'geico',
    policyNumber:'xy21234567',
    expiryDate:'2024-12-31'
}
console.log(car)
//insurance propert is added

//Task5: Remove the properties of an  car object

//using delete keyword the email property is deleted
delete car.owner.email
console.log(car)


// Task6:Adding New Nested objects

//adding serviceHistory  property to the car object

car.serviceHistory=[{
date:"2021-06-01",
service:"oil change",
cost:50,
},
{
date:"2021-01-15",
service:"Tire Rotation",
cost:100,
}]

console.log(car)

// Task7:using for in loop to print properties of an car object

for(let key in car){

    console.log(`${key}:${car[key]}`)
}

//Bonus Task 1:using object.keys()

console.log(Object.keys(car))

//Bonus Task 2:using object,values()
console.log(Object.values(car))
console.log(Object.values(car.insurance))
console.log(Object.values(car.serviceHistory))

//thank you -------
