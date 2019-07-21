import React from "react";

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map((ing, i) => {
        return (
            <li key={ing + i}>
                <span style={{ textTransform: "capitalize" }}>{ing}: </span>
                {props.ingredients[ing]}
            </li>
        );
    });

    return (
        <React.Fragment>
            <p>
                Total Price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            <p>Ingredients: </p>
            <ul>{ingredientSummary}</ul>
            <p>Proceed to Checkout</p>
            <button
                className={`btn btn-outline-danger mr-3 px-3`}
                onClick={props.purchaseCancelled}
            >
                Cancel
            </button>
            <button
                className={`btn btn-outline-success ml-3 px-3`}
                onClick={props.purchaseContinue}
            >
                Success
            </button>
        </React.Fragment>
    );
};

export default orderSummary;
