// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (typeof name === "boolean" ) {
        return "Hello, World!"
    } else if (typeof name === "string" && isNaN(Number(name) && name.length > 0)) {
        return "Hello, " + name + "!"
    } else {
        return "Hello, World!"
    }
}

function isFive(num) {
    return Number(num) === 5
}

function isEven(num1) {
    return num1 % 2 === 0
}

function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        return true
    } else {
        return false
    }
}