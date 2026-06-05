/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    // Two pointer swap approach

    // len = nums.length;
    // fIndex = 0
    // if(len == 1){
    //     return nums;
    // }
    // sIndex = 1

    // while (sIndex < (len)) {

    //     if (nums[fIndex] == 0 && nums[sIndex] != 0) {
    //         [nums[fIndex], nums[sIndex]] = [nums[sIndex], nums[fIndex]]
    //         fIndex++;
    //         sIndex++;
    //         continue;
    //     }
    //     if (nums[fIndex] != 0) {
    //         fIndex++;
    //         if( nums[sIndex]!=0) sIndex ++;
    //         continue;
    //     }
    //     if (nums[sIndex] == 0) {
    //         sIndex++;
    //         continue;
    //     }

    //     if(sIndex != 0 && sIndex >= (len-1) && fIndex == (sIndex-1)){
    //         break;
    //     }
    // }

    // return nums;

    // Overwrite non-zeros, then fill remaining positions with zeros.
    let index = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[index++] = num;
        }
    }

    while (index < nums.length) {
        nums[index++] = 0;
    }
    return nums
};