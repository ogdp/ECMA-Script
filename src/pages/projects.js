// function sum(a, b) {
//   return a + b;
// }
// const a = 10;
// export { sum, a };
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/ProjectList";
import { dataProjects } from "../data/dataProjects";
const Projects = () => {
  return `
  ${Header()}
  <h1>Projects Page</h1>
  ${ProjectList({ projects: dataProjects })}
  ${Footer()}
  `;
};
export default Projects;
