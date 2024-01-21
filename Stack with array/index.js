const stack = []

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.pop()

// unshift insert element from start
// shift is use delete first element
stack.unshift(1)
stack.unshift(2)
stack.unshift(3)

stack.shift()
stack.shift()
stack.shift()
console.log(stack)