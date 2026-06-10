/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 

    let numsHash = new Map();

    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i]
        if(numsHash.has(complement)){
            return [numsHash.get(complement), i]
        }
        numsHash.set(nums[i], i)
    }
    return [];
};