import React from "react";
import { BoardCells } from "../types";
import { Button } from "../elements/Button";

interface HistoryProps {
  history: Array<BoardCells>;
  onJumpToMove: (move: number) => void;
}

export const History: React.FC<HistoryProps> = ({ history, onJumpToMove }) => {
  return (
    <ol>
      {history.map((_, move) => (
        <li key={move}>
          <Button
            type={"galaxy"}
            classType="history"
            onClick={() => onJumpToMove(move)}
          >
            {move ? `Go to move #${move}` : "Go to game start"}
          </Button>
        </li>
      ))}
    </ol>
  );
};
