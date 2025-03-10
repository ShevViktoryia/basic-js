const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  let res = [];
  if(!(arr instanceof Array)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  else {
    for(let i = 0; i < arr.length; i++) {
      if(typeof arr[i] === 'number') {
        res.push(arr[i]);
      }
      else {
        if(arr[i] === '--discard-next') {
          res.push(arr[i+1]);
        }
        if(arr[i] === '--discard-prev') {
          res.splice(i-1, 1);
        }
        if(arr[i] === '--double-next') {
          res.concat(arr[i+1], arr[i+1]);
        }
        if(arr[i] === '--double-prev') {
          res.concat(arr[i-1], arr[i-1]);
        }
      }
    }
    return res;
  }
}

module.exports = {
  transform
};
