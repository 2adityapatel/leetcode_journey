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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {

    if (!root) return null;

    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }else{

        if(root.right == null && root.left == null){
            return null;
        }else if(root.left == null){
            return root.right;
        }else if(root.right == null){
            return root.left;
        }else{
            var successorNode = getSuccessor(root.right)
            root.val = successorNode.val;
            root.right = deleteNode(root.right, successorNode.val)
        }
    }

    return root;
};

var getSuccessor = function(node){

    while(node.left != null ){
        node = node.left
    }
    return node;
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}