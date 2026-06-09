/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {

    let maxCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (i = 0; i < k; i++) {
        if (vowels.has(s[i])) maxCount++;
    }

    let vowelCount = maxCount;
    for (i = k; i < s.length; i++) {

        if (maxCount == k) return maxCount;
      
        if (vowels.has(s[i])) vowelCount++;
        if (vowels.has(s[i - k])) vowelCount--;

        if (vowelCount > maxCount) maxCount = vowelCount;

        // console.log(i + " " + vowelCount + " " + maxCount);
    }
    // console.log(maxCount);
    return maxCount;
};