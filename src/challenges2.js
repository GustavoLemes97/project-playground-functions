// Desafio 10
function techList(arrTech, myName) {
  let lista = [];
  let dados = {};

  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrTech.length; index += 1) {
    arrTech = arrTech.sort();
    dados = {
      tech: arrTech[index],
      name: myName,
    };
    lista.push(dados);
  }
  return lista;
}

// Desafio 11
function checkArray(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return true;
    }
  }
  return false;
}

function checkNumber(number, arrNumbers) {
  let count = 0;
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (number === arrNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

function checkRepeatNumbers(arrNumbers) {
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (checkNumber(arrNumbers[index], arrNumbers) >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(phoneNumbers) {
  let phonePt01;
  let phonePt02;
  let phonePt03;

  if (phoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkArray(phoneNumbers) || checkRepeatNumbers(phoneNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  phonePt01 = `(${phoneNumbers[0]}${phoneNumbers[1]}) ${phoneNumbers[2]}${phoneNumbers[3]}`;
  phonePt02 = `${phoneNumbers[4]}${phoneNumbers[5]}${phoneNumbers[6]}-${phoneNumbers[7]}`;
  phonePt03 = `${phoneNumbers[8]}${phoneNumbers[9]}${phoneNumbers[10]}`;
  return `${phonePt01}${phonePt02}${phonePt03}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB + lineC || lineA < Math.abs(lineB - lineC))) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(stringBar) {
  let count = 0;
  stringBar = stringBar.match(/[1-9]+/g);

  for (let index = 0; index < stringBar.length; index += 1) {
    count += parseInt(stringBar[index], 10);
  }

  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  checkRepeatNumbers,
  checkArray,
  techList,
  hydrate,
  triangleCheck,
};
