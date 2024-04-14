/*LINK EJERCICIO: https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
EJERCICIO: Given two strings comprised of + and -, return a new
string which shows how the two strings interact in the
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral,
and are shown as the number 0. */

function neutralise(s1, s2) {
    var resultado = "";
    for (let index = 0; index < s1.length; index++) {
        if (s1[index] == s2[index]) {
            resultado += s1[index];
        } else {
            resultado += 0
        }  
    }
    return resultado;
}