'use strict';
const todo = require('./index');
const assert = require('assert');

todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う','鉛筆を買う']);

console.log("File loaded, OK!");