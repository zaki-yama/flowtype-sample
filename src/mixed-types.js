// @flow
/* eslint-disable */
function stringifyBasicValue(value: string | number | boolean) {
  return '' + value;
}

function identity<T>(value: T): T {
  return value;
}


/* arbitrary type */
function getTypeOf(value: mixed): string {
  return typeof value;
}

function stringify(value: mixed) {
  if (typeof value === 'string') {
    return '' + value;
  } else {
    return '';
  }
}

stringify('foo');
