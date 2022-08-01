module.exports = function toReadable(number) {
    // Arrays
    const unitsArr = [
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

    const fromElevenToNineteenArr = [
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

    const tensArr = [
        null,
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    // Functions
    const returnUnits = (number) => unitsArr[number % 10];

    const returnTens = (number) => {
        let index;
        let resultStr = "";

        if (number >= 10 && number < 20) {
            index = number % 10;
            resultStr = `${fromElevenToNineteenArr[index]}`;
        } else if (number >= 20 && number % 10 === 0) {
            index = number / 10;
            resultStr = `${tensArr[index]}`;
        } else if (number > 20 && number % 10 !== 0) {
            index = Math.floor(number / 10);
            const unit = returnUnits(number % 10);
            resultStr = `${tensArr[index]} ${unit}`;
        }
        return resultStr;
    };

    const returnHundreds = (number) => {
        let index = number / 100;
        let resultStr = "";

        if (number % 100 === 0) {
            resultStr = `${unitsArr[index]} hundred`;
        } else if (String(number)[1] === "0") {
            const unit = returnUnits(number % 100);
            resultStr = `${unitsArr[Math.floor(index)]} hundred ${unit}`;
        } else {
            const tens = returnTens(+String(number).slice(1) % 100);
            resultStr = `${unitsArr[Math.floor(index)]} hundred ${tens}`;
        }
        return resultStr;
    };

    // Actions
    const numberLength = String(number).length;
    let result;

    if (numberLength === 3) {
        result = returnHundreds(number);
    } else if (numberLength === 2) {
        result = returnTens(number);
    } else {
        result = returnUnits(number);
    }

    return result;
};
