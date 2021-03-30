// Desafio 10
function techList(arrTech, name) {
  let lista = [];
  let dados = {};

  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrTech.length; index += 1) {
    arrTech = arrTech.sort();
    dados = {
      tech: arrTech[index],
      name: name,
    };
    lista.push(dados);
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(arrPhoneNumbers) {
  if (arrPhoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkArray(arrPhoneNumbers) || checkRepeatNumbers(arrPhoneNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return '(' + arrPhoneNumbers[0] + arrPhoneNumbers[1] + ')' + ' ' + arrPhoneNumbers[2] 
  + arrPhoneNumbers[3] + arrPhoneNumbers[4] + arrPhoneNumbers[5] + arrPhoneNumbers[6] + '-' 
  + arrPhoneNumbers[7] + arrPhoneNumbers[8] + arrPhoneNumbers[9] + arrPhoneNumbers[10];
}

function checkArray(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return true;
    }
  }
  return false;
}

function checkRepeatNumbers(arrNumbers) {
  let number;
  for (let index1 = 0; index1 < arrNumbers.length; index1 += 1) {
    let countNumber = 0;
    number = arrNumbers[index1];
    for (let index2 = 0; index2 < arrNumbers.length; index2 += 1) {
      if (number === arrNumbers[index2]) {
        countNumber += 1;
      }
    }
    if (countNumber >= 3) {
      return true;
    }
  }
  return false;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  } else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  checkRepeatNumbers,
  checkArray,
  techList,
  hydrate,
  triangleCheck,
};
