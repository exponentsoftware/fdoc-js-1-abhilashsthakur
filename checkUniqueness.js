// 2.d. Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```
const checkUniqueness=(arrOne)=>{
    
    // element : Array Element index : element Index arr : given Array

    var newArray=arrOne.filter((element,index,arr)=>arr.indexOf(element)===index)
    
    const l1=arrOne.length
    
    const l2=newArray.length
    
    if(l1===l2){
    
        return true
    
    }
    else{
    
        return false
    
    }
}

console.log(checkUniqueness([1, 4, 6, 2, 1])) //Output : false
console.log(checkUniqueness([1, 4, 6, 2, 3])) //Output : True