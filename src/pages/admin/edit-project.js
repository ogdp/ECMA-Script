// import { dataProjects } from "../../data/dataProjects";
import { router, useEffect, useState } from "../../lib";

const editProject = ({ id, action }) => {
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const project = projects.find((item) => item.id == id) || [];
  // if (!project || project.length === 0) return;
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const btn = document.querySelector("#form-edit");
    const name = document.querySelector(".nameproject");
    btn.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: name.value,
      };
      fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => router.navigate("/admin/projects"))
        .catch((error) => console.log(error));
      // console.log(name);

      // project.name = name.value;
      // const projectEdit = projects.map((item) => {
      //   if (item.id == id) {
      //     return project;
      //   } else {
      //     return item;
      //   }
      // });
      // localStorage.setItem("projects", JSON.stringify(projectEdit));
      // router.navigate("/admin/projects");
    });
  });
  return `<div>
    <h1>Edit projects</h1>
    <form id="form-edit">
  <input type="text" class="nameproject" name="name" value="${project.name}"/>
  <button
    type="submit" 
    id="btn-editproject"
    class="bg-red-500 hover:bg-blue-700 text-white font-bold py-10 px-10 rounded"
  >
    Save
  </button>
</form>
  </div>`;
};

export default editProject;
