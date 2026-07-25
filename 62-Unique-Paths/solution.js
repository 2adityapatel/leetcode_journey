/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let dp = [];

    for(let i=0;i<m;i++){
        let arr=[]
        for(let j=0;j<n;j++){
            arr.push(-1)
        }
        dp.push(arr)
    }

    var recursive = function(row, col){

        if(row < 0 || col < 0) return 0;

        if(row == 0 && col == 0) return 1

        if(dp[row][col] != -1) return dp[row][col]
        
        dp[row][col] = recursive(row-1,col) + recursive(row,col-1);

        return dp[row][col];

    } 

    return recursive(m-1,n-1);
    
};