import React, { Component } from "react";
// import styles from "./Layout.module.css";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import BurgerBuilder from "../burger_builder/BurgerBuilder";
import Navbar from "../../components/UI/Navbar/Navbar";
import MenuIcon from "../../components/UI/MenuIcon/MenuIcon";

class Layout extends Component {
    state = {
        showSidebar: false
    };

    toggleSidebarHandler = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    };

    render() {
        return (
            <React.Fragment>
                <div className={`container-fluid p-0`}>
                    <div className={`d-flex`}>
                        <div className={`flex-fill`}>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-md-2`}>
                        <div className={`d-flex`}>
                            <Sidebar
                                toggleSidebarHandler={this.toggleSidebarHandler}
                                showSidebar={this.state.showSidebar}
                            />
                            <MenuIcon
                                toggleSidebarHandler={this.toggleSidebarHandler}
                            />
                        </div>
                    </div>
                    <div className={`col-md-10`}>
                        <BurgerBuilder />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;
