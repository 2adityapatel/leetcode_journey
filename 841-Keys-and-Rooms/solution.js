/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// var canVisitAllRooms = function(rooms) {

//     let visited = []

//     for(let i=0;i<rooms.length;i++) visited.push(false);

//     canVisit(0, rooms, visited)

//     return !visited.includes(false);
// };

// var canVisit = function(node, rooms, visited){

//     visited[node] = true;

//     for(let neighbor of rooms[node]){
//         if(!visited[neighbor]){
//             canVisit(neighbor, rooms, visited)
//         }
//     }

// }



var canVisitAllRooms = function (rooms) {

    const visited = new Array(rooms.length).fill(false)
    let count = 0;

    var canVisit = function (node) {

        visited[node] = true;
        count++;

        for (let neighbor of rooms[node]) {
            if (!visited[neighbor]) {
                canVisit(neighbor)
            }
        }
    }

    canVisit(0)

    return count == visited.length;
};