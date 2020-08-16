import React from 'react'
import Cart from "../MoviesDB/Cart";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand" href="#">Movies store</span>
                <Cart />
            </nav>
        </div>
    )
}

export default Navbar
