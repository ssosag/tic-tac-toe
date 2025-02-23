import React from "react";
import { BoardCells } from "../types";
import { Square } from "./Square.tsx";
import { calculateWinner } from "../services/calculateWinner.ts";

interface BoardProps {
  xIsNext: boolean;
  squares: BoardCells;
  onPlay: (nextSquares: BoardCells) => void;
}

export const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (!calculateWinner(squares) && !squares[i]) {
      onPlay(squares.with(i, xIsNext ? "X" : "O"));
    }
  };

  return (
    <>
      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
};
