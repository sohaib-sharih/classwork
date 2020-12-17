// JavaScript source code

/* Get, Has, Size, String Interpolation, Clear, Maps Assignment 22-11-2020 Project Lab class */

var starmap = new Map();

starmap.set("bar1", "Red");
starmap.set("bar2", "Blue");
starmap.set("bar3", "Pink");
starmap.set("bar4", "Purple");
starmap.set("bar2", "Purple");

console.log(starmap.size);

var drinkmap = new Map();
drinkmap.set("franchise", "kfc")
drinkmap.set("franchise1", "Mcdonald")
drinkmap.set("franchise2", "PizzaHutt")
drinkmap.set("franchise3", "K&N")

console.log(drinkmap.has("franchise2"));

var beat = new Map();
beat.set(100, "Superman");
beat.set(200, "Power Puff");
beat.set(300, "Ninja");
beat.set(400, "Brighto");
beat.set(500, "Bingo");

console.log(beat.has(450));
console.log(beat.get(500));
console.log(beat.get(100));
console.log(beat.size);
console.log("The cat character in the cartoon is:" + beat.get(200));
console.log(beat);
beat.clear();
console.log(beat.size);

var report = new Map();

var PhyRep = new Map();
PhyRep.set("Marks Obtained", 76)
PhyRep.set("Total Marks", 100)
report.set("Physics", PhyRep)

console.log(report)

var ChemRep = new Map();
report.set("Chemistry", ChemRep)
ChemRep.set("Marks Obtained", 88)
ChemRep.set("Total Marks", 100)

console.log(report)

var CompRep = new Map();
report.set("Computer", CompRep)
CompRep.set("Marks Obtained", 91);
CompRep.set("Total Marks", 100);

console.log(report)

var MatRep = new Map();

report.set("Maths", MatRep)
MatRep.set("Marks Obtained", 77)
MatRep.set("Total Marks", 100)

console.log(report)

var UrdRep = new Map();

report.set("Urdu", UrdRep)
UrdRep.set("Marks Obtained", 65)
UrdRep.set("Total Marks", 100)

console.log(report)

//if (UrdRep.has("Marks Obtained"))
//{
var a = UrdRep.get ("Marks Obtained") / 100 * 100
var b = MatRep.get ("Marks Obtained") / 50 * 100
var c = ChemRep.get("Marks Obtained") / 100 * 100
var d = CompRep.get("Marks Obtained") / 100 * 100

//}

//console.log("Urdu Percentage " + a)
//console.log("Math Percentage "+ `${b}`);
//console.log("Chemistry Percentage " + c)
//console.log("Computer Percentage " + d)

var arr = report.entries();
var total = 0;
var obtain = 0;
//console.log(arr);

for (item of arr)
{
    //console.log(item[1].get("Marks Obtained"))
    total = item[1].get("Total Marks") + total;
    obtain = item[1].get("Marks Obtained") + obtain;
    //console.log(item[0]);
    per = item[1].get("Marks Obtained") * 100 / item[1].get("Total Marks");
    console.log("Subject : " + item[0] + "is percentage: " + per + "%");
    //console.log ("Percentage of" `${item[0]}` + (report.get(item[0]).get("Marks Obtained"))
}

console.log("total marks: "+total);
console.log("Obtain Marks: "+obtain);

console.log("Overall percentage:" + obtain * 100 / total + "%");

var bar = report.entries();
for (item of bar)
{
    console.log("Percentage of" + `${item[0]}` + report.get(item[0]).get("Marks Obtained") * 100 / report.get(item[0]).get("Total Marks"));
}


// to delete value

//var cards = new Map();

//cards.set("Clubs", "King");
//cards.set("Spades", "Queen");
//cards.set("Heart", "Ace");
//cards.set("Diamond", "Tens");


//console.log(cards);
//cards.delete("Heart");
//console.log(cards);

