/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

    let smallest = null;
    let secondSmallest = null;

    for(let i=0; i<nums.length;i++){

        if(smallest == null){
            smallest = nums[i]
        }
        else if(secondSmallest == null ){
            if (nums[i] > smallest) secondSmallest = nums[i]
            else smallest = nums[i]
        }else{
            if(nums[i] > secondSmallest && secondSmallest > smallest ) return true
            else if(nums[i] > smallest && nums[i] < secondSmallest ) {
                secondSmallest = nums[i]
            }
            else if (nums[i] < smallest ){
            smallest = nums[i]
            // secondSmallest = null
            }
        }
    }
    
    return false;
};