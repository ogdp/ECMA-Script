function total(...arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  console.log(arr);
}
total(1, 2, 3, 4, 5);
