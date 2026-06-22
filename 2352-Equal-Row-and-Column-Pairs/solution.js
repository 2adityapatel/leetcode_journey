/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
    let count = 0;
    let columnHash = {};

    for( let i = 0; i < grid.length; i++ ){
        let key = "";
        for(let j = 0; j<grid.length;j++){
            key += grid[j][i] + "_";
        }
        
        if(columnHash[key]){
            columnHash[key] += 1;
        }else{
            columnHash[key] = 1
        }
    }

    for( row of grid ){
        let rowKey = row.join("_") + "_";

        if(columnHash[rowKey]){
            count += columnHash[rowKey]
        }
    }

    return count;
};