import React, { Component } from 'react';
import Header from '../Components/header';

class Layout extends Component {

    state = {
        showNav: false
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }


    render() {
        return (
            <Header
                showNav={this.state.showNav}
                onHideNav={() => this.toggleSidenav(false)}
                onOpenNav={() => this.toggleSidenav(true)}
            ></Header>
        )
    }

}

export default Layout;