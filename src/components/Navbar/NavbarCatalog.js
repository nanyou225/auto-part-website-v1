import { Link } from "react-router-dom";
import Categories from "../../categories.json";
import CategoryCpy from "../../categoryCpy.json";
import { CatalogContainer, CatalogDiv } from "./Navbar.elements";

export default function NavbarCatalog() {
  return (
    <CatalogDiv className="header-cat-menu">
      <CatalogContainer>
        <ul className="header-cat-text">
          <li>
            <Link to="/catalogue" className="catalogue">CATALOGUE</Link>
            <ul className="dropdown">
              {Categories &&
                Categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <Link to="/category_item">{category.title}</Link>
                    </li>
                  );
                })}
            </ul>
          </li>
        </ul>
        <ul className="header-catCpy-text">
          {CategoryCpy &&
            CategoryCpy.map((categoryCpy) => {
              return (
                <li key={categoryCpy.id}>
                  <Link to="/categoryCpy">
                    {categoryCpy.image}
                    {categoryCpy.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </CatalogContainer>
    </CatalogDiv>
  );
}
