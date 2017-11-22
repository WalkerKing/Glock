/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var len = 0;
	var tail = s.length - 1;
    while(s[tail] === ' ' && tail >= 0){
    	tail--;
    }
    while(s[tail] !== ' ' && tail >= 0){
    	len++;
    	tail--;
    }
    return len;

};

var s = "Hello World";
console.log(lengthOfLastWord(s));