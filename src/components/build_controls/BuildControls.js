import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./build_control/BuildControl";
import { Card, Row, Col } from "react-bootstrap";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const BuildControls = props => {
    return (
        <Card
            className={`${
                styles.BuildControls
            } mx-auto shadow p-3 my-4 bg-white rounded`}
        >
            <Card.Body>
                <Row className="border border-primary">
                    <Col sm={6}>
                        <Card.Title className="font-weight-bolder text-warning py-3">
                            Build Controls
                        </Card.Title>

                        {controls.map(ctrl => (
                            <BuildControl
                                key={ctrl.label}
                                label={ctrl.label}
                                addIngredientHandler={() =>
                                    props.addIngredientHandler(ctrl.type)
                                }
                                removeIngredientHandler={() =>
                                    props.removeIngredientHandler(ctrl.type)
                                }
                            />
                        ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BuildControls;
