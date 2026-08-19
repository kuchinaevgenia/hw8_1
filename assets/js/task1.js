const nums = [3, 6, 8, 4, 6, 9];
console.log(nums);
console.log(
  `Видалено перший: ${nums.shift()}, Видалено останній: ${nums.pop()}`,
);

nums.unshift(+prompt("Додайте перший елемент"));
nums.push(+prompt("Додайте останній елемент"));
console.log(nums);

const numsCopy1 = Array.from(nums);
const numsCopy2 = [...nums];

const nums2 = nums.slice(0, 4);
console.log(nums2);
