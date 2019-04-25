import React from 'react';
import FontAwesome from 'react-fontawesome';
import Sidenav from './NavBar/navbar';
import style from './header.css';



const Header = (props) => {

    const navBar = () =>(
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color:'#4a4c4b',
                    padding: '10px',
                    cursor: 'pointer'
                }}/>
        </div>
    )

    return (
        <header className={style.header}>
            <Sidenav {...props}/>
        <div className={style.headerOpt}>
            {navBar()}
        </div>

        </header>
    )
}

export default Header;