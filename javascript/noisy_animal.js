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
