const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sort_arr = [], j = 0;
  arr.forEach(item => {
    if(item !== -1) {
      sort_arr.push(item);
    }
  });

  sort_arr = sort_arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== -1) {
      arr[i] = sort_arr[j];
      j++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
