/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
	if(num%3===0 && num%5!==0)
	{
		return 'Fizz';
	}
	else if(num%5===0 && num%3!==0)
	{
		return 'Buzz';
	}
	else if(num%3===0 && num%5===0)
	{
		return 'FizzBuzz';
	}
	else{
		return num;
	}
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
	let factorial=1;
	for(let i=1;i<=n;i++)
	{
		factorial*=i;
	}
	return factorial;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
	let sum=0;
	if(n1>n2)
	{
		for(i=n2;i<=n1;i++)
		{
			sum+=i;
		}
	}
	else if(n1<n2)
	{
		for(i=n1;i<=n2;i++)
		{
			sum+=i;
		}
	}
	return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
	if((a+b)>c && (c+b)>a && (a+c)>b)
	{
		return true;
	}
	else{
		return false;
	}
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
	let reversed="";
	let l=str.length;
	for(i=l-1;i>=0;i--)
	{
		reversed+=str[i];
	}
	return reversed;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
	let stack = [];
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x == '(' || x == '[' || x == '{' || x == '<') {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '[' || check == '{' || check == '<') return false;
        break;
      case ']':
        check = stack.pop();
        if (check == '(' || check == '{' || check == '<') return false;
        break;
      case '}':
        check = stack.pop();
        if (check == '(' || check == '[' || check == '<') return false;
        break;
      case '>':
        check = stack.pop();
        if (check == '(' || check == '[' || check == '{') return false;
        break;
    }
  }
  return stack.length === 0;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
	const diff = (endDate - startDate) / 1000;
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (diff <= 45) 
  {
    return "a few seconds ago";
  } 
  else if (diff <= 90) 
  {
    return "a minute ago";
  } 
  else if (diff <= minute * 45) 
  {
	let x=diff%minute;
	if(x !== 30)
	return `${Math.round(diff / minute)} minutes ago`;
	else
	return `${Math.floor(diff / minute)} minutes ago`;
  } 
  else if (diff <= minute * 90) 
  {
    return "an hour ago";
  } 
  else if (diff <= hour * 22) 
  {
	let x=diff%hour;
	if(x !== (30*60))
	return `${Math.round(diff / hour)} hours ago`;
	else
	return `${Math.floor(diff / hour)} hours ago`;
  } 
  else if (diff <= day * 1.5) 
  {
    return "a day ago";
  } 
  else if (diff <= day * 25) 
  {
	let x=diff%day;
	if(x !== (12*60*60))
	return `${Math.round(diff / day)} days ago`;
	else
	return `${Math.floor(diff / day)} days ago`;
    
  } 
  else if (diff <= day * 45) 
  {
    return "a month ago";
  } 
  else if (diff <= day * 345) 
  {
	let x=diff%(day*365);
	if(x !== (15*24*60*60))
	return `${Math.round(diff / month)} months ago`;
	else
	return `${Math.floor(diff / month)} months ago`;
  } 
  else if (diff <= day * 545) 
  {
    return "a year ago";
  } 
  else 
  {
    return `${Math.round(diff / year)} years ago`;
  }
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
	if (num === 0) {
        return '0';
    }
    let digits = [];
    while (num) {
        digits.push(num % n);
        num = Math.floor(num / n);
    }
    return digits.reverse().join('');
}

module.exports = {
	getFizzBuzz,
	getFactorial,
	getSumBetweenNumbers,
	isTriangle,
	reverseString,
	isBracketsBalanced,
	timespanToHumanString,
	toNaryString,
};
