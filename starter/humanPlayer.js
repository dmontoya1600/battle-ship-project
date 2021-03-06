const readline = require("readline");
class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
  }


  getMove(processMove) {
    this.rl.question("Choose a coordinate to hit. (e.g. 3,1) \n> ", (answer) => {
      const [row, col] = answer.split(",");
      processMove([row, col]);
      attack([row, col]);
    });
  }
  getMove() {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver(isWon, turns) {
    if (isWon) {
      console.log(`Nice job, you won in ${turns} turns!`);
    } else {
      console.log("You lose!");
    }
    this.rl.close();
  }
}



module.exports = HumanPlayer;
