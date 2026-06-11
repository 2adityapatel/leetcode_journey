/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let leftProduct = [1,]
    let rightProduct = 1

    for(i=1;i<nums.length;i++){
        leftProduct.push( nums[i-1]*leftProduct[i-1] )
    }

    // console.log(leftProduct)
    
    for(i=nums.length-1;i>=0;i--){
        leftProduct[i] = leftProduct[i] * rightProduct
        rightProduct = rightProduct * nums[i]
    }

    return leftProduct
};