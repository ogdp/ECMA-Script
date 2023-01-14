// // Import basicbasic
// import { sum, a } from "./pages/home";
// console.log(sum(10, 29));
// console.log(a);
// ----
// // Import default
import { render, router } from "./src/lib";
import About from "./src/pages/about";
import Contact from "./src/pages/contact";
import HomePage from "./src/pages/home";
import ProjectDetail from "./src/pages/ProjectDetail";
import Projects from "./src/pages/projects";
const app = document.querySelector("#app");
// app.innerHTML = HomePage();
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(About, app));
router.on("/contact", () => render(Contact, app));
router.on("/projects", () => render(Projects, app));
router.on("/project/:id", (id) => render(ProjectDetail(id), app));
router.notFound(() => console.log("Not found page"));
// render(HomePage, app);
router.resolve();
