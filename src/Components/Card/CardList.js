import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
          {
            robots.map((user,i) => {
                return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    username={robots[i].username} 
                    email={robots[i].email}
                    />
                );
            })
        }
        </div>    
    );
}
export default CardList;

// can do it like below or then return everything within the div like above
// const cardsArray = Robots.map((user,i) => {
// return (<Card key={i} id={Robots[i].id} name={Robots[i].name} username={Robots[i].username} email={Robots[i].email}/>;
// })