const sumAll = function(a, b) {
    let number = 0;
    if(a>b) {
        for(let i = b; i <= a; i++) {
            number += i;
        }
        return number;
    }
    else if(a<b) {
        for(let i = a; i <= b; i++) {
            number += i;
        }
        return number;
    }
    else {
        for(let i = a; i <= b; i++) {
            number += i;
        }
        return number;
    }
};