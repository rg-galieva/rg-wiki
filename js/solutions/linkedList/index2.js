/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
    let l1node = l1;
    let l1numbers = [];

    while (l1node) {
        l1numbers.unshift(l1node.val);
        l1node = l1node.next;
    }

    let l2node = l2;
    let l2numbers = [];

    while (l2node) {
        l2numbers.unshift(l2node.val);
        l2node = l2node.next;
    }

    const sum = parseInt(l1numbers.join('')) + parseInt(l1numbers.join(''));
    const sumReversed = sum.toString().split('').reverse();

    let result = new ListNode(sumReversed[0]);

    let tempList = new ListNode(sumReversed[0]);

    for (let i=1; i<sumReversed.length; i++) {
        tempList.next = new ListNode(sumReversed[i]);
        tempList = tempList.next;
    }

    result.next = tempList;

    return result;
};


addTwoNumbers([2,4,3], [5,6,4]);