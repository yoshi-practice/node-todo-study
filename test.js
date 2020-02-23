'use strict';
const todo = require('./index');
const assert = require('assert');

todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う','鉛筆を買う']);

todo.done('ノートを買う');
todo.done('鉛筆を買う');
assert.deepEqual(todo.doneList(), ['ノートを買う', '鉛筆を買う']);

todo.del('ノートを買う');
console.log(todo.doneList());

console.log("File loaded, OK!");