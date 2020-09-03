import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Movies store
        </Link>
        <Link to="/detail" className="text-white">
          Detail
        </Link>

        <Link to="/cart" className="text-white" style={{ marginLeft: "auto" }}>
          <GiShoppingCart style={{ fontSize: "2rem" }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
