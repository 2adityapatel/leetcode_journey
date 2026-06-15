/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    // let result = "";
    let subStr = "";
    let stack = [];
    let pushCount = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] == "]") {
            let char = stack.pop()
            while (char != "[") {
                subStr = char + subStr
                char = stack.pop()
            }

            let numStr = "";
            let num = stack.pop();

            while (num && num >= '0' && num <= '9') {
                numStr = num + numStr;
                num = stack.pop();
            }
            stack.push(num)
            pushCount = parseInt(numStr);

            subStr = subStr.repeat(pushCount)
        
            if (stack.length == 0) {
                stack += subStr
                // console.log(result)
            } else {
                stack.push(subStr)
            }
            subStr = "";
        } else {
            stack.push(s[i])
        }

    }

    return stack.join("");

};