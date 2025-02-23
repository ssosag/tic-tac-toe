import React from "react";
import { BoardCells } from "../types";

interface SquareProps {
  value?: BoardCells[number];
  onSquareClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => (
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);
