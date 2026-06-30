/**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
var levelOrder = function (root) {

    if (!root) return [];

    let levelNodes = [];
    let currentQueue = [root];
    let front = 0;


    while (front < currentQueue.length) {

        let currentLevelNodes = []
        let levelSize = currentQueue.length-front 

        while (levelSize) {

            let node = currentQueue[front]

            currentLevelNodes.push(node.val);

            if (node.left) currentQueue.push(node.left)
            if (node.right) currentQueue.push(node.right)

            front++;
            levelSize--;

        }

        levelNodes.push(currentLevelNodes)
    }

    return levelNodes;

};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}