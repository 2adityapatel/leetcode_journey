/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {

    let result = 0;
    let totalSum = 0;
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

    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val])
    merged.sort((a, b) => b[0] - a[0])

    for (const [maxOf2, num1Val] of merged) {
        if (heap.length === k) {
            totalSum -= remove()
        }

        totalSum += num1Val
        insert(num1Val)

        if (heap.length === k) {
            result = Math.max(result, totalSum * maxOf2)
        }

    }

    return result
};