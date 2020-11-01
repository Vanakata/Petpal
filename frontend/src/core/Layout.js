import React from "react";
import Menu from "./Menu"

const Layout = ({ title = "Title", description = "Description", className, children }) =>
    <div>
        <div>
            <span>{title}</span>
            <span>{description}</span>
            <div>
                <div>
                    <div>
                        <img src={require('../images/mypetpal-logo.png')} alt="website logo"/>
                    </div>
                </div>
            </div>
        </div>
        <div className={className}>{children}</div>
        <Menu />
    </div>
export default Layout;