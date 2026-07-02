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
var maxLevelSum = function(root) {

    if(!root) return 0;

    let maxLevel = 0;
    let maxSum = -Infinity;
    let currQueue = [root]
    let levelSize = 1;
    let currLevel = 1;
    let front = 0;

    while(front < currQueue.length){

        levelSize = currQueue.length - front;
        let levelSum = 0;

        for(let i=0;i<levelSize;i++){

            let node = currQueue[front++]
            levelSum += node.val

            if(node.left) currQueue.push(node.left)
            if(node.right) currQueue.push(node.right)
        }

        if(levelSum > maxSum){
            maxSum = levelSum;
            maxLevel = currLevel;
        }
        currLevel++

    }
    return maxLevel;
    
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}