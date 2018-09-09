import React, {Component} from 'react';
//import {Redirect, Router,Route,withRouter} from "react-router";
import './location.css';
import Weather from '../weather/weather'
import Map from '../map/map'

class Location extends Component{
    constructor(){
        super();
        this.state = {
            locations: [],
            tocity: "",
            fromcity: "",
            tostate: "",
            fromstate: "",
            submitted: false
        }
        this.handleChangeFromSt = this.handleChangeFromSt.bind(this);
        this.handleChangeFromCity = this.handleChangeFromCity.bind(this);
        this.handleChangeToSt = this.handleChangeToSt.bind(this);
        this.handleChangeToCity = this.handleChangeToCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // onSubmit={this.handleSubmit}
        fetch('/api/locations')
        .then(res => res.json())
        .then(locations => this.setState({locations}, ()=> console.log("locations Fetched",locations)));
    }
    handleSubmit(event) {
        //alert('You submitted: ' + " From: " + this.state.fromcity + ", " + this.state.fromstate + " To: " + this.state.tocity + ", " + this.state.tostate);
        fetch('/api/locations', {
            method: "POST", 
            
            headers: {
                "Content-Type": "application/json",
                
            },
            body: 
                JSON.stringify({
                    "city": this.state.fromcity,
                    "state": this.state.fromstate
                })
                })
        .then(response => response.json());
        fetch('/api/locations', {
            method: "POST", 
            
            headers: {
                "Content-Type": "application/json",
                
            },
            body: 
            
                    JSON.stringify({
                        "city": this.state.tocity,
                        "state": this.state.tostate
                    })
                })
            .then(response => {
                response.json()
                this.setState({ submitted: true });
            });
                
        
        
        event.preventDefault();
      
    }
    handleChangeFromSt(event) {
        this.setState({fromstate: event.target.value});
      }
    handleChangeFromCity(event) {
        this.setState({fromcity: event.target.value});
      } 
      handleChangeToSt(event) {
        this.setState({tostate: event.target.value});
      }
    handleChangeToCity(event) {
        this.setState({tocity: event.target.value});
      } 
    render(){
        if (this.state.submitted) {
            return (
                <div>
                   <Map />
                    <Weather /> 
                </div>
                
            );
        }
        return(
            <div className = "location-info">
            <h2>Please Input Locations</h2> 
            <form  onSubmit={this.handleSubmit}>     
            <div className="from">
            <h1>From: </h1> 
            <label>
                    City:
                    <input value={this.state.city} onChange={this.handleChangeFromCity} />
                    </label>
                    
                    <label >
                    State:
                    <input value={this.state.state} onChange={this.handleChangeFromSt} />
                    </label>
            </div>
            <h1>To: </h1>
            <div className="to">
            <label>
                    City:
                    <input value={this.state.city} onChange={this.handleChangeToCity} />
                    </label>
                    
                    <label >
                    State:
                    <input value={this.state.state} onChange={this.handleChangeToSt} />
                    </label>
            </div>
                <input type="submit" value="Submit" />
                </form>
                {/* <ul>
                    {this.state.locations.map(location => 
                        <li key = {location.id}>{location.city}</li>)}
                </ul> */}
            </div>
        );
    }
}
export default Location;
//export default withRouter(Location);