/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if(nums[0] >= target){ return 0; }
	if(nums[nums.length-1] < target){ return nums.length; }

    for(var i = nums.length - 1; i > 0; i--){
    	if(nums[i] === target){
    		return i;
    	}else if(nums[i-1] < target && nums[i] > target){
    		return i;
    	}
    }
};