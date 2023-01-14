const ProjectsItem = (project) => {
  //   console.log(project);
  return `
    <div><a href="/project/${project.id}"> ${project.name}</a></div>
    <div>${project.member[1]}</div>
    <div>${project.day}</div>`;
};

export default ProjectsItem;
