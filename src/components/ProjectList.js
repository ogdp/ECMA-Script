// import { dataProjects } from "../data/dataProjects";
import ProjectsItem from "./ProjectsItem";
const ProjectList = (projects) => {
  // console.log(projects.projects);
  return `${projects.projects
    .map((project) => ProjectsItem(project))
    .join("")}`;
};
export default ProjectList;
