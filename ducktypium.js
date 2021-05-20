class Ducktypium {
  constructor(color) {
    if(color !== 'red' && color !== 'blue' && color !== 'yellow')
      throw new Error('Error! Invalid color');
    
    this.color = color;
    this.calibrationSequence = [];
  }

  refract(color) {
    if(color !== 'red' && color !== 'blue' && color !== 'yellow')
      throw new Error('Error! Invalid color');

      if(this.color === color) {
        return color;
      }
    
      switch(color) {
        case 'red':
          if(this.color === 'blue') return 'purple';
          return 'orange';
        case 'blue':
          if(this.color === 'red') return 'purple';
          return 'green';
        case 'yellow':
          if(this.color === 'red') return 'orange';
          return 'green';
      }
  }

  calibrate(numbers) {
    let sortedNumbers = numbers.sort();
    let multipliedNumbers = sortedNumbers.map(n => n * 3);

    this.calibrationSequence = multipliedNumbers;
  }
}