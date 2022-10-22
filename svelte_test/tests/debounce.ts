
import lodash from 'lodash';

// Using _.debounce() method
// with its parameters
const debounce_fun = lodash.debounce(function () {
    console.log('Function debounced after 1000ms!');
}, 1000);

debounce_fun();