import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn, FiPhoneCall, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavSearch,
} from "./Navbar.elements";
import SearchBox from "./SearchBox";

const Navbar = ({ onSearchChange }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              N_AUTO
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavSearch>
                <SearchBox
                  className="search-box"
                  onChangeHandler={onSearchChange}
                  placeholder="Rechercher un produit, une réference ou une marque"
                />
              </NavSearch>
              <NavItem>
                <NavLink to="/contact">
                  Contact
                  <FiPhoneCall />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/connexion">
                  Connexion
                  <FiLogIn />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/panier">
                  Panier <FiShoppingCart />
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
