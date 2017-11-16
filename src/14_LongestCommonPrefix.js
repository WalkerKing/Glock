/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length === 0){ return ''; }
    var prefix = strs[0]||'';
    var i = 1;
    while(i < strs.length){
    	while(strs[i].indexOf(prefix) !== 0){
    		prefix = prefix.substring(0, prefix.length-1);
    	}
    	i++;
    }
    return prefix;
};