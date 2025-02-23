import { Board } from "./components/Board";
import React, { useState } from "react";
import { Button } from "./elements/Button";
import "./styles/Button.css";
import { BoardCells } from "./types";
import { calculateWinner } from "./services/calculateWinner";
import { History } from "./components/History";

export const App: React.FC = () => {
  const [boardCells, setBoardCells] = useState<BoardCells>(Array(9).fill(null));
  const [history, setHistory] = useState<Array<BoardCells>>([boardCells]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  function handlePay(nextSquares: BoardCells) {
    setBoardCells(nextSquares);
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  }

  function handleJumpToMove(move: number) {
    setBoardCells(history[move]);
    setXIsNext(move % 2 === 0);
    setHistory(history.slice(0, move + 1));
  }

  function resetGame() {
    const newBoardCells = Array(9).fill(null);
    setBoardCells(newBoardCells);
    setHistory([newBoardCells]);
    setXIsNext(true);
  }

  const winner = calculateWinner(boardCells);

  return (
    <div className="game">
      <div>
        <h2
          className={`status ${
            winner ? "winner" : history.length > 9 ? "draw" : ""
          }`}
        >
          {winner
            ? `Winner: ${winner}`
            : history.length > 9
            ? "Draw"
            : `Next player: ${xIsNext ? "X" : "O"}`}
        </h2>
        <Button
          type="lifted"
          onClick={resetGame}
          buttonNativeProps={{
            style: {
              margin: "1rem 0",
              visibility: winner || history.length > 9 ? "visible" : "hidden",
            },
          }}
        >
          Reset game
        </Button>
        <Board xIsNext={xIsNext} squares={boardCells} onPlay={handlePay} />
      </div>
      <div>
        <h1>Game history</h1>
        <History history={history} onJumpToMove={handleJumpToMove} />
      </div>
    </div>
  );
};
