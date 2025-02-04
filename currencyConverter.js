// currencyConverter.js
function fromDollarToYen(dollars) {
    const rate = 109.53; // 
    return dollars * rate;
}

function fromEuroToDollar(euros) {
    const rate = 1.18; 
    return euros * rate;
}

function fromYenToPound(yen) {
    const rate = 0.0067; 
    return yen * rate;
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};
