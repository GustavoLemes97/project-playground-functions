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
  return arrayString[arrayString.length - 1] + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
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

function highestNumber(arrayNumbers) {
  let maxNumber = arrayNumbers[0];
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (maxNumber < arrayNumbers[index]) {
      maxNumber = arrayNumbers[index];
    }
  }
  return maxNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
