class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        }
        else {
            var current = this.root
            while (true) {
                if (val === current.value) {
                    return undefined
                }
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        console.log(this)
                        return this
                    }
                    else {
                        current = current.left
                    }
                }
                else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        console.log(this)
                        return this
                    }
                    else {
                        current = current.right
                    }
                }
            }
        }
        console.log(this)
    }
    search(val) {
        if (!this.root) return "tree is empty"
        var current = this.root
        var find = false
        while (current && !find) {
            if (val > current.value) {
                current = current.right
            }
            else if (val < current.value) {
                current = current.left
            } else {
                find = true

            }
        }
        console.log(current)
        return current
    }
    BreathFirstSearch() {
        var node = this.root, data = [], queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

        }
        console.log(data)
        return data
    }
    DepthFirstSearch_Pre_Orderd() {

        var visitedNode = [], current = this.root;
        function helper(node) {
            visitedNode.push(node.value)
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
            return visitedNode
        }
        helper(current)
        return visitedNode
    }
    DepthFirstSearch_Post_Order() {
        var visitedNode = [];
        function helper(node) {
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
            visitedNode.push(node.value)
        }
        helper(this.root)
        console.log(visitedNode);
        return visitedNode
    }
    DepthFirstSearch_In_Order() {
        var visitedNode = [];
        function helper(node) {
            if (node.left) helper(node.left)
            visitedNode.push(node.value)
            if (node.right) helper(node.right)
        }
        helper(this.root)
        console.log(visitedNode)
        return visitedNode
    }
}

var BST = new BinarySearchTree();
BST.insert(100)
BST.insert(99)
BST.insert(98)
BST.insert(102)
BST.insert(101)
// BST.DepthFirstSearch_Pre_Orderd()
// BST.DepthFirstSearch_Post_Order()
BST.DepthFirstSearch_In_Order()
// BST.BreathFirstSearch()
// BST.search(1)

