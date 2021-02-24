const int8 = new Int8Array([27, 48]);
console.log(int8[1]);

const int8sum = new Int8Array([1, 63, 44, 23, 89]);

const total = int8sum.reduce(function (sum, element) {
    return sum + element;
});
console.log(total);

const uint8 = new Int8Array([12, 36, 76, 32]);
console.log(Uint8Array.name);

const uint8join = new Uint8Array([14, 65, 2]);


console.log(uint8join.join('-'));

const float32 = new Float32Array([34.1, 65, 72.1, 43]);
console.log(float32.indexOf(43));

const float32filter = new Float32Array([12, 52, 5, 237, 34, 78]);
const filter = float32filter.filter(function (element) {
    return element < 56;
});

console.log(filter);