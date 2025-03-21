import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const Player1_Symbol = "X";
const Player2_Symbol = "O";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = Player1_Symbol;
  if (gameTurns.length > 0 && gameTurns[0].player === Player1_Symbol) {
    currentPlayer = Player2_Symbol;
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState({
    [Player1_Symbol]: "Player 1",
    [Player2_Symbol]: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const activePlayer = derivedActivePlayer(gameTurns);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }

  function handelRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((players) => {
      return {
        ...players,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players[Player1_Symbol]}
            symbol={Player1_Symbol}
            isActive={activePlayer === Player1_Symbol}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players[Player2_Symbol]}
            symbol={Player2_Symbol}
            isActive={activePlayer === Player2_Symbol}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handelRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
