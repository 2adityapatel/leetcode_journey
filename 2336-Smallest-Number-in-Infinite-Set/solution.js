
var SmallestInfiniteSet = function () {

    this.set = new Set();
    this.heap = []
    this.current = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {

    let popped;

    if (this.heap.length > 0) {
        popped = this.heap[0];

        if (this.heap.length == 1) {
            this.heap.pop()
            this.set.delete(popped);
            return popped;
        }

        this.heap[0] = this.heap.pop();
        let current = 0;

        while (true) {

            let leftChild = current * 2 + 1;
            let rightChild = current * 2 + 2;

            let smallerChild = current;

            if (leftChild < this.heap.length && this.heap[smallerChild] > this.heap[leftChild]) {
                smallerChild = leftChild
            }
            if (rightChild < this.heap.length && this.heap[smallerChild] > this.heap[rightChild]) {
                smallerChild = rightChild
            }

            if (current == smallerChild) break;

            [this.heap[smallerChild], this.heap[current]] = [this.heap[current], this.heap[smallerChild]]

            current = smallerChild

        }

        this.set.delete(popped)

    } else {
        popped = this.current++;
    }

    return popped;

};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {

    // console.log("addback calld....")

    if (num >= this.current) return;

    if (this.set.has(num)) return;

    this.set.add(num)

    this.heap.push(num);

    let current = this.heap.length - 1

    while (current > 0) {

        let parent = Math.floor((current - 1) / 2)

        if (this.heap[parent] <= this.heap[current]) break;

        [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]]

        current = parent;
    }


};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */