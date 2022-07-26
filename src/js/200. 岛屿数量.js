/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const row = grid.length;
    if (!row) return 0;
    const col = grid[0].length;
    if (!col) return 0;

    const parent = new Array(row * col).fill(0).map((item, index) => index);
    const union = (parent, index1, index2) => {
        parent[find(parent, index1)] = find(parent, index2);
    };

    const find = (parent, index) => {
        if (parent[index] !== index) {
            parent[index] = find(parent, parent[index]);
        }
        return parent[index];
    };
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const coordinate = i * col + j;
            if (grid[i][j] === '1') {
                if (i + 1 < row && grid[i + 1][j] === '1') {
                    union(parent, coordinate, (i + 1) * col + j);
                }
                if (j + 1 < col && grid[i][j + 1] === '1') {
                    union(parent, coordinate, i * col + j + 1);
                }
            }
        }
    }
    console.log(parent);
    let nums = 0;
    for (let i = 0; i < parent.length; i++) {
        if (parent[i] === i) {
            const r = (i / col) >> 0;
            const c = i % col;
            if (grid[r][c] === '1') {
                console.log(r,c)
                nums++;
            }
        }
    }
    return nums;
};

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
