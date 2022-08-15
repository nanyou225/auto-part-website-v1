import React, { useState } from "react";

const NavbarCatalog = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Courroies et Distribution",
      description: "Kit de distribution + Pompe à eau",
      price: 129.5,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "GATES",
      reference: "KP4114",
      category: "Pièces moteur",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
    {
      id: 2,
      title: "Plaquettes de frein",
      description: "Jeu de 4 plaquettes de frein avant",
      price: 29.3,
      discountPercentage: 12.96,
      rating: 3.69,
      stock: 125,
      brand: "FERODO",
      reference: "DB461",
      category: "Freinage",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
    {
      id: 3,
      title: " Jeu de 4 mâchoires de frein arrière",
      description: "Jeu de 4 mâchoires de frein (garniture de frein à tambour)",
      price: 52.6,
      discountPercentage: 16.96,
      rating: 2.69,
      stock: 100,
      brand: "BOSCH",
      reference: "0 986 487 462",
      category: "Freins à tambours",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
    {
      id: 4,
      title: "Repousse piston étrier (repousse piston)",
      description:
        "2 repousse-piston : 1 serrage à droite et 1 serrage à gauche",
      price: 25.9,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 25,
      brand: "CLAS",
      reference: "OM 8054BL",
      category: "Outils Freinage",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
    {
      id: 5,
      title: "Étrier de frein",
      description: "Étrier de frein (1 piston) 38 mm",
      price: 74.2,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 256,
      brand: "SNRA",
      reference: "1375030",
      category: "Freinage",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
    {
      id: 6,
      title: "Kit d'embrayage + Volant moteur",
      description: "Kit de distribution + Pompe à eau",
      price: 422.9,
      discountPercentage: 25.96,
      rating: 8.69,
      stock: 50,
      brand: "SACHS",
      reference: "2290 601 070",
      category: "Embrayage et Boîte de vitesse",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "/url",
    },
  ]);

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Pièces moteur",
      thumbnail: "/url",
      category_list: [
        "Courroies et Distribution",
        "Refroidissement moteur",
        "Injection carburant",
        "Bougie et Pièces d'allumage",
        "Turbo",
      ],
    },
    {
      id: 2,
      title: "Filtres et huile",
      thumbnail: "/url",
      category_list: [
        "Filtres",
        "Huile : Accessoires vidange",
        "Outils vidange",
        "Autres Pièces de Filtration",
        "Turbo",
      ],
    },
    {
      id: 3,
      title: "Direction / Suspension / Train",
      thumbnail: "/url",
      category_list: [
        "Amortisseurs",
        "Suspenssion d'essieux",
        "Transmission",
        "Rotules / Direction",
        "Moyeux et Roulements",
      ],
    },
    {
      id: 4,
      title: "Freinage",
      thumbnail: "/url",
      category_list: [
        "Plaquettes de frein",
        "Disques de frein",
        "Hydraulique",
        "Freins à tambours",
        "Capteur de câbles de freinage",
      ],
    },
    {
      id: 5,
      title: "Embrayage et Boîte de vitesse",
      thumbnail: "/url",
      category_list: [
        "Embrayage et ;Volant-moteur",
        "Accessoires de boîte de vitesse",
        "Autres pièces d'embrayage",
      ],
    },
  ]);
  return (
    <ul>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <li>{category.title}</li>
          </div>
        );
      })}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <li>{product.category}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default NavbarCatalog;
