import React from 'react';
import ReactDom from 'react-dom';
import Dashboard from './components/dashboard';
const App = ()=>{
    return(
        <div>
            <Dashboard/>
        </div>
    )
}

// render
ReactDom.render(<App/>,document.getElementById('root'));

