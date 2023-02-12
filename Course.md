#> NAVIGO

## navigo thư viện router js core

<!-- https://github.com/krasimir/navigo -->

1. Câu lệnh cài đặt tại Folder cha
   npm install navigo --save
2. Import + Export tại file cần trỏ đến (VD: ./lib/index.js)
   import Navigo from 'navigo';
   const router = new Navigo('/');
   export { router };
3. Import router đến file cần dùng
   (VD: main.js)
   import { router } from "./lib";
   Cú pháp:
   router.on("/", () => render(HomePage, app));
   Cuối file main.js
   router.resolve();
   _END_

#> module.css mã hoá css khi xuất ra
#> Sử dụng tailwinds or bostrap

#> 02/02/2023 Xoá projects

1. add thư viện ở file lib
   useEffect: Gọi lại dữ liệu sau khi đã render ra màn hình
   useState: Tạo ra một data mới thêm và xoá ra màn hình
   EX: const [data, setData] = useState(dataProjects);
   Sử dụng setState và filter: setData(data.filter((project) => project.id != id)); để cập nhật lại file data

#> Sử dụng API ở dưới local bằng json-server

1. npm install -g json-server
2. Tạo file db.json
   json-server --watch db.json
3. Sử dụng fetch API để lấy dữ liệu
   <!-- Lây tất cả dữ liệu trong đối tượng OBJ -->

   fetch("http://localhost:3000/projects").then((response) => response.json()).then((data) => {setData(data);});
    <!-- Lấy theo từng đối tượng riêng biệt -->

   fetch(`http://localhost:3000/projects/${id}`, {
   method: "PUT",
   headers: {
   "Content-Type": "application/json",
   },
   body: JSON.stringify(formData),
   })
   .then((response) => router.navigate("/admin/projects"))
   .catch((error) => console.log(error));
   <!-- Thêm: POST ; SỬA: PUT ; Xoá DELETE -->
   <!-- https://www.npmjs.com/package/json-server/v/0.16.1#getting-started -->
