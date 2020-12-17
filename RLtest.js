//var readline = require('readline');
//var rl = readline.createInterface(
//    process.stdin, process.stdout);
//rl.question('What is your age? ', (age) => {
//    console.log('Your age is: ' + age);
//});

var t;
t = ["cars", "balls", "wheels", "gears"]
console.log(t)

var s;
s = {
    Engine: "5 Valves",
    Model: "4 wheel drive",
    Power: "2 Horse Power",
    Color: "White",
    YearMake: "2010"
}
console.log(s.Color)
//var a = 1;
//var b = 1;
//for (i = 1; i <= 10; i++) {
//    document.write(i + <br/>)}
//console.log(i)

//var i = 21;
//do {
//   (i + "<br/>");
//    i++;
//} while (i <= 30);  
//{
//    console.log(i);
//}

for (p = 0; p <= 10; p++) {
    console.log("expert", p)
}

var a = 33;
var b = 10;


result = (a = b);
console.log(result);



result = (a += b);
console.log(result);


result = (a -= b);
console.log(result);


result = (a *= b);
console.log(result);


result = (a /= b);
console.log(result);


result = (a %= b);
console.log(result);
var a = 33;
var b = 10;
var c = "Test";
var result = a + b;
console.log(result);
result = a - b;
console.log(result);


result = a / b;
console.log(result);


result = a % b;
console.log(result);



result = a + b + c;
console.log(result);


a = ++a;
result = ++a;
console.log(result);

b = --b;

result = --b;
console.log(result);

var x = 55;
var y = 20;
var ans;

ans = x % y
console.log(ans);