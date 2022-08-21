import Categories from "../../categories.json";
import { StyleCatalog } from "./Navbar.elements";

export default function NavbarCatalog() {
  return (
    <StyleCatalog>
      <ul className="Catalogue">
        {Categories &&
          Categories.map((category) => {
            return (
              <div key={category.id} className="categoy_li">
                <li>{category.title}</li>
              </div>
            );
          })}
      </ul>
    </StyleCatalog>
  );
}

// const filterItemsToDisplayForCatalog = () => {
//   if(){}
//   if(){}
//   if(){}
//   if(){}
// }
