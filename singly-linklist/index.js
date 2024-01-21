class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        var newNode = new node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse() {
        var current = this.head;
        while (current) {
            current = current.next
        }
    }
    pop() {
        if (!this.head) return undefined
        var current = this.head
        var newtail = current
        while (current.next) {
            newtail = current
            current = current.next
        }
        this.tail = newtail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    unshift(val) {
        var newNode = new node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(val) {
        if (val < 0 || val >= this.length) return null
        let counter = 0
        var current = this.head
        while (counter !== val) {
            current = current.next
            counter++
        }
        console.log(current)
        return current
    }
    set(val, index) {
        let selectednode = this.get(index)
        if (selectednode) {
            selectednode.val = val
            console.log(selectednode)
            return true
        }
        return false
    }
    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.push(val)
        }
        if (index === 0) {
            this.unshift(val)
        }
        let newNode = new node(val)
        let pre = this.get(index - 1)
        let temp = pre.next
        newNode.next = temp
        pre.next = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === this.length - 1) {
            this.pop()
        }
        else if (index === 0) {
            this.shift()
        }
        else {
            let pre = this.get(index - 1)
            var removed = pre.next
            pre.next = removed.next
            // let pre = this.get(index - 1)
            // let nextone = this.get(index)
            // pre.next = nextone.next
            console.log(removed)
            this.length--
            return removed
        }
    }
    reverse() {
        var node = this.head
        this.head = this.tail
        this.tail = node
        var next
        var prev = null
        for (var i = 0; i < this.length; i++) {
            // next = 1 index element
            next = node.next;
            // node.next = null
            node.next = prev
            //prev = head
            prev = node
            //head = next
            node = next
        }
        return this
    }
    print() {
        var arr = []
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

let list = new singlyLinkList()
list.push("hello")
list.push("hello1")
list.push("hello2")
list.insert("asdfasf", 1)
list.reverse()
list.print()
// console.log(list.traverse())
// list.remove(1)
// list.set('papa', 1)
// list.get(0)
// list.pop()
// list.shift()
// list.unshift("asdf")
console.log(list)
// newNode.val = 1
// newNode.next = 1
// newNode.val = 2
// newNode.next.next = 2
