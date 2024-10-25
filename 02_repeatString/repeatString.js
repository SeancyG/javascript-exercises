const repeatString = function(inputString, count) {
    if (count < 0) {
        return 'ERROR';
    } else {
        let newString = '';
        for (i=1; i<=count; i++) {
            newString = newString.concat(inputString);
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
