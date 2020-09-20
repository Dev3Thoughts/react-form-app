import React from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
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
        Movie store
        {" | "}
      </NavLink>
      <NavLink className="text-white" to="/search">
        Search
        <AiOutlineSearch className="ml-1" />
      </NavLink>
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
