//Functions
// function sum(num1, num2){
// return num1 + num2
// }
// console.log(sum(4,6))
//curly bracket defines how the function will operate.

// function multiply(int1, int2){
// return int1 * int2    
// }
// process.stdout.write("Where are you " + multiply(5,5));

//concoordinate means when you want to print 2 strings

// function divide(valueX,valuey){
//     return console.log(valueX/valuey);
// }

// divide(10, 5);

// var dress = "Shirt";
// function dressCode(){
//     dress = "Ladies dress";
//     return dress;

// }
// console.log(dressCode());
// console.log(dress);

//override

//var solarSystem = "sun";

//function smallPlanets(){
  //  solarSystem = "Mars";
    //return solarSystem;
//}
//console.log(solarSystem());
//console.log(smallPlanets());

var myArray = [30,50,70];

var update = myArray[1] = 100;
console.log(myArray)

//Push

var xArray = [[10,5,20],["HI","java"]];
var update = xArray.push(["C++","C+"])
console.log(xArray)

//if you want to remove the last array, use var update = xArray.pop()
// new assignment to add middle, top of the array remove and add, splice

var biArray = [[100, 200, 300],["reptile", "crustaceans", "coral"]];
biArray.splice(1, 0, "sea shells");

console.log(biArray);

//if you have 1 square box inside an array then that indicates 0 index, 
//but if you have multiple square boxes that it indicates indexes as 0, 1 inside arrays in each bracket box.
        
var xArray = [100, 150, 200, 250];
console.log(xArray.unshift(40, 50));

console.log(xArray);

var cArray = ["decorative", "pottery","table runners","kitchenware"];
cArray.splice(1,3,"blockprint");
console.log(cArray);

var dArray = ["A", "B","C","D"];
dArray.splice(3,0,"E");
console.log(dArray);
