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

