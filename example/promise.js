// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = resolve(10);
//     script.onerror = reject("error loading");
//     document.head.append(script);
//   });
// }
// loadScript("/example/checkcallbacddk.js")
//   .then((data) => data + " Thêm 10")
//   .then((data2) => console.log(data2))
//   .catch((err) => console.log("err"));

const fetchData = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve(10);
    script.onerror = reject(20);
    document.head.append(script);
    // setTimeout(() => {
    //   resolve("Data fetched successfully");
    // }, 2000);
  });
};

fetchData("/example/checkcallbacddk.js")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
