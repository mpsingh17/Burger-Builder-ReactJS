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
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredientHandler={(type) => props.addIngredientHandler(ctrl.type)} />
            ))}
        </div>
    )
}

export default BuildControls;
