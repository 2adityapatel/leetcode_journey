/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

    const adjGraph = new Map();
    const result = [];

    for (let i = 0; i < equations.length; i++) {

        let [from, to] = equations[i]

        if (!adjGraph.has(from)) {
            adjGraph.set(from, [])
        }
        adjGraph.get(from).push([to, values[i]])


        if (!adjGraph.get(to)) {
            adjGraph.set(to, [])
        }
        adjGraph.get(to).push([from, (1 / values[i])])


    }


    var dfs = function (source, destination, visited) {

        visited.add(source)

        let neighbors = adjGraph.get(source);


        for (let [node, value] of neighbors) {

            if (!visited.has(node)) {

                if (node == destination) {
                    return value;
                }
                ans = dfs(node, destination, visited)

                if(ans != -1) return value*ans;
            }
        }
        return -1;

    }

    for (let j = 0; j < queries.length; j++) {
        const visited = new Set();
        
        if (!adjGraph.has(queries[j][0]) || !adjGraph.has(queries[j][1])) {
            result.push(-1)
        }else if(queries[j][0] == queries[j][1]) {
            result.push(1)
        }else {
            multiply = dfs(queries[j][0], queries[j][1], visited)
            result.push(multiply)
        }
    }

    return result;
};