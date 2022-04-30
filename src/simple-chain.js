const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chain = [];
let chainReturn;
let error = new Error("You can't remove incorrect link!");
const chainMaker = {
  getLength() {
    return chain.length - 1;
  },
  addLink(value) {
    chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) != true
      || position <= 0 || position > chain.length)
      { chain = []; throw error; }
    else {
      chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    chainReturn = chain.slice();
    chain = [];
    return chainReturn.join("~~");
  }
};

module.exports = {
  chainMaker
};
