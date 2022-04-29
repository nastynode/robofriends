import React from 'react'
import Card from './Card'

const CardList = ({ robots })=>{ 
    const cardArray = robots.map((user, i)=>{
        return (
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        />)
    }) //could do foreach as well

    return(
        <div>
            {cardArray}            
        </div>
    )
}

export default CardList