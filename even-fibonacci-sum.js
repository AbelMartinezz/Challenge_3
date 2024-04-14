/*LINK EJERCICIO: https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript
EJERCICIO: Give the summation of all even numbers in a
Fibonacci sequence up to, but not including, the number
passed to your function. Or, in other words, sum all the
even Fibonacci numbers that are lower than the given
number n (n is not the nth element of Fibonacci sequence)
without including n.

The Fibonacci sequence is a series of numbers where the
next value is the addition of the previous two values.
The series starts with 0 and 1:
0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084 */

function fibonacci(max) {
    let suma = 0;
    let a = 0;
    let b = 1;

    for (let index = 1; a + b < max; index++) {
        let c = a + b;
        if (c % 2 === 0) {
            suma += c;
        }
        a = b;
        b = c;
    }

    return suma;
}