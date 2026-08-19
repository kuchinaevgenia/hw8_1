const arr = [
  -7, 4, -1, 10, -10, 0, 8, -3, 2, -9, 5, -6, 1, 7, -2, 9, -5, 3, -8, 6,
];

const evenInArr = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    evenInArr.push(arr[i]);
  }
}
console.log(evenInArr);

let dob = 1;
for (let i = 0; i < arr.length; i++) {
  dob *= arr[i];
}
console.log(dob);
