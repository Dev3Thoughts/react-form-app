import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const activeStyle = {
  borderBottom: "3px solid #5cb85c",
};

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Movies store
        </Link>
        <Link to="/detail" className="text-white" >
          Detail
        </Link>

        <NavLink
          to="/cart"
          className="text-white"
          activeStyle={activeStyle}
          style={{ marginLeft: "auto" }}
        >
          <GiShoppingCart style={{ fontSize: "2rem" }} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
