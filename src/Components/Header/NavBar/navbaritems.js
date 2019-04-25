import React, {Component} from 'react';
import Style from './navbar.css';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class NavBarItems  extends Component {

    state = {
        items: []
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
                <div key={i} className={Style.option}>
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
