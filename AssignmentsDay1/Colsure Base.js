function createBase(baseNumber) {
    return function (numToAdd) {
      return baseNumber + numToAdd;
    };
  }
  
  var addSix = createBase(6);
  console.log(addSix(10)); // outputs 16