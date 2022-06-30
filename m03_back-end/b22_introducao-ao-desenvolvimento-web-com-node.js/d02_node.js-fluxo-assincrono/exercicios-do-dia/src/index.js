const mathQuestion = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b)* c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })

  return promise
}

// mathQuestion(21, 11, 5)
//   .then(console.log)
//   .catch(err => console.error(err.message));

const randomParameter = () => {
  const random = Math.floor(Math.random() * 100 + 1);
  const funct = mathQuestion(random, random, random);

  return funct;
}

randomParameter()
  .then(console.log)
  .catch(err => console.error(err.message))