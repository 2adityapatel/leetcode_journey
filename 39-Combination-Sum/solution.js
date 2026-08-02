/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let output = []
    let n = candidates.length;

    var recursion = function (idx, arr, sum) {

        if (sum > target) return

        if (sum === target) {
            output.push([...arr])
            return;
        }


        for (let i = idx; i < n; i++) {
            arr.push(candidates[i])
            recursion(i, arr, sum + candidates[i])
            arr.pop()
        }
    }

    recursion(0, [], 0)

    return output;
};