const reverseString = function(inputString) {
    let newString = '';
    for (i=inputString.length-1; i>=0; i--) {
        newString = newString.concat(inputString[i]);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
