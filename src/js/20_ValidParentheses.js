/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var stack = [];
    for(var i = 0; i < s.length; i++){
    	switch(s[i]){
    		case '(':
    			stack.push(')');
    			break;
    		case '[':
    			stack.push(']');
    			break;
    		case '{':
    			stack.push('}');
    			break;
    		default:
    			if(stack.length === 0 || stack.pop() !== s[i]){
    				return false
    			}
    	}

    }
    return stack.length === 0;
};



var s = '(){}[]{[([)]}';
console.log(isValid(s));