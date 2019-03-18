/**
 * 零钱兑换算法
 * 1，2，5，10
 * n = 0 => 0
 * n < 0 => 0
 * 
 */

 const count_change = (n, t) => {
    /* 方法个数 = 不使用某一个硬币兑换方法 + 使用这个硬币进行兑换的方法 */
    if(n <= 0){
        return 0;
    }else{
        let remindingCoin = t.pop();
        return count_change(n, t) + count_change(n - remindingCoin, t.push())
    }
 }