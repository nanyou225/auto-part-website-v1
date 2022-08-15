import React from "react";
import Products from "../../products.json";
import Categories from "../../categories.json";


export default function NavbarCatalog() {
  return (
    <ul>
    {Categories &&
      Categories.map((category) => {
        return <li key={category.id}>{category.title}</li>;
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
  );
}
