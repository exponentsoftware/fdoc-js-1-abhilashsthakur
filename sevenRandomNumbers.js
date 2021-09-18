// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. 
// All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]
// ```

function sevenRandomNumbers(){
    var a=[]
    lower=0
    upper=9;
  

        for(let i=0;i<=14;i++){
        
            if(a.length<=7){
            var num=Math.floor(Math.random() * (upper-lower+1))
                a.push(num)
            }
        
        }
        
        return uniqueArray=a.filter((element,index,arr)=>arr.indexOf(element)===index)
        
        
}
randomArray()