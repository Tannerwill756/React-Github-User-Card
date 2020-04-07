import React from 'react';
import './cards.css';


function UserCard (props) {
    
        return(
            <div className="user">
                <div className="cardStyling">
                    <img width="200px"src={props.myData.avatar_url}/>
                    <h2>{props.myData.name}</h2> 
                    <a href={props.myData.blog}>{props.myData.blog}</a>               
                </div>
            </div>
        )
    
}

export default UserCard;