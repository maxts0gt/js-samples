// first we create function called promisify
function promisify(callback) {
	// this takes any number of arguments
	return function (...args) {
		// which returns new promise
		return new Promise((resolve, reject) => {
			function handleErrorAndValue(error, value) {
				if (error == null) {
					resolve(value);
				} else {
					reject(error);
				}
			}
			// whenever the function called, it will call callback function
			// which uses call method, so that we can use this
			callback.call(this, ...args, handleErrorAndValue);
		});
	};
}
