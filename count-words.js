/*LINK EJERCICIO: https://www.codewars.com/kata/56b3b27cadd4ad275500000c/train/javascript
EJERCICIO: Kate likes to count words in text blocks. By words she means
continuous sequences of English alphabetic characters (from a to z ).
Here are examples: Hello there, little user5453 374 ())$. I’d been
using my sphere as a stool. Slow-moving target 839342 was hit by
OMGd-63 or K4mp. contains "words" ['Hello', 'there', 'little',
'user', 'I', 'd', 'been', 'using', 'my','sphere', 'as', 'a', 'stool',
'Slow', 'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']
Kate doesn't like some of words and doesn't count them. Words to be
excluded are "a", "the", "on", "at", "of", "upon", "in" and "as",
case-insensitive. Today Kate's too lazy and have decided to
teach her computer to count "words" for her. */

function wordCount(s) {
    var contador = 0;
    var palabra = "";

    for (let index = 0; index < s.length; index++) {
        if (/[a-zA-Z]/.test(s[index])) {
            palabra += s[index];
        } else if (palabra !== "") {
            if (!["a", "the", "on", "at", "of", "upon",
             "in", "as"].includes(palabra.toLowerCase())) {
                contador++;
            }
            palabra = "";
        }
    }
    if (palabra !== "") {
        if (!["a", "the", "on", "at", "of", "upon",
         "in", "as"].includes(palabra.toLowerCase())) {
            contador++;
        }
    }
    return contador;
}
