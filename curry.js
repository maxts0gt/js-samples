// chain or multiple function
// can take any number of arguments

function curry(callback) {
	// in curry we need to return call back function
	// hence the curredCallback function
	// this function can take any number of args
	const curriedCallback = (...args) => {
		// in the case, it's empty
		// we simply call callback function
		// no need to pass any arguments since it's empty
		if (args.length === 0) {
			return callback();
		}
		// then if we do have arguments
		// we can as many as we want
		return (...otherArgs) => {
			// if this one doesn't have
			if (otherArgs.length === 0) {
				// return with all the previous arguments
				return callback(...args);
			}
			// if not we call curriedCallback function recursively
			// by checking if we reached end of the chain by calling recursively
			return curriedCallback(...args, ...otherArgs);
		};
	};

	return curriedCallback;
}
