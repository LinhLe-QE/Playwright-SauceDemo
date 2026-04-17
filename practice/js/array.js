const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g'];
const array4 = [23, 1, 99, 0, -1, 101, 100]

//concat: merge two arrays
console.log(array1.concat(array2)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(array1.concat(array2, array3)); //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

//every: check if all elements in the array pass a test => return boolean value
const isUnder100 = (currentAge) => currentAge < 100
console.log(array4.every(isUnder100)); //false

//filter: create a new array with all elements that pass a test
const isPositive = (number) => number > 0
console.log(array4.filter(isPositive));//[ 23,1, 99, 101, 100 ]

//find: return the first element that pass a test, if no value pass the test, return undefinded
console.log(array4.find(isPositive));//23

//join: join all elements of an array into a string
console.log(array1.join()); //a,b,c
console.log(array1.join('')); //abc

//map: create a new array with the result of calling a function for every element in the array
console.log(array4.map((number) => number * 4));//[ 92, 4, 396, 0, -4, 404, 400 ]

//push: add new elements to the end of an array => return the new length of the array
let example = array1.push(array2)
console.log(array1);//[ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
let example2 = array4.push(100);
console.log(array4);//[ 23, 1, 99, 0, -1, 101, 100, 100 ]

//reduce: reduce the array to a single value
//reduce((accumulator,currentValue), initialValue) -> On the 1st call, accumulator = initialValue, 
// currentValue = array[0] if initialValue is not provided
//curentValue = array[1] if initialValue is provided

const sum = array4.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum); //423
