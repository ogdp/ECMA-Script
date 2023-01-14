// function sum(a, b) {
//   return a + b;
// }
// const a = 10;
// export { sum, a };
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const HomePage = () => {
  return `
  ${Header()}
  <h1>Home Page</h1>
  ${Footer()}
  `;
};
export default HomePage;
