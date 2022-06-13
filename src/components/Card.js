import React from "react";

const Card = (props) => {
    return (
        <div className = "card-container" data-clicked = { props.team.clicked }>
            <div className = "image-container"
                style = {{
                    backgroundImage: `url(${props.team.stadiumIMG})`,
                }}>
                <img src = {props.team.logoIMG}
                    alt = {`${props.team.name} logo`}/>
            </div>
            <div className = "team-name-container">
                <p className = "team-name">{ props.team.name }</p>
            </div>
        </div>
    );
}

export default Card;