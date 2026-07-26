/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// TIME COMPLEXITY : O(n)

// MY FIRST SOLN -> SPACE COMPLEXITY : O(n)
// var containsNearbyDuplicate = function (nums, k) {

//     let obj = new Map()

//     for (let i = 0; i < nums.length; i++) {

//         if (obj.has(nums[i]) && (Math.abs(i - obj.get(nums[i])) <= k)) {
//             return true
//         }

//         obj.set(nums[i], i)

//     }
//     return false

// };

// SECOND SOLN -> SPACE COMPLEXITY : O(min(n,k))
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (i > k) {
            set.delete(nums[i - k - 1])
        }

        if (set.has(nums[i])) return true

        set.add(nums[i])
    }
    return false;
};