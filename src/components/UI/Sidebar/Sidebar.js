import React from "react";
import { Transition } from "react-spring/renderprops";

import styles from "./Sidebar.module.css";

const sidebar = props => {
    return (
        <Transition
            items={props.showSidebar}
            from={{ width: 0 }}
            enter={{ width: 220 }}
            leave={{ width: 0 }}
            config={{ duration: 150 }}
        >
            {toggle =>
                toggle &&
                (style => (
                    <div
                        className={`${
                            styles.Sidebar
                        } d-flex flex-column align-items-center pt-2`}
                        style={style}
                    >
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                ))
            }
        </Transition>
    );
};

export default sidebar;
