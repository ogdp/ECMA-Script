import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { dataProjects } from "../data/dataProjects";
const ProjectDetail = (id) => {
  let content;
  let idPro = parseInt(id.data.id);
  const project = dataProjects.find((item) => item.id === idPro);
  content = `<div><a href="/project/${project.id}"> ${project.name}</a></div>
            <div>${project.member[1]}</div>
            <div>${project.day}</div>`;
  return `
  ${Header()}
        ${content}
    ${Footer()}
    `;
};
export default ProjectDetail;
