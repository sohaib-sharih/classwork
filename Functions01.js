//Functions
function sum(num1, num2){
return num1 + num2
}
console.log(sum(4,6))
//curly bracket defines how the function will operate.

function multiply(int1, int2){
return int1 * int2    
}
process.stdout.write("Where are you " + multiply(5,5));

//concoordinate means when you want to print 2 strings

function divide(valueX,valuey){
    return console.log(valueX/valuey);
}

divide(10, 5);

var dress = "Shirt";
function dressCode(){
   // dress = "Ladies dress";
    return dress;

}
console.log(dressCode());
console.log(dress);

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
// new assignment to add middle, top of the array remove and add