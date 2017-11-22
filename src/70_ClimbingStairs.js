/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
 /*使用递归，n=45时，用时21s，超时*/
let climbStairs = n => {
    //这是一个fibonacci数列
    //欲要求出n阶的值，需要知道n-1， n-2阶的值，二者之和就是n阶的值
    if(n === 0){ return 0; }
    if(n === 1){ return 1; }
    if(n === 2){ return 2; }
    return climbStairs(n-1) + climbStairs(n-2)
};
 /*使用循环代替递归, n=45时，用时5ms*/
let climbStairs_1 = n => {
	if(n === 0){ return 0; }
	if(n === 1){ return 1; }
	if(n === 2){ return 2; }
	
	let one_step_before = 2;
	let two_step_before = 1;
	let all_ways = 0;
	for(let i = 3; i <= n; i++){
		all_ways = one_step_before + two_step_before;
		two_step_before = one_step_before;
		one_step_before = all_ways;
	}
	return all_ways;
};
console.time('t');
for(let n = 1; n < 10; n++){
	
}
console.log(climbStairs_1(45));
console.timeEnd('t');