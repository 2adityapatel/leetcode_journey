/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let fIndex = 0
    let lIndex = height.length-1;
    let maxWater = 0;

    while( fIndex < lIndex ){

        let i1 = height[fIndex];
        let i2 = height[lIndex];
        let waterContains = 0;

        // console.log("-----------------------------")
        // console.log(i1 + " - " + i2)

        if(i1 > i2){
            waterContains = (lIndex-fIndex) * i2;
            lIndex--;
        }else{
            waterContains = (lIndex-fIndex) * i1;
            fIndex++;
        }
        
        // console.log(waterContains + " - " + maxWater)
        // console.log("-----------------------------")

        if(waterContains > maxWater) maxWater = waterContains;

    } 
    // console.log(maxWater);
    return maxWater;
};