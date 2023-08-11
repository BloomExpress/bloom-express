import styled from "styled-components";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import Login from "../../components/Login";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
// import CartButtons from "./CartButtons";
// import { useProductContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';
const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // const { openSidebar } = useProductsContext();
  // const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Bloom Express" />
          </Link>
          <button type="button" className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          {/* <button type="button" className="nav-toggle" onClick={openSidebar}> */}
          {/* <FaBars />
          </button> */}
        </div>
        <ul className={`nav-links ${isSidebarOpen ? "show-sidebar" : ""}`}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {/* {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li> */}
        </ul>
        <Login />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-navbar);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 1024px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-hover);
          color: var(--clr-white);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }

  @media (max-width: 900px) {
    .nav-links {
      display: block;
      position: fixed;
      top: 0;
      right: -400px; 
      width: 400px; 
      height: 100%;
      background-color: var(--clr-primary-navbar);
      transition: right 0.3s ease-in-out;
      overflow-y: auto;
      z-index: 1000;
    }
    .show-sidebar {
      right: 0;
    }
    .nav-links li {
      margin: 0.5rem 1rem;
    }
    .nav-links a {
      color: var(--clr-white);
      font-size: 1.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 1rem;
      display: block;
      transition: color 0.3s ease-in-out;
    }
    .nav-links a:hover {
      color: var(--clr-primary-hover);
    }
  }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
