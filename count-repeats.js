/* LINK EJERCICIO: https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript
EJERCICIO: Write a function that returns the count of characters
that have to be removed in order to get a string with
no consecutive repeats.
Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1 */

function countRepeats(str) {
    let contador = 0;
    for (let index = 0; index < str.length - 1; index++) {
        if (str[index] == str[index + 1]) {
            contador++;
        }
    }
    return contador;
}