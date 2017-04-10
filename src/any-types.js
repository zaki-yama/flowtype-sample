// @flow
/* eslint-disable */
function add(one: any, two: any): number {
  return one + two;
}

add(1, 2);
add('1', '2');
add({}, []);


function fn(obj: any) {
  let foo: number /* (:any) */ = obj.foo;
}
