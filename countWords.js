// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

const paragraph = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
function countWords(paragraph,k1,k2){
    var Ckey1=0
    var Ckey2=0
    const key1=k1.toLowerCase()
    const key2=k2.toLowerCase()

const paraArray=paragraph.toLowerCase().replace(/[^0-9a-zA-Z ]/g,'').split(' ');

 paraArray.forEach(element=>{
    if(element==key1) return  Ckey1++
    if(element==key2)  return Ckey2++
})
return [{key1:Ckey1} ,{key2: Ckey2}]
}
console.log(countWords(paragraph,'love','you'))