/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// TOP DOWN RECURSIVE APPROACH
// var longestCommonSubsequence = function (text1, text2) {

//     const dp = [];
//     const m = text1.length;
//     const n = text2.length;

//     for (let i = 0; i < m; i++) {
//         let arr = []
//         for (let j = 0; j < n; j++) {
//             arr.push(-1)
//         }
//         dp.push(arr)
//     }

//     var lcs = function (i, j) {

//         if (i == m || j == n) return 0

//         if (dp[i][j] != -1) return dp[i][j]

//         if (text1[i] === text2[j]) {
//             dp[i][j] = 1 + lcs(i + 1, j + 1);
//         } else {
//             dp[i][j] = Math.max(
//                 lcs(i + 1, j),
//                 lcs(i, j + 1)
//             );
//         }

//         return dp[i][j];
//     }

//     return lcs(0, 0)

// };


// BOTTOM UP RECURSIVE APPROACH
var longestCommonSubsequence = function (text1, text2) {

    const dp = [];
    const m = text1.length;
    const n = text2.length;

    for (let i = 0; i <= m; i++) {
        let arr = []
        for (let j = 0; j <= n; j++) {
            arr.push(0)
        }
        dp.push(arr)
    }

    for (let i = 1; i <= m; i++) {

        for (let j = 1; j <= n; j++) {

            if(text1[i-1] == text2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }

    }

    return dp[m][n]

};