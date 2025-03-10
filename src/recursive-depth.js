const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    let count = 1;
    return arr.reduce((item_length, item) => {
      if (Array.isArray(item)) {
        count++;
        item_length += this.calculateDepth(item);
        return item_length;
      }
      return count;
    }, arr.length);
  }
}

module.exports = {
  DepthCalculator
};
