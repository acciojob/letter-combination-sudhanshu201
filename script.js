function letterCombinations(digits) {
    //create an array of strings representing the letters associated with each digit
    let mapping = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let result = [];

    //edge case: if the input string is empty, return an empty array
    if (!digits) {
        return result;
    }

    //recursive function to generate all possible letter combinations
    function generateCombinations(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination);
        } else {
            let digit = nextDigits.substring(0, 1);
            let letters = mapping[digit];
            for (let i = 0; i < letters.length; i++) {
                let letter = letters.substring(i, i+1);
                generateCombinations(combination + letter, nextDigits.substring(1));
            }
        }
    }

    generateCombinations("", digits);
    return result.sort();
}


module.exports = letterCombinations;
