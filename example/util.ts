export const add = (a: number, b: number): number => {
  return a + b;
};
export const subtract = (a: number, b: number): number => {
  return a - b;
};
export const multiply = (a: number, b: number): number => {
  return a * b;
};
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};
export const square = (a: number): number => {
  return a * a;
};
export const squareRoot = (a: number): number => {
  if (a < 0) {
    throw new Error('Cannot take square root of a negative number');
  }
  return Math.sqrt(a);
};
export const factorial = (n: number): number => {
  if (n < 0) {
    throw new Error('Cannot take factorial of a negative number');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
export const isPrime = (n: number): boolean => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
export const fibonacci = (n: number): number[] => {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};
export const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
export const lcm = (a: number, b: number): number => {
  return (a * b) / gcd(a, b);
};
export const power = (base: number, exponent: number): number => {
  if (exponent < 0) {
    throw new Error('Exponent must be non-negative');
  }
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
