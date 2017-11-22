/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [1,2,2,3,1,4,2];
var findShortestSubArray = function(nums) {
	//1. 求出数组中重复最多的元素，以及它的重复次数
	//2. 获得该数组中该元素第一次出现的位置，和最后一次出现的位置，相减即得
	var hash = {}, minLength = nums.length, degree = 0;
	for(var i = 0; i < nums.length; i++){
		var item = nums[i];
		if(hash[item]){
			hash[item].qty++;
			hash[item].end = i;
		}else{
			hash[item] = {
				qty: 1,
				start: i,
				end: i
			};
		}
		degree = Math.max(degree, hash[item].qty);
	}
	console.log(hash);
    for(var k in hash){
    	var _item = hash[k];
    	if(_item.qty == degree){
    		degree = _item.qty;
    		minLength = Math.min(minLength, _item.end - _item.start +1);
    	}
    }
    return minLength;
};

console.log(findShortestSubArray(nums));