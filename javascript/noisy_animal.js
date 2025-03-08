function createNoisyAnimal(species) {
  function isBird() {
    return ['owl', 'eagle', 'hadedah'].includes(species);
  }

  function mammalNoise() {
    const noises = {
      cat: 'meow',
      dog: 'woof',
      leopard: 'growl'
    };
    return noises[species];
  }

  function makeBirdNoise(isLoud = true) {
    if (species === 'hadedah') {
      console.log('squawk');
    } else if (species === 'eagle') {
      console.log('caw');
    } else {
      console.log('hoot');
    }

    if (isLoud) {
      if (species === 'owl') {
        console.log('hoot');
      }
      if (species === 'eagle') {
        console.log('caw');
      }
      if (species === 'hadedah') {
        console.log('squawk');
      }
    } else {
      if (species === 'hadedah') {
        throw new Error('there is no such thing as a quiet hadedah!');
      }
    }
  }

  function makeNoise({ loud = true } = {}) {
    if (isBird()) {
      makeBirdNoise(loud);
    } else {
      console.log(mammalNoise());
      if (loud) {
          console.log(mammalNoise());
      }
    }
  }

  return {
    makeNoise
  };
}

module.exports = createNoisyAnimal;
