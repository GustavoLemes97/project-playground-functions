// Desafio 10
function techList(arrTech, name) {
  let lista = [];
  let dados = {};

  if (arrTech.length === 0) {
    return 'Vazio!';
  } else {
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
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
