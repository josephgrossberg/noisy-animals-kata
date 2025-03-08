// When/If you're feeling comfortable with the code, try adding these animals:

// A snake that makes the noise "hiss" when it is loud and "slither" when it is not loud
// A mouse that is so silent that it outputs exactly one blank line, whether loud or quiet
// Support the true or false values for the is_loud flag in both cases.

// Don't forget the tests for your new requirements! Don't change the content of any existing tests, although you can reorganise the order and the context and describe blocks if it is helpful.

function createNoisyAnimal(species) {
  const animalNoiseMap = {
    owl: 'hoot',
    eagle: 'caw',
    hadedah: 'squawk',
    cat: 'meow',
    dog: 'woof',
    leopard: 'growl'
  };

  function makeAnimalNoise(isLoud = true) {
    const noise = animalNoiseMap[species];
    console.log(noise);
    if (isLoud) {
      console.log(noise);
    }
  }

  function makeNoise({ loud = true } = {}) {
    if (species === 'hadedah' && !loud) {
      throw new Error('there is no such thing as a quiet hadedah!');
    }

    makeAnimalNoise(loud);
  }

  return {
    makeNoise
  };
}

module.exports = createNoisyAnimal;
