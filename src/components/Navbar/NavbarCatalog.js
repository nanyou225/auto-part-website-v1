import React from "react";
import Products from "../../products.json";
import Categories from "../../categories.json";
import { StyleCatalog } from "./Navbar.elements";

export default function NavbarCatalog() {
  return (
    <StyleCatalog>
      <ul>
        {Categories &&
          Categories.map((category) => {
            return <li key={category.id}>---{category.title}---</li>;
          })}
        {Products &&
          Products.map((product) => {
            return (
              <div key={product.id}>
                <li>{product.title}</li>
              </div>
            );
          })}
      </ul>
    </StyleCatalog>
  );
}
