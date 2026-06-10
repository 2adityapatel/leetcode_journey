/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    // MY FIRST SOLUTION

    // if(!nums){
    //     return -1;
    // }

    // len = nums.length;

    // sumArray = [nums[0]]

    // for(i=1;i<len;i++){
    //     sumArray.push(sumArray[i-1] + nums[i])
    // }

    // if( sumArray[len-1] - sumArray[0] == 0 ) return 0;

    // for(j=1;j<len;j++){

    //     if (sumArray[j-1] == sumArray[len-1] - sumArray[j]) return j;

    // }
    // // console.log(sumArray)

    // return -1;


    // UPDATED SOLUTION to use only integer instead an array
    // Reduced space complexity than previous one

    if(!nums){
        return -1;
    }

    len = nums.length;

    sumArray = nums[0]

    for(i=1;i<len;i++){
        sumArray += (nums[i])
    }

    leftSum = 0;

    for(j=0;j<len;j++){
        rightSum = sumArray - leftSum - nums[j]
        if (leftSum === rightSum ) return j;
        leftSum += nums[j]
    }
    // console.log(sumArray)

    return -1;
};