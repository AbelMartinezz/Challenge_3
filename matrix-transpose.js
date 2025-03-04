/*LINK EJERCICIO: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript
EJERCICIO: Write a function that outputs the transpose of a matrix -
a new matrix where the columns and rows of the original are swapped.
For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can
assume that each row has the same length, and that the height and
width of the matrix are both positive. */

function transpose(matrix) {
    const nuevaFila = matrix.length;
    const nuevaColumna = matrix[0].length;
    const transpuesta = [];

    for (let index = 0; index < nuevaColumna; index++) {
        transpuesta[index] = [];
        for (let i = 0; i < nuevaFila; i++) {
            transpuesta[index][i] = matrix[i][index];
        }
    }

    return transpuesta;
}