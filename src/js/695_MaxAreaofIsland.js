/**
 * @param {number[][]} grid
 * @return {number}
 */

//深度优先递归
var maxAreaOfIsland_recursive = function(grid) {
	var seen = new Array(grid.length);
	for(var i = 0; i < grid.length; i++){
		seen[i] = [];
	}
	var maxArea = 0;
	var getArea = function(x, y){
		var edges = 0;
		if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || !grid[x][y] || seen[x][y]){ return 0; }
		seen[x][y] = true;
		
		return 1 + getArea(x-1, y) + getArea(x+1,y) + getArea(x, y-1) + getArea(x, y+1);
	};
	for(var x = 0; x < grid.length; x++){
		for(var y = 0; y < grid[x].length; y++){
			// console.log(getArea(x, y));

			maxArea = Math.max(maxArea, getArea(x, y));
		}
	}

	return maxArea;
};
//深度优先迭代
var maxAreaOfIsland_iterative = function(grid){
	//1. 遍历所有节点
	//2. 找到节点不为0，且未被遍历过的
	//3. 将其入栈
	//4. 将栈中元素弹出一个，寻找其四个方向，是否有海岛，如果有，入栈
	var stack = [];
	var seen = [];
	var maxArea = 0;
	var offsetX = [0, 0, 1, -1];
	var offsetY = [1, -1, 0, 0];
	for(var i = 0; i < grid.length; i++){
		seen[i] = [];
	}
	for(var x = 0; x < grid.length; x++){
		for(var y = 0; y < grid[x].length; y++){
			if(grid[x][y] && !seen[x][y]){
				var area = 0;
				stack.push([x, y]);
				seen[x][y] = true;
				while(stack.length > 0){
					var dot = stack.pop();
					area++;
					for(var k = 0; k < offsetX.length; k++){
						var _x = dot[0] + offsetX[k];
						var _y = dot[1] + offsetY[k];
						if(_x >= 0 && _x < grid.length && _y >= 0 && _y < grid[_x].length && grid[_x][_y] && !seen[_x][_y]){
							stack.push([_x, _y]);
							seen[_x][_y] = true;
						}
					}
					
				}
				maxArea = Math.max(maxArea, area);
			}
		}
	}
	return maxArea;
};
var grid = 
	[[0,0,1,0,0,0,0,1,0,0,0,0,0],
	 [0,0,0,0,0,0,0,1,1,1,0,0,0],
	 [0,1,1,0,1,0,0,0,0,0,0,0,0],
	 [0,1,0,0,1,1,0,0,1,0,1,0,0],
	 [0,1,0,0,1,1,0,0,1,1,1,0,0],
	 [0,0,0,0,0,0,0,0,0,0,1,0,0],
	 [0,0,0,0,0,0,0,1,1,1,0,0,0],
	 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log(maxAreaOfIsland_iterative(grid));