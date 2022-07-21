/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// [5,4,8,11,null,13,4,7,2,null,null,null,1]
// 生成二叉树
function createBinaryTree(arr) {
    let head = new TreeNode(arr.shift());
    let tmp = [head];
    while (tmp && arr.length) {
        const cur = tmp.shift();
        if (cur === null) continue;
        let nextVal = arr.shift();
        if (nextVal === null) {
            cur.left = nextVal;
        } else if (nextVal !== undefined) {
            cur.left = new TreeNode(nextVal);
            tmp.push(cur.left);
        }
        nextVal = arr.shift();
        if (nextVal === null) {
            cur.right = nextVal;
        } else if (nextVal !== undefined) {
            cur.right = new TreeNode(nextVal);
            tmp.push(cur.right);
        }
    }
    return head;
}
// const t = createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

function postOrderTraversal(root) {
    const stack = [];
    while (stack.length) {
        // 将栈尾元素弹出
        const cur = stack[stack.length - 1];
        // 1. 如果有子节点,将自己入栈,右入栈,左入栈
        if (cur) {
            stack.push(cur.right);
            stack.push(cur.left);
        }
    }
}

// 层序遍历打印二叉树
function printBTreeByLevel(bTree) {
    const queue = [bTree];
    const ret = [];
    while (queue.length) {
        const cur = queue.shift();
        if (cur === null) {
            ret.push(null);
            continue;
        } else {
            ret.push(cur.val);
            if (cur.left || cur.right) {
                queue.push(cur.left);
                queue.push(cur.right);
            }
        }
    }
    return ret;
}

// console.log(JSON.stringify(printBTreeByLevel(t)));

module.exports = {
    createBinaryTree,
    printBTreeByLevel,
};
