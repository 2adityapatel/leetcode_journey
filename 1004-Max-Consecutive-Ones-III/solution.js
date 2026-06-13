/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {

    //     let zeroCount = 0;
    //     let left = 0;
    //     let maxOnes = 0;

    // for (let right = 0; right < nums.length; right++) {
    //     if (nums[right] === 0) {
    //         zeroCount++; 
    //     }

    //     while (zeroCount > k) { 
    //         if (nums[left] === 0) {
    //             zeroCount--;  // (3)
    //         }
    //         left++;
    //     }

    //     maxOnes = Math.max(right-left+1, maxOnes);  // (4)
    // }

    //     return maxOnes;


    let zeroCount = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;  // (1)
        }

        if (zeroCount > k) {  // (2) When to slide?
            if (nums[left] === 0) {
                zeroCount--;  // (3)
            }
            left++;  // (4)
        }
    }

    return nums.length - left;  // (5) What to return?

};


/*
Sliding window size fix
if 0 is greater then k, shift fIndex 
 */