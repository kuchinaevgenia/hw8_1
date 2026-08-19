const arr = [
  -7, 4, -1, 10, -10, 0, 8, -3, 2, -9, 5, -6, 1, 7, -2, 9, -5, 3, -8, 6,
];

const arrNotNull = arr.filter((item) => item !== 0);
console.log(arrNotNull);

const arrDividedBy100 = arr.map((item) => item / 100);
console.log(arrDividedBy100);

arr.forEach((item) => console.log(item ** 3));

const sqr100In = arr.findIndex((item) => item ** 2 === 100);
sqr100In === -1
  ? console.log("масив не містить такого числа")
  : arr.splice(sqr100In, 1);

console.log(arr.find((item) => item > 50));
