/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length == 0) return 0;

    let read = 0;
    let write = 0;

    while( read < nums.length ){

        if(nums[write] != nums[read]){
            write++;
            nums[write] = nums[read]
        }
        read++;
    } 

    return write+1;
    
};