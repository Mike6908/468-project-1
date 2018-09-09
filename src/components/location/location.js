import React, {Component} from 'react';
import './location.css';

class Location extends Component{
    constructor(){
        super();
        this.state = {
            tocity: "",
            fromcity: "",
            tostate: "",
            fromstate: ""
        
        }
        this.handleChangeFromSt = this.handleChangeFromSt.bind(this);
        this.handleChangeFromCity = this.handleChangeFromCity.bind(this);
        this.handleChangeToSt = this.handleChangeToSt.bind(this);
        this.handleChangeToCity = this.handleChangeToCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch('/api/locations')
        .then(res => res.json())
        .then(locations => this.setState({locations}, ()=> console.log("locations Fetched",locations)));
    }
    handleSubmit(event) {
        //alert('You submitted: ' + " From: " + this.state.fromcity + ", " + this.state.fromstate + " To: " + this.state.tocity + ", " + this.state.tostate);
        
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
        return(
            <div className = "location-info">
            <h2>Please Input Locations</h2> 
            <form onSubmit={this.handleSubmit}>          
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