/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var i = a.length - 1,
		j = b.length - 1,
		c = 0,
		s = '';
	while(i >= 0 || j >= 0 || c === 1){
		c += i >= 0 ? a[i--] - 0 : 0;
		c += j >= 0 ? b[j--] - 0 : 0;
		s = c % 2 + s;
		c = parseInt(c/2);
	}
	console.log(s);
	return s;
};


addBinary("101","1010")