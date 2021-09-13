/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;


// Task
// What is the value of test3?
//console.log(1==true); returns true
//console.log(1===true); returns false
//console.log(test3) should return false

var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

console.log(test3);


// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

//console.log(00==""); returns true
//console.log(1==="1"); returns false

var test4 = 0 == ""; //true
var test5 = 1 === "1";//false

var test4new = 0 ==="";
var test5new = 1 =="1";

console.log("test4 is", test4, "and test 5 is", test5);
console.log("test4new is", test4new, "and test5new is", test5new);

// Task
// What are the values of p, q, and r? Research what is going on here.
// Excesive decimal points were observed, see student_README.md for details
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x;
console.log(p);

var q = z - x;
console.log(q);

var r = y - w;
console.log(r);
