function analyzeArray(array) {
  const obj = {
    average: (array.reduce((partialSum, i) => partialSum + i, 0)/array.length),
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array)
  };
  return obj;
}
export { analyzeArray };
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
