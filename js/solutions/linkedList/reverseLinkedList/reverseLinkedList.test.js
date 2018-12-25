const reverseLinkedList = require('./reverseLinkedList');
const L = require('../linkedList');
const List = L.LinkedList;
const Node = L.Node;


describe('Reverse 1', () => {
	test('[1,2,3,4]', () => {
		const l = new List();
		l.insertLast(1);
		l.insertLast(2);
		l.insertLast(3);
		l.insertLast(4);

		const lReversed = new List();
		lReversed.insertLast(4);
		lReversed.insertLast(3);
		lReversed.insertLast(2);
		lReversed.insertLast(1);

		const result = reverseLinkedList(l);
		console.log(["result: "], result);

		expect(result).toEqual(lReversed);
	});
});
