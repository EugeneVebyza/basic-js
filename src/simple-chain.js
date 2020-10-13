const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value = "") {
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || this.getLength() < position || position < 1) 
        {
          this.arr = [];
          throw Error;
        }
    this.arr.splice(position-1,1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  
  finishChain() {
    let resArr = this.arr
    .map(el => `( ${el} )`) //до этого в методах сразу вводились заначения типа `( ${value} )`
    .join("~~");
    this.arr = [];
    return resArr;
  }
};

module.exports = chainMaker;
