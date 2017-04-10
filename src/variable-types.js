// @flow
/* eslint-disable */
var varVariable = 1;
let letVariable = 1;
const constVariable = 1;

varVariable = 1;
letVariable = 1;
// constVariable = 1; // Error

let foo = 42;
if (Math.random()) foo = true;
if (Math.random()) foo = 'hello';

let isOneOf: number | boolean | string = foo;
