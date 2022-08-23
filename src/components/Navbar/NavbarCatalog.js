import { Link } from "react-router-dom";
import Categories from "../../categories.json";
import CategoryCpy from "../../categoryCpy.json";
import { CatalogContainer, CatalogDiv } from "./Navbar.elements";

export default function NavbarCatalog() {
  return (
    <CatalogDiv className="header-cat-menu">
      <CatalogContainer>
        <div>
          <div className="header-cat-text">
            <Link to="/">CATEGORIE</Link>
          </div>
          <ul>
            {Categories &&
              Categories.map((category) => {
                return <li key={category.id}>{category.title}</li>;
              })}
          </ul>
        </div>
        <div className="header-catCpy-text">
          <ul>
            {CategoryCpy &&
              CategoryCpy.map((categoryCpy) => {
                return (
                  <li key={categoryCpy.id}>
                    {categoryCpy.image}
                    {categoryCpy.title}
                  </li>
                );
              })}
          </ul>
        </div>
      </CatalogContainer>
    </CatalogDiv>
  );
}
