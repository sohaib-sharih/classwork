// JavaScript source code
//class sohaib {

//}
//undefined
//var day = new sohaib()

////day
////sohaib { } __proto__: constructor: class sohaib__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 0name: "get __proto__"__proto__: ƒ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 1name: "set __proto__"__proto__: ƒ()[[Scopes]]: Scopes[0]
//class sohaib {
//}
//undefined
//class sohaib {
//}
//undefined
//class sohaib {
//    constructor(shoe, shirt) { }
//}
//undefined
//class sohaib {
//    constructor(shoe, shirt) {
//        this._brand = brand
//    }
//}
//undefined
//class sohaib {
//    constructor(shoe, shirt) {
//        this._shoe = shoe
//        this._shirt = shirt
//    }
//}
//undefined
//var hall;
//undefined
//hall = new sohaib

class Project {
    constructor(Name, Type, Days, Tasks, DaysCompleted) {
        this._Name = Name
        this._Type = Type
        this._Days = Days
        this._Tasks = Tasks
        this._DaysCompleted = DaysCompleted
    }
    DaysRemaining() {
        console.log
    }
    TotalTasks() {
        console.log(this._Tasks.size)
    }
    gettask(taskID) {
        console.log(this._Tasks.get(taskID))
    }

    TaskStatus(taskID) {
        console.log(this._Tasks.get(taskID)._TaskStatus)
    }
    CompletedTasks() {
        console.log
    }
    PendingTasks() {
        //console.log(this._Tasks.)
    }
    TaskAssigneee(TaskId) {
    }
    DeleteTask() {
        console.log(delete this._Name)
    }
    AddTask() {
        console.log
    }
    ChangeAssignee(TaskId, AssigneeId) {
        console.log
    }
}
class task {
    constructor(Name, Days, Assignee, TaskStatus) {
        this._Name = Name
        this._Days = Days
        this._Assignee = Assignee
        this._TaskStatus = TaskStatus
    }
    ChangeTaskStatus() {
        console.log
    }
}
        class Assignee {
            constructor(Name, Title, Status) {
                this._Name = Name
                this._Title = Title
                this._Status = Status
            }
            ChangeStatus() {
                console.log
            }
}

var assign1 = new Assignee("Sohaib", "Project Director", "Excellent");
var assign2 = new Assignee("Mosa", "Finance Director", "Satisfactory");
var assign3 = new Assignee("Abdullah", "HRM Director", "Poor");
var assign4 = new Assignee("Amir", "Assistant Director", "Excellent");
var assign5 = new Assignee("Samia", "Project Manager", "Satisfactory");

var task1 = new task("Appraisal", 30, assign3, "Pending");
var task2 = new task("Financial Statements", 15, assign2, "Work in Progress");
var task3 = new task("Craft Training", 20, assign5, "Completed");
var task4 = new task("Film Production", 30, assign4, "Work in Progress");
var task5 = new task("Consultancy", 25, assign1, "In Review");

var tasklist = new Map()
tasklist.set(1, task1)
tasklist.set(2, task2)
tasklist.set(3, task3)
tasklist.set(4, task4)
tasklist.set(5, task5)

var work1 = new Project("Film Making","Creative", 45, tasklist, 0)

work1.TotalTasks()
work1.gettask(5)
work1.TaskStatus(1)
work1.TaskStatus(2)
work1.TaskStatus(3)
work1.TaskStatus(4)
work1.TaskStatus(5)