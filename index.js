const tutorials = [
    "what does the this keyword mean?",
    "Implementing Blockchain web API",
    "what is the constructor OO pattern?",
    "The Test Driven Development Workflow",
    "what is NaN and how Can we Check for it",
    "what is the difference between stopPropagation and preventDefault?",
    "Immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",

];
const titleCased = () => {
return tutorials.map((sent)=> {
    const words=sent.split(" ");
    console.log(words)
    const titlecaseWord= words.map((word)=>{
        console.log(word)
        return word.charAt(0).toUpperCase()+ word.slice(1)

    })
    const result=titlecaseWord.join(" ")

    return result
})

}