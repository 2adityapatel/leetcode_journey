/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {

    const rows = maze.length;
    const cols = maze[0].length;

    const queue = [];

    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];

    let front = 0;

    queue.push([...entrance, 0])
    maze[entrance[0]][entrance[1]] = '+';

    while (front < queue.length) {

        let [x, y, z] = queue[front++]

        for (let i = 0; i < directions.length; i++) {

            let [dr, dc] = directions[i];

            let row = dr + x, col = dc + y;

            if ((row >= 0 && row < rows) && (col >= 0 && col < cols) && maze[row][col] == '.') {

                let distance = z + 1;

                if ((row == (rows - 1) || row == 0) || (col == (cols - 1) || col == 0)) {
                    return distance;
                }

                queue.push([row, col, distance])
                maze[row][col] = "+"
            }
        }
    }

    return -1;
};