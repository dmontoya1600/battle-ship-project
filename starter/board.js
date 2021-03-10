class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRos = numRos;
    this.numCols = numCols;
    this.numShips = numShips;

    this.grid = populateGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    for( let i = 0; i < numRows; i++){
      let subarr = []

      for(let j = 0; j < numCols; j++){
        subarr.push('~');
      }
      grid.push(subarr)
    }
    const randomnum = function(min, max){
      min = Math.ceil(numRos)
      max = Math.floor(numCols)
      return Math.floor(Math.random()*(numCols - numRos + 1) + numRos)
    }
    grid.indexOf(randomnum(0,numRos), randomNum(0, numCols))
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

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

module.exports = Board;


// function randomnum(min, max){
//   min = Math.ceil(numRos)
//   max = Math.floor(numCols)
//   return Math.floor(Math.random()*(numCols - numRos + 1) + numRos)
// }

// console.log(randomnum(0, numRos))
// console.log(randomnum(0, numCols))

// // change grid.indexOf(randomnum(0,numRos), randomNum(0, numCols)) = 'S'

let numRos = 3
let numCols = 5
let grid = [];
    for( let i = 0; i < numRos; i++){
      let subarr = []

      for(let j = 0; j < numCols; j++){
        subarr.push('~');
      }
      grid.push(subarr)
    }
    const randomnum = function(min, max){
      max = Math.ceil(max)
      min = Math.floor(min)
      return Math.floor(Math.random()*(max - min) + min)
    }

    let row = (grid[randomnum(0,numRos)])
    let rowindex = grid.indexOf(row)

    let columnindex = (randomnum(0,numCols))

    let numShips = 3
    for( let i =0 ; i < numShips; i++){
      const randomnum = function(min, max){
        max = Math.ceil(max)
        min = Math.floor(min)
        return Math.floor(Math.random()*(max - min) + min)
      }
      let row = (grid[randomnum(0,numRos)])
      let rowindex = grid.indexOf(row)

      let columnindex = (randomnum(0,numCols))

      row.splice(columnindex, 1, "S")

      grid.splice(rowindex,1, row)

    }
console.log(grid)
