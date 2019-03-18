/**
 * @param {string} s
 * @return {number}
 */

 /*
	I -> 1
	V -> 5
	X -> 10
	L -> 50
	C -> 100 
	D -> 500
	M -> 1000
 */
//my solution
var romanToInt = function(s) {
    var conversion = {
    	I : 1,
		V : 5,
		X : 10,
		L : 50,
		C : 100, 
		D : 500,
		M : 1000
    };
    var ret = 0;
    var romanArr = s.split('').map(function(v){
    	return conversion[v];
    });
    while(intArr.length > 0){
    	var max = Math.max.apply(null, intArr);
    	while(intArr[0] !== max){
			ret -= intArr.shift();
    	}
    	ret += intArr.shift();
    }
    return ret;
};

//maybe the best solution

var _romanToInt = function(s){
	var res = 0;
	for(var i = s.length - 1; i >= 0; i--){
		switch(s[i]){
			case 'I':
				res += (res < 5 ? 1 : -1);
				break;
			case 'V':
				res += 5;
				break;
			case 'X':
				res += (res < 50 ? 10 : -10);
				break;
			case 'L':
				res += 50;
				break;
			case 'C':
				res += (res < 500 ? 100 : -100);
				break;
			case 'D':
				res += 500;
				break;
			case 'M':
				res += 1000;
				break;

		}
	}
	return res;
}

console.log(_romanToInt('CDMXCIX'));