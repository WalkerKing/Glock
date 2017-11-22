/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var _x = (x + '').split('').reverse().join('');
    if(x < 0) _x = ('-' + _x).substring(0, _x.length);

    return parseInt(_x) <= Math.pow(2,31) && parseInt(_x) >= -Math.pow(2,31) ? parseInt(_x) : 0;
};


console.log(reverse(1563847412));