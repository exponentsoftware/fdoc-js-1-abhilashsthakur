// 1.c. After cleaning the text in the sentence from question number
 // b you will get the following text. Count the number of words in this text.
  // Don't include words with only one letter.

// ```js
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function varietyOfWords(){
    let s=sentence.replace(/[^a-zA-Z]/g," ")

    let count=0;
    
    let u=new Set(s.split(" "))
    
    console.log(u)
    
    u.forEach(el=>{count++})
    
    console.log(count)
}
varietyOfWords(sentence)