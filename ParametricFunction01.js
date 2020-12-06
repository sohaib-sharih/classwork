// JavaScript source code

var a;
var b;

function addition(a, b) {
    add = a + b;
    console.log(add)
}
addition(5,6)

function subtraction(a, b) {
    sub = a - b;
    console.log(sub)
}
subtraction(10, 7.5)

function multiplication(a, b) {
    multiply = a * b;
    console.log(multiply)
}
multiplication(17, 18)

function division(a, b) {
    divide = a / b;
    console.log(divide)
}
division(500, 33)

function remainder(a, b) {
    mod = a % b
    console.log(mod)
}

remainder(700, 200)

function condition1(a, b) {
    if (a >= b) {
        console.log("Excellent")
    }
    else if (a <= 5) {
                console.log("Satisfactory")
            }
        else {
                console.log("Poor")
            }
        
        }
condition1(35, 20)

//var readline = require("readline");
//var rl = readline.CreateInterface(process.stdin, process.stdout);

//function call() {
//    if () {
//        console.log("What function do you want to process?", => option()
//        console.log("Enter Value A", + option();
//        )
//    }

// below is practice 1 for parametric functions

function beat(x, y) {
    if (x == y) {
        run = x / y;
        console.log("Scientist")
        console.log(run)
    } else if (x != y) {
        run2 = x * y;
        console.log("Astronomer")
        console.log(run2)
    } else if (x >= y) {
        run3 = x % y;
        console.log("Batman")
        console.log(run3)
    } else {
        console.log("error")
    }
}
    beat(550, 225);







    
