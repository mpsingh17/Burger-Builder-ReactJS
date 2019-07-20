import React from "react";
import PropType from "prop-types";
import styles from "./BurgerIngredient.module.css";

const BurgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case "bread-top":
            ingredient = (
                <div className={`${styles.Ingredient} ${styles.BurgerTop}`} />
            );
            break;

        case "bread-bottom":
            ingredient = (
                <div
                    className={`${styles.Ingredient} ${styles.BurgerBottom}`}
                />
            );
            break;

        case "meat":
            ingredient = (
                <div className={`${styles.Ingredient} ${styles.Meat} my-1`} />
            );
            break;

        case "cheese":
            ingredient = (
                <div className={`${styles.Ingredient} ${styles.Cheese} my-1`} />
            );
            break;

        case "salad":
            ingredient = (
                <div className={`${styles.Ingredient} ${styles.Salad} my-1`} />
            );
            break;

        case "bacon":
            ingredient = (
                <div className={`${styles.Ingredient} ${styles.Bacon} my-1`} />
            );
            break;

        default:
            ingredient = null;
            break;
    }
    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropType.string.isRequired
};

export default BurgerIngredient;
