/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === ')') {
            stack.pop();
        }
        if (stack.length) {
            res += cur;
        }
        if (cur === '(') {
            stack.push(cur);
        }
    }
    return res;
};

var s = '(()())(())';
console.log(removeOuterParentheses(s));
