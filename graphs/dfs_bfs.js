/*
DFS - Depth First Search - recursion
BFS - Breadth First Search - queue

Graph
V - vertices (node)
E - edges (грань)

Directed
Undirected

Weighted
Unweighted 

Cyclic
Acyclic

Adjacency (смежная): graphs with lots of edges fare better as matrices and graphs with fewer edges fare better as lists
Adjacency list
Adjacency matrix
*/

// a => b => c
const undirectedGraph = {
    a: ['b'],
    b: ['a', 'c'],
    c: ['b']
}

const routes = {
    Oakland: ['SF', 'Berkeley', 'San Jose'],
    SF: ['Sausalito', 'Los Angles'],
    Sausalito: ['New York', 'Austin'],
}

// visitedNotes = { Oakland: true, SF: true, Sausalito: true }

const dfs = (nodeList, visitedNotes = {}) => {
    const nodes = Object.keys(nodeList);

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!visitedNotes[node]) {
            visitedNotes[node] = true;
            return dfs(nodeList[node], visitedNotes);
        }
    }

    return {
        visitedNotes,
    }
}

console.log("[Client debug] ", dfs(routes))

// class Graph {
//     constructor() {
//         this.nodeList = {};
//     }
//
//     addVertex = vertex => {
//         this.nodeList[vertex] = [];
//     }
//
//     addEdge = (vertex1, vertex2) => {
//         this.nodeList[vertex1].push(vertex2);
//     }
// }


