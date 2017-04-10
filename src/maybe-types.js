// @flow
/* eslint-disable */

function acceptsMaybeNumber(value: ?number) {
}

acceptsMaybeNumber(42);
acceptsMaybeNumber();
acceptsMaybeNumber(undefined);
acceptsMaybeNumber(null);
// acceptsMaybeNumber('42'); // Error
