import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { robots } from './robots'
import './App.css'
import Scroll from '../components/Scroll'

class App extends React.Component{
    constructor(){
        super() //calls the constructor of component
        this.state= { //props cannot change onve passed to components, but state can change and pass that to components as props
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){ //lifecycle hook that is part of react so we dont need arrow
        fetch('https://jsonplaceholder.typicode.com/users') //fetch is a method that comes with all browsers
            .then(response => {
                return response.json()
            })
            .then(users =>{
                this.setState({ robots: users})
            })   
    }

    onSearchChange = (event) =>{ //whenever making your own function need to make = arrow function
        //child SearchBox triggering this function and passing it event, this function needs
        //to update state so that CardList can access it. This is done with setState
        this.setState({ searchfield: event.target.value })
        
    }

    render(){
        const { robots, searchfield} = this.state //deconstruct so you dont need to this.state all the time
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        //if !robots.length return h1 else return div 
        return !robots.length ? <h1>Loading</h1> : 
            (
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
            )

        
    }
    
}

export default App