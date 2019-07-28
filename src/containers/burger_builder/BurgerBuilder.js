import React, { Component } from "react";
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/build_controls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/with_error_handler/WithErrorHandler";
import axios from "../../axios-config";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        price: 4,
        isPurchasable: false,
        showModal: false,
        loading: false
    };

    componentDidMount() {
        axios.get("/ingredients.json").then(res => {
            this.setState({ ingredients: res.data });
        });
    }

    updateIsPurchasableState = ingredients => {
        const ingredientCount = Object.values(ingredients).reduce(
            (sum, currentValue) => {
                return sum + currentValue;
            },
            0
        );
        this.setState({ isPurchasable: ingredientCount > 0 });
    };

    addIngredientHandler = type => {
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
    };

    removeIngredientHandler = type => {
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
    };

    showModalHandler = () => {
        this.setState({ showModal: true });
    };

    hideModalHandler = () => {
        this.setState({ showModal: false });
    };

    purchaseContinue = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price.toFixed(2),
            customer: {
                name: "Manpreet",
                address: {
                    street: "123 Max St.",
                    zip: "1234",
                    country: "AZ"
                },
                email: "abc@gmail.com"
            }
        };
        axios
            .post("/orders.json", order)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                this.setState({ loading: false, showModal: false });
            });
    };

    render() {
        let modalBody = (
            <OrderSummary
                price={this.state.price}
                purchaseCancelled={this.hideModalHandler}
                purchaseContinue={this.purchaseContinue}
                ingredients={this.state.ingredients}
            />
        );
        if (this.state.loading) {
            modalBody = <Spinner />;
        }

        let modal = null;
        if (this.state.showModal) {
            modal = (
                <Modal
                    show={this.state.showModal}
                    hideModalHandler={this.hideModalHandler}
                >
                    {modalBody}
                </Modal>
            );
        }
        let burgerAndBuildControls = (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.price}
                    isPurchasable={this.state.isPurchasable}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    showModalHandler={this.showModalHandler}
                />
            </React.Fragment>
        );
        if (!this.state.ingredients) {
            burgerAndBuildControls = <Spinner />;
        }
        return (
            <React.Fragment>
                {modal}
                {burgerAndBuildControls}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
