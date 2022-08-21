import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.Navbar};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-self: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #29323c;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fb3d28;
    width: auto;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const NavSearch = styled.nav`
  flex: 1;
  align-self: center;
  margin-right: 10rem;

  .search-box {
    border-radius: 20px;
    border: none;
    outline: none;
    padding: 5px;
    width: 33rem;
    line-height: 30px;
    font-size: 17px;
    margin-left: 30px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fb3d28;
      transition: all 0.3s ease;
    }
  }
`;

export const StyleCatalog = styled.div`
  background-color: ${({ bg }) => bg || "#2980b9"};
  height: auto;
  /* height: 45px; */
  line-height: 45px;
  font-size: 18px;
  align-items: center;

  .categoy_li {
    display: inline-block;
    list-style: none;
    cursor: pointer;
    padding: 0 12px;
    color: #fff;

    &:hover {
      color: #fb3d28;
      transition: all 0.3s ease;
    }
  }
`;
