
const Num = function () {
    if (isNaN(x)) {
        return "true!!";
    }
    return "false!";
};

console.log(isNaN(5));

const decimal = 3 / 180 * Math.PI;
console.log(parseFloat(decimal));

const uninfi = x => {
    return Math.PI * x * x;
};

console.log(uninfi(3));