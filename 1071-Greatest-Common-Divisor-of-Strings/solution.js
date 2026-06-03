/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    // SOLUTION - MY FIRST ORIGINAL SOLUTION
    // for( i=str2.length; i>0;i--){
    //     x = str2.slice(0,i);

    //     if( ( str1.replaceAll(x,"") == "" ) && (str2.replaceAll(x,"") == "")){
    //         return x;
    //     }
    // }

    // return "";

    // SOLUTION 2

    if( str1+str2 != str2+str1 ){
        return ""
    }

    var gcd = function(x,y){
        if(!y) return x;

        return gcd(y,x%y)
    }

    let ans = gcd(str1.length, str2.length)

    return str1.slice(0,ans)

};