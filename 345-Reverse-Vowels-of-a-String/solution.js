/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    vowelsList = "aeiouAEIOU"

    // Start from front and last index to reach same letter
    let fIndex = 0;
    let lIndex = s.length - 1;
    let result = s.split('');

    while( fIndex < lIndex){

        fVowel = vowelsList.includes(s[fIndex])
        lVowel = vowelsList.includes(s[lIndex])

        if ( fVowel && lVowel ){
            [ result[lIndex], result[fIndex]] = [s[fIndex], s[lIndex]];
            fIndex++;
            lIndex--;
            continue;
        }
        if ( !fVowel ){
            fIndex++;
        }
        if ( !lVowel ){
            lIndex--;
        }
    }
    return result.join('');
};