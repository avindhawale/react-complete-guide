import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { act, useState } from "react";

function App() {
  const Player1_Symbol = "X";
  const Player2_Symbol = "O";

  const [activePlayer, setActivePlayer] = useState(Player1_Symbol);
  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === Player1_Symbol ? Player2_Symbol : Player1_Symbol
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={Player1_Symbol}
            isActive={activePlayer === Player1_Symbol}
          />
          <Player
            initialName="Player 2"
            symbol={Player2_Symbol}
            isActive={activePlayer === Player2_Symbol}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
