/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {

    // let oneCount = 0;
    let zeroCount = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        if (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
    }

    return nums.length - left - 1; 
    
};