const {add_two_numbers, ListNode} = require('./add_two_numbers');

test('ListNode is a class', () => {
    expect(typeof ListNode.prototype.constructor).toEqual('function');
});

describe('add_two_numbers: 1', () => {
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);


    let result = new ListNode(7);
    result.next = new ListNode(0);
    result.next.next = new ListNode(8);

    test('(2 -> 4 -> 3) + (5 -> 6 -> 4) => 7 -> 0 -> 8', () => {
        expect(add_two_numbers(l1, l2)).toEqual(result);
    })
});

describe('add_two_numbers: 2', () => {
    let l1 = new ListNode(0);

    let l2 = new ListNode(5);

    let result = new ListNode(5);

    test('(0) + (5) => 5', () => {
        expect(add_two_numbers(l1, l2)).toEqual(result);
    })
});

describe('add_two_numbers: 3', () => {
    let l1 = new ListNode(0);
    l1.next = new ListNode(1);
    l1.next.next = new ListNode(2);

    let l2 = new ListNode(0);
    l2.next = new ListNode(1);

    let result = new ListNode(0);
    result.next = new ListNode(2);
    result.next.next = new ListNode(2);

    test('(0 -> 1 -> 2) + (0 -> 1) => 0 -> 2 -> 2', () => {
        expect(add_two_numbers(l1, l2)).toEqual(result);
    })
});