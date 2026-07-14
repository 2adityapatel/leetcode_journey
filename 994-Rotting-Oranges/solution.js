/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    const rows = grid.length;
    const cols = grid[0].length;
    const arr = [[0,1],[0,-1],[1,0],[-1,0]]

    const queue = []
    let front = 0;
    let minutes = 0;
    let oranges = 0;
    let waveEnd = front;


    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j] == 2) queue.push([i,j])
            if(grid[i][j] == 1) oranges++;
        }
    }

    while(front < queue.length){


        let levelSize = queue.length - front;
        let infected = false;

        for(let l=0;l<levelSize;l++){

                    let [i,j] = queue[front++]; 


        for(let k=0; k<4;k++){
            let row = arr[k][0] + i, col = arr[k][1] + j;
            if((row >= 0 && row < rows) && (col>=0 && col < cols) && grid[row][col] == 1){
                queue.push([row,col])
                grid[row][col] = 2;
                oranges--;
                infected=true
            }
        }

        }

        if(infected) minutes++;

    }

    if(oranges) return -1;
    return minutes;    
};