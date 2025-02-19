import logo from "./savant.png";
import "./App.css";
import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { SvgIcon } from '@mui/material';

function App() {
  const advice = [
    "The outsider count has/has not been modified.",
    "At least [Number] player's ability/abiltiies did not work correctly last night.",
    "A Chef would have gotten a [Number] last night.",
    "Exactly [Number] townsfolk targeted <an evil player>/<the demon> last night.",
    "At least [Number] player is affected by madness.",
    "At least [Number] number of dead players are evil.",
    "[Number] once-per-game abilities have been used.",
    "At least [Number] of your (alive) neighbors are drunk or poisoned.",
    "[Character] and [Character] are seated next to each other.",
    "[Character] is in play OR [character] is in play.",
    "[Demon] is not in play.",
    "A once per game ability has/hasn't been used.",
    "The demon is next to minion/outsider",
    "The longest contiguous chain of good/evil players is [Number].",
    "You are witch cursed.",
    "The Snake Charmer selected [Character/Role Type] last night.",
    "The demon is sitting next to [Number] townsfolk.",
    "All townsfolk information received last night was correct.",
    "Good players woke last night.",
    "A player changed character last night.",
    "No one is affected by the madness ability today.",
    "A good/evil player is affected by the madness ability today.",
    "A player changed alignment last night.",
    "[Player] and [Player] are the same alignment.",
    "Last night, a player declined to use their ability.",
    "There are no madness-related characters in this game.",
    "[Number] players received a number last night.",
    "[Minion] has chosen the same player every night.",
    "There are more/less outsiders/townsfolk than when the game started.",
    "Your (alive) neighbors are the same/different alignments.",
    "[Character] nominated yesterday.",
    "A once per game ability has received false information.",
    "It is impossible for the demon to change to another player.",
    "No new characters were created last night.",
    "[Number] of your neighbors is poisoned.",
    "All evil players are still alive.",
    "[Character] was selected by the [Minion] last night.",
    "[Number] of your neighbors was selected by another player.",
    "At least one minion did not know who the demon was at the start of the game.",
    "A sober Noble would have seen [Player], [Player], and [Player].",
    "You had a private conversation with an evil player yesterday.",
    "The [Character] received suber, healthy, and true information last night/yesterday.",
    "[Character] is a demon bluff.",
    "An Evil Player/Outisder was nominated yesterday.",
    "[Player] died in the night, but not by a demon ability.",
    "[Character] started as good, but is now evil.",
    "The total number of Townsfolk pairs is [Number].",
    "[Character] is not in play.",
    "A poisoned townsfolk got true information last night.",
    "The Lunatic and Demon chose different targets last night.",
    "[Number] players do not know their real role.",
    "[Number] evil players woke last night.",
  ];

  const getAdvice = () => {
    const text = advice[Math.floor(Math.random() * advice.length)];

    // return text.replace("[Number]", '<p style="color: red">[Number]</p>');
    return text;
  };

  const [output, setOutput] = useState(getAdvice());

  return (
    <div className="App">
      <header className="App-header">
        <p className="definition">
          "Each day, you may visit the Storyteller to learn 2 things in private:
          1 is true & 1 is false."{" "}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className="advice"
          id="advice"
          onClick={() => {
            setOutput(getAdvice());
          }}
        >
          {output} <br />
          <span
            className="refresh-icon"
            onClick={() => setOutput(getAdvice())}
          >
            ↻
          </span>
        </p>
        <p class="join">
          Brought to you by the folks at{" "}
          <a
            className="App-link"
            href="https://join.thegrim.gg"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheGrim Discord!
          </a>
        </p>
        <p class="thanks">
          Special thanks to Ash, MyMy, Jagrevi, and Kandiru for their
          contributions!
        </p>
      </header>
    </div>
  );
}

export default App;
