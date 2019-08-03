import React from "react";
import Burger from "../../burger/Burger";

const checkoutSummary = props => {
    return (
        <div>
            <h1>We hope it tastes well!!</h1>
            <div>
                <Burger ingredients={props.ingredients} />
                <button
                    className={`btn btn-outline-danger mr-3 px-3`}
                    onClick={props.checkoutCancelled}
                >
                    Cancel
                </button>
                <button
                    className={`btn btn-outline-success ml-3 px-3`}
                    onClick={props.checkoutContinued}
                >
                    Success
                </button>
            </div>
        </div>
    );
};

export default checkoutSummary;
