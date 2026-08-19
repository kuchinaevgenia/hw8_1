const nums = [3, 6, 8, 4, 6, 9];
console.log(nums);
console.log(
  `Видалено перший: ${nums.shift()}, Видалено останній: ${nums.pop()}`,
);

nums.unshift(+prompt("Додайте перший елемент"));
nums.push(+prompt("Додайте останній елемент"));
console.log(nums)