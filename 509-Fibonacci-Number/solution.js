/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

    let storage = []

    var recursive = function (n) {

        if (n <= 1) {
            return n;
        }

        if (storage[n] != undefined) return storage[n]

        let x, y;

        x = recursive(n - 1);
        y = recursive(n - 2);

        storage[n] = (x + y)

        return storage[n];

    }

    return recursive(n)

};