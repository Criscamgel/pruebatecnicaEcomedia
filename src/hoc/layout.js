import React, { Component } from 'react';
import Header from '../Components/Header/header';
import FormJet from '../Components/Form/form';

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
            <div>
            <Header
                showNav={this.state.showNav}
                onHideNav={() => this.toggleSidenav(false)}
                onOpenNav={() => this.toggleSidenav(true)}
            />
            <FormJet/>
            </div>
            
        )
    }

}

export default Layout;