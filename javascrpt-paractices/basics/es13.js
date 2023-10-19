/**
 * Array 확장(prototype 기반의 확장)
 *
 */

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }

        console.log(this);

        value.forEach(function(e){
            console.log(this);
            // this.splice(index++, 0, e);
        });
    } else {
        this.splice(index, 0, value);
    }
}


// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);


// 4. encodeURIComponent 사용 예
// 만들어야 하는 url : "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com"

var url = "http://www.mysite.com/user";
var formData = {
    name : "둘리",
    email: "dooly@gmail.com"
}

var toQueryString = function(o){
    var qs = [];
    for(let prop in o){
        qs.push(ptop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

console.log(url+"?"+toQueryString(formData));
console.log(`${url}?${toQueryString(formData)}`);