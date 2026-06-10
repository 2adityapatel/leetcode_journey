/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    let highestGain = 0;
    let netGain = 0;

    for(i=0;i<gain.length;i++){
        netGain += gain[i]
        if (netGain > highestGain) highestGain = netGain;
    }
    
    return highestGain;
};