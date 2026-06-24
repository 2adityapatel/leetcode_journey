/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    if (!nums) {
        return [];
    }

    nums = nums.sort((a,b) => a-b)

    let ans = [];
    let len = nums.length;

    
    for (let i = 0; i < nums.length; i++) {

        let left = i + 1
        let right = len - 1

        if (nums[i] == nums[i - 1]) {
            continue;
        }

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right]            

            if (sum < 0) {
                left += 1
            } else if (sum > 0) {
                right -= 1
            } else {
                // console.log("> Index : " + i)
                // console.log(nums[i] + " " + nums[left] + " " + nums[right] )
                ans.push([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while ( nums[left] == nums[i] || nums[left] == nums[left-1]){
                    left+=1
                }
                while ( nums[right] == nums[i] || nums[right] == nums[right+1]){
                    right-=1
                }
            }
        }

    }

    return ans;
};