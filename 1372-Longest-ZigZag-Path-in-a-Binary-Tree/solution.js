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

const LEFT = 0;
const RIGHT = 1;

var longestZigZag = function (root) {

    maxPath1 = maxZigZag(root.left, LEFT, 1, 0)
    maxPath2 = maxZigZag(root.right, RIGHT, 1, 0)

    return Math.max(maxPath1, maxPath2);

};

var maxZigZag = function (node, direction, currPath, maxPath) {

    if (!node) return maxPath;

    if (currPath > maxPath) maxPath = currPath

    let mp1 = 0;
    let mp2 = 0;

    if (direction == RIGHT) {
        mp1 = maxZigZag(node.left, LEFT, currPath + 1, maxPath)
        mp2 = maxZigZag(node.right, RIGHT, 1, maxPath)
    } else if (direction == LEFT) {
        mp1 = maxZigZag(node.left, LEFT, 1, maxPath)
        mp2 = maxZigZag(node.right, RIGHT, currPath + 1, maxPath)
    }

    return Math.max(mp1, mp2);

}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}