// loop
// const arr = {
//   name: "minhduc",
//   age: 20,
//   address: {
//     city: "Ha Tinh",
//     district: "38 Nguyen Huy Tu ",
//   },
// };
// get length obj Object.values(arr).length
const arr = ["Minh Duc", "Huy Hoang", "Huynh Duc"];
// for
for (let i = 0; i < arr.length; i++) {
  // biết điểm dừng dựa vào length
  // dựa vao index để hiển thị
  console.log(arr[i]);
}
//for in
for (let item in arr) {
  console.log("for in >  ", arr[item]);
}
//for of
for (let item of arr) {
  console.log("for of >  ", item);
}
// foreach
arr.forEach((item, index) => {
  console.log(`item: ${item} > index: ${index}`);
});
// map -> Tạo ra 1 mảng mới có thể thay đổi giá trị item or index
const newMapNames = arr.map((item, index) => {
  return `${item} ${index + 1}`;
});
console.log(newMapNames);

// demo show display
const app = document.querySelector("#app");

app.innerHTML = arr
  .map((item, index) => {
    return `<div>${item}</div>`;
  })
  .join("");
// Trả về 1 obj chưa nhiều lần return
// use join("") remove ","

const newFilterNames = arr.filter((item, index) => {
  // return item == "Minh Duc"; //Minh Duc
  return item !== "Minh Duc";
});
console.log(newFilterNames);

// reduce
// CT: const output = obj(or arr).reduce((accumulator, nextValue) =>{return accumulator }, 0);
const numbers = [
  { id: 1, name: "Name A", price: 200 },
  { id: 2, name: "Name B", price: 300 },
  { id: 3, name: "Name C", price: 400 },
];
const total = numbers.reduce((accumulator, nextValue) => {
  console.log("accumulator >> ", accumulator);
  console.log("nextValue >> ", nextValue);
  // accumulator + nextValue.price;
  return accumulator + nextValue.price;
  // nextValue nhận giá trị tiếp theo cần tính toán trong obj
  // accumulator nhận giá trị return của callback
}, 0);
// 0 đằng sau để đặt giá trị accumulator vị trí -1 về dạng 0
console.log(total);
