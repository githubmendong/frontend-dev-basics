/**
 * Array 확장 (prototype 기반의 확장)
 * 
 */

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        for(var i = 0; i < value.length; i++){
            this.splice(index+i, 0, value[i]);
        }
        var f = function(e){
            console.log(e);
        }
        value.forEach(f);
    }else{
        this.splice(index, 0, value);
    }
}


