//readline is used to take input and is a module.
//var readline = require("readline");
//var takeinput = readline.createInterface(process.stdin, process.stdout);

//function Sum(value); {
//	console.log("The result of A + B" + value);
//}
//{
//	takeinput.question("Choose an option"), function(x) {
//		takeinput.question("Enter your pin code"), function(y) {
//			var sum = parseInt(x) + parseInt(y);
//			Sum(sum)
//		};
//		takeinput.close()
//	});

// question is a function

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
//var z;
//var t = ("Please select your option");
var barrey = ["Cash withdrawal", "Check Deposit", "Online Transfer", "Check bank balance"]
console.log(barrey[2])

//rl.question("Please enter your option: ", (barrey) => {
//    console.log("Please enter your amount" + barrey);
//    rl.close()
//});
var x;

function option(x) {
    if (x == barrey[0]) {
        console.log("Thank you for choosing " + barrey[0])
    } else if (x == barrey[1]) {
        console.log("Thank you for choosing " + barrey[1])
    } else if (x == barrey[2]) {
        console.log("Thank you for choosing " + barrey[2])
    }
}

option(2)
console.log(barrey[0]);
console.log(barrey[1]);
console.log(barrey[2]);

//function google(z, t, barrey) {
//    if (barrey == [1]) {
//        barrey 
//        console.log("Please enter your amount: " + )
//    } else if (z < 5000) {
//        console.log("Your bank account balance is insufficient: ");
//    }
//   
//}