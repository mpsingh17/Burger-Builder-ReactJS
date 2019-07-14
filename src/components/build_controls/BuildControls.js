import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './build_control/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {

    return (
        <div className={styles.BuildControls}>
            <p>Current Price: {props.price.toFixed(2)}</p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
                    removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)} />
            ))}
            <button
                className={styles.OrderButton}
                disabled={!props.isPurchasable}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;