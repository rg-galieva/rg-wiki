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

const attackTarget = (target) => new Promise((resolve) => {
	setTimeout(() => {
		console.log('ATTACKED', target);
		resolve(`hit ${target}`);
	}, 1000);
});

const playBattleship = async (battleshipAttacks) => {
	const results = [];
	let targets = battleshipAttacks;

	while (targets.length) {
		const target = targets.shift();
		const res = await attackTarget(target);
		results.push(res);
	}

	console.log('YOU SUNK MY BATTLESHIP', results)
}

// const attackTarget = (target, isDone) => {
// 	if (isDone) return;
//
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			console.log('ATTACKED', target);
// 			resolve(target);
// 		}, 1000);
// 	});
// }
//
// function playBattleship(battleshipAttacks, targets = battleshipAttacks) {
// 	const results = [];
//
// 	if (!targets || !targets.length) {
// 		console.log('YOU SUNK MY BATTLESHIP', results);
// 		return;
// 	}
//
// 	attackTarget(targets.shift())
// 		.then(target => {
// 			console.log(`hit ${target}`);
// 			results.push(target)
// 		})
// 		.then(() => playBattleship(battleshipAttacks, targets));
// }


playBattleship(["a1", 'd3', 'j7', 'h5']).then();

