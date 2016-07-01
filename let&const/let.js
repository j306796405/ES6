/**
 * FileName let
 * Date 2016-06-08
 * Created by jianglinj
 */
'use strict';
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(window.a); // 1
console.log('hello');

let b = 1;
console.log(window.b); // undefined