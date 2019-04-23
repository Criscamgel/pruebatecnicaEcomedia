import React from 'react';
import Sidenav from 'react-simple-sidenav';

const SideNavigation = () => {
    return(
        <div>
            <Sidenav
                onHidedeNav = {PaymentResponse.onHidenav}
                showNav= {props.showNav}
                navStyle={{
                    background: '#242424'
                }}>
                <SidenavItems/>
                </Sidenav>
        </div>
    )
}

export default SideNavigation;