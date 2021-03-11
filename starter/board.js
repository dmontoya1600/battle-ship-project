class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRos = numRos;
    this.numCols = numCols;
    this.numShips = numShips;

    this.grid = this.populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    for (let i = 0; i < this.numRos; i++) {
      let subarr = []

      for (let j = 0; j < this.numCols; j++) {
        subarr.push('~');
      }
      grid.push(subarr)
    }

    const randomnum = function(min, max) {
      max = Math.ceil(max)
      min = Math.floor(min)
      return Math.floor(Math.random() * (max - min) + min)
    }
    for (let i = 0; i < this.numShips; i++) {
      let row = (grid[randomnum(0, this.numRos)])
      let rowindex = grid.indexOf(row)
      let columnindex = (randomnum(0, this.numCols))
      if (grid[rowindex][columnindex] === 'S') {
        i--
      } else {
        row.splice(columnindex, 1, "S")
        grid.splice(rowindex, 1, row)
      }
    }
    // this.grid = grid;
    return grid;

  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack(playerinput) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    let row = playerinput[0]
    let col = playerinput[1]
    if(this.grid[row][col] === 'S'){
      let index = this.grid[row].indexOf(col)
      this.grid[row][col].splice(index, 1, 'H')
    }
  }
}


module.exports = Board;

const coolBoard = new Board(5,5,2)
console.log(coolBoard.grid)
console.table(coolBoard.grid)

console.log(coolBoard.attack([2, 3]))
// let playerinput = [2, 3]
// let grid =

// let row = playerinput[0]
//     let col = playerinput[1]
//     if(grid[row][col] === 'S'){
//       let index = grid[row].indexOf(col)
//       grid[row][col].splice(index, 1, 'H')
//     }
