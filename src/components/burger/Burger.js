import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './burger_ingredient/BurgerIngredient';

const Burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="5" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;
