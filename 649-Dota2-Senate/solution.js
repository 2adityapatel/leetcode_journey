/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {

    let R = 0;
    let D = 0;
    let R_removed = 0;
    let D_removed = 0;

    let vorterQ = [];

    for( voter of senate ){
        if(voter == "R") R++;
        else D++; 
    }

    while( R > 0 && D > 0){

        let remainingVoters=[]

        for(let i=0; i<senate.length; i++){
            if(senate[i] == "R" ){
                if(R_removed == 0 && D <= 0) return "Radiant";
                else if(R_removed == 0 && D > 0){
                    D_removed++;
                    remainingVoters.push(senate[i])
                }
                else{
                    R--;
                    R_removed--;
                }
            }else if(senate[i] == "D" ){
                if(D_removed == 0 && R <= 0) return "Dire";
                else if(D_removed == 0 && R > 0){
                    R_removed++;
                    remainingVoters.push(senate[i])
                }
                else{
                    D--;
                    D_removed--;   
                }
            }

        }
        senate = remainingVoters;
    }


    if(R > 0){
        return "Radiant"
    }else{
        return "Dire"
    }

};