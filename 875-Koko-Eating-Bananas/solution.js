/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    let low = 1;
    let high = Math.max(...piles)

    while (low < high) {

        let mid = Math.floor((low + high) / 2)
        let hour_taken = 0

        for (let i = 0; i < piles.length; i++) {
            hour_taken += Math.ceil(piles[i] / mid)
        }

        if (hour_taken > h) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low;
};