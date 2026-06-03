/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let result = "";
    for (i = 0; i < (word1.length); i++) {

        if (word2[i] == undefined) {
            result += word1.slice(i)
            break;
        } else {
            result += (word1[i] + word2[i])
        }
        if (i === (word1.length - 1)) {
            result += word2.slice(i + 1)
            break;
        }

    }
    return result;
};