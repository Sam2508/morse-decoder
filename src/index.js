const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr = "") {
  const arrTo = expr.split("**********");
  const wordTo = arrTo.map((item) => item.length / 10);
  const exprToArr = [];
  const exprSize = 10;
  arrTo.forEach((item) => {
    const itemTo = item.split("");
    for (let i = 0; i < itemTo.length; i += exprSize) {
      exprToArr.push(itemTo.slice(i, i + exprSize));
    }
  });
  const newArr = exprToArr.map((item) =>
    item
      .join("")
      .replace(/^0+/, "")
      .match(/..?/g)
      .map((item) => (item === "10" ? "." : "-"))
  );
  const newArrMorse = newArr.map((i) => i.join(""));
  const morseTo = newArrMorse.map((item) => MORSE_TABLE[item]);
  const morseSpaces = [];
  let startCount = 0;
  let endCount = 0;
  wordTo.forEach((item) => {
    endCount += item;
    const word = morseTo.slice(startCount, endCount);
    morseSpaces.push(word);
    startCount += item;
  });
  const result = morseSpaces.map((item) => item.join("")).join(" ");
  return result;
}
module.exports = { decode };