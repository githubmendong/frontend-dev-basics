/**
 * 변수와 자료형
 *
 * 기본타입
 * - undefined
 * - number
 * - string
 * - boolean
 *
 * 객체
 * - object
 * - function
 *
 *
 */

console.log("=== 기본타입(undefined, number, string, boolean) ======")
// myVariable      // reference error
var u = undefined; // var u; 동일, 자바스크립트는 정의와 선언을 구분하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체타입(object) ======")
var i2 = new Number(10);
var s2 = new String('hello');
var b2 = new Boolean(true);

var o = new Object();
var a = new Array();
var re = new RegExp();
var d = new Date();
var o2 = {};
var a2 = [];
var re2 = /^js$/gi;
var n = null;

console.log(i2 + ":" + typeof(i2) + ":" + (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2) + ":" + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log(o  + ":" + typeof(o)  + ":" + (o instanceof(Object)));
console.log(a  + ":" + typeof(a)  + ":" + (a instanceof(Array)));
console.log(d  + ":" + typeof(d)  + ":" + (d instanceof(Date)));
console.log(a  + ":" + typeof(a)  + ":" + (a instanceof(Array)));
console.log(d  + ":" + typeof(d)  + ":" + (d instanceof(Date)));
console.log(o2  + ":" + typeof(o2)  + ":" + (o2 instanceof(Object)));
console.log(a2  + ":" + typeof(a2)  + ":" + (a2 instanceof(Array)));
console.log(re2 + ":" + typeof(re2)  + ":" + (re2 instanceof(RegExp)));
console.log(n   + ":" + typeof(n));

console.log("=== 객체타입(function) ======");

function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}

var f3 = new Function('a', 'b', 'return a+b;');

console.log(f1(10, 20) + ":" + typeof(f1)  + ":" + (f1 instanceof(Function)));
console.log(f2(10, 20) + ":" + typeof(f2)  + ":" + (f2 instanceof(Function)));
console.log(f3(10, 20) + ":" + typeof(f3)  + ":" + (f3 instanceof(Function)));


// 유사 객체
console.log("=== 원시 타입도 메소드를 호출 할 수 있다.(유사객체) ======");
console.log(b2.valueOf());
console.log(b.valueOf());   // console.log(new Boolen(b).valueOf())