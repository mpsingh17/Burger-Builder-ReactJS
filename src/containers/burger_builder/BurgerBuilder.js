import React, {Component} from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/build_controls/BuildControls'; 

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4,
        isPurchasable: false
    }

    updateIsPurchasableState = (ingredients) => {
        const ingredientCount = Object
        .values(ingredients)
        .reduce((sum, currentValue) => { return sum + currentValue }, 0);
        this.setState({isPurchasable: ingredientCount > 0});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const ingredientsCopy = {
            ...this.state.ingredients
        };
        ingredientsCopy[type] = updatedCount;

        const oldPrice = this.state.price;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: ingredientsCopy,
            price: newPrice
        });
        this.updateIsPurchasableState(ingredientsCopy);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;

        const updatedCount = oldCount - 1;
        const ingredientsCopy = {
            ...this.state.ingredients
        };
        ingredientsCopy[type] = updatedCount;

        const oldPrice = this.state.price;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        
        this.setState({
            ingredients: ingredientsCopy,
            price: newPrice
        });
        this.updateIsPurchasableState(ingredientsCopy);
    }


    render () {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.price}
                    isPurchasable={this.state.isPurchasable}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler} />
            </React.Fragment>
        );
    }

}

export default BurgerBuilder;