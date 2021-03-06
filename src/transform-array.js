module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let transformedArr = [];
  let hellper = [];
  for (let i = 0; i < arr.length; ++i) {
    switch (arr[i]) {
      case '--discard-next': {
        hellper.push(++i);
        break
      }
      case '--discard-prev': {
        if (transformedArr.length > 0 && !hellper.some((x) => x === i - 1)) {
          transformedArr = transformedArr.slice(0, transformedArr.length - 1);
          hellper.push(i - 1);
        }
        break;
      }
      case '--double-next': {
        if (++i < arr.length) {
          transformedArr.push(arr[i]);
          transformedArr.push(arr[i]);
        }
        break;
      }
      case '--double-prev': {
        if (i > 0 && !hellper.some((x) => x === i - 1)) transformedArr.push(arr[i - 1]);
        break;
      }
      default: transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
};