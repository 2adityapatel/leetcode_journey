/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let occurencies = {}

    for(i=0; i<arr.length;i++){
        if(!occurencies[arr[i]]){
            occurencies[arr[i]] = 1
        }
        occurencies[arr[i]] += 1
    }

    values = Object.values(occurencies)
    set = new Set(values)

    return set.size == values.length;
};