const palindromes = function (string) {
    string = string
        .toLowerCase()
        .split("")
        .filter((item) => {
            const lettersNumbers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
            return lettersNumbers.includes(item);
        });
    return string.join("") === string.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
