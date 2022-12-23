// основной ДЗ
const text = "функция переворота строки "
const text2 = "икортс аторовереп юицкнуФ"


var ali = function (text) {
    let sum = ''
    for(let i = text.length -1; i > -1 ; i--){
        sum += text[i];
    }
    return sum
}

console.log(ali(text));

console.log(ali(text2));
//доп ДЗ
function getAllNum(...args) {
    let result = 0
    for(let i = 0; i < args.length; i++){
        result += args[i]
    }
    let sum = result / args.length
return sum
}

console.log(getAllNum(123456789, 98765432, 852741963))