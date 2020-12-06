// JavaScript source code


var name;
name = ("Sohaib Sharih");
console.log(name);

var dob;
dob = ("February 12, 1986");
console.log(dob);

var address;
address = ("23-1, 27th Street, Khayabane ittehad, DHA, Phase 7, Karachi, Pakistan");
console.log(address);

var objective;
objective = ("To pursue a path that will lead to continueous learning and help in organizational growth to meet overall goals and objecttives.");
console.log(objective);

//var a = 10;
//var b = 20;

//var add = (a + b);
//console.log(add);

//var divide = (a / b);
//console.log(divide);

//result = ++a;
//console.log(result);

//result = --b;
//console.log(result);

// Education and Experience Section

var path = { Education: 'Academics', Work: 'Experience' };
console.log(path.Education);

var education;
education = { recentOne: 'MBA in Marketing 2012- 2014', recentTwo: 'BBA in Marketing 2005- 2010', recentThree: 'American High School Diploma 2002', recentFour: 'O levels in 2000' };
console.log(education.recentOne);
console.log(education.recentTwo);
console.log(education.recentThree);
console.log(education.recentFour);

console.log(path.Work);

var work;
work = {
    we1: 'Eplanet 2007-2010', we2: 'Prestige 2010-2012', we3: 'Spectrum Y&R 2012- 2013', we4: 'Digitz 2013-2016', we5: 'DigitAlley 2016-Till date'
};
console.log(work.we1);
console.log(work.we2);
console.log(work.we3);
console.log(work.we4);
console.log(work.we5);

//hobbies and skills Section

var hobby;
hobby = ('HOBBIES');
console.log(hobby);

var hobbyArray;
hobbyArray = ['Tennis', 'Cricket', 'Basketball', 'Guitar', 'Music', 'Craftwork', 'designing'];
console.log(hobbyArray[3]);
console.log(hobbyArray[4]);
console.log(hobbyArray[5]);
console.log(hobbyArray[6]);

var skills;
skills = ('SKILLS');
console.log(skills);

var skillsArray;
skillsArray = ['Photoshop', 'After effects', 'Illustrator', 'Web development', 'repairing car'];
console.log(skillsArray[0]);
console.log(skillsArray[1]);
console.log(skillsArray[2]);
console.log(skillsArray[3]);
skillsArray.push('Painting');
skillsArray.push("Video Editing")
console.log(skillsArray[5]);
console.log(skillsArray[6]);

skillsArray.splice(2, 0, "Maths");
console.log(skillsArray);

var lang;
lang = ('Language');
console.log(lang);

var langArray;
langArray = ['Arabic', 'English', 'Urdu'];
console.log(langArray[2]);
langArray.push('Chinese');
console.log(langArray[3]);
langArray.splice(2, 0, 'French');
console.log(langArray);
langArray.unshift('Sindhi');
console.log(langArray[0]);





