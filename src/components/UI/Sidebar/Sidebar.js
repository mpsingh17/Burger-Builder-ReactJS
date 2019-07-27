import React from "react";
import styles from "./Sidebar.module.css";
import deleteIcon from "../../../assets/img/delete-icon.png";

const sidebar = props => {
    return (
        <div className={`${styles.Sidebar} d-flex flex-column bg-warning px-2`}>
            <div className="d-flex mt-2">
                <div className="flex-grow-1">
                    <a href="#">Link 1</a>
                </div>

                <div className={`ml-auto align-self-center mr-2`}>
                    <a
                        href="#"
                        className={`${styles.CrossIcon}`}
                        onClick={props.toggleSidebarHandler}
                    >
                        X
                    </a>
                </div>
            </div>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    );
};

export default sidebar;
