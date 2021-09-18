// 2c. Reversing an array: Arrays have a reverse method which changes
//  the array by inverting the order in which its elements appear.
//  For this exercise, write a function, reverseArray.
//  The  reverseArray, takes an array as argument and produces
//  a new array that has the same
//  elements in the inverse order. Without reverse method.
// console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"]
// ```js

function reverseArray(arr){

    var reversed=[]

    console.log(arr)
    
    while(arr.length){
        
     reversed.push(arr.pop())
    }
    return reversed
}
console.log(reverseArray(["A", "B", "C"])) //[ 'A', 'B', 'C' ]
console.log("   ")
console.log(reverseArray([1,2,3,4,5])) //[ 5, 4, 3, 2, 1 ]
