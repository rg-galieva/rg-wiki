// !!! LEETCODE !!! //

/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/*
ANSWER:
Just like how you would sum two numbers on a piece of paper, we begin by summing the least-significant digits,
which is the head of l1 and l2. Since each digit is in the range of 0 \ldots 90…9, summing two digits may "overflow".
For example 5 + 7 = 12. In this case, we set the current digit to 22 and bring over the carry = 1 to the next iteration.
carry must be either 0 or 1 because the largest possible sum of two digits (including the carry) is 9 + 9 + 1 = 199+9+1=19.

The pseudocode is as following:

Initialize current node to dummy head of the returning list.
Initialize carry to 0.
Initialize p and q to head of l1 and l2 respectively.
Loop through lists l1l1 and l2l2 until you reach both ends.
Set xx to node pp's value. If pp has reached the end of l1l1, set to 00.
Set yy to node qq's value. If qq has reached the end of l2l2, set to 00.
Set sum = x + y + carry
Update carry = sum / 10
Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
Advance both pp and qq.
Check if carry = 1, if so append a new node with digit 1 to the returning list.
Return dummy head's next node.
Note that we use a dummy head to simplify the code. Without a dummy head, you would have to write extra conditional statements to initialize the head's value.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// from rg: weird that ListNode can't set next value...
function ListNode(val = null) {
    this.val = val;
    this.next = null;
}

const addTwoNumbers = function (l1, l2) {
    let l1node = l1;
    let l2node = l2;

    let result = new ListNode();
    let carry = 0;

    let curr = result;

    while (l1node || l2node) {
        const l1Val = l1node ? l1node.val : 0;
        const l2Val = l2node ? l2node.val : 0;

        let sum = l1Val + l2Val + carry;

        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }

        curr.next = new ListNode(sum);
        curr = curr.next;

        if (l1node) l1node = l1node.next;
        if (l2node) l2node = l2node.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return result.next;
};

module.exports = {addTwoNumbers, ListNode};
