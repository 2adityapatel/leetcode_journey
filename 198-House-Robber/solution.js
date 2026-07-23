/**
 * @param {number[]} nums
 * @return {number}
 */

// Recursive DP
// var rob = function(nums) {

//     let storage = []
//     let n = nums.length;
//     let res1 = 0, res2 = 0;


//     var recursive = function(index){

//         if(index <= 1) return nums[index];

//         if(storage[index] != undefined) return storage[index]

//         let ans1 = 0;
//         let ans2 = 0;

//         if(index-2 >= 0){
//             ans1 = recursive(index-2)
//         }
//         if(index-3 >= 0){
//             ans2 = recursive(index-3)
//         }

//         storage[index] = nums[index] + ( ans1 > ans2 ? ans1 : ans2 )

//         return storage[index];

//     }

//     res1 = recursive(n-1)
//     if(n > 1){
//     res2 = recursive(n-2)
//     }

//     return res1 > res2 ? res1 : res2;

// };
y
// Iterative DP
var rob = function (nums) {

    
    if (nums.length === 1) return nums[0];

    let prev1 = nums[0];      
    let prev2 = Math.max(nums[0], nums[1]); 

    for (let i = 2; i < nums.length; i++) {

        let res = prev1 + nums[i]

        prev1 = prev2
        prev2 = res > prev2 ? res : prev2
    }

    return prev2;

};