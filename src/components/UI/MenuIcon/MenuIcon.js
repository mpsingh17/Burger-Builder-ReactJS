import React from "react";
import menuIconSrc from "../../../assets/img/icons8-menu.png";

const menuIcon = props => {
    return (
        <a href="#" onClick={props.toggleSidebarHandler}>
            <img
                src={menuIconSrc}
                className={`img-fluid`}
                width="33%"
                height="auto"
            />
        </a>
    );
};

export default menuIcon;
