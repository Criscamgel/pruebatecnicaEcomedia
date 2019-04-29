import React from 'react';
import Sidenav from 'react-simple-sidenav';
import NavBarItems from './navbaritems';
import './navbar.css';

const SideNavigation = (props) => {

        console.log(props);

        return(        
        <div>
            <Sidenav        
                onHideNav = {props.onHideNav}
                showNav= {props.showNav}
                itemHoverStyle = {
                    {backgroundColor: 'blue'}
                }
                navStyle={{
                    background: '#242424'
                }}
                >
                <NavBarItems/>
            </Sidenav>
        </div>
    )
}

export default SideNavigation;