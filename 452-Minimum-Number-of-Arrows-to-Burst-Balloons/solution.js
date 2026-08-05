/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function (points) {

//     let minShots = 1;

//     points.sort((a, b) => a[0] - b[0])

//     let end = points[0][1]


//     for (let i = 1; i < points.length; i++) {


//         if (points[i][0] > end) {
//             minShots++;
//             end = points[i][1]
//         } else if (end > points[i][1]) {
//             end = points[i][1]
//         }

//     }

//     return minShots;
// };

var findMinArrowShots = function (points) {

    let minShots = 1;

    points.sort((a, b) => a[1] - b[1])

    let end = points[0][1]

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            minShots++;
            end = points[i][1]
        }
    }

    return minShots;
};