// Event Target Class

class EventTarget {
  // when constructor is run, we create listeners object
  constructor() {
    this.listeners = {};
  }

  //   and basically we add to the listeners

  addEventListener(name, callback) {
    // do not use "in" here. it has inherited props
    // basically we check if we have set here
    if (!this.listeners.hasOwnProperty(name)) {
      // if we don't, then create one
      this.listeners[name] = new Set([callback]);
      //   if we do, means we created it
    } else {
      // then add the callback function to the set
      this.listeners[name].add(callback);
    }
  }

  //   and remove from the listeners

  removeEventListener(name, callback) {
    // get the this.listeners
    // if this turns out to be undefined
    // then don't run delete method, else delete
    this.listeners[name]?.delete(callback);
  }

  // dispatch basically needs to go through all the called events

  dispatch(name) {
    // if it is set, go through all of them
    // so we need to make sure it is inside the listeners
    this.listeners[name]?.forEach((callback) => {
      // basically we grab the set
      // go through each one of them
      // call the callback function on it
      callback();
    });
  }
}
