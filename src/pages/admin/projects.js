// import { dataProjects } from "../../data/dataProjects";
import { router, useEffect, useState } from "../../lib";
// import { router, useEffect, useState } from "@/lib";
function PageProjects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setData(dataProjects);
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        removePro(id);
      });
    });
    const edits = document.querySelectorAll("#edit");
    edits.forEach((element) => {
      element.addEventListener("click", (e) => {
        const id = element.dataset.id;
        router.navigate(`/admin/project/${id}/edit`);
        console.log(id);
      });
    });
    const linkNew = document.querySelector(".newProject");
    linkNew.addEventListener("click", () => {
      router.navigate("/admin/project/add");
    });
  });
  const removePro = (id) => {
    const dataBefore = data.filter((project) => project.id != id);
    setData(dataBefore);
    localStorage.setItem("projects", JSON.stringify(dataBefore));
  };

  return `
    <div>
    <h1 class="decoration-cyan-900">My list projects</h1>
    <a class="newProject">New Project</a>
    <table>
      <thead>
        <th>ID</th>
        <th>Name Projects</th>
        <th>Controls</th>
      </thead>
      <tbody>
        ${data
          .map(
            (project, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>
          ${project.name}</td>
          <td>
            <button 
                data-id="${project.id}"
                class="bg-red-800 btn-remove"
                style="
                color: white;
                border: none;
                cursor: pointer;
                background-color: rgba(255, 0, 0, 0.9);
                padding: 5px 20px;
                border-radius: 5px;
                "
            >
              Remove
            </button>
            <button id="edit" data-id="${
              project.id
            }" class="bg-current hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Edit
            </button>
          </td>
        </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    </div>
  `;
}

export default PageProjects;
