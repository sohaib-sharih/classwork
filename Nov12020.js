// for(s=1; s <= 5; s++){
//     console.log("*".repeat(s));
// }

// for(q=1, q <= 10; q++){
//     for(r=3, r <= 20; r++){
//         console.log("*".repeat(q)(r));
//     }
    
// }

let y = 10;
let x = 10;

let symbol = "";
for(a=1; a < y; a++){
    for(b=1; b < x; b++){
        if(a+b >= y){
            symbol = symbol.concat("*");
        }
        else{
            symbol = symbol.concat("")
        }
    }
    symbol = symbol.concat("\n")
}
console.log(symbol);

let symbol2 = "";
for(a=1; a < y; a++){
    for(b=1; b < x; b++){
        if(a <= b){
            symbol2 = symbol2.concat("*");
        }
        else{
            symbol2 = symbol2.concat("")
        }
    }
    symbol2 = symbol2.concat("\n")
}
console.log(symbol2);

let symbol3 = "";
for(a=1; a < y; a++){
    for(b=1; b < x; b++){
        if(a >= b){
            symbol3 = symbol3.concat("*");
        }
        else{
            symbol3 = symbol3.concat("")
        }
    }
    symbol3 = symbol3.concat("\n")
}
console.log(symbol3);

let symbol4 = "";
for(a=1; a < y; a++){
    for(b=1; b < x; b++){
        if(b >= a){
            symbol4 = symbol4.concat("*");
        }
        else{
            symbol4 = symbol4.concat("")
        }
    }
    symbol4 = symbol4.concat("\n")
}
console.log(symbol4);

// let symbol5 = "";
// for(a=1; a < y; a++){
//     for(b=1; b < x; b++){
//         if(a <= y / 2 && b >= (y / 2) - (a - 1) && b <= (y / 2 )  + (a - 1))
// {
// symbol5 = symbol5.concat("*");


//  }else if (a >= y / 2
//     && b > ((y / 2) - a)*(-1)
//     && b < (y - ((y / 2)- 1) * (-1))){
//         symbol5 = symbol5.concat("*");
//     }
//     else {
//         symbol5 = symbol5.concat("");

//     }

//  }
//  symbol5 = symbol5.concat("\n");
// }
// console.log(symbol5);

// function diamond(size)
// {
//     for(var d = 1; d <= size; d++){
//         for(var e = size - 1; e >= d; e--)
//         Process.stdout.write(" ");
//     }
//     for(var f = 1; f <= d; f++){
//         Process.stdout.write("* ")
//     }
//     console.log();
// }

// if(d == size + 1){
//    for(var d = 1; d <= size - 1; d++){
//        for(var e = 1; e <= d; e++)
// {
//     process.stdout.write(" ");
    
// }
// for(f = d; f <= size - 1; f++){
//     process.stdout.write("* ");
// }
// console.log();
       
//    } 
// }

// diamond(9);