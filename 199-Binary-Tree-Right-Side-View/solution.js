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
 * @return {number[]}
 */
var rightSideView = function (root) {

    if (!root) return []

    let ans = []

    let currentQueue = [root];
    let front = 0;
    let levelSize = 1;

    while (front < currentQueue.length) {

        levelSize = currentQueue.length - front

        for (let i = 0; i < levelSize; i++) {
            const node = currentQueue[front++];

            if (i === levelSize - 1) ans.push(node.val);

            if (node.left) currentQueue.push(node.left);
            if (node.right) currentQueue.push(node.right);
        }
    }

    return ans
};