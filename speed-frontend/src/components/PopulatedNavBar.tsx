import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropdown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
  return (
    <NavBar>
    <NavItem>SPEED</NavItem>
    <NavItem route="/" end>
    View Articles
    </NavItem>
    <NavItem dropdown>
    Options <IoMdArrowDropdown />
    <NavDropdown>
    {/* <NavItem route="/articles">View articles</NavItem> */}
    <NavItem route="/articles/new">Submit Article</NavItem>
    <NavItem route="/articles/moderate">Moderate Articles</NavItem>
    <NavItem route="/articles/SERCAnalystTable">Analyse Articles</NavItem>
    </NavDropdown>
    </NavItem>
    </NavBar>
  );
};
export default PopulatedNavBar;
