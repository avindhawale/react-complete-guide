import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";

function App() {
  const Player1_Symbol = "X";
  const Player2_Symbol = "O";

  const [activePlayer, setActivePlayer] = useState(Player1_Symbol);
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === Player1_Symbol ? Player2_Symbol : Player1_Symbol
    );

    setGameTurns((prevGameTurns) => {
      let currentPlayer = Player1_Symbol;
      if (gameTurns.length > 0 && gameTurns[0].player === Player1_Symbol) {
        currentPlayer = Player2_Symbol;
      }
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
