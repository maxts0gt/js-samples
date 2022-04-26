// this binding sample

// this takes on any number of arguments
Function.prototype.myCall = function (thisContext, ...args) {
	// create symbol which is unique identifier
	const symbol = new Symbol();
	// this keyword is bound to the call
	const originalFunction = this;
	// put unique identifier on thisContext and bind original function to it
	thisContext[symbol] = originalFunction;
	// then well call the function with all of the context
	const returnValue = thisContext[symbol](...args);
	// then delete the key we added to the object
	delete thisContext[symbol];
	// and return this
	return returnValue;
};

// this takes an array
Function.prototype.myApply = function (thisContext, args = []) {
	// basically call the mycall function from above
	// and transform the array into arguments
	// since the myCall and myApply functionality is the same
	return this.myCall(thisContext, ...args);
};

// Doesn't call function, returns new function with bound
Function.prototype.myBind = function (thisContext, ...args) {
	// first we return arrow function
	// which takes as many as arguments as it needs to take
	// then we pass in thisContext as well as old arguments and new arguments
	return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
};
