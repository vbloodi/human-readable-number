module.exports = function toReadable(number) {
    const numbersFromZeroToNine = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const numbersFromTenToNineteen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenthsNumbers = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";
    for (i = 0; i <= number; ++i) {
        if (number <= 9) {
            return numbersFromZeroToNine[number];
        } else if (number > 9 && number <= 19) {
            return numbersFromTenToNineteen[number - 10];
        } else if (number >= 20 && number <= 99) {
            if (number % 10 === 0) {
                return tenthsNumbers[number / 10 - 2];
            } else {
                return (
                    tenthsNumbers[Math.floor(number / 10 - 2)] +
                    " " +
                    numbersFromZeroToNine[number % 10]
                );
            }
        } else if (number >= 100 && number <= 999) {
            if (number % 100 === 0) {
                return (
                    numbersFromZeroToNine[Math.floor(number / 100)] +
                    " " +
                    hundred
                );
            } else if (number.toString().slice(1) <= 9) {
                return (
                    numbersFromZeroToNine[Math.floor(number / 100)] +
                    " " +
                    hundred +
                    " " +
                    numbersFromZeroToNine[number % 10]
                );
            } else if (
                number.toString().slice(1) > 9 &&
                number.toString().slice(1) <= 19
            ) {
                return (
                    numbersFromZeroToNine[Math.floor(number / 100)] +
                    " " +
                    hundred +
                    " " +
                    numbersFromTenToNineteen[+number.toString().slice(2)]
                );
            } else if (
                number.toString().slice(1) >= 20 &&
                number.toString().slice(1) <= 99
            ) {
                if (number.toString().slice(1) % 10 === 0) {
                    return (
                        numbersFromZeroToNine[Math.floor(number / 100)] +
                        " " +
                        hundred +
                        " " +
                        tenthsNumbers[+number.toString().slice(1) / 10 - 2]
                    );
                } else {
                    return (
                        numbersFromZeroToNine[Math.floor(number / 100)] +
                        " " +
                        hundred +
                        " " +
                        tenthsNumbers[
                            Math.floor(+number.toString().slice(1) / 10) - 2
                        ] +
                        " " +
                        numbersFromZeroToNine[+number.toString().slice(2)]
                    );
                }
            }
        }
    }
};
