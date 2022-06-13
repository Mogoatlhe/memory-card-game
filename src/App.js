import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import teamsData from "./data/teams";

const App = () => {

  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [teams, setTeams] = useState(teamsData);

  useEffect(() => {

    const resetTeams = () => {
      teamsData.forEach(team => team.clicked = false);
    }

    const updateScore = (e) => {
      const target = e.currentTarget;
      const currTeamName = target.querySelector(".team-name").textContent;
      const currTeamIndex = teams.findIndex(team => team.name === currTeamName);

      if(target.dataset.clicked === "false"){
        teamsData[currTeamIndex].clicked = true;
        setTeams(teamsData);
        setCurrScore(currScore + 1);
        incrementHighScore();

        if(highScore >= 19){
          resetTeams();
        }

      }else{
        setCurrScore(0);
        resetTeams();
      }

    };

    const incrementHighScore = () => {
      if(currScore >= highScore){
        setHighScore(highScore + 1);
      }
    }

    const cards = document.querySelectorAll(".card-container");
    [...cards].forEach(card => {
      card.addEventListener("click", updateScore);
    });

    return () => {
      [...cards].forEach(card => card.removeEventListener("click", updateScore));
    };
  }, [currScore, highScore, teams]);

  return (
    <div className="App">
      <Header highScore = { highScore } currScore = { currScore } />
      <Cards teamsData = { teams }/>
    </div>
  );
}

export default App;
