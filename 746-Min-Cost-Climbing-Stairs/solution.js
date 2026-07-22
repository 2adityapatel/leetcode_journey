/**
 * @param {number[]} cost
 * @return {number}
 */

//  Recursive DP with Space Compexity O(n) and Time Complexity O(n)
// var minCostClimbingStairs = function(cost) {

//     // storage where storage[i] is the minimum cost to climb to the top starting from the ith staircase.
//     let storage = [cost[0], cost[1]];  // If using this array then remove base case
//     // let storage = [];

//     var recursive = function(index){

//         if(index <= 1){
//             return cost[index]
//         }

//         if(storage[index] != undefined) return storage[index];

//         let x,y, ans;

//         x = recursive(index-1)
//         y = recursive(index-2)

//         ans = x < y ? x : y;

//         storage[index] = ans + cost[index]

//         return storage[index] 

//     }

//     let res1 = recursive(cost.length-1)
//     let res2 = recursive(cost.length-2)

//     return res1 < res2 ? res1 : res2;
    
// };

//  Iterative DP with Space Compexity O(1) and Time Complexity O(n)
var minCostClimbingStairs = function(cost) {

    let prev2 = cost[0];
    let prev1 = cost[1];

    for (let i = 2; i < cost.length; i++) {

        let curr = cost[i] + Math.min(prev1, prev2);

        prev2 = prev1;
        prev1 = curr;
    }

    return Math.min(prev1, prev2);
};