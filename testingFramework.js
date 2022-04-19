function describe(testSuiteName, func) {
  console.log(`Beginning test suite ${testSuiteName}`);

  try {
    func();
    console.log(`Succesfully completed test suite ${testSuiteName}`);
  } catch (error) {
    const { testCaseName, errorMessage } = error;
    console.error(
      `Failed running test suite ${testSuiteName} on ` +
        `test case ${testCaseName} with error message ${errorMessage}`
    );
  }
  //
}
function it(testCaseName, func) {
  console.log(`Beginning test case ${testCaseName}`);

  try {
    func();
    console.log(`Succesfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    throw { testCaseName, errorMessage };
  }
}
function expect(actual) {
  return new ExpectFunctions(actual);
}

class ExpectFunctions {
  constructor(actual) {
    this.actual = actual;
    this.stringifiedActual = JSON.stringify(actual);
  }

  toExist() {
    if (this.actual == null) {
      throw `Expected value to exist but got ${this.stringifiedActual}`;
    }
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw `Expected ${this.stringifiedActual} to be ${JSON.stringify(
        expected
      )}`;
    }
  }

  toBe(type) {
    if (typeof this.actual !== type) {
      throw `Expected to be type of ${
        this.stringifiedActual
      } but got ${typeof this.actual}`;
    }
  }
}
