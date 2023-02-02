import { dataProjects } from "../../data/dataProjects";
import { useEffect, useState } from "../../lib";
function PageProjects() {
  //   console.log(dataProjects);
  const [data, setData] = useState(dataProjects);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        // console.log(id);
        // console.log(data);
        removePro(id);
      });
    });
  });
  const removePro = (id) => {
    setData(data.filter((project) => project.id != id));
  };

  return `
    <div>
    <h1 class="decoration-cyan-900">My list projects</h1>
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
              border: none;
                background-color: rgba(255, 0, 0, 0.432);
                padding: 5px 20px;
                border-radius: 5px;
              "
            >
              Remove
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
