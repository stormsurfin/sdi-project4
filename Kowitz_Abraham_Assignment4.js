/*Given a string that is a list of things separated by a given string, 
as well as another string separator, 
return a string with the first separator changed to the second: 
"a,b,c" + "," + "/" → "a/b/c".*/

var s = function(str) {
	var s = str.replace(/,/g,"/"); // uses .replace to change , to /
	console.log(s);
	return s;
	};

s("A,B,C,D,E");


/*Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 */

var n = function(number){
	var n = parseFloat(number);
	console.log(n.toFixed(2));
	};
	
n(566.3456);
	
	
/*Fuzzy-match a number: is the number above or below a number within a certain percent?*/

Number.prototype.isFuzzy = function(compare, percent){ // isFuzzy function compares a number and by what percentage
    var dev = compare*(percent/100), n = +this; // math equation to make the number a percentage
    return n >= compare-dev && n <= compare+dev;
};
var n = 151; // number to compare to
console.log(n.isFuzzy(140,10)); // number compared, percentage


/*Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/

var sn = function(stringNum){
	var sn = (parseFloat(stringNum));
	console.log(sn);
	return sn;
	};
	
sn("9 years");


/*Find the smallest value in an array that is greater than a given number*/

var min = 9;
var r = [4, 7, 12, 24];

var gt = function(a){
	return a>this; 
	};

console.log(Math.min.apply(0,r.filter(gt, min)));


/*Given an array of objects and the name of a key, 
return the array sorted by the value of that key in each of the objects: 
"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].*/

var array = [655, 77, 190, 1, 2004];

var sortArray = function(x,y){
	return x - y;
	};
	
console.log(array.sort(sortArray)); 


/* the array is sorted based on the relationship 
between each pair of elements and the return value.*/

////////////////////////

// Detecting a phone number

var validate = function(phone) {
	var regex = (/^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/);
	    if (regex.test(phone)) {
	    console.log("Valid phone number.");
		} else {
		console.log("Invalid phone number.");
	};
}
validate("980-980-0098");
