import React from "react";
import Button from "../UI/Button/Button";

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
            <p>
                Total Price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            <p>Ingredients: </p>
            <ul>{ingredientSummary}</ul>
            <p>Proceed to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>
                Continue
            </Button>
        </React.Fragment>
    );
};

export default orderSummary;
