window.onload = function(){
	for(var arr = [], i = 0; i < 1000; i++){
		while(1){
			var item = Math.floor(Math.random()*10000000);
			if(arr.indexOf(item) === -1){
				arr.push(item);
				break;
			}
		}
	}
	console.log(arr);
	function twoSum(nums, target){
		for(var i = 0; i < nums.length; i++){
			for(var j = 0; j < nums.length; j++){
				if(nums[i] + nums[j] === target && i !== j){
					return [i, j];
				}
			}
		}
		throw new Error('数组不符合条件');
	}
	function twoSumHash(nums, target){
		for(var hash = {}, i = 0; i < nums.length; i++){
			if(hash[target - nums[i]] > -1){
				return [hash[target - nums[i]], i]
			}
			hash[nums[i]] = i;
		}
		throw new Error('数组不符合条件');
	}
	var target = arr[arr.length-1] + arr[arr.length-2];
	console.time('暴力算法');
	console.log(twoSum(arr, target));
	console.timeEnd('暴力算法');
	console.time('twoSumHash');
	console.log(twoSum(arr, target));
	console.timeEnd('twoSumHash');
};