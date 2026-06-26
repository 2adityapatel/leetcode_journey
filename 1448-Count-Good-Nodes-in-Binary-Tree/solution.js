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
 * @return {number}
 */

var goodNodes = function (root) {

    let maxNodeValue = -Infinity;


    goodNodeCount = getGoodNodesCount(root, maxNodeValue);


    return goodNodeCount;


};

var getGoodNodesCount = function (root, maxNodeValue) {

    let goodNode = 0;

    if (root == null) return 0


    if (maxNodeValue <= root.val) {
        maxNodeValue = root.val
        goodNode = 1
    }


    let goodNodes1 = getGoodNodesCount(root.left, maxNodeValue );

    let goodNodes2 = getGoodNodesCount(root.right, maxNodeValue, goodNode);

    return goodNodes1 + goodNodes2 + goodNode
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}