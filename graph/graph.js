class graph {
    //undirected graph
    constructor() {
        // use to stores edges of graph
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList.length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
        // for (let key in this.adjacencyList) {
        //     this.adjacencyList[key] = this.adjacencyList[key].filter(_v => _v !== vertex);
        // }
        // delete this.adjacencyList[vertex]
    }
    view() {
        console.log(this.adjacencyList)
    }
    deptFirstRecursively(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor)
                }
            })
        })(start)
        return result
    }
    // haider solution
    deptFirstIteratively(start) {
        const result = [];
        const visited = {};
        const stack = [start]
        const adjacencyList = this.adjacencyList;
        result.push(start)
        while (stack.length > 0) {
            const vertex = stack.pop()
            if (!vertex) return null;
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    stack.push(neighbor)
                    result.push(neighbor)
                    visited[neighbor] = true
                }
            })
        }
        return result
    }
    // teacher solution
    tdeptFirstIteratively(start) {
        const stack = [start]
        const result = [];
        const visited = {};
        visited[start] = true;
        const adjacencyList = this.adjacencyList;

        while (stack.length > 0) {
            const currentVertex = stack.pop()
            result.push(currentVertex)
            adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    breathFirstTraversal(start) {
        const queue = [start];
        const result = [];
        const visted = {};
        let currentVertex;
        visted[start] = true;

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visted[neighbor]) {
                    visted[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

const g = new graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.deptFirstRecursively("A")
g.deptFirstIteratively("A")
g.tdeptFirstIteratively("A")
g.breathFirstTraversal("A")
// g.removeEdge("hello", "hello2")
// g.view()
// g.deptFirstRecursively("hello")
