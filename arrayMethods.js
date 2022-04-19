// Map method
Array.prototype.myMap = function (callback) {
  // create the output the array
  const output = [];
  //  go through  original array
  for (let i = 0; i < this.length; i++) {
    // and push the objects in to the array
    output.push(callback(this[i], i, this));
  }
  // and finally return the array
  return output;
};

// Filter method
Array.prototype.myFilter = function (callback) {
  // create the output the array
  const output = [];
  //   go through original array
  for (let i = 0; i < this.length; i++) {
    //   check if the callback result is strictly equal to true
    if (callback(this[i], i, this) === true) {
      // if it is true, then push it to the output array
      output.push(this[i]);
    }
  }
  // and finally return the array
  return output;
};

// Reduce method
Array.prototype.myReduce = function (callback, initialValue) {
  // save the accumulator
  let accumulator = initialValue;
  // go through the array
  for (let i = 0; i < this.length; i++) {
    //   if initial value is undefined, we do not call callback
    if (i === 0 && initialValue === undefined) {
      // and update accumulator to be 0 or current value
      accumulator = this[i];
    } else {
      // if we have the value, or we pass the initial value
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  // and finally return the accumulator
  return accumulator;
};
