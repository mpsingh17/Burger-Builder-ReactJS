import React, { Component } from "react";
import styles from "./Layout.module.css";
import Sidebar from "../UI/Sidebar/Sidebar";
import BurgerBuilder from "../../containers/burger_builder/BurgerBuilder";
import Navbar from "../UI/Navbar/Navbar";
import MenuIcon from "../UI/MenuIcon/MenuIcon";

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
                    <div className={`row`}>
                        <div className={`px-0 col-md-12`}>
                            <Navbar />
                        </div>
                    </div>

                    <div className={`d-flex`}>
                        {this.state.showSidebar ? (
                            <Sidebar
                                toggleSidebarHandler={this.toggleSidebarHandler}
                            />
                        ) : (
                            <div className={`mt-3 ml-3`}>
                                <MenuIcon
                                    toggleSidebarHandler={
                                        this.toggleSidebarHandler
                                    }
                                />
                            </div>
                        )}
                        <div className={`flex-grow-1`}>
                            <BurgerBuilder />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;
