module.exports = function countCats(matrix) {
  let num = 0;
  matrix
    .map((el) => el.filter((ch) => ch == "^^"))
    .forEach((el) => (num += el.reduce((acc, cur) => acc + 1, 0)));
  return num;
};
