/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {

    let minFlips = 0;

    for (let i = 0; i < 32; i++) {

        aBit = a & (1 << i)
        bBit = b & (1 << i)
        cBit = c & (1 << i)

        if ( (aBit !== 0 && bBit !== 0 ) && ( ( aBit | bBit ) !== cBit ) ) minFlips+=2;
        else if( ( aBit | bBit ) != cBit ) minFlips++;

    }

    return minFlips;

};


// var minFlips = function (a, b, c) {
//     let flips = 0;

//     while (a !== 0 || b !== 0 || c !== 0) {
//         const aBit = a & 1;
//         const bBit = b & 1;
//         const cBit = c & 1;

//         if ((aBit | bBit) !== cBit) {
//             if (cBit === 1) {
//                 flips++;
//             } else {
//                 flips += aBit + bBit;
//             }
//         }

//         a >>= 1;
//         b >>= 1;
//         c >>= 1;
//     }

//     return flips;
// };