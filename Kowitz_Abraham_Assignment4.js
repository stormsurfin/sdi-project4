// Replace characters in a string

var str = "A,B,C,D,E";
var s = str.replace(/,/g,"/"); // uses .replace to change , to /
console.log(s);

// Format a number to a specific number of decimal places

var n = parseFloat(566.8337);
console.log(n.toFixed(2));
	
//  Fuzzy match percentages

Number.prototype.isFuzzy = function(compare, percent){ // isFuzzy function compares a number and by what percentage
    var dev = compare*(percent/100), n = +this; // math equation to make the number a percentage
    return n >= compare-dev && n <= compare+dev;
};
var n = 151; // number to compare to
console.log(n.isFuzzy(140,10)); // number compared, percentage

// Convert a string to a number

var stringNum = "9 years";
console.log(parseFloat(stringNum));

// Smallest value in an array that is greater than 9

var min = 9;
var r = [4, 7, 12, 24];
function gt(a){return a>this; }

console.log(
  Math.min.apply(0,
     r.filter(gt, min)
  )
);

// Sort an array of objects by a key's value

var array=[655, 77, 190, 1, 2004]
console.log(array.sort(function(x,y){return x - y})); 

/* the array is sorted based on the relationship 
between each pair of elements and the return value.*/

