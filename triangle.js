// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

function triangle(num){

    for(var i=0;i<num;i++)
    var l=""
        {
            for(let j=1;j<=i;j++){
                    
                l+="#"
                
                console.log(l)
            }
            
            console.log("\n")
        }
    
}

triangle(7)