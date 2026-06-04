/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let largestCandyCount = 0
    let n = candies.length

    for(i=0;i<candies.length;i++){
            if (candies[i] > largestCandyCount) {
            largestCandyCount = candies[i]
        }
    }
    let result = []
    for (i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= largestCandyCount) {
            result.push(true);
            continue;
        }
        result.push(false);
    }
    return result;

};