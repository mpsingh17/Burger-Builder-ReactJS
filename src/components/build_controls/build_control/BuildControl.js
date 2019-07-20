import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = props => {
    return (
        <div className="d-flex mb-2 bg-secondary align-items-center">
            <div className={`${styles.FlexFill} p-2 font-weight-bolder`}>
                {props.label}
            </div>
            <div className={`${styles.FlexFill} p-2`}>
                <button
                    className="btn btn-outline-danger px-4"
                    onClick={props.removeIngredientHandler}
                >
                    Less
                </button>
            </div>
            <div className={`${styles.FlexFill} p-2`}>
                <button
                    className="btn btn-outline-success px-4"
                    onClick={props.addIngredientHandler}
                >
                    More
                </button>
            </div>
        </div>
    );
};

export default BuildControl;
