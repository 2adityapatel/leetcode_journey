/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x < 0) return false;

    let result = 0
    let temp = x;

    while(temp > 0){
        num = temp % 10;
        result = (result * 10) + num
        temp = Math.floor(temp/10)
    }

    if(result == x) return true
    
    return false
    
};