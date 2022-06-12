import React from "react";
import teamsData from "../data/teams";
import uniqid from "uniqid";
import Card from "./Card";

const Cards = () => {
    const displayCards = () => {
        const cards = [];
        teamsData.forEach(team => {
            cards.push(
                <Card key = { uniqid() } team = {team}/>
            );
        });
        return cards;
    }

    return(
        <div id = "cards-container">
            { displayCards().map(card => card) }
        </div>
    );
}

export default Cards;