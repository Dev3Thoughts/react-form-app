import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";
import { useCart } from "../../useContext/cartContext";
const Header = () => {
  const { cart } = useCart();
  const numItems = cart.reduce(
    (prevValue, curValue) => prevValue + curValue.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Movie St
        <RiMovie2Line
          style={{
            fontSize: "1.5rem",
          }}
        />
        re
      </NavLink>
      <div className="nav-item">
        <NavLink className="text-white mr-2" to="/popular">
          Popular
          {" | "}
        </NavLink>
        <NavLink className="text-white mr-2" to="/top">
          Top Rated
          {" | "}
        </NavLink>
        <NavLink className="text-white mr-2" to="/">
          Search
        </NavLink>
      </div>
      <NavLink to="/cart" className="text-white" style={{ marginLeft: "auto" }}>
        <span className="badge badge-info badge-pill">
          {numItems === 0 ? "" : numItems}
        </span>
        <GiShoppingCart style={{ fontSize: "2rem" }} />
      </NavLink>
    </nav>
  );
};

export default Header;
