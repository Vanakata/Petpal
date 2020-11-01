import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "../css/searchbar.css"
import $ from "jquery";

const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return { color: '#black' }
    } else {
        return { color: '#black' }
    }
}

const onClickHandler = () => {
    var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');
    searchBox.forEach((elm) => {
        elm.addEventListener('onclick', () => {
            elm.previousElementSibling.value = '';
        });
    });

}


const Menu = ({ history }) =>
    <div className="navigation-container">
        <div className="search-box">
            <input type="text" placeholder=" " onClick={onClickHandler} /><span></span>
        </div>
        <ul className="navigation-menu">
            <li className="nav-options">
                <Link style={isActive(history, "/")} to="/">Home</Link>
            </li>

            <li className="nav-options">
                <Link style={isActive(history, "/products")} to="/products">Продукти</Link>
            </li>
            <li className="nav-options">
                <Link style={isActive(history, "/products")} to="/products">За нас</Link>
            </li>

            <li className="nav-options">
                <Link style={isActive(history, "/signin")} to="/signin">My PetPal</Link>
            </li>

            <li className="nav-options">
                <Link style={isActive(history, "/signup")} to="/signup">Регистрация</Link>
            </li>
        </ul>
        <div>
            
        </div>
    </div >

export default withRouter(Menu);