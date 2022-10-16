const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '', arr = [], count_arr = [], count = 0;
  for(let i = 0; i < str.length; i++) {
    if(arr[arr.length-1] != str[i]) {
      arr.push(str[i]);
    }
  }
  arr = arr.join('');
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < str.length; j++) {
      if(str[j] === arr[i]) {
        if(arr.match(new RegExp(arr[i], 'g')).length === 1) {
          count++;
        }
        else {
          count = 1;
        }
      }
    }
    count_arr.push(count);
    count = 0;
  }
  for(let i = 0; i < arr.length; i++) {
    if(count_arr[i] > 1) {
      res +=  count_arr[i] + arr[i];
    }
    else {
      res += arr[i];
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
