import Navigo from "navigo";
// const router = new Navigo("/");
const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, container) => {
  container.innerHTML = typeof content == "function" ? content() : content;
};
export { render, router };
// npm i navigo --save
