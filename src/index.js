import React from 'react';
import ReactDOM from 'react-dom';

//Component
import Layout from './hoc/layout'


const App = () => {
    return(
        <Layout/>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

