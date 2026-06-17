/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if(word1.length != word2.length){
        return false;
    }

    // let h1 = {}
    // let h2 = {}

    // for(let i=0; i<word1.length;i++){

    //     if(!h1[word1[i]]) h1[word1[i]]=1;
    //     else h1[word1[i]]++

    //     if(!h2[word2[i]]) h2[word2[i]]=1;
    //     else h2[word2[i]]++
        
    // } 

    // for( let key of  Object.keys(h1)){
    //     if(!h2[key]) return false
    // }

    // arr1 = Object.values(h1).sort()
    // arr2 = Object.values(h2).sort()

    // for(let j=0;j<arr1.length;j++){
    //     if(arr1[j] != arr2[j]) return false
    // }
    // return true

    const h1 = new Map();
    const h2 = new Map();

for (let i = 0; i < word1.length; i++) {
    h1.set(word1[i], (h1.get(word1[i]) || 0) + 1);
    h2.set(word2[i], (h2.get(word2[i]) || 0) + 1);
}

     for( let key of  h1.keys()){
        if(!h2.has(key)) return false
    }

    arr1 = [...h1.values()].sort()
    arr2 = [...h2.values()].sort()

    for(let j=0;j<arr1.length;j++){
        if(arr1[j] != arr2[j]) return false
    }
    return true
    
};