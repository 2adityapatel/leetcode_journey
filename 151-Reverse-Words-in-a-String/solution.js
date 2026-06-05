/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    // str = s.trim().split(" ")
    // result = ""
    
    // for(i=str.length-1;i>0;i--){
    //     if(str[i] === " " || str[i] === "") continue;
    //     result = result + str[i] + " "
    // }
    // result += str[0]
    // return result


    result = ""
    nonSpace = -1
    
    for(i=s.length-1;i>=0;i--){

        if( s[i] == " "){
            if(nonSpace != -1){
                result+= s.slice(i+1, nonSpace+1) + " ";
                nonSpace=-1;
            }
        }else{
            if(nonSpace == -1){
                nonSpace=i;
            }
        }
    }
    if(nonSpace == 0 || nonSpace != -1){
        result+= s.slice(0,nonSpace+1);
    }else{
        result= result.slice(0,-1)
    }
    return result;
};