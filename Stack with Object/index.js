class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.start) {
            this.start = newNode;
            this.end = newNode;
        }
        else {
            var temp = this.start;
            this.start = newNode;
            this.start.next = temp;
        }
        this.size++
        console.log(this)
        return this;
    }
    pop() {
        if (!this.start) return null
        if (this.start === this.end) {
            this.end = null
        }
        this.start = this.start.next
        this.size--
        return this
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()
stack.pop()
stack.pop()