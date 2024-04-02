let str = "Hello today is very good day everyone should enjoy this day by going out"

function replaceWords(word){
    return word.split(" ").join("-")
}

console.log(replaceWords(str))