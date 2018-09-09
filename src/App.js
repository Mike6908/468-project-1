import React, { Component } from 'react';
import Location from './components/location/location';

class App extends Component {
    constructor(){
        super();
    }
    render(){
    
        return (
                <div>
                    <Location />
                </div>
            );
    }
}

export default App;
