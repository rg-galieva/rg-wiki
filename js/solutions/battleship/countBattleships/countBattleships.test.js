const countBattleships = require('./countBattleships');

test('function chunk exists', () => {
	expect(typeof countBattleships).toEqual('function');
});

test('Test case with 2 ships', () => {
	const board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];

	expect(countBattleships(board)).toEqual(2);
});

test('Test case with 3 ships', () => {
	const board = [["X",".",".","X"],[".","X",".","X"],[".","X",".","X"]];

	expect(countBattleships(board)).toEqual(3);
});
