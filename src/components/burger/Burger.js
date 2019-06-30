import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './burger_ingredient/BurgerIngredient';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])]
        .map((_, i) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });
    })
    .reduce((prevElmnt, curElmnt) => {
        return prevElmnt.concat(curElmnt);
    });

    if (transformedIngredients.length === 0)
        transformedIngredients = <p>Select ingredients, please.</p>

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;
