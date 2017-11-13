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
	var len = Math.max(a.length, b.length);
	var carry = 0;	//表示进位
	var sum = '';	//表示和
	for(var i = 0; i < len; i++){
		var _a = Number(a[a.length - 1 - i]);
		isNaN(_a) && (_a = 0);
		var _b = Number(b[b.length - 1 - i]);
		isNaN(_b) && (_b = 0);
		if(_a + _b + carry ){
			
		}
	}
	return (_a + _b).toString(2);
};


addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")