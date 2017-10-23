function produceDrivingRange(blockRange) {
  return function(min, max) {
    const beg = parseInt(min.slice(0, 2));
    const end = parseInt(max.slice(0, 2));
    const trip = Math.abs(end - beg);
    if (trip > blockRange) {
      return `${trip - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - trip}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(price) {
    return price * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = driverId++;
      this.name = name;
    }
  }
}