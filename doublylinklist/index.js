class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkLisk {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        console.log(this)
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            var tail = this.tail
            this.tail = tail.prev
            this.tail.next = null
            tail.prev = null
        }
        this.length--
        return tail
    }
    shift() {
        if (this.length === 0) return undefined
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        console.log(this)
        return oldHead
    }
    unshift(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++
        return newNode
    }
    get(index) {
        if (index > this.length || this.length < index || this.length === index) return null
        var middle = Math.floor(this.length / 2)
        var count, current;
        // iterate from head
        if (index <= middle) {
            count = 0;
            current = this.head
            while (count !== index) {
                // current.next because when element match the index it does not enter in the loop
                // but we need next element our current set to next

                current = current.next
                count++
            }
        }
        else {
            count = this.length - 1;
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
            // iterate from tail
        }
        return current
    }
    set(index, val) {
        var foundNode = this.get(index)
        if (foundNode !== null) {
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            this.unshift(val)
            this.length++
            return this
        }
        if (index === this.length) {
            this.push(val)
            this.length++
            return this
        }
        //  1-><-2-><-3
        // 	1-><-tic-><-2-><-3
        let findNode = this.get(index)
        let newNode = new Node(val)
        findNode.prev.next = newNode
        newNode.prev = findNode.prev
        findNode.prev = newNode
        newNode.next = findNode
        this.length++
        return this
        // console.log(this)
        // console.log(findNode)
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedItem = this.get(index)
        removedItem.prev.next = removedItem.next
        removedItem.next.prev = removedItem.prev
        removedItem.next = null
        removedItem.prev = null
        return removedItem
    }
    traverse() {
        let count = 0;
        let item = this.head
        while (count !== this.length) {
            if (count === 0) {
                console.log(item)
            }
            else {
                console.log(item = item.next)
            }
            count++
        }
    }
    reverse() {
        let count = this.length;
        let item = this.tail;
        while (count !== 0) {
            if (count === this.length) {
                console.log(this.tail)
            }
            else {
                console.log(item = item.prev)
            }
            count--
        }
    }
}

doubly = new DoublyLinkLisk()

doubly.push(1)
doubly.push(2)
doubly.push(3)
doubly.traverse()
doubly.reverse()
doubly.remove(1)
// doubly.set(3, 13.5)
// doubly.insert(1, "tic tac to")
// doubly.insert(1, "before tic tac to")
// doubly.shift()
// doubly.unshift(10)
doubly.get(2)
// doubly.pop()
// doubly.pop()
// doubly.pop()
