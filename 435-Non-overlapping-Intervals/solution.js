/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    let minRemovals = 0;

    intervals.sort((a,b) => a[1] - b[1])

    let prevEnd = intervals[0][1]

    for(let i=1; i<intervals.length; i++){
        if(prevEnd > intervals[i][0] ) minRemovals++;
        else prevEnd = intervals[i][1]
    }

    return minRemovals;
    
};