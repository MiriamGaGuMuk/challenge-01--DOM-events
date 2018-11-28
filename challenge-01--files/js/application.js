/**
*
* The company Nav-G, Ltd., has decided to develop a prototype of the minisubmarine game,
* for this the development team has the following requirements:
*
* - It's neccesary to have a function that executes an event in the DOM to start the game.
* - It is necessary to have a function that starts the game, which will have two nested
*   functions:
*
* - A function to detect DOM event for every cell board.
* - A function for matching values of player with submarines positions.
*
* - It's neccesary to have a function to generate positions of two submarines for destroying them.
* - It's neccesary to have a function for getting destroyed submarines or winner. This
*   function will show score of submarines destroyed and in case of destroying the 
*   two submarines, it will show the message 'winner'.
* - It's neccesary to have a function to generate dinamically the board.
*
*
* For these requirements, the team has already considered a code structure that must be followed.
*
**/

/***code goes here****/


//startGame function
function startGame() {
  //variable with positions of submarines for destroying them

  board();
  randomCell();

  //eventClick function to detect DOM event for every cell board
  document.querySelector('#container');
  
  
  //eventClick function
  function eventClick(submarinePositions) {
    //What should go here to detect DOM event for every cell board?
    document.addEventListener('click', randomCell);
      
     
      //What should go here for matching values of player with submarines positions?
       
  }

  //matcher function
  function matcher(playerValue, subValue) {
    //What conditional should go here to alert 'Game Over'?
    if(tries === 3 && < 2){
      alert("Game Over");
    }
    //What conditional should go here for matching values of player with submarines positions
    //and show 'red' cells and 'X' cells?
    if(playerValue === subValue){
      
    }
    

    //What should go here for getting destroyed submarines or winner?
    
  }
}

//score function
function score(value) {
  if (value <= 2){
    //What should go here to show the number of submarines destroyed?
     

  }
  if (value == 2){
    //What should go here to show if the player is a winner?
    
    document.querySelector('#win').innerHTML = ("WINNER!");  
  }
}

//board function
var board = function() {
  //What should go here to dynamically show the board cells?
 
  for (let i = 0; i < 9; i++) {
    
    var str = '<div class="cell" id='+i+' id="c"></div>' //not like templete string, but this als work with the same syntaxis of HTML
    document.querySelector("#container").innerHTML += str; //It's better to use queryselector 

  }

  
}

//function to generate positions of two submarines
var randomCell = function() {
  //call board function to generate dinamically board
  // board();
  //get positions of two submarines
 
  var subOne = Math.floor(Math.random() * 10)
  var subTwo = Math.floor(Math.random() * 10);

  var valueSubOne = "c" + subOne;
  var valueSubTwo = "c" + subTwo;

  return [valueSubOne, valueSubTwo];
  

}
 
//function to execute DOM event for starting game
function executeGame() {

  let btnStart = document.getElementById("play");
  document.addEventListener("click", startGame) 
  
}

executeGame();




























//     // give each div element a unique id based on its row and column, like "s00"
// 		square.id = 's' + j + i;			
		
// 		// set each grid square's coordinates: multiples of the current row or column number
// 		var topPosition = j * squareSize;
// 		var leftPosition = i * squareSize;			
		
// 		// use CSS absolute positioning to place each grid square on the page
// 		square.style.top = topPosition + 'px';
// 		square.style.left = leftPosition + 'px';						
// 	}
// }

// /* lazy way of tracking when the game is won: just increment hitCount on every hit
//    in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
//    there are 17 hits to be made in order to win the game:
//       Carrier     - 5 hits
//       Battleship  - 4 hits
//       Destroyer   - 3 hits
//       Submarine   - 3 hits
//       Patrol Boat - 2 hits
// */
// var hitCount = 0;

// /* create the 2d array that will contain the status of each square on the board
//    and place ships on the board (later, create function for random placement!)
//    0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
// */
// var gameBoard = [
// 				[0,0,0,1,1,1,1,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,1,0,0,0],
// 				[0,0,0,0,0,0,1,0,0,0],
// 				[1,0,0,0,0,0,1,1,1,1],
// 				[1,0,0,0,0,0,0,0,0,0],
// 				[1,0,0,1,0,0,0,0,0,0],
// 				[1,0,0,1,0,0,0,0,0,0],
// 				[1,0,0,0,0,0,0,0,0,0]
// 				]

// // set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
// gameBoardContainer.addEventListener("click", fireTorpedo, false);

// // initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
// function fireTorpedo(e) {
//     // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
// 	if (e.target !== e.currentTarget) {
//         // extract row and column # from the HTML element's id
// 		var row = e.target.id.substring(1,2);
// 		var col = e.target.id.substring(2,3);
//         //alert("Clicked on row " + row + ", col " + col);
				
// 		// if player clicks a square with no ship, change the color and change square's value
// 		if (gameBoard[row][col] == 0) {
// 			e.target.style.background = '#bbb';
// 			// set this square's value to 3 to indicate that they fired and missed
// 			gameBoard[row][col] = 3;
			
// 		// if player clicks a square with a ship, change the color and change square's value
// 		} else if (gameBoard[row][col] == 1) {
// 			e.target.style.background = 'red';
// 			// set this square's value to 2 to indicate the ship has been hit
// 			gameBoard[row][col] = 2;
			
// 			// increment hitCount each time a ship is hit
// 			hitCount++;
// 			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
// 			if (hitCount == 17) {
// 				alert("All enemy battleships have been defeated! You win!");
// 			}
			
// 		// if player clicks a square that's been previously hit, let them know
// 		} else if (gameBoard[row][col] > 1) {
// 			alert("Stop wasting your torpedos! You already fired at this location.");
// 		}		
//     }
//     e.stopPropagation();
// }
