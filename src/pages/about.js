// function sum(a, b) {
//   return a + b;
// }
// const a = 10;
// export { sum, a };
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const About = () => {
  return `
  ${Header()}
  <h1>About Page</h1>
  ${Footer()}`;
};
export default About;
