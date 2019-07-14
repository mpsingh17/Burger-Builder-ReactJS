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
            <h3>Your Order</h3>
            <p>Ingredients: </p>
            <ul>{ingredientSummary}</ul>
            <p>Proceed to Checkout</p>
        </React.Fragment>
    );
};

export default orderSummary;
