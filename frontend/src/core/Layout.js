import React from "react";
import Menu from "./Menu"

let homeUrl = "http://localhost:3000/"

const Layout = ({ title = "Title", description = "Description", className, children }) =>
    <div>
        <div>
            <span>{title}</span>
            <span>{description}</span>
            <div>
                <div>
                    <div>
                        <a href={homeUrl}>
                        <img src={require('../images/mypetpal-logo.png')} alt="website logo" className="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={className}>{children}</div>
        <Menu />
    </div>
export default Layout;