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
    return
}