import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return { color: '#black' }
    } else {
        return { color: '#black' }
    }
}

const Menu = ({ history }) =>
    <div>
        <ul className="nav nav-tabs bg-light text-secondary">
            <li className="nav-item text-dark">
                <Link style={isActive(history, "/")} to="/">Home</Link>
            </li>

            <li>
                <Link style={isActive(history, "/products")} to="/products">Продукти</Link>
            </li>
            <li>
                <Link style={isActive(history, "/products")} to="/products">За нас</Link>
            </li>

            <li>
                <Link style={isActive(history, "/signin")} to="/signin">My PetPal</Link>
            </li>

            <li>
                <Link style={isActive(history, "/signup")} to="/signup">Регистрация</Link>
            </li>

        </ul>
    </div >

export default withRouter(Menu);