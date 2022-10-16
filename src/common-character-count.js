const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = [], count = 0, count_s1 = 0, count_s2 = 0;
  for(let i = 0; i < s1.length; i++) {
    if(!arr.includes(s1[i])) {
      arr.push(s1[i]);
    }
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < s1.length; j++) {
      if(s1[j] === arr[i]) {
        count_s1++;
      }
    }
    for(let j = 0; j < s2.length; j++) {
      if(s2[j] === arr[i]) {
        count_s2++;
      }
    }
    count += Math.min(count_s1, count_s2);
    count_s1 = 0;
    count_s2 = 0;
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
