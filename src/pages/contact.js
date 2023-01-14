// function sum(a, b) {
//   return a + b;
// }
// const a = 10;
// export { sum, a };
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return `
  ${Header()}
  <h1>Contact Page</h1>
  ${Footer()}
  `;
};
export default Contact;
