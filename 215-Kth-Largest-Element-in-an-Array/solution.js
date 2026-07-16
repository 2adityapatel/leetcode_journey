/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let heap = []

    function insert(value) {

        heap.push(value);
        let index = heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (heap[parent] < heap[index]) break;

            [heap[parent], heap[index]] = [heap[index], heap[parent]];

            index = parent;

        }
    }

    function remove() {

        let root = heap[0];

        if (heap.length === 1) {
            heap.pop();
            return root;
        }

        heap[0] = heap.pop();

        let current = 0;

        while (true) {

            let left = (current * 2) + 1
            let right = (current * 2) + 2

            let smallerChild = current;

            if (left < heap.length && heap[left] < heap[smallerChild]) {
                smallerChild = left;
            }

            if (right < heap.length && heap[right] < heap[smallerChild]) {
                smallerChild = right;
            }

            if (current == smallerChild) break;

            [heap[current], heap[smallerChild]] = [heap[smallerChild], heap[current]]

            current = smallerChild;
        }

        return root;
    }

    function heapifyDown() {

        let current = 0;

        while (true) {

            let left = (current * 2) + 1
            let right = (current * 2) + 2

            let smallerChild = current;

            if (left < heap.length && heap[left] < heap[smallerChild]) {
                smallerChild = left;
            }

            if (right < heap.length && heap[right] < heap[smallerChild]) {
                smallerChild = right;
            }

            if (current == smallerChild) break;

            [heap[current], heap[smallerChild]] = [heap[smallerChild], heap[current]]

            current = smallerChild;
        }

    }

    // for (let num of nums) {

    //     if (heap.length < k)
    //         insert(num)
    //     else if (heap[0] < num) {
    //         remove()
    //         insert(num)
    //     }
    // }

    for (let num of nums) {

        if (heap.length < k)
            insert(num)
        else if (heap[0] < num) {
            heap[0] = num;
            heapifyDown();
        }
    }
    return heap[0];

};