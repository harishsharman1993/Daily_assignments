
// Task-1
// Array Initialization
// Create an arr of 10 random integers btwn 1 and 100.

let arr1=[45,34,87,54,12,32,65,80,21,9]

console.log(arr1)

// Task-2
// Array Manipulation:

// push operation

arr1.push(78)
console.log(arr1)

//pop operation
arr1.pop()
console.log(arr1)

// unshift operation

arr1.unshift(56)
console.log(arr1)

//shift operation

arr1.shift()
console.log(arr1)

// Task-3
// Array Sorting:
// Ascending order
arr1.sort((a,b)=>a-b)
console.log(arr1)

//descending order
arr1.sort((a,b)=>b-a)
console.log(arr1)


// Task-4
// Array Iteration:

arr1.forEach(item=> console.log(item))

// Task-5
// Array Transformation:

arr2=[45,78,89,34]

let arr3=arr2.map(sqr=>sqr**2)
console.log(arr3)

// Task-6
// Array Filtering:

arr4=[3,6,8,9,2]

let arr5=arr4.filter(fill=>fill%2===0)
console.log(arr5)

// Task-7
// Array Reduction:

arr6=arr4.reduce((acc,curr)=>acc+curr)
console.log(arr6)