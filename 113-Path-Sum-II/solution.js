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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    let paths = []
    let currentPath = [];

    getPaths(root, targetSum, currentPath, paths)


    return paths

};

var getPaths = function (root, targetSum, currentPath, paths) {

    if (!root) return;

    let remainingSum = targetSum - root.val;

    if(currentPath.length){
        currentPath.push(root.val)
    }else{
        currentPath = [root.val, ]
    }
    if ( remainingSum == 0 && !root.left && !root.right) {
        paths.push([...currentPath])
    }

    getPaths(root.left, remainingSum, currentPath, paths);
    getPaths(root.right, remainingSum, currentPath, paths);

    currentPath.pop() 
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}