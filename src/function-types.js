// @flow
/* eslint-disable */
function method(str, bool, ...nums) {
}

let arrowMethod = (str, bool, ...nums): void => {
}


function methodWithCb(callback: (error: Error | null, value: string | null) => void) {
}

function methodWithOptionalParams(optionalValue?: string) {
}

methodWithOptionalParams();
methodWithOptionalParams('foo');
methodWithOptionalParams(undefined);
// methodWithOptionalValue(null); // Error

function methodWithRestParams(...nums: Array<number>) {
}

methodWithRestParams(1, 2, 3);

