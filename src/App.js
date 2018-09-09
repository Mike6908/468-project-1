import React, { Component } from 'react';
import Location from './components/location/location';

class App extends Component {
    constructor(){
        super();
        this.state = {
            entered: false
        }
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
