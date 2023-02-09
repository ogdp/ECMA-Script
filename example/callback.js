function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
  script.onload = () => callback(src, 1);
  script.onerror = () => callback(src, 0);
}
loadScript("/example/checkcallback.js", function (src, check) {
  if (check == 1) success();
  else console.log("Thất bại");
});
// Tạo 1 hàm loadScript gồm 2 tham số src, callback
// Thêm đối thẻ scriptt và gán src địa chỉ js cần trở đến
// onload để kiểm tra trang web đã load được file js
// onerror để kiểm tra trang web chưa load được file js
// Chạy loadScript truyền vào src, 1 hàm chứa function nằm trong file js checkcallback cần gọi
