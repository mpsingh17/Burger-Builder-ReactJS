import React from "react";
import menuIconSrc from "../../../assets/img/icons8-menu.png";

const menuIcon = props => {
    return (
        <div className={`mt-3 ml-3`} id="menuIcon" style={{ zIndex: 101 }}>
            <a href="#" onClick={props.toggleSidebarHandler}>
                <img
                    src={menuIconSrc}
                    alt="side menu icon"
                    className={`img-fluid`}
                    width="35%"
                />
            </a>
        </div>
    );
};

export default menuIcon;
