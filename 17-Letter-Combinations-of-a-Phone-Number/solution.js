/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const output = []

    const n = digits.length;

    var recursive = function(index, currString){        

        if(index == n){
            output.push(currString)
            return;
        }

        let str=phoneMap[digits[index]];

        for(let i=0;i<str.length;i++){
            recursive(index+1, currString+str[i])
        }
    }

    recursive(0,"")

    return output
};