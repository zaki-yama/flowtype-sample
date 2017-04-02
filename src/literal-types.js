// @flow
/* eslint-disable */

function getColor(name: 'success' | 'warning' | 'danger') {
  switch (name) {
    case 'success' : return 'green';
    case 'warning' : return 'yellow';
    case 'danger'  : return 'red';
  }
}

getColor('success');
getColor('warning');
getColor('danger');
// getColor('foo'); Error
