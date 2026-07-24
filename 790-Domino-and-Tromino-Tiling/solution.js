/**
 * @param {number} n
 * @return {number}
 */

// Recursive DP
var numTilings = function(n) {
    
    var storage = [1,1,2]

    var recursive = function(n){

        const MOD = 1000000007;

        if(n < 0) return 0;

        if(n <= 1) return storage[n];

        if(storage[n] != undefined) return storage[n]
        
        storage[n] = ( recursive(n-3) + ( recursive(n-1) * 2 ) ) % MOD

        return storage[n];
    }

    return recursive(n)
};

// Iterative DP
// var numTilings = function(n) {
//     const MOD = 1000000007;

//     if (n === 0) return 1;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     const dp = [1, 1, 2];

//     for (let i = 3; i <= n; i++) {
//         dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
//     }

//     return dp[n];
// };