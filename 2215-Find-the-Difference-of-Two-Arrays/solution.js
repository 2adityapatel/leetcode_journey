/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {

    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr1 = [];
    let arr2 = [];

    for (num of set2) {
        if (!set1.has(num)) {
            arr2.push(num)
        }
    }

    for (num of set1) {
        if (!set2.has(num)) {
            arr1.push(num)
        }
    }

    return [arr1, arr2]

};