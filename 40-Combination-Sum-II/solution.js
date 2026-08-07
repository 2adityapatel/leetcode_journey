/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    candidates.sort();

    let output = []

    var recursive = function(index, arr, sum){

        if(sum > target) return;

        if( sum === target ) {
            output.push([...arr])
            return;
        }

        for(let i=index; i<candidates.length; i++){

            if( i>index && candidates[i] === candidates[i-1]) continue;

            arr.push(candidates[i])
            recursive(i+1, arr, sum+candidates[i])
            arr.pop()

        }

    }

    recursive(0, [], 0)

    return output
    
};