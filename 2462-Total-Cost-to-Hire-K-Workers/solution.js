/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {


    const leftHeap = new MinPriorityQueue();
    const rightHeap = new MinPriorityQueue();
    let n = costs.length;
    let result = 0;

    let left = candidates-1;
    let right = n - candidates;



    if (n < 2 * candidates) {

        for (let i = 0; i < n; i++) leftHeap.enqueue(costs[i])

    } else {

        for (let i = 0; i < candidates; i++) {
            leftHeap.enqueue(costs[i])
            rightHeap.enqueue(costs[n - i - 1])
        }

    }

    while (k > 0) {

        let leftSmallest = leftHeap.front() || Infinity;
        let rightSmallest = rightHeap.front() || Infinity;

        if (!rightHeap.size()) {

            result += leftSmallest
            leftHeap.dequeue()
            if (left+1 <= right) {
                left++;
                leftHeap.enqueue(costs[left])
            }

        } else {

            if ( leftSmallest <= rightSmallest) {
                result += leftSmallest
                leftHeap.dequeue()
                if (left+1 < right) {
                    left++;
                    leftHeap.enqueue(costs[left])
                }

            } else {
                result += rightSmallest
                rightHeap.dequeue()
                if (left < right-1) {
                    right--;
                    rightHeap.enqueue(costs[right])
                }

            }
        }
        k--;
    }

    return result;

};