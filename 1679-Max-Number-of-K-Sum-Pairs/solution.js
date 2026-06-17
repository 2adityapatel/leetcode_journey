/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

    // let numCount = new Map()
    // let operations = 0;

    // for(let i=0;i<nums.length;i++){

    //     if(!numCount.has(nums[i])){
    //         numCount.set(nums[i],1)
    //     }else{
    //     numCount.set(nums[i], numCount.get(nums[i])+1)
    //     }
    // }

    // console.log(numCount)

    // for(num of nums){

    //     if((numCount.get(num) || 0) === 0 ) continue;

    //     let complement = k - num

    //     if((numCount.get(complement) || 0) === 0 ) continue;

    //     if( num == complement ){
    //         if(numCount.get(num) < 2) continue
    //     }

    //     numCount.set(num, numCount.get(num)-1)
    //     numCount.set(complement, numCount.get(complement)-1)

    //     operations++;

    // }

    // return operations;

    let count = new Map();
    let operations = 0;

    for (num of nums) {
        complement = k - num

        if ((count.get(complement) || 0) > 0) {
            count.set(complement, count.get(complement) - 1);
            operations++;
        } else {
            count.set(num, (count.get(num) || 0) + 1);
        }
    }

    return operations;

};