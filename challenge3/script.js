/**Uses Binary Search to partition an array monotonically increasing numbers, returning the slice of numbers less than or equal to the given value
 * @param {number} val
 * @param {number[]} arr
 */

function binary_partition_upto(val, arr) {
  if (arr.length === 0 || val < arr[0]) {
    return [];
  }
  if (val > arr[arr.length - 1]) {
    return arr;
  }
  let from = 0,
    to = arr.length;
  while (true) {
    const index = (from + to) >> 1;
    if (arr[index] > val && arr[index - 1] <= val) {
      return arr.slice(0, index);
    } else if (arr[index] > val) {
      to = index;
    } else {
      from = index;
    }
  }
}
/**
 * Memoize the given monotonic function of a single number parameter.
 * Also adds the property #upTo(max) for accessing stored results up to and including a given number.
 * @template {number|bigint} R
 * @param {(n: number) => R} fn
 * @returns {{(n: number) => R, upTo: (max: number) => R[]}}
 */

function monotonic_memoize(fn) {
  const results = [];
  const memFn = (n) => {
    while (n >= results.length) {
      results[results.length] = fn(results.length);
    }
    return results[n];
  };
  memFn.upTo = (s) => {
    if (results[results.length - 1] > s) {
      return binary_partition_upto(s, results);
    }
    while (results[results.length - 1] <= s) {
      memFn(results.length);
    }
    return results.slice(0, results.length - 1);
  };
  memFn(0);
  return memFn;
}

/* Sequence of numbers to subtract from the index in the p() function */
const pdiff = monotonic_memoize(
  /**@type {(n: number) => number} */ (n) =>
    n === 0 ? 1 : pdiff(n - 1) + ((n & 1) === 1 ? (n >> 1) + 1 : n + 1)
);
const p = monotonic_memoize(
  /** @type {(n: number) => big int} */ (n) =>
    n === 0
      ? 1n
      : pdiff
          .upTo(n)
          .map((d) => p(n - d))
          .reduce((acc, val, index) =>
            (index & 2) > 0 ? acc - val : acc + val
          )
);

const n = 666;
console.time("total");
const p_res = p(n);
console.timeEnd("total");
console.log(`p(${n}) = ${p_res}`);
const s_res = p_res.toString();
console.log(`Digits: ${s_res.length}`);
console.log(
  `Digit Sum: ${s_res
    .split("")
    .map((c) => parseInt(c, 10))
    .reduce((acc, val) => acc + val)}`
);
