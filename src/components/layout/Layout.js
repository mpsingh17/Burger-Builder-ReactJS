import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "../UI/Sidebar/Sidebar";
import BurgerBuilder from "../../containers/burger_builder/BurgerBuilder";
import { Container, Row, Col } from "react-bootstrap";

const Layout = props => {
    return (
        <React.Fragment>
            <Container fluid="true">
                <Row>
                    <Col
                        md={2}
                        className={
                            "border border-primary bg-light" +
                            " " +
                            styles.SidebarCol
                        }
                    >
                        <Sidebar />
                    </Col>
                    <Col>
                        <BurgerBuilder />
                    </Col>
                </Row>
            </Container>
            {/* <main>{props.children}</main> */}
        </React.Fragment>
    );
};

export default Layout;
