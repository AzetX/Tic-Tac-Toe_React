import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  let status;
  const winner = calculateWinner(squares);

  function handleClick(inputIndex) {

    return function () {
      if (squares[inputIndex] || winner) {
        return;
      }

      const newSquares = squares.map((el, ind) => {
        if (ind === inputIndex) {
          return xIsNext ? "X" : "O";
        } else {
          return el;
        }
      });
  
      onPlay(newSquares);
    };
  }

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <ul>
        <li className="board-row">
          <Square value={squares[0]} onSquareClick={handleClick(0)} />
          <Square value={squares[1]} onSquareClick={handleClick(1)} />
          <Square value={squares[2]} onSquareClick={handleClick(2)} />
        </li>
        <li className="board-row">
          <Square value={squares[3]} onSquareClick={handleClick(3)} />
          <Square value={squares[4]} onSquareClick={handleClick(4)} />
          <Square value={squares[5]} onSquareClick={handleClick(5)} />
        </li>
        <li className="board-row">
          <Square value={squares[6]} onSquareClick={handleClick(6)} />
          <Square value={squares[7]} onSquareClick={handleClick(7)} />
          <Square value={squares[8]} onSquareClick={handleClick(8)} />
        </li>
      </ul>
    </>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}

export default Board;
