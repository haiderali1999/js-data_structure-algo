class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    enqueque(val) {
        let newNode = new Node(val)
        if (!this.start) {
            this.start = newNode
            this.end = newNode
        }
        else {
            // update in the start.next with by reference updating
            this.end.next = newNode
            // update the last element with end
            this.end = newNode
        }
        this.length++
        console.log(this)
        return this
    }
    dequeue() {
        if (!this.start) return null
        let temp = this.start
        if (this.start === this.end) {
            this.end = null
        }
        this.start = this.start.next
        this.size--
        return temp
    }
}

const queue = new Queue()

queue.enqueque(1)
queue.enqueque(2)
queue.enqueque(3)
queue.dequeue()
queue.dequeue()
queue.dequeue()