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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    if(!root) return false;

    // console.log("> Root : " + root.val + ", Sum remaining : " + targetSum)

    let remainingSum = targetSum - root.val;

    if(remainingSum == 0 && !root.left && !root.right){
        return true;
    }

    let ans1 = hasPathSum(root.left, remainingSum)

    if(ans1) return true;

    let ans2 = hasPathSum(root.right, remainingSum)

    return ans2
    
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}