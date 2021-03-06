import React, { Component } from 'react';
import CardList from './Components/Card/CardList.js';
import SearchBox from './Components/SearchBox/SearchBox.js';
import robots from './Components/Robots/Robots.js';
import Scroll from './Components/Scroll/Scroll.js';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,  // change robots to [] if you want to use API
            searchfield: ''
        }     
    }
    // In case you want to fetch an api
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users}));  
    // }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })   
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );   
    }
}

export default App;

// Props come from state and don't change
// State is an object that describes your application