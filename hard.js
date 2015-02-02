// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
// A: 23  


// Write to the best if your understanding
// why c is the value that it is.

// The two values are of different types (string & integer), so js will make an attempt to resolve this by making them the same type (type coercion).. in this case, string.



var str = "Version " + 5 + 1;


// Q: What is the value of str?
// Version 51


// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?

// For the same reason as the first question.

var vNum = 5 + 1;
var str = "Version " + vNum;
// var str = "Version "


