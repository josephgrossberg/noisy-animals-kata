function createNoisyAnimal(species) {
  const birdNoiseMap = {
    owl: 'hoot',
    eagle: 'caw',
    hadedah: 'squawk'
  };

  const mammalNoiseMap = {
    cat: 'meow',
    dog: 'woof',
    leopard: 'growl'
  };

  function isBird() {
    return Object.keys(birdNoiseMap).includes(species);
  }

  function isMammal() {
    return Object.keys(mammalNoiseMap).includes(species);
  }
  function birdNoise() {
    return birdNoiseMap[species];
  }

  function mammalNoise() {
    return mammalNoiseMap[species];
  }

  function makeMammalNoise(isLoud = true) {
    console.log(mammalNoise());
    if (isLoud) {
        console.log(mammalNoise());
    }
  } 

  function makeBirdNoise(isLoud = true) {
    if (species === 'hadedah' && !isLoud) {
      throw new Error('there is no such thing as a quiet hadedah!');
    }
    console.log(birdNoise());
    if (isLoud) {
      console.log(birdNoise());
    }
  }

  function makeNoise({ loud = true } = {}) {
    if (isBird()) {
      makeBirdNoise(loud);
    } else if (isMammal()) {
      makeMammalNoise(loud);
    }
  }

  return {
    makeNoise
  };
}

module.exports = createNoisyAnimal;
