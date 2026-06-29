/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let hashNums = new Map()

    hashNums.set(0, 1);

    let sum = 0
    let count = 0;

    for(let i=0; i<nums.length;i++){

        sum += nums[i]

        let prefix = sum - k

        if(hashNums.has(prefix)){
            count += hashNums.get(prefix);
        }

        hashNums.set(sum, (hashNums.get(sum) || 0) + 1 )
    }

    return count;
    
};