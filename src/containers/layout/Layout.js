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
