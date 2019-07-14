import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
    <React.Fragment>
        <Backdrop show={props.show} hideModalHandler={props.hideModalHandler} />
        <div className={styles.Modal}>{props.children}</div>
    </React.Fragment>
);

export default modal;
