
var RecentCounter = function() {
    this.requests = []
    this.start = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {

    this.requests.push(t);

    for(i=this.start;i<this.requests.length;i++){
        if( this.requests[i] >= (t-3000) ){
            this.start=i;
            break;
        }
    }

    return this.requests.length - this.start;

    
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */