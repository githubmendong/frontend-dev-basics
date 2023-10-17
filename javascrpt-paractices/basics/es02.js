/**
 * 변수와 자료형
 *
 * 기본 타입
 * -undefinned
 * -number
 * -string
 * -boolean
 *
 * 객체
 * - object
 * -function
 *
 */

console.log("=== 기본타입(undefined, number, string, boolean) ===")
// let myVariable;
// myVariable // reference error

var u = undefined; // var io 동일 자바스크립트는 정의와 선언을 구분하지 안는데.
var i = 10;
var s = 'Hello World';
var b = true;
//
// console.log( u + ":" + typeof (u));
// console.log( i + ":" + typeof (i));
// console.log( s + ":" + typeof (s));
// console.log( b + ":" + typeof (b));

console.log("=== 객체 타입 (object)====");
// let F = function (){
//     this.a = a;
// }
//
// let o = new F();
// console.log(typeof (o));


let i2 = Number(10);
let s2 = String('hello');
let b2 = Boolean(true);
let o = {};
let a = Array();
let d = Date();

console.log(i2 + ": " + typeof (i2) + ":" + (i2 instanceof (Number)));
console.log(s2 + ": " + typeof (s2) + ":" + (s2 instanceof (String)));
console.log(b2 + ": " + typeof (b2) + ":" + (b2 instanceof (Boolean)));
console.log(o + ": " + typeof (o) + ":" + (o instanceof (Object)));
console.log(a + ": " + typeof (a) + ":" + (a instanceof (Array)));
console.log(d + ": " + typeof (d) + ":" + (d instanceof (Date)));


console.log("=== 객체 타입 (function)====");
console.log("=== 객체 타입 (function)====");

// 유사객체
console.log("=== 윈사 타입도 메소드를 호출 할 수 있다. (유사 객체)====");
console.log(b2.valueOf());
console.log(b.valueOf());

