//define function
const yahtzee_upper = function (list) {
  //declare empty object
  let counted = {};

  //declare max value after all numbers are added
  let max = 0;
  console.log(`max number: ${max}`);
  list.forEach((number) => {
    if (!counted[number]) {
      counted[number] = number;
      console.log(`Value from list: ${counted[number]}`);
    } else {
      counted[number] += number;
      console.log(`Add to counted object ${counted[number]}`);
    }
    if (counted[number] > max) {
      console.log(`is ${counted[number]} greater than ${max}`);
      max = counted[number];
      console.log(`Add ${max} to max `);
    }
  });
  return max;
};
// console.log(
//   yahtzee_upper([2, 3, 5, 5, 6]),
//   yahtzee_upper([1, 1, 1, 1, 3]),
//   yahtzee_upper([1, 1, 1, 3, 3]),
//   yahtzee_upper([1, 2, 3, 4, 5]),
//   yahtzee_upper([6, 6, 6, 6, 6])
// );
console.log(yahtzee_upper([2, 3, 5, 5, 6]));
