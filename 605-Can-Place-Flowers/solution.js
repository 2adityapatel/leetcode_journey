/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if( n == 0){
        return true;
    }

    len = flowerbed.length

    if(len == 1 && flowerbed[0] == 0 && n == 1){        
        return true;
    }

    i = 0;
    while(i < len) {

        if (i == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0) {
            n--;
            flowerbed[i] = 1;
        }
        else if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            n--;
            flowerbed[i] = 1;
        }else if( i == (len-2) && flowerbed[i] == 0 && flowerbed[i+1] == 0) {
            n--;
            flowerbed[i] = 1;
        }else if((i+1) == len && flowerbed[i] == 0 && flowerbed[i-1] == 0 ){
            n--;
            flowerbed[i] = 1;
        }

        if(flowerbed[i+1] == 1) i+=3
        else i+=2

        if(n == 0){
            return true;
        }
    }

    return false;
};