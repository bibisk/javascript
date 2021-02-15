

let any = 1;
let y = any;
let x = any;

function sprawdzanieLiczby(x,y) {
    if ((x === 20)||(y === 20)) {
         return ('true');
    }
    else if ( x+y <= 20) {
        return ('true');
    }
    else { return ('false');}
}

sprawdzanieLiczby(67, 12);
console.log(sprawdzanieLiczby(67, 12));

