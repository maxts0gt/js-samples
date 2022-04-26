// simply it is about waiting for delay to execute

function throttle(callback, delay) {
	// create timerID
	let timerID;
	// create last called time and set to 0 for 1st case
	let lastCalledTime = 0;
	// create function which has any number of arguments
	const throttledFunction = function (...args) {
		// get current time for computing time since the call
		const currentTime = Date.now();
		// get the time since last call
		const timeSinceLastCall = currentTime - lastCalledTime;
		// now get delay remaining
		const delayRemaining = delay - timeSinceLastCall;
		// if no delay left, execute it
		if (delayRemaining <= 0) {
			// set last called time to current time
			lastCalledTime = currentTime;
			// and apply to the callback
			callback.apply(this, args);
		} else {
			clearTimeout(timerID);
			// if we can't call function
			// we set timer with setTimeout
			timerID = setTimeout(() => {
				// get current time
				lastCalledTime = Date.now();
				// and apply to the callback
				callback.apply(this, args);
			}, delayRemaining);
		}
	};

	// clears currenttimeout
	throttledFunction.cancel = function () {
		clearTimeout(timerID);
	};

	return throttledFunction;
}
