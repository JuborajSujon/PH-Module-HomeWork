// Increment Operators
/**
 * JavaScript increment(+ +) operator is used to increase the value of the variable by one. The value returned from the operand depends on whether the increment operator was on the left(prefix increment) or right(postfix increment). If the operator is used before the operand then the value is increased by one and then returned but if the operator is after the operand then the value is first returned and then incremented. 
 * The increment operator can only be used on references that is the operator can only be applied to variable and object properties. Also, the increment operator cannot be chained

 * ++ - Postfix increment - i++
 * -- - Postfix decrement - i--
 * ++ - Prefix increment - ++i
 * -- - Prefix decrement - --i
 */

let x = 0;

// Postfix increment function
function postFixIn() {
  console.log(x); // 0
  x++;
  console.log(x); // 1

  let y = x++; // frist assign then upgrade value
  console.log(x); // 2
  console.log(y); // 1

  let z = x++; // frist assign then upgrade value
  console.log(z); // 2
  console.log(x); // 3

  return x;
}
const postfixIncrement = postFixIn();
console.log(postfixIncrement); // 3
console.log(x); // 3

// Postfix decrement function
function postFixDe() {
  console.log(x); // 2
  x--;
  console.log(x); // 1

  let y = x--; // frist assign then upgrade value
  console.log(x); // 0
  console.log(y); // 1

  let z = x--; // frist assign then upgrade value
  console.log(z); // 1
  console.log(x); // 0

  return x;
}
const postfixDecrement = postFixDe();
console.log(postfixDecrement); // 0
console.log(x); // 0

// Prefix increment function
function prefixIn() {
  console.log(x); // 0
  ++x;
  console.log(x); // 1

  let y = ++x; // frist upgrade then assign the value
  console.log(y); // 2
  console.log(x); // 2

  let z = ++x;
  console.log(z); // 3
  console.log(x); // 3

  return x;
}

const prefixIncrement = prefixIn();
console.log(prefixIncrement); // 3
console.log(x); // 3

// Prefix increment function
function prefixDe() {
  console.log(x); // 3
  --x;
  console.log(x); // 2

  let y = --x; // frist upgrade then assign the value
  console.log(y); // 1
  console.log(x); // 1

  let z = --x; // frist upgrade then assign the value
  console.log(z); // 0
  console.log(x); // 0

  return x;
}

const prefixDecrement = prefixDe();
console.log(prefixDecrement); // 0
console.log(x); // 0
