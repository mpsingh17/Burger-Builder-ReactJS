import React from 'react';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>Toolbar, Sidebar, Backdrop</div>
        
            <main>
                {props.children}
            </main>

        </React.Fragment>
    );
}

export default Layout;