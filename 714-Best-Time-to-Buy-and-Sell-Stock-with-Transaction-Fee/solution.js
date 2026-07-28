/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function (prices, fee) {

//     const dp = [];

//     for (let i = 0; i < prices.length; i++){
//         let arr = []
//     for (let j = 0; j < 2; j++){
//         arr.push(-1)
//     }
//     dp.push(arr)
//     }

//     var recursive = function (day, holding) {

//         if (day >= prices.length) return 0;

//         if (dp[day][holding] != -1) return dp[day][holding]

//         if (holding) {

//             dp[day][holding] = Math.max(prices[day] - fee + recursive(day+1, 0),
//             recursive(day+1, 1))

//         } else {
//             dp[day][holding] = Math.max(recursive(day + 1, 0),
//             -prices[day] + recursive(day + 1, 1) )
//         }
        
//         return dp[day][holding]
//     }

//     return recursive(0, 0)

// };


// var maxProfit = function(prices, fee) {
//     const n = prices.length;

//     // dp[day][holding]
//     const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));

//     // Base case:
//     // dp[n][0] = dp[n][1] = 0

//     for (let day = n - 1; day >= 0; day--) {

//         // holding = 0
//         dp[day][0] = Math.max(
//             dp[day + 1][0],                  // Skip
//             -prices[day] + dp[day + 1][1]    // Buy
//         );

//         // holding = 1
//         dp[day][1] = Math.max(
//             prices[day] - fee + dp[day + 1][0], // Sell
//             dp[day + 1][1]                      // Hold
//         );
//     }

//     return dp[0][0];
// };

// var maxProfit = function(prices, fee) {
//     const n = prices.length;

//     let next = [0, 0];
//     let curr = [0, 0];

//     for (let day = n - 1; day >= 0; day--) {

//         curr[0] = Math.max(
//             next[0],
//             -prices[day] + next[1]
//         );

//         curr[1] = Math.max(
//             prices[day] - fee + next[0],
//             next[1]
//         );

//         next = [...curr];
//     }

//     return next[0];
// };

var maxProfit = function(prices, fee) {
    let nextNotHolding = 0;
    let nextHolding = 0;

    for (let day = prices.length - 1; day >= 0; day--) {
        const currNotHolding = Math.max(
            nextNotHolding,
            -prices[day] + nextHolding
        );

        const currHolding = Math.max(
            prices[day] - fee + nextNotHolding,
            nextHolding
        );

        nextNotHolding = currNotHolding;
        nextHolding = currHolding;
    }

    return nextNotHolding;
};