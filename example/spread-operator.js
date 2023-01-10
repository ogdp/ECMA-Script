/*
// #> Spread-operator => copy
// const person = {
//   name: "duc",
//   age: 20,
//   child: {
//     name: "Tai",
//   },
// };
// use ... + arrOld => add all elem arrOld to arrNew
// const person2 = {
//   ...person,
//   age: 20,
// };

// // spread-operetor -> copy
// const person2 = {
//   ...person,
//   address: "Thai Binh",
// };
// // Obj assign -> coppy and add
// const person2 = Object.assign({ address: "Thai Binh" }, person);
// <<<<<<<__END__>>>>>>>
// #>Deep copy : Khi thay đổi giá trị ở 1 obj thì chỉ obj đó thay đổi gtri mà thôi, obj còn lại không thay đổi giá trị
// note: Thay đổi giá trị sau khi copy (dòng 34)
// const person = {
//   name: "duc",
//   age: 20,
//   child: {
//     name: "Tai",
//   },
// };
// Cú pháp 33 và 34 cái nào cũng được
// // const person2 = JSON.parse(JSON.stringify(person));
// const person2 = structuredClone(person);
// person2.child.name = "Duc";
// console.log(person, person2);
// <<<<<<<__END__>>>>>>>
// ----

// #> Shallow Copy : Khi thay đổi giá trị ở obj copy hay obj gốc thì giá trị sẽ đồng loại thay đổi ở obj còn lại
const person = {
  name: "duc",
  age: 20,
  child: {
    name: "Tai",
  },
};
// Cú pháp const Name = Object.assign(NameObj);
const person2 = Object.assign(person);
person2.child.name = "duc";
console.log(person, person2);
// <<<<<<<__END__>>>>>>>
const products = [1, 2, 3, 4];
console.log(products);
// add elemment to arr with create a newArr and push elem to newArr
const newProducts = [-1, ...products, 5, "6"];

console.log(newProducts);

// find elem not isset in obj
const result = newProducts.filter((item) => item !== 6);
console.log(result);
*/
