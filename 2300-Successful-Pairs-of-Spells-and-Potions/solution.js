/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {

    potions = potions.sort((a, b) => a - b)

    let pairs = []
    let m = potions.length;

    for (let i = 0; i < spells.length; i++) {

        let startIndex = m;
        let low = 0;
        let high = potions.length - 1
        let mid = Math.floor((low + high) / 2)

        while (low <= high) {

            let mix = potions[mid] * spells[i];
            if (mix >= success) {
                startIndex = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
            mid = Math.floor((low + high) / 2);
        }
        pairs.push(m - startIndex);
    }

    // BRUTE FORCE
    // for(let i=0;i<spells.length;i++){
    //     let winPotions = 0;
    //     for(let j=0;j<potions.length;j++){
    //         if(spells[i]*potions[j] >= success){
    //             winPotions += 1                
    //         }
    //     }
    //     pairs.push(winPotions)
    // }

    return pairs;


};