import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../../useContext/cartContext";
const Header = () => {
  const { cart } = useCart();
  const numItems = cart.reduce(
    (prevValue, curValue) => prevValue + curValue.quantity,
    0
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Movie store
        </Link>
        <Link to="/cart" className="text-white" style={{ marginLeft: "auto" }}>
          <span className="badge badge-info badge-pill">
            {numItems === 0 ? "" : numItems}
          </span>
          <GiShoppingCart style={{ fontSize: "2rem" }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
