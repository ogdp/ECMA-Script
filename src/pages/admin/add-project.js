// import { dataProjects } from "../../data/dataProjects";
import { router, useEffect, useState } from "../../lib";

const addProject = () => {
  // const dataProjects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector(".nameproject");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // ngăn reload page
      // dataProjects.push({
      //   id: dataProjects.length + 1,
      //   name: name.value,
      //   day: Date(),
      // });
      // localStorage.setItem("projects", JSON.stringify(dataProjects));
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          day: Date(),
        }),
      }).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });
  return `<div>
  <h1>Add Project</h1>
  <a href="/admin/projects">List Projects</a>
  <form id="form-add">
  <input type="text" class="nameproject" name="name" placeholder="Name project"/>
  <button
    type="submit" 
    id="btn-addproject"
    class="bg-red-500 hover:bg-blue-700 text-white font-bold py-10 px-10 rounded"
  >
    Add
  </button>
</form>
      </div>`;
};

export default addProject;
