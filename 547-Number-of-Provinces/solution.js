/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {

    let n = isConnected.length;
    let visited = new Array(n).fill(false)
    let provinceCount = 0;

    var checkVisit = function(node){
        
        visited[node] = true;

        for(let j=0;j<n;j++){
            if(isConnected[node][j] == 1 && !visited[j]){
                checkVisit(j);
            }
        }
    }

    for(let i=0;i<n;i++){

        if(!visited[i]){
            provinceCount++;
            checkVisit(i)
        }
    }

    return provinceCount;
    
};