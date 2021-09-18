// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(num){

    for(let i=0;i<=num;i++)
        {
            for(let j=1;j<=i;j++){

                console.log("#")
            }
            console.log("\n")
        }
    
}

triangle(7)