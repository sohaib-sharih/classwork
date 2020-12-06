// JavaScript source code
//class add {
//    constructor(a, b) {
//        this._a = a;
//        this._b = b;
//    }
//USING CLASSES WITHOUT SETTER AND GETTER

var addition = class {
    constructor(a, b) {
        this._a = a;
        this._b = b;
    }

get addit() {
    return this.additionOne();
}
    additionOne() {
        return this._a + this._b;
}
}
var obj = new addition(10, 12)
console.log(obj.additionOne())

class marksheet {
    constructor(Name, LName, Math, Physics, English, Chemistry, Biology, Economics, Accounting, Marketing, TotalMarks, RN) {
        this._Name = Name
        this._LName = LName
        //this._address = "xyz road"
        this._maths = Math
        this._physics = Physics
        this._english = English
        this._chemistry = Chemistry
        this._bioligy = Biology
        this._economics = Economics
        this._accounting = Accounting
        this._marketing = Marketing
        this._totalmarks = TotalMarks
        //this._percentage = Percentage
        this._rollnumber = RN

    }
    google() {
        console.log("----------Report Card----------")
        console.log("------Future Windows International School------")
        console.log("====Riyadh, Saudi Arabia====")
        console.log("The first name is", this._Name)
        console.log("The second name is", this._LName)
        console.log("Student Roll Number", this._rollnumber)
        console.log("Average Marks", this._totalmarks)

    }
    avg() {
        if (this._totalmarks >= 85) {
            console.log("A+")
        } else if (this._totalmarks >= 80) {
            console.log("A")
        } else if (this._totalmarks >= 75) {
            console.log("B+")
        } else if (this._totalmarks >= 73) {
            console.log("B")
        } else if (this._totalmarks >= 68) {
            console.log("C+")
        } else if (this._totalmarks >= 62) {
            console.log("C")
        } else {
            console.log("error")
        }
    }
    total() {
        TotalMarks = (this.maths + this._physics + this._english + this._chemistry + this._marketing + this._accounting + this._bioligy + this._economics) / 7
        // divide = TotalMarks / 7
        console.log(this._totalmarks)
    }
}
//var nobj = new call("Sohaib", "Sharih");
var caller = new marksheet("Sohaib", "Sharih", 88, 95, 65, 66, 77, 55, 75, 82, 69, 021282)
// the parameters will also check the sequence
caller.google();
caller.avg();
//console.log(caller._Name)
//console.log(caller._LName)
//console.log(caller._address)
//console.log(caller._RN)
//console.log(caller._percentage)




