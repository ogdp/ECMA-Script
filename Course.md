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
