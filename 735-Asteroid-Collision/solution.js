/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {

    if (!asteroids) {
        return [];
    }

    // MY FIRST SOLUTION, OPTIMAL BUT NOT SIMPLIFIED ENOUGH

    // let result = [asteroids[0]]

    // for (let i = 1; i < asteroids.length; i++) {

    //     let left = result[result.length - 1]
    //     let right = asteroids[i]

    //     if( left > 0 && right < 0 ){
    //     while (left > 0 && right < 0) {
    //         if(Math.abs(right) == left){
    //             result.pop()
    //             break;
    //         }else if (Math.abs(right) > left) {
    //             result.pop()
    //         }else{
    //             result.pop()
    //             result.push(left)
    //             break;
    //         }
    //         // result.pop();
    //         // if(Math.abs(right) < left){
    //         //     result.push(left)
    //         //     break;
    //         // }

    //         let len2 = result.length;
    //         if (len2 != 0 ) {
    //             left = result[len2 - 1]
    //             if(left < 0){
    //                 result.push(right)
    //                 break;
    //             }
    //         }else{
    //         result.push(right)
    //         break;
    //         }
    //     }      
    //     }else{
    //         result.push(right)
    //     }
    // }
    // return result;


    // SIMPLIFIED SOLUTION 

    let result = [asteroids[0]]

    for (let i = 1; i < asteroids.length; i++) {

        let right = asteroids[i]
        let survived = true;

            while (result.length > 0 && result[result.length-1] > 0 && right < 0) {
                let left=result[result.length-1];
                if (Math.abs(right) > left) {
                    result.pop()
                    
                } else if (Math.abs(right) == left) {
                    result.pop()
                    survived=false;
                    break;
                } else {
                    survived=false;
                    break;
                }
        
            }
        if(survived){
            result.push(right)
        }

    }
    return result;
};