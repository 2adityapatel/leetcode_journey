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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {

    let prefixFreq = new Map([[0,1]])
    let totalPaths = 0;

    totalPaths = countPaths(root, targetSum, 0, totalPaths, prefixFreq)

    return totalPaths;

};

var countPaths = function (root, targetSum, currentSum, totalPaths, prefixFreq) {

    if (!root) return totalPaths;

    currentSum += root.val
    let prefixSum = currentSum - targetSum

    if (prefixFreq.has(prefixSum)) {
        totalPaths += prefixFreq.get(prefixSum)
    }
    prefixFreq.set(currentSum, (prefixFreq.get(currentSum) || 0) + 1)

    totalPaths = countPaths(root.left, targetSum, currentSum, totalPaths, prefixFreq)
    totalPaths = countPaths(root.right, targetSum, currentSum, totalPaths, prefixFreq)

    let currentSumCount = prefixFreq.get(currentSum)
    if (currentSumCount > 1) {
        prefixFreq.set(currentSum, currentSumCount - 1)
    } else {
        prefixFreq.delete(currentSum)
    }

    return totalPaths
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}