
/*var symbol;
for (a = 1; a <= 5; a++) {
    symbol = symbol.concat("*");
} {
    if (a = b <= y)
} else {
    symbol = symbol.concat("")
}
}
symbol = symbol.concat("/n")
}
console.log(symbol);
*/

//var text = "*";
//var i = 10;
//for (i = 0; i <= 5; i++) {
//    text = ("The number is " + i);
//    i = 10;
//}
//console.log(i)

let y = 10;
let x = 10;
let symbol = "";
for (a = 1; a < y; a++) {
    for (b = 1; b < x; b++) {
        if (a + b >= y) {
            symbol = symbol.concat("*");
        }
        else {
            symbol = symbol.concat("")
        }
    }
    symbol = symbol.concat("\n")
}
console.log(symbol);
let symbol2 = "";
for (a = 1; a < y; a++) {
    for (b = 1; b < x; b++) {
        if (a <= b) {
            symbol2 = symbol2.concat("*");
        }
        else {
            symbol2 = symbol2.concat("")
        }
    }
    symbol2 = symbol2.concat("\n")
}
console.log(symbol2);
let symbol3 = "";
for (a = 1; a < y; a++) {
    for (b = 1; b < x; b++) {
        if (a >= b) {
            symbol3 = symbol3.concat("*");
        }
        else {
            symbol3 = symbol3.concat("")
        }
    }
    symbol3 = symbol3.concat("\n")
}
console.log(symbol3);
let symbol4 = "";
for (a = 1; a < y; a++) {
    for (b = 1; b < x; b++) {
        if (b >= a) {
            symbol4 = symbol4.concat("*");
        }
        else {
            symbol4 = symbol4.concat("")
        }
    }
    symbol4 = symbol4.concat("\n")
}
console.log(symbol4);

function google() {
    var smart = { Ball: "basketball", bat: "cricket bat", racket: "badminton" };
    if (smart.bat == "badminton b") {
        console.log(smart.bat)
        //return (smart.bat)
    }
    else if (smart.bat == "cricket bat") {
        console.log(smart.bat)
        // return (smart.bat)
    }
    else if (smart.racket == "badminton") {
        console.log(smart.racket)
        //return (smart.bat)
    } else {
        console.log("error");
    }
}
    google();
