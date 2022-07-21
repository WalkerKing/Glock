/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const { createBinaryTree } = require('../utils/index');
var isBalanced = function (root) {
    function getTreeHeight(node) {
        if (!node) {
            return 0;
        }
        return Math.max(getTreeHeight(node.left), getTreeHeight(node.right)) + 1;
    }
    const queue = [root];
    while (queue.length) {
        const cur = queue.pop();
        if (cur) {
            if (Math.abs(getTreeHeight(cur.left) - getTreeHeight(cur.right)) > 1) {
                return false;
            } else {
                queue.push(cur.left);
                queue.push(cur.right);
            }
        }
    }
    return true;
};

const bTree = createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log(isBalanced(bTree));
