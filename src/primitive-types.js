// @flow
/* eslint-disable */

/* Boolean */
function acceptsBoolean(value: boolean) {
  console.log(value);
}

acceptsBoolean(true);
acceptsBoolean(false);
// acceptsBoolean('foo'); // Error

// acceptsBoolean(0); // Error
acceptsBoolean(!!0); // !!をつけると OK

/* number */
function acceptsNumber(value: number) {
  console.log(value);
}

acceptsNumber(42);
acceptsNumber(3.14);
acceptsNumber(NaN);
acceptsNumber(Infinity);
// acceptsNumber('foo'); Error

// const value: string = 'foo' + {}; Error

/* null and undefined */
function acceptsNull(value: null) {
}

function acceptsUndefined(value: void) {
}

acceptsNull(null);
// acceptsNull(undefined); Error
// acceptsUndefined(null); Error
acceptsUndefined(undefined);

/* maybe types */
function acceptsMaybeString(value: ?string) {
}

acceptsNumber

/* optional object properties */
function acceptsObject(value: { optionalProp?: string }) {
}

acceptsObject({ optionalProp: 'bar' });
acceptsObject({ optionalProp: undefined });
// acceptsObject({ optionalProp: null }); Error
acceptsObject({});
acceptsObject({ bar: 'foo' });

/* optional function parameters */
function acceptsOptionalString(param?: string) {
}

acceptsOptionalString('bar');
acceptsOptionalString(undefined);
// acceptsOptionalString(null); Error
acceptsOptionalString();
