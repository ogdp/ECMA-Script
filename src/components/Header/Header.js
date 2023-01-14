import Nav from "./Nav";
import { menus } from "../../data/dataProjects";
const Header = () => {
  return `
    <Header>
    <Nav>
    ${Nav({ menu: menus })}
    </Nav>
    </Header>
  `;
};
export default Header;
