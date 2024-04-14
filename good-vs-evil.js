/*LINK EJERCICIO: https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
EJERCICIO: Middle Earth is about to go to war. The forces of good will
have many battles with the forces of evil. Different races will
certainly be involved. Each race has a certain worth when battling
against others. On the side of good we have the following races, with
their associated */

function goodVsEvil(good, evil){
    var goodNumeros = good.split(' ');
    var evilNumeros = evil.split(' ');
    var contadorGood = 0;
    var contadorEvil = 0;
    for (let index = 0; index < goodNumeros.length; index++) {
        contadorGood += parseInt(goodNumeros[index]);
    }
    for (let index = 0; index < evilNumeros.length; index++) {
        contadorEvil += parseInt(evilNumeros[index]);
    }
    if (contadorGood > contadorEvil) {
        return "Battle Result: Good triumphs over Evil";
    } if (contadorGood < contadorEvil) {
        return "Battle Result: Evil eradicates all trace of Good"
    } if (contadorGood == contadorEvil) {
        return "Battle Result: No victor on this battle field"
    }
}
