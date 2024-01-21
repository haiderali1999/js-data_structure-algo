class MaxBinaryHeap {
    constructor() {
        this.values = [41, 49, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            const parentElement = this.values[parentIdx]
            if (element <= parentElement) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElement
            idx = parentIdx
        }
        console.log(this.values)
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild;
            let swap = null;
            /*[1,2,3] if we find the right child of 2 
            this gone break code because it does not child in 2(1) + 2 */
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (element > leftChild) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = this.values[idx];
            idx = swap;
        }
    }
    // extractMax() {
    //     let heapLen = this.values.length;
    //     this.swap(0, heapLen - 1, this.values)
    //     let oldRoot = this.values.pop()
    //     console.log(this.values)
    //     this.sinkDown()
    //     return oldRoot
    // }
    //haider solution
    // sinkDown() {
    //     let arr = this.values
    //     let rootIdx = 0;
    //     let leftChildIdx = Math.floor((2 * rootIdx) + 1);
    //     let rightChildIdx = Math.floor((2 * rootIdx) + 2);
    //     while (arr[rootIdx] < arr[leftChildIdx] || arr[rootIdx] < arr[rightChildIdx]) {
    //         if (arr[leftChildIdx] > arr[rightChildIdx]) {
    //             this.swap(rootIdx, leftChildIdx, this.values)
    //             rootIdx = leftChildIdx;
    //         }
    //         else if (arr[leftChildIdx] < arr[rightChildIdx]) {
    //             this.swap(rootIdx, rightChildIdx, this.values)
    //             rootIdx = rightChildIdx;
    //         }
    //         else {
    //             break;
    //         }
    //     }
    // }
    swap(idx1, idx2, arr) {
        return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
}

// const heap = new MaxBinaryHeap()
// heap.insert(123)
// heap.insert(122)
// heap.insert(121)
// heap.extractMax()

class PriortyQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priorty) {
        const newNode = new Node(val, priorty)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        let element = this.values[idx]
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (parent.priorty <= element.priorty) break;
            this.swap(idx, parentIdx, this.values)
            idx = parentIdx;
        }
    }
    swap(i, j, arr) {
        return [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        console.log(this.values)
        return min
    }
    sinkDown() {
        let idx = 0;
        let length = this.values.length - 1;
        let element = this.values[idx]

        while (true) {
            let leftIdx = 2 * idx + 1
            let rightIdx = 2 * idx + 2
            let leftChild, rightChild;
            let swap = null;
            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (element.priorty > leftChild.priorty) {
                    swap = leftIdx;
                }
            }
            if ((swap === null && rightIdx < length) || (swap !== null && rightIdx > leftIdx)) {
                rightChild = this.values[rightIdx]
                if (element.priorty > rightChild.priorty) {
                    swap = rightIdx
                }
            }

            if (swap === null) break;
            this.swap(idx, swap, this.values)
            idx = swap
        }
    }

}


class Node {
    constructor(val, priorty) {
        this.val = val;
        this.priorty = priorty;
    }
}

const priortyQueue = new PriortyQueue()
// priortyQueue.enqueue("cold fever", 5)
// priortyQueue.enqueue("high fever", 4)
priortyQueue.enqueue("medium fever", 3)
priortyQueue.enqueue("low fever", 2)
priortyQueue.enqueue("gun shot fever", 1)
priortyQueue.dequeue()
priortyQueue.dequeue()
priortyQueue.dequeue()