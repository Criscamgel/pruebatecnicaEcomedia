import React, {Component} from 'react';
import Style from './navbar.css';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class NavBarItems extends Component {

    state = {
        items: [],
        jet:''
    }

    passJet = (i) =>{
        this.props.handleSelectJet(this.state.items[i].text)
        this.setState({
            jet:this.state.items[i].text
        })
        return this.state.items[i].text;
    }

    componentWillMount = () => {
        axios.get('http://localhost:3004/aviones')
        .then(response => {
             
            this.setState({
                items:response.data
            })
        })     
    }

    showItems = () => {

        let aviones = this.state.items
        return aviones.map((item, i) => {
            return (
                <div key={i} className={Style.option} onClick={() => this.passJet(i)} jet={() => this.passJet(i)}>
                    <FontAwesome name={item.icon} />
                    {item.text}
                </div>
            )
        })


    }

    render(){
        return (
            <div className={Style.gridItem}>
                {this.showItems()}
            </div>
        )
    }
}

export default NavBarItems;
