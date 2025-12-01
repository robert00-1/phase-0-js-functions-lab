function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (discountPercentage / 100) * originalPrice;
    return originalPrice - discountAmount;
}

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};
