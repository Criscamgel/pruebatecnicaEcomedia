import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component
import Layout from './hoc/layout'


const App = () => {
    return(
        <Layout/>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

