/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length == 1) {
        return strs[0];
    }

    let sortedStrs = strs.sort()
    let commonPrefix = ""

    for (let i = 0; i < sortedStrs[0].length; i++) {
        if (sortedStrs[0][i] === sortedStrs[sortedStrs.length - 1][i]) {
            commonPrefix += sortedStrs[0][i]
            continue;
        }
        return commonPrefix
    }
    return commonPrefix;

};