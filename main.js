// // Import basicbasic
// import { sum, a } from "./pages/home";
// console.log(sum(10, 29));
// console.log(a);
// ----
// // Import default
import { render, router } from "./lib";
import HomePage from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
const app = document.querySelector("#app");
// app.innerHTML = HomePage();
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(About, app));
router.on("/contact", () => render(Contact, app));
router.notFound(() => console.log("Not found page"));
// render(HomePage, app);
router.resolve();
