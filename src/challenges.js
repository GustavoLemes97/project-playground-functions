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
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'fizzBuzz';
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayNumbers[index] = 'fizz';
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'buzz';
    } else {
      arrayNumbers[index] = 'bug!';
    }
  }
  return arrayNumbers;
}

// Desafio 9
function encode(stringToEncode) {
  for (let index = 0; index < stringToEncode.length; index += 1) {
    switch (stringToEncode[index]) {
    case 'a':
      stringToEncode = stringToEncode.replace('a', '1');
      break;
    case 'e':
      stringToEncode = stringToEncode.replace('e', '2');
      break;
    case 'i':
      stringToEncode = stringToEncode.replace('i', '3');
      break;
    case 'o':
      stringToEncode = stringToEncode.replace('o', '4');
      break;
    case 'u':
      stringToEncode = stringToEncode.replace('u', '5');
      break;
    default:
      break;
    }
  }
  return stringToEncode;
}

function decode(stringToDecode) {
  for (let index = 0; index < stringToDecode.length; index += 1) {
    switch (stringToDecode[index]) {
    case '1':
      stringToDecode = stringToDecode.replace('1', 'a');
      break;
    case '2':
      stringToDecode = stringToDecode.replace('2', 'e');
      break;
    case '3':
      stringToDecode = stringToDecode.replace('3', 'i');
      break;
    case '4':
      stringToDecode = stringToDecode.replace('4', 'o');
      break;
    case '5':
      stringToDecode = stringToDecode.replace('5', 'u');
      break;
    default:
      break;
    }
  }
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
};
