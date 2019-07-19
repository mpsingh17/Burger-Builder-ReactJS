import React from "react";
import styles from "./Sidebar.module.css";
import { ListGroup } from "react-bootstrap";

const sidebar = props => {
    return (
        <ListGroup>
            <ListGroup.Item action href="#">
                Burger
            </ListGroup.Item>
        </ListGroup>
    );
};

export default sidebar;
