// Debounce function forces function to wait a certain amount
// of time before running again

// basically this is high order function
// meaning it will return another function
// which is transformed version of callback function
function debounce(callback, delay, immediate = false) {
  // basically callback will wait for delay seconds to pass
  // and execute
  // we create timerID
  let timerID;

  // create standard anynomous function for "this" binding
  return function (...args) {
    // when function is called, it will clear prev timer
    // which create closure, meaning that delay every call
    clearTimeout(timerID);

    // create var which gets assigned boolean value
    // by checking if timerID is null and immediate flag to be true
    const shouldCallImmediately = timerID == null && immediate;
    // and in this case we call the function immediately
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }
    // here we are creating the timer
    timerID = setTimeout(() => {
      // once the delay is finished, we call the callback function
      if (!immediate) {
        // execute it
        callback.apply(this, args);
      }
      //   set timerID to be null
      //   so that shouldCallImmediately will know when delay will finish
      timerID = null;
    }, delay);
  };
}
