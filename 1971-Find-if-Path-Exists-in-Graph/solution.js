/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    const adj = [];
    const visited = [];

    for(let i=0;i<n;i++){ 
        adj.push([]);
        visited.push(false);
    }

    for(let j=0;j<edges.length;j++){
        const [u,v] = edges[j];
        adj[u].push(v);
        adj[v].push(u);
    }

    return checkNode(source, adj, visited, destination);
};

var checkNode = function(node, adj, visited, destination){
    
    visited[node] = true;

    if(node == destination) return true;

    for(let neighbor of adj[node]){
        if(!visited[neighbor] && checkNode(neighbor, adj, visited, destination)) return true
    }

    return false;
}

