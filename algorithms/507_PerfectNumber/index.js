/**
 * @param {number} num
 * @return {boolean}
 */

 /*
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
 */
var checkPerfectNumber = function(num) {
	if(num <= 0){ return false; }
	var sum = 0;
	for(var i = 1; i * i < num; i++){
		if(num % i === 0){
			sum += i;
			if(i * i !== num){
				sum += num/i;
			}
		}
	}
	return sum === 2 * num;
};

var num = 99999994;
console.time('T')
console.log(checkPerfectNumber(num));
console.timeEnd('T')