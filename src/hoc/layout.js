import React, { Component } from 'react';
import Header from '../Components/Header/header';
import FormJet from '../Components/Form/form';

class Layout extends Component {

    state = {
        showNav: false,
        jetSelected: ''
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }

    handleSelectJet = (text) => {
        this.toggleSidenav(false)
        this.setState({ jetSelected: text })
    }


    render() {
        return (
            <div>
            <Header
                showNav={this.state.showNav}
                onHideNav={() => this.toggleSidenav(false)}
                onOpenNav={() => this.toggleSidenav(true)}
                handleSelectJet={this.handleSelectJet}
            />
            <FormJet jet={this.state.jetSelected} />
            </div>
            
        )
    }

}

export default Layout;