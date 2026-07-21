/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
 let storage = []

    var recursive = function (n) {

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        if (n == 2) {
            return 1;
        }

        if (storage[n] != undefined) return storage[n]

        let x, y,z;

        x = recursive(n - 1);
        y = recursive(n - 2);
        z = recursive(n - 3);

        storage[n] = (x + y + z)

        return storage[n];

    }

    return recursive(n)
    
};