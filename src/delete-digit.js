const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/*n*/) {
  throw new NotImplementedError('Not implemented');
  // let arr = [];
  // n = String(n).split('');
  // let min_elem = 0;
  // min_elem = Math.min(...n);
  // for(let i = 0; i < n.length; i++) {
  //   if(n.join('').match(new RegExp(min_elem, 'g').length === 2)) {
  //     arr.push(n[i]);
  //     i+=1;
  //   }
  //   else if(n[i] != min_elem) {
  //     arr.push(n[i]);
  //   }
  // }
  // // arr1.push(n.slice(0, n.indexOf(min_elem)));
  // // arr2.concat(n.slice(n.indexOf(min_elem+1), n.length));
  // // return arr;
  // arr = Number(arr.join(''));
  // n = n.join('');
  // if(arr > Number(n.slice(0, n.length-2)) && arr > Number(n.slice(1, n.length-1))) {
  //   return arr;
  // }
  // else if(arr < Number(n.slice(0, n.length-2))) {
  //   return Number(n.slice(0, n.length-1));
  // }
  // else {
  //   return Number(n.slice(1, n.length-1));
  // }
}

module.exports = {
  deleteDigit
};
