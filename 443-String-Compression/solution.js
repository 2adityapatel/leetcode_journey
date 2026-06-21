/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

   let read=0
   let write=0

   while(read < chars.length){

        let currChar = chars[read];
        let count = 0;

        while(read < chars.length && chars[read] == currChar){
            read++;
            count++;
        }

        chars[write] = currChar;
        write++;

        if(count > 1){
            strCount = String(count)

            for(digit of strCount){
                chars[write] = digit;
                write++
            }
        }
   }

   return write;

    
};