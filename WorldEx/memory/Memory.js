import { useState } from 'react';
import './Memory.css'

const Memory = () => {
  // eslint-disable-next-line no-unused-vars
  const [grid, setGrid] = useState([
    [2, 5, 3, 5],
    [0, 1, 4, 3],
    [4, 2, 1, 0],
  ]);

    const [revealedGrid, setRevealedGrid] = useState(
      new Array(grid.length)
          .fill("")
          .map(() => new Array(grid[0].length).fill(false))
    );

    const [previousClick, setPreviousClick] = useState(undefined);

    const handleCardClicked = (rowIndex, colIndex) => {
        if(revealedGrid[rowIndex][colIndex]) return;
        // Reveal the card clicked (shallow copy + True).
        const clickedNumber = grid[rowIndex][colIndex];
        const newRevealedGrid = [...revealedGrid];
        newRevealedGrid[rowIndex][colIndex] = true;
        setRevealedGrid(newRevealedGrid);

        // If one card has already been clicked, prior.
        if(previousClick) {
          const previousClickedNumber = grid[previousClick[0]][previousClick[1]];
          // 2nd click of the 2 clicks.
          if(previousClickedNumber !== clickedNumber) {
            // If they don't match, hide them after 1sec.
            // debugger;
            setTimeout(() => {
              //Hide first click & second click.
              newRevealedGrid[rowIndex][colIndex] = false;
              newRevealedGrid[previousClick[0]][previousClick[1]] = false;
              setRevealedGrid([...newRevealedGrid]);
            }, 1000)
          } else {
            // Check if everything has been revealed. Flat() pr passer 2D à 1D.
            const hasWon = revealedGrid.flat().every((isRevealed) => isRevealed);
            if(hasWon) {
              setTimeout(() => {
                alert("You won the memory game !");
              }, 1000);
            }
          }

          setPreviousClick(undefined);
          // If they both match, mark them as answered.
        } else {
          setPreviousClick([rowIndex, colIndex]);
        }
    }

  return(
    <div className="App">
      <div className="grid">
    
      {grid.map((row, rowIndex) => (
        
        <div key={rowIndex} className="row">
        
          {row.map((number, colIndex) => (
            <div  onClick={() => handleCardClicked(rowIndex, colIndex)} 
                  key={colIndex} 
                  className={"card " + (revealedGrid[rowIndex][colIndex] ? "revealed" : "")}>
                {revealedGrid[rowIndex][colIndex] ? number : ' '}
            </div>
          ))}
        
        </div>

      ))}
      </div>
    </div>
  );
}

export default Memory;

// Bonus : Try to randomly generate a board.
