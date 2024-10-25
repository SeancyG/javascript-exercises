const removeFromArray = function(inputArray, ...args) {
    newArray = inputArray.filter(badArgs => !args.includes(badArgs));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
