function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distance = Math.abs(start - end);
    let difference = Math.abs(blockRange - distance);

    if(distance > blockRange) {
      return difference + ' blocks out of range';
    } else {
      return 'within range by ' + difference;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return (fare * percentage)
  }
}

function createDriver() {
  let driverID = 0
  return class {
    constructor(name) {
      this.id = ++driverID
      this.name = name
    }
  }
}
