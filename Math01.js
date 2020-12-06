// JavaScript source code
//var x;
//var y;
//Math.pow(x, y);
//console.log(Math.pow(4, 5));


//for (b = 0; b <= 5; b++) {
//    //function bet(a, c) {
//    //    var b = a * c
//        //var a;
//        //var c;
//        console.log(b);
//        console.log("pakistan");
//    }

// maths function

var rounding = (Math.round(1.75));
console.log(rounding);

var abvalue = (Math.abs(-125));
console.log(abvalue);

var power = (Math.pow(10, 5));
console.log(power);

var sroot = (Math.sqrt(25));
console.log(sroot);

var cbroot = (Math.cbrt(33));
console.log(cbroot);

var maxone = (Math.max(22, 30, 45, 65, 88));
console.log(maxone);

var minone = (Math.min(44, 22, 556, 75, 4.5, 50));
console.log(minone);

var readline = require("readline");
var rn = readline.createInterface(process.stdin, process.stdout);


var a = (5000);
var operation1;
function add(a, b) {
    operation1 = a - b
}

rn.question("please select operation\n 1. Cash Withdrawal \n 2. Bank balance \n 3. Money transfer \n 4. Online transaction", function (input) {
    console.log(input)
    
    if (input == 1) {
        rn.question("Please enter the value for withdrawal\n", function (input1) {
                 
            add(a, input1);
            console.log("Your remaining balance is\n" + operation1)
            rn.close()
        })
    } else if (input == 2) {
        console.log("Your bank balance is\n" + a)
        rn.close()
    } else if (input == 3) {
        rn.question("Please enter the amount you want to transfer\n", function (input1) {
            add(a, input1);
            console.log("Your amount has been transfered. Remaining balance is\n" + operation1)
            rn.close()
        })
    } else if (input == 4) {
        rn.question("Please choose the bank you want to transfer funds to\n 1. MCB 2. Standard Chartered 3. HBL 4. ABL", function (input1) {
            //console.log("hello")
           rn.question("Please enter the amount you want to transfer\n", function (input2) {
               add(a, input2);
               console.log("Your remaining balance is \n" + operation1)
               rn.close()
           })
        })
    } else {
        console.log("error")
        rn.close()
    }
  
    //
    //})
   
})   
