// @flow
/* eslint-disable */

var obj = { foo: 'bar' };
obj.foo;
// obj.bar; // Error

/* optional properties */
var obj2: { foo?: boolean } = {};
obj2.foo = true;
// obj2.foo = 'hello'; // Error

// NOTE: Maybe Types (変数の前に?) と違い、null は許容しない
function acceptsObject(value: { optionalProp?: string }) {
  // ...
}

acceptsObject({ foo: 'bar' });
acceptsObject({ optionalProp: 'bar' });
acceptsObject({ optionalProp: undefined });
// acceptsObject({ optionalProp: null }); // Error
acceptsObject({});

/* Sealed objects */
var obj = {
  foo: 1,
  bar: true,
  baz: 'three',
};

var foo: number = obj.foo;
var bar: boolean = obj.bar;
// var baz: null = obj.baz; // Error
// var bat: string = obj.bat; // Error

/* Unsealed objects */
// NOTE: プロパティなしの空の object の場合、後からプロパティを追加できる
var obj = {};

obj.foo = 1;

/* Exact object types */
// var obj: {| foo: string |} = { foo: 'Hello', bar: 'World!' }; // Error

/* Objects as maps(indexer property) */
var o: { [string]: number } = {};
o['foo'] = 0;
o['bar'] = 1;
// o['baz'] = 'hello'; // Error
var foo: number = o['foo'];
