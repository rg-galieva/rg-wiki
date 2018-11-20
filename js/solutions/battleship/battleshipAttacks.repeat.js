/* Lets play a game of battleship. fix this code so that every second,
  you attack a coordinate and add the result to your results array.
  you must have the result before you can make another guess
  battleshipAttacks can be of any number and you can't sink the battleship unless all attacks have been made
*/

function attackTargetInitial(target) {
	setTimeout(() => {
		console.log('ATTACKED', target);
		return `hit ${target}`;
	}, 1000);
}

function playBattleshipInitial(battleshipAttacks) {
	const results = [];
	for (let i = 0; i < battleshipAttacks.length; i++) {
		results.push(attackTargetInitial(battleshipAttacks[i]));
	}
	console.log('YOU SUNK MY BATTLESHIP', results)
}
