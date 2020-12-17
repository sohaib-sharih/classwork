// JavaScript source code
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