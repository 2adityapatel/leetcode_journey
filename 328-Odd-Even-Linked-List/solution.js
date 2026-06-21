/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

    if (!head || !head.next) {
        return head
    }

    let evenList = head.next
    let evenHead = head.next;
    let odd = head;

    while (evenList && evenList.next) {

        odd.next = odd.next.next;
        odd = odd.next

        evenList.next = odd.next
        evenList = evenList.next

    }

    odd.next = evenHead

    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}