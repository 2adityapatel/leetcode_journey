/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {

//     if (!root) return null;

//     let leftNode = lowestCommonAncestor(root.left, p, q);
//     let rightNode = lowestCommonAncestor(root.right, p, q);

//     if(root == p || root == q) return root
//     else if(leftNode && rightNode) return root
//     else if(leftNode) return leftNode
//     else return rightNode

// };
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  return (resL && resR) ? root : (resL || resR);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}