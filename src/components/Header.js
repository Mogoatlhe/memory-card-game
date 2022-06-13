import React from "react";

const Header = (props) => {

    return(
        <div id = "header">
            <div id = "header-left">
                <p id = "project-name">
                    Memory Card Game
                </p>
                <p id = "rules">
                    Get points by clicking on an image but don't click on any more than once!
                </p>
            </div>
            <div id = "header-right">
                <p id = "current-score">
                    current score: <span> { props.currScore }
                        </span> 
                </p>
                <p id = "high-score">
                    high score: <span> { props.highScore } </span>
                </p>
                <p id = "possible-score">
                    possibe score: <span>20</span>
                </p>
            </div>
        </div>
    );
}

export default Header;