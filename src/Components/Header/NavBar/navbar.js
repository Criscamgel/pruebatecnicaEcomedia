import React from 'react';
import Sidenav from 'react-simple-sidenav';
import NavBarItems from './navbaritems';
import './navbar.css';

const SideNavigation = (props) => {

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
                <NavBarItems handleSelectJet={props.handleSelectJet}/>
            </Sidenav>
        </div>
    )
}

export default SideNavigation;