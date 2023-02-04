// import { dataProjects } from "../../data/dataProjects";
import { router, useEffect, useState } from "../../lib";

const editProject = ({ id, action }) => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects.find((item) => item.id == id) || [];
  if (!project || project.length === 0) return;
  useEffect(() => {
    const btn = document.querySelector("#form-edit");
    const name = document.querySelector(".nameproject");
    btn.addEventListener("submit", (e) => {
      e.preventDefault();
      project.name = name.value;
      const projectEdit = projects.map((item) => {
        if (item.id == id) {
          return project;
        } else {
          return item;
        }
      });
      localStorage.setItem("projects", JSON.stringify(projectEdit));
      router.navigate("/admin/projects");
    });
  }, []);
  return `<div>
    <h1>Edit projects</h1>
    <form id="form-edit">
  <input type="text" class="nameproject" name="name" value="${project.name}"/>
  <button
    type="submit" 
    id="btn-editproject"
    class="bg-red-500 hover:bg-blue-700 text-white font-bold py-10 px-10 rounded"
  >
    Edit
  </button>
</form>
  </div>`;
};

export default editProject;
