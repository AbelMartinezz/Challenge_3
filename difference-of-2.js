/*LINK EJERCICIO: https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript
EJERCICIO: The objective is to return all pairs of
integers from a given array of integers that have
a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate integers in the array. The order
of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]*/

function twosDifference(input) {
    var pares = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (Math.abs(input[i] - input[j]) == 2) {
                let found = false;
                for (let k = 0; k < pares.length && (found == false); k++) {
                    if ((pares[k][0] == input[i] && pares[k][1] == input[j]) || (pares[k][0] == input[j] && pares[k][1] == input[i])) {
                        found = true;
                    }
                }
                if ((found == false)) {
                    pares.push([Math.min(input[i], input[j]), Math.max(input[i], input[j])]);
                }
            }
        }
    }
    pares.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return pares;
}