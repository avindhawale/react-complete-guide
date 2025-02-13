import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex, playerSymbol) {
    setGameBoard((prevGameBoard) => {
      // creating copy of the boardGame array and then reassigning it
      let updatedBoardGame = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoardGame[rowIndex][colIndex] = activePlayer;
      return updatedBoardGame;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIndex, colIndex, playerSymbol)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
