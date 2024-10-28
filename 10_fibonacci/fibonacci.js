const fibonacci = function(place) {
    if (place < 0){
        return "OOPS";
    } else {
        let seq = [0,1];
        for (i=2; i<=+place; i++) {
            seq.push(seq[seq.length-2] + seq[seq.length-1]);
        }
        return seq[+place];
    }
};

// Do not edit below this line
module.exports = fibonacci;
