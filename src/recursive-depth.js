class DepthCalculator {
  calculateDepth(arr) {
      let size = 0;
      if (Array.isArray(arr)) {
          size++;
          for (let i = 0; i < arr.length; i++) {
              if (Array.isArray(arr[i])){
                  size += this.calculateDepth(arr.flat());
                  break;
              }
          }
      }
      return size;
  }
};

module.exports = DepthCalculator;