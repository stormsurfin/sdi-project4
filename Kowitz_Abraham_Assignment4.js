var abelib = function() {
	
	/*Given a string that is a list of things separated by a given string, 
	as well as another string separator, 
	return a string with the first separator changed to the second: 
	"a,b,c" + "," + "/" → "a/b/c".*/
	
	var s = function(str){
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
		return a > this; 
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
	
	
	/* Does a string follow a 123-456-7890 pattern like a phone number? */
	
	
	var validate = function(phone){
		var regex = (/^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/);
			if (regex.test(phone)){
			console.log("Valid phone number.");
			} else {
			console.log("Invalid phone number.");
		};
	}
	validate("980-980-0098");
	
	
	
	/* Does a string follow an aaa@bbb.ccc pattern like an email address? */
	
	var detectEmail = function(m){
		var atpos = m.indexOf("@");
		var dotpos = m.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=m.length) { //checks for @ || checks for . || then checks for a second .
				console.log("Not a valid e-mail address");
				} else { 
				console.log("Valid email address.");
		};
	};
	detectEmail("me@address.com");
	
	
	/* Is the string a URL? (Does it start with http: or https:?) */
	
	var ValidURL = function(url) {
		var pattern = new RegExp('^(https?:\/\/)?'+  // checks for http:// or https://
		'((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // checks for domain name sequence
		'((\d{1,3}\.){3}\d{1,3}))'+ // checks for ip address
		'(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port number or path detection
		'(\\?[;&a-z\d%_.~+=-]*)?'+  // detects a query string
		'(\#[-a-z\d_]*)?$','i'); // recognizes # and its referring fragment
		if(!pattern.test(url)) {
			console.log("Not a valid URL.");
			} else {
			console.log("This is a valid web address.");
			};
		};
	
	ValidURL("www.address.com");
	
	/* Find the number of hours or days difference between two dates. */
	
	var daysBetween = function(date1String, date2String){
		var d1 = new Date(date1String);
		var d2 = new Date(date2String);
		return (d2-d1)/(1000*3600*24);
	};
	
	console.log(daysBetween('1980-06-28', '2012-06-21'));
	
	/* Title-case a string (split into words, then uppercase the first letter of each word) */
	
	String.prototype.toTitleCase = function() {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
	"scalable data infrastructures".toTitleCase();
	
	
	
	
	// Find the total value of just the numbers in an array, even if some of the items are not numbers.
	
	function sum(){ 
		var val = document.getElementById('userInput').value;
		var temp = val.split(" ");
		var total = 0;
		var v;
		for(var i = 0; i < temp.length; i++) {
			v = parseFloat(temp[i]);
				if (!isNaN(v)) total += v; 
				} 
			document.getElementById('resultSumValue').value = total; 
	};
};

abelib();