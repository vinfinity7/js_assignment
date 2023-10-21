/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
	return width * height;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
	return value1 / 2 + value2 / 2;  	// individually dividing values before adding avoids saturation of very large values to Infinity
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
	if (a === 0) return null; 		// invalid equation
	return (-b/a) ? (-b/a) : 0;  // ensures that -0 becomes 0
}

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
	return Math.abs(value) % 10;
}

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
	return Number(value);
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
	if (!Number.isInteger(n) || n < 2) {	// filter out non-integers and negative values
		return false;
	}
	let flagPrime = true;
	for (let i = 2; i * i <= n && flagPrime; i++) {
		flagPrime = (n % i);
	}
	return !!flagPrime; // !! ensures that flagPrime is either true or false
}

module.exports = {
	getRectangleArea,
	getAverage,
	getLinearEquationRoot,
	getLastDigit,
	parseNumberFromString,
	isPrime,
};
