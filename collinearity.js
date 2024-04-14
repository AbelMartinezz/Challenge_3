/*LINK EJERCICIO: https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript
EJERCICIO: You are given two vectors starting from the origin (x=0, y=0)
with coordinates (x1,y1) and (x2,y2). Your task is to find out
if these vectors are collinear. Collinear vectors are vectors
that lie on the same straight line. They can be directed in
the same or opposite directions. One vector can be obtained
from another by multiplying it by a certain number. In terms
of coordinates, vectors (x1, y1) and (x2, y2) are collinear
if (x1, y1) = (k*x2, k*y2) , where k is any number acting
as a coefficient. */

function collinearity( x1,y1, x2,y2 ) {
    if (x1 * y2 == x2 * y1) {
        return true;
    } else {
        return false;
    }
}

