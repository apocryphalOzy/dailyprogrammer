const necklace = function () {
  let x = prompt("1st string?", "nicole");
  let y = prompt("2nd string?", "icolen");
  let timer = x.length;
  if (typeof x != "string" || typeof y != "string") {
    alert("Did you enter a string?");
    return;
  }
  do {
    x = x.slice(x.length - 1).concat(x.slice(0, x.length - 1));
    console.log(x);
    if (x == y) {
      alert("Nice necklace!");
      return;
    } else timer = timer - 1;
    console.log(timer);
  } while (timer >= 0);
  alert("Better luck next time.");
};
