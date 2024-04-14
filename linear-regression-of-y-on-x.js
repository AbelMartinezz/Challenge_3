/*LINK EJERCICIO: https://www.codewars.com/kata/5515395b9cd40b2c3e00116c/train/javascript
EJERCICIO: The function that you have to write accepts
two list/array, x and y, representing the coordinates 
of the points to regress (so that, for example, the 
first point has coordinates (x[0], y[0])).

Your function should return a tuple (in Python) or an
array (any other language) of two elements: a (intercept)
and b (slope) in this order.

You must round your result to the first 4 decimal digits*/

function regression_line(x, y) {
    var sumaX = 0;
    var sumaY = 0;
    for (let i = 0; i < x.length; i++) {
        sumaX += x[i];
        sumaY += y[i];
    }
    var mediaX = sumaX / x.length;
    var mediaY = sumaY / y.length;
    
    var covarianza = 0;
    var varianzaX = 0;
    for (let i = 0; i < x.length; i++) {
        covarianza += (x[i] - mediaX) * (y[i] - mediaY);
        varianzaX += (x[i] - mediaX) * (x[i] - mediaX);
    }
    
    var b = covarianza / varianzaX;
    
    var a = mediaY - b * mediaX;
        
    return [parseFloat(a.toFixed(4)), parseFloat(b.toFixed(4))];
}