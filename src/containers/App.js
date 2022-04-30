import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { robots } from './robots'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import { useEffect, useState } from 'react'

/**
 * Changed to function to utilize react hooks
 */
function App(){
    
    //with hooks we do state this way instead of class extends react.component with constructor that declares state
    const [robots, setRobots] = useState([])
    const [searchfield, setSeacrchfield] = useState('')
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users') //fetch is a method that comes with all browsers
            .then(response => {
                return response.json()
            })
            .then(users =>{
                setRobots(users)
            }) 
            console.log(count) //this isnt great because now fetch() is called every time count changes as well

    }, [count]) //second useEffect param tells useEffect what conditions trigger it, empty array is gonna mean just run first time this component mounts


    const onSearchChange = (event) =>{ //whenever making your own function need to make = arrow function
        //child SearchBox triggering this function and passing it event, this function needs
        //to update state so that CardList can access it. This is done with setState
        setSeacrchfield(event.target.value)
        
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    //if !robots.length return h1 else return div 
    return !robots.length ? <h1>Loading</h1> : 
        (
        <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <button onClick={()=>setCount(count + 1)}>Click Me {count}</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            
        </div>
        )

        
    
    
}

export default App