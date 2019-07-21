import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
    return (
        <React.Fragment>
            <Backdrop
                show={props.show}
                hideModalHandler={props.hideModalHandler}
            />
            <div className={styles.Modal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Order Details</h4>
                        </div>

                        <div className="modal-body">{props.children}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default modal;
