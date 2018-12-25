function reverseLinkedList(list) {
	if (!list && !list.head.next) return list;

	let prev = null;
	let current = list.head;
	let next = null;

	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	list.head = prev;
	return list;
}

module.exports = reverseLinkedList;
