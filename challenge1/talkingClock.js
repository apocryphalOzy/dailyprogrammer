const numbers = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
};

const letTimeTalk = (time) => {
  let [hour, minute] = time.split(":").map((str) => parseInt(str));

  let result = `It's ${numbers[hour % 12]}`;

  if (minute == 0) {
    result += " o'clock";
  } else if (minute < 10) {
    result += ` oh ${numbers[minute]}`;
  } else if (minute < 20) {
    result += ` ${numbers[minute]}`;
  } else {
    result +=
      ` ${numbers[Math.floor(minute / 10) * 10]}` +
      (minute % 10 != 0 ? `-${numbers[minute % 10]}` : "");
  }

  result += hour < 12 ? " am" : " pm";
  return result;
};
let theTime = letTimeTalk("00:03");

console.log(theTime);
