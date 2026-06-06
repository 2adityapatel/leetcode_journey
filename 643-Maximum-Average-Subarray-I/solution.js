/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    // MY SOLUTION
    let sum = 0;
    let maxSum = -Infinity;
    let len = nums.length;

    for( i=0; i<len;i++){

        if(i<k){ 
            sum+= nums[i]
        }
        else{
            sum = sum + nums[i] - nums[i-k]
        }


        if( (i+1)>=k ) maxSum = Math.max(maxSum, sum);
        else if(i==(len-1) && i<k){
            return sum/k
        }
        
    }

    return maxSum/k;

    // FROM REFERENCE SOLUTION
    //  let sum = 0;
    //     for (let i = 0; i < k; i++) sum += nums[i];
    //     let maxSum = sum;
        
    //     for (let i = k; i < nums.length; i++) {
    //         sum = sum - nums[i - k] + nums[i];
    //         if (sum > maxSum) maxSum = sum;
    //     }
        
    //     return maxSum / k;
    
};