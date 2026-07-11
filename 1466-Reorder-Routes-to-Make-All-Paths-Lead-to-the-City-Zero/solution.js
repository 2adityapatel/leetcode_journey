/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    
    const visited = []
    let reorders = 0;
    let adj=[]

    for(let i=0;i<n;i++){
        visited.push(false);
        adj.push([])
    }

    for(let j=0;j<connections.length;j++){
        const [from,to] = connections[j]
        adj[from].push([to,1])
        adj[to].push([from,0])
    }

    var dfs = function(node){

        visited[node] = true;

        for(let edge of adj[node]){
            let [nextCity, isOriginalDirection] = edge;
            if(!visited[nextCity]){
                if(isOriginalDirection) reorders++;
                dfs(nextCity)
            }
        }
    }
    dfs(0)

    return reorders;
};