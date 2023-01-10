
// const person = {
//     name: "minh duc",
//     age: 20,
//     address: {
//         city: "Ha noi"
//     }
// }
// // Thực hiện giải nén Object hoặc Array
// // const + {} (hoặc []) = Tên obj (hoặc Array);


// // #Obj
// const {name, age, address: { city } } = person;
// // Gán tên giá trị bằng dấu ':' sau giá trị
// // Ex: const {name: ten } = person;
// console.log(person);
// console.log(name);
// console.log(age);
// console.log(city);

// // Array
// const dongVat = [
//     "Meo","Lon","Ga"
// ]
// console.log(dongVat);
// const [dv1 , dv2, dv3] = dongVat;
// console.log(dv1);
// // orther 
// // Tạo lại obj or arr lấy tất cả giá trị còn lại
// const [cc1,cc2, ... orther] = dongVat ;
// console.log(orther);

// // Detructoring trong func

// function exportObj({name , age}){
//     console.log(">>> exportObjWithFunc:" + name + " " + age);
// }
// exportObj(person);



// -----
// Làm việc với State
// -----

function getState(){
    let initial = "";
    function setState(newName){
        initial = newName;
    }
    return ["Duc" , 20];
}
const [Name, Age] = getState();
console.log(Name + Age);
