import React from "react";
// import styles from "./Sidebar.module.css";
import { ListGroup } from "react-bootstrap";

const sidebar = props => {
    return (
        <ListGroup>
            <ListGroup.Item className="py-3">Logo</ListGroup.Item>
            <ListGroup.Item action href="#" className="py-3">
                Burger
            </ListGroup.Item>
        </ListGroup>
    );
};

export default sidebar;
