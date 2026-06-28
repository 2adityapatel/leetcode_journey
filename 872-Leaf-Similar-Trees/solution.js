
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    
    let leaves1 = []
    let leaves2 = []

    getLeafNodes(root1, leaves1)
    getLeafNodes(root2, leaves2)

    return leaves1.length == leaves2.length && leaves1.every((leaf, i) => leaf == leaves2[i]);
};

var getLeafNodes = function (root, leaves) {

    if(!root) return;

    if (!root.left && !root.right) {
        leaves.push(root.val);
        return;
    }

    getLeafNodes(root.left, leaves)
    getLeafNodes(root.right, leaves)
    
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}