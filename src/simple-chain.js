const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(x) {
    let str = arguments.length == 0 ? `( )` : `( ${x} )`;
    this.chain.push(str);
    return this;
  },
  removeLink(i) {
    if (typeof i != 'number' || i < 1 || i > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(i - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = [].concat(this.chain).join('~~');
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
