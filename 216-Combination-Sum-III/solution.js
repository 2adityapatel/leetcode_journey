/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let output = [];

    var recursive = function(index, arr, sum){

        if( sum > n ) return;

        if (arr.length === k) {
            if (sum === n) {
                output.push([...arr]);
            }
            return;
        }

        // let remaining = k - arr.length;

        // // Minimum possible sum using next numbers
        // let minSum = 0;
        // for (let j = 0; j < remaining; j++) {
        //     minSum += index + j;
        // }

        // if (sum + minSum > n) return;

        // // Maximum possible sum using largest available numbers
        // let maxSum = 0;
        // for (let j = 0; j < remaining; j++) {
        //     maxSum += 9 - j;
        // }

        // if (sum + maxSum < n) return;

        for(let i=index+1; i<=9; i++){

            if(arr.length >= k) break;

            arr.push(i);
            recursive(i, arr, sum+i)
            arr.pop()
        }

    }

    recursive(0, [], 0)

    return output;
    
};