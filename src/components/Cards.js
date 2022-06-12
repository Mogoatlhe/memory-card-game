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

        shuffle(cards);

        return cards;
    }

    const shuffle = (cards) => {
        for(let i = cards.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[randomIndex];
            cards[randomIndex] = temp;
        }
    }

    return(
        <div id = "cards-container">
            { displayCards().map(card => card) }
        </div>
    );
}

export default Cards;