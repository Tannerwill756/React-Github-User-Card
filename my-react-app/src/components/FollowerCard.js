import React from 'react';
import './cards.css';

function FollowerCard (props) {
    
        return(
            <div className="user">
                { props.followerData.map((info, i) => (
                    <div key={i} className="cardStyling">
                        <img width="200px"src={info.avatar_url}/>
                        <h2>{info.login}</h2> 
                        <a href={info.html_url}>{info.html_url}</a> 
                    </div>
                ))}             
            </div>
        )
    
}

export default FollowerCard;