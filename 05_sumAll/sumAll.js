const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 ||
        numOne !== Math.floor(numOne) || numTwo !== Math.floor(numTwo) ||
        typeof numOne != 'number' || typeof numTwo != 'number') {

        return 'ERROR'
    } else {
        let sum = 0;
        if (numOne > numTwo) {
            [numOne, numTwo] = [numTwo, numOne];
        }
        for (i=numOne; i<=numTwo; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
