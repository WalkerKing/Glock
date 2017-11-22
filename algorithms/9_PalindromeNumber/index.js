/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = String(x).split('');
    while(arr.length > 1){
    	if(arr.pop() !== arr.shift()){
    		return false
    	}
    }
    return true;
};


console.log(isPalindrome(12321));
console.log(isPalindrome(321321321321321));