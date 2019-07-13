import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './burger_ingredient/BurgerIngredient';

const Burger = (props) => {

    const totalIngredients = [];
    Object.keys(props.ingredients)
    .forEach((ing) => {
        for (let i = 0; i < props.ingredients[ing]; i++) {
            totalIngredients.push(ing);
        }
    });

    let transformedIngredients = totalIngredients.map((ing, i) => {
        return <BurgerIngredient key={ing + i} type={ing} />
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
