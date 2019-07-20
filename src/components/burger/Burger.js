import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./burger_ingredient/BurgerIngredient";
import { Card } from "react-bootstrap";

const Burger = props => {
    const totalIngredients = [];
    Object.keys(props.ingredients).forEach(ing => {
        for (let i = 0; i < props.ingredients[ing]; i++) {
            totalIngredients.push(ing);
        }
    });

    let transformedIngredients = totalIngredients.map((ing, i) => {
        return <BurgerIngredient key={ing + i} type={ing} />;
    });

    if (transformedIngredients.length === 0)
        transformedIngredients = (
            <p
                className={`${
                    styles.NoIngredientLabel
                } mx-auto my-1 text-center`}
            >
                Select ingredients, please.
            </p>
        );

    return (
        <Card
            body
            className={`${
                styles.BurgerCard
            } mx-auto mt-4 shadow p-3 mb-4 bg-white rounded`}
        >
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </Card>
    );
};

export default Burger;
