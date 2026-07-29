/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    // const m = word1.length;
    // const n = word2.length;

    const dp = []

    for(let i=0;i< word1.length;i++){
        let arr=[]
    for(let j=0;j< word2.length;j++){
        arr.push(-1)
    }
        dp.push(arr)
    }

    var recursive = function(i, j) {

        if(i<0) return j+1;
        if(j<0) return i+1;

        if(dp[i][j] != -1) return dp[i][j]

        if(word1[i] == word2[j]) return 0 + recursive(i-1,j-1)

        // let x=0,y=0,z=0;

        // // insert
        // x = 1 + recursive(i, j-1)
        // // delete
        // y = 1 + recursive(i-1, j)
        // // replace
        // z = 1 + recursive(i-1, j-1)

        dp[i][j] = Math.min( 1 + recursive(i, j-1),  1 + recursive(i-1, j),  1 + recursive(i-1, j-1))

        return dp[i][j]
    }

    return recursive(word1.length-1, word2.length-1)
    
};