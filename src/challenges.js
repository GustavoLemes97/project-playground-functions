// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestNumber(arrayNumbers) {
  let maxNumber = arrayNumbers[0];
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (maxNumber < arrayNumbers[index]) {
      maxNumber = arrayNumbers[index];
    }
  }
  return maxNumber;
}

function highestCount(arrayNumbers) {
  let maxNumber = highestNumber(arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maxNumber === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function changeToFizzBuzz(number) {
  let numberChanged;
  if (number % 3 === 0 && number % 5 === 0) {
    numberChanged = 'fizzBuzz';
  } else if (number % 3 === 0) {
    numberChanged = 'fizz';
  } else if (number % 5 === 0) {
    numberChanged = 'buzz';
  } else {
    numberChanged = 'bug!';
  }
  return numberChanged;
}

function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = changeToFizzBuzz(arrayNumbers[index]);
  }
  return arrayNumbers;
}

// Desafio 9
function encode(stringToEncode) {
  let changeTo1 = /a/gi;
  let changeTo2 = /e/gi;
  let changeTo3 = /i/gi;
  let changeTo4 = /o/gi;
  let changeTo5 = /u/gi;

  stringToEncode = stringToEncode.replace(changeTo1, '1');
  stringToEncode = stringToEncode.replace(changeTo2, '2');
  stringToEncode = stringToEncode.replace(changeTo3, '3');
  stringToEncode = stringToEncode.replace(changeTo4, '4');
  stringToEncode = stringToEncode.replace(changeTo5, '5');
  return stringToEncode;
}

function decode(stringToDecode) {
  let changeToA = /1/gi;
  let changeToE = /2/gi;
  let changeToI = /3/gi;
  let changeToO = /4/gi;
  let changeToU = /5/gi;

  stringToDecode = stringToDecode.replace(changeToA, 'a');
  stringToDecode = stringToDecode.replace(changeToE, 'e');
  stringToDecode = stringToDecode.replace(changeToI, 'i');
  stringToDecode = stringToDecode.replace(changeToO, 'o');
  stringToDecode = stringToDecode.replace(changeToU, 'u');
  return stringToDecode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  highestNumber,
  splitSentence,
  changeToFizzBuzz,
};
